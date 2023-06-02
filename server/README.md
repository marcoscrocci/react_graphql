# Fullstack React GraphQL TypeScript Tutorial

### Vídeo: 
>https://www.youtube.com/watch?v=I6ypD7qv3Z8&

### Módulo: Server

Versões utilizadas no tutorial:<br/>
>Node.js: v14.5.0<br/>
npm: 6.14.5<br/>
yarn: 1.21.1

## 1 - Preparação inicial do ambiente do módulo server

Comandos:<br/>
>npm init -y<br/>
yarn add -D @types/node typescript<br/>
yarn add -D ts-node<br/>
npx tsconfig.json -> Ao ser questionado, selecionar node<br/>
yarn add -D nodemon<br/>

Executar o server:
>Terminal 1: yarn watch<br/>
>Terminal 2: yarn dev

Tempo de vídeo: 11:29

## 2 - Instalação e configuração para utilizar o banco de dados PostgreSQL

Requistos: Ter um banco de dados PostgreSQL instalado no computador<br/>

Comandos:<br/>
>yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg
npx mikro-orm migration:create

Serão criados os arquivos na pasta src/migrations

Documentação:<br/>
https://mikro-orm.io/docs/defining-entities

Tempo de vídeo: 32:22

## 3 - Executando o arquivo migration e os comandos SQL

Iniciar o banco de dados PostgreSQL e executar o server:
>Terminal 1: yarn watch   -> Serão gerados arquivos na pasta dist/migrations<br/>
>Terminal 2: yarn dev -> Serão executados os scripts da migrations e o comando insert na tabela post

Tempo de vídeo: 38:03

## 4 - Executando consultas no banco de dados

Iniciar o banco de dados PostgreSQL e executar o server:
>Terminal 1: yarn watch   -> Serão gerados arquivos na pasta dist/migrations<br/>
>Terminal 2: yarn dev -> Serão executados os scripts da migrations e o comando insert na tabela post

Tempo de vídeo: 39:48

## 5 - Instalando e configurando o ambiente Apollo Server e GraphQL

Comandos:<br/>
>yarn add express apollo-server-express graphql type-graphql
>yarn add -D @types/express

Obs.: Foi necessário fazer downgrade das versões dos itens instalados: express apollo-server-express graphql type-graphql, para funcionar o código do tutorial.

Iniciar o banco de dados PostgreSQL e executar o server:
>Terminal 1: yarn watch   -> Serão gerados arquivos na pasta dist/migrations<br/>
>Terminal 2: yarn dev -> Serão executados os scripts da migrations e o comando insert na tabela post

Tempo de vídeo: 47:30


