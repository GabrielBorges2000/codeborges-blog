---
title: "Como criar e conectar a um banco de dados PostgreSQL usando Docker"
excerpt: "Aprenda a criar e conectar a um banco de dados PostgreSQL usando Docker. Este guia passo a passo fornece instruções detalhadas para configurar e gerenciar seu banco de dados de forma eficiente."
coverImage: "/assets/blog/criando-database-postgres-docker/cover.jpg"
date: "2024-11-20T10:45:00.322Z"
author:
  name: Gabriel Borges
  picture: "https://github.com/GabrielBorges2000.png"
ogImage:
  url: "/assets/blog/criando-database-postgres-docker/cover.jpg"
---

Usar Docker para configurar e rodar um banco de dados PostgreSQL pode ser uma maneira prática e eficiente de isolar o ambiente de desenvolvimento e garantir que sua aplicação tenha um banco de dados robusto e escalável. Neste post, vamos aprender como criar um container Docker com o PostgreSQL e como conectar uma aplicação a ele.

## Passos para Criar e Conectar ao PostgreSQL Usando Docker

### 1. Instalando o Docker

Se você ainda não tem o Docker instalado, o primeiro passo é instalar o Docker em sua máquina. O processo de instalação varia de acordo com o sistema operacional:

- **Windows e macOS**: Você pode baixar o Docker Desktop diretamente do **[site oficial do Docker](https://www.docker.com/products/docker-desktop)**.
- **Linux**: Você pode seguir a **[documentação oficial do Docker para Linux](https://docs.docker.com/engine/install/)** para instalar o Docker.


### 2. Crie uma pasta para armazenar o arquivo de inicialização do Docker

Crie uma pasta para organizar o arquivo de configuração. No exemplo a seguir, utilizamos a pasta database, mas você pode escolher qualquer nome.
```bash
mkdir database
cd database
```

### 3. Crie um arquivo de inicialização do Docker

Crie um arquivo chamado `docker-compose.yml` dentro da pasta `database` e adicione o seguinte conteúdo:
```yaml
version: '3.7'

services:
  postgres:
    image: bitnami/postgresql:latest
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: seu-login
      POSTGRES_PASSWORD: sua-senha
      POSTGRES_DB: seu-banco-de-dados
    volumes:
      - postgres_data:/bitnami/postgresql
    restart: unless-stopped

volumes:
  postgres_data:
```
Estamos utilizando a imagem do Bitnami para o PostgreSQL, que é uma imagem bem conhecida e facilita a configuração do banco de dados.

### Explicação dos parâmetros

- **POSTGRES_USER**: Define o nome do usuário PostgreSQL.

- **POSTGRES_PASSWORD**: Define a senha do usuário PostgreSQL.

- **POSTGRES_DB**: Nome do banco de dados que será criado.

- **volumes**: Cria um volume para persistir os dados do banco, garantindo que não sejam perdidos após o reinício do container.

- **restart**: Parâmetro para garantir que o container seja reiniciado caso ocorra um erro ou ao reiniciar a VM.

- **image**: Nome da imagem utilizada do DockerHub (Utilizei o postgres da Bitnami pois além de ser fácil de configurar tem uma camada adicional de segurança).

> **Obs**: Mais informações no link: https://hub.docker.com/r/bitnami/postgresql


### 4. Inicialize o container

Para inicializar o container, abra o terminal na pasta `database` e execute o comando:
```bash
docker compose up -d
```

> **Obs**: O comando `docker compose up -d` é usado para iniciar o container em modo detach (em segundo plano).

### 5. Verifique se o container está funcionando

Para verificar se o container está funcionando, execute o comando:
```bash
docker ps
```

Deve aparecer uma saída similar a esta:

![image](/assets/blog/criando-database-postgres-docker/docker-ps.png)

Se o container está funcionando, você pode acessar o banco de dados usando um cliente PostgreSQL ou ferramentas como o **[DBeaver](https://dbeaver.io/)**, **[pgAdmin](https://www.pgadmin.org/)** ou **[Beekeeper Studio](https://www.beekeeperstudio.io/)**.

### 6. Conectar a aplicação ao banco de dados

Para conectar a aplicação ao banco de dados, você precisará das informações de conexão do banco de dados. No arquivo `docker-compose.yml` você pode ver as informações de conexão do banco de dados.

Se a sua conexão for por um ORM ou QUERY BUILDER utilize as variaveis de ambiente. Por exemplo do knex use o seguinte código:

```js
import knex from 'knex';

const knex = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL
});
```
Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes linhas:
```
DATABASE_URL=postgres://seu-login:sua-senha@localhost:5432/seu-banco-de-dados
```
Ou utilize as suas credenciais do banco de dados para acessar o banco de dados no programa de sua preferência.



### Conclusão

Parabéns! Seu banco de dados PostgreSQL foi criado e está rodando em um container Docker. Agora você pode começar a usá-lo em sua aplicação, com a vantagem de ter um ambiente isolado e fácil de gerenciar.

Esse post abrange todos os passos necessários para configurar o PostgreSQL em um container Docker em uma máquina virtual, incluindo como conectá-lo a sua aplicação usando variáveis de ambiente e um exemplo de código com o Knex.js.
