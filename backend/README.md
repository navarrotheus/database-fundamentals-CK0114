# Instruções e Scripts :memo:

## Docker
Estou utilizando docker para rodar a aplicação
* Instalação: [Docker](https://docs.docker.com/install/)
* Criar o container:
   > docker run --name DB_NAME -e POSTGRES_PASSWORD=DB_PASS -p DB_PORT:5432 -d postgres:11
   
  No caso, estou utilizando a imagem do postgres (importante colocar :11)
  * DB_NAME: Nome do banco
  * DB_PASS: Senha do banco
  * DB_PORT: Porta para realizar conexão com o banco
  
* Listar containers ativos:
  > docker ps
* Listar todos containers (ativos e inativos):
  > docker ps -a
* Parar container:
  > docker stop nome
* Iniciar container (ao reiniciar o computador é necessário inicializá-lo novamente quando for utilizar):
  > docker start nome
* Remover container:
  > docker rm nome
 
### Conexão com o banco de dados

Criar um .env com as variáveis ambientes correspondentes [ver .env.example](https://github.com/navarrotheus/database-fundamentals-CK0114/blob/backend/backend/.env.example)

## Scripts

* Rodar servidor:
  > yarn dev
  
* Criar tabelas no banco:
  > yarn createTables

* Deletar tabelas no banco:
  > yarn deleteTables
  
* Alimentar o banco de dados:
  > yarn seedDb
