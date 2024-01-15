# Gerenciador de Usuarios
## O projeto consiste em uma aplicação Full Stack completa com o objetivo de gerenciar usuários.
 - A aplicação realiza procedimentos básicos de criação, listagem, atualização e remoção.

<br>

<p align="center">
  <table align="center">
    <tr>
      <td align="center">Menu</td>
      <td align="center">Cadastro</td>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/anielmelo/GerenciadorDeUsuarios/assets/103321497/3971d9e6-2060-47ce-9441-fe5d4c7203d4" alt="Menu" /></td>
      <td align="center"><img src="https://github.com/anielmelo/GerenciadorDeUsuarios/assets/103321497/22c937b3-a970-426e-b052-13213dea82b4" alt="Cadastro" /></td>     
    </tr>
  </table>
  <table align="center">
    <tr>
      <td align="center">Listagem</td>
      <td align="center">Edição</td>
    </tr>
    <tr>
      <td align="center"><img src="https://github.com/anielmelo/GerenciadorDeUsuarios/assets/103321497/8844e071-4fe7-455a-9b0a-35dfcd1179e2" alt="Listagem"/></td>
      <td align="center"><img src="https://github.com/anielmelo/GerenciadorDeUsuarios/assets/103321497/a6a9bfb3-45a6-4dba-992e-2859f964700b" alt="Edição"/></td>
    </tr>
  </table>
</p>

# Tecnologias Utilizadas
## Banco de Dados

 - <a href="https://www.mysql.com/">MySQL</a><img align="center" alt="MySQL" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg">

## Frontend

 - <a href="https://www.w3schools.com/html/">HTML</a><img align="center" alt="HTML" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
 - <a href="https://www.w3schools.com/css/">CSS</a><img align="center" alt="CSS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
 - <a href="https://www.javascript.com/">JavaScript</a><img align="center" alt="JavaScript" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">

## Backend

 - <a href="https://nodejs.org/en/">NodeJS</a><img align="center" alt="NodeJS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
 - <a href="https://expressjs.com/">Express</a><img align="center" alt="Express" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">
 
<br>
<br>

# Como utilizar

### Primeiramente, devemos clonar o repositório.

```bash
#Comando para clonar o repositório:

$ git clone https://github.com/anielmelo/GerenciadorDeUsuarios.git
```

### Após clonar o repositório, é necessário criar o banco de dados com MySQL.

```bash
#Comando para criar o banco de dados:

$ CREATE DATABASE nome_do_banco_de_dados;
```

### Depois disso, a tabela que será utilizada no sistema deverá ser criada com o nome 'users'.

```bash
#Comando para criar a tabela com as seguintes colunas:

$ CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    number_cellphone VARCHAR(45) NOT NULL,
    birth_date VARCHAR(45) NOT NULL
);
```
### Na pasta "backend" haverá uma arquivo ".env.example" contendo as informações necessárias para conectar com o banco de dados, basta renomear ou criar o arquivo para ".env" e preencher os campos destacados nele.

```bash
PORT= [Porta em que o servidor será executado]
MYSQL_HOST= [O host da sua máquina, por padrão é 'localhost']
MYSQL_USER= [Seu nome de usuário, por padrão o MySQL usa o usuário 'root']
MYSQL_PASSWORD= [A senha que você escolheu ao instalar o MySQL]
MYSQL_DB= [O nome do banco de dados criado]
```

### Para iniciar a aplicação, antes é necessário instalar o 'node_modules' dentro da pasta "backend".

```bash
#Comando para baixar o 'node_modules':

$ npm install
```
### Agora basta iniciar o sistema executando o comando dentro da pasta "backend". Para visualizar a aplicação funcionando basta abrir o arquivo "index.html" na pasta "frontend".

```bash
#Comando para iniciar o servidor:

$ npm start
```

<br>
