# main.py

from crew import crew
from dotenv import load_dotenv


load_dotenv()  # Carrega as variáveis do .env

if __name__ == "__main__":
    print("Analisando commit...\n")
    result = crew.kickoff()
    print("\n--- Análise final ---\n")
    print(result)
