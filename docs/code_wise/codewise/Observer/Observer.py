import time
import os
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class GitCommitObserver(FileSystemEventHandler):
    def __init__(self, git_path):
        self.commit_msg_file = os.path.join(git_path, "COMMIT_EDITMSG")
        self.head_file = os.path.join(git_path, "HEAD")

    def on_modified(self, event):
        if event.src_path == self.commit_msg_file:
            print("Commit iniciado (COMMIT_EDITMSG modificado)")
        elif event.src_path == self.head_file:
            print("Commit finalizado (HEAD modificado)")

def find_git_repo(start_path="."):
    """Procura por um diretório .git em um diretório atual ou acima."""
    path = Path(start_path).resolve()
    while path != path.parent:
        git_dir = path / ".git"
        if git_dir.is_dir():
            return git_dir
        path = path.parent
    return None

def start_observing(git_dir):
    event_handler = GitCommitObserver(str(git_dir))
    observer = Observer()
    observer.schedule(event_handler, path=str(git_dir), recursive=False)
    observer.start()
    print(f"Observando alterações em: {git_dir}")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

if __name__ == "__main__":
    git_repo = find_git_repo()
    if git_repo:
        start_observing(git_repo)
    else:
        print("Nenhum repositório Git encontrado no caminho atual ou acima.")
