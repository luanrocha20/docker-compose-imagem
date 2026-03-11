# Desafio Fullcycle Nginx como Proxy Reverso com Node.js

Este projeto é um desafio que simula um ambiente real de desenvolvimento utilizando containers.

A aplicação utiliza **Nginx** como **proxy reverso**, que recebe as requisições HTTP e as encaminha para uma aplicação **Node.js**. A aplicação Node.js se conecta a um banco de dados **MySQL** para persistir dados.

## Tecnologias Utilizadas

- Node.js (JavaScript)
- Nginx
- MySQL
- Docker
- Docker Compose

## Fluxo da Aplicação

1. O usuário acessa a aplicação através do navegador na porta **8080**.
2. O **Nginx** recebe a requisição.
3. O **Nginx** atua como **proxy reverso** e encaminha a requisição para a aplicação **Node.js**.
4. A aplicação **Node.js** se conecta ao banco **MySQL**.
5. Um novo registro é inserido na tabela **people**.
6. A aplicação retorna uma página HTML contendo o título e a lista de nomes cadastrados.

## Regras de Negócio

Sempre que o usuário acessar a aplicação:

- Um **nome aleatório** é inserido na tabela **people** no banco de dados.
- A aplicação retorna uma página HTML contendo:

````html
<h1>Full Cycle Rocks!</h1>
E a lista de nomes cadastrados no banco. 

````

Execute o comando: docker compose up 

Após a aplicação rodar acesse no seu navegador:
http://localhost:8080
