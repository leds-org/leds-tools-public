from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task


@CrewBase
class Codewise():
    """Codewise crew"""

    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    # ==== AGENTS ====
    @agent
    def senior_architect(self) -> Agent:
        return Agent(
            config=self.agents_config['senior_architect'],
            verbose=True
        )

    @agent
    def senior_analytics(self) -> Agent:
        return Agent(
            config=self.agents_config['senior_analytics'],
            verbose=True
        )

    @agent
    def quality_consultant(self) -> Agent:
        return Agent(
            config=self.agents_config['quality_consultant'],
            verbose=True
        )

    @agent
    def quality_control_manager(self) -> Agent:
        return Agent(
            config=self.agents_config['quality_control_manager'],
            verbose=True
        )

    # ==== TASKS ====
    @task
    def analise_estrutura(self) -> Task:
        return Task(
            config=self.tasks_config['analise_estrutura'],
            output_file='arquitetura_atual.md'
        )

    @task
    def analise_heuristicas(self) -> Task:
        return Task(
            config=self.tasks_config['analise_heuristicas'],
            output_file='analise_heuristicas_integracoes.md'
        )

    @task
    def analise_solid(self) -> Task:
        return Task(
            config=self.tasks_config['analise_solid'],
            output_file='analise_solid.md'
        )

    @task
    def padroes_projeto(self) -> Task:
        return Task(
            config=self.tasks_config['padroes_projeto'],
            output_file='padroes_de_projeto.md'
        )

    # ==== CREW ====
    @crew
    def crew(self) -> Crew:
        return Crew(
            agents=self.agents,   # todos os @agent acima
            tasks=self.tasks,     # todas as @task acima
            process=Process.sequential,
            verbose=True
        )
