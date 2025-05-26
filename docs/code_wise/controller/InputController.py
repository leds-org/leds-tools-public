from codewise.Observer.Observer import start_observing, find_git_repo
from codewise.input.GetJson import get_repo_path_from_json

path = get_repo_path_from_json()
userGitPath = find_git_repo(path)
if userGitPath:
    start_observing(userGitPath)
else:
    print("Nenhum repositório Git encontrado no caminho atual ou acima.")
