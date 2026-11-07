# Caminho da pasta no terminal:
cd Downloads/Facul/"Tec e Construcao de Software"

# Execução dos comandos Git a partir do diretório correto:
git init
git add .
git commit -m "feat: resolucao exercicios EC01"
git branch -M main
git remote add origin https://github.com/MendanhaMatheus/EC01---Estudo-de-Caso-Alunos.git
git push -u origin main

# Execução do Docker Desktop a partir do diretório correto:
docker build -t devtech-academy .
docker run -d -p 8080:80 devtech-academy