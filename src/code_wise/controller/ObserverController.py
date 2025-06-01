from codewise.Observer.Observer import start_observing, find_git_repo
from codewise.operations.jsonOperations.GetJson import GetJson

class ObserverController():

    def __init__(self):
        getJson = GetJson()
        self.path = getJson.get_repo_path_from_json()
        self.userGitPath = find_git_repo(self.path)

    def start(self):
        if self.userGitPath == None:
            print("Nenhum repositório Git encontrado no caminho atual ou acima.")
            return
        start_observing(self.userGitPath)
