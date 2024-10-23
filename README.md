# API-Authentication

## Índice

- [Sobre](#sobre)
- [Rotas-de-Autenticação](Rotas-de-Autenticação)
- [Recursos](#recursos)
- [Instalação](#instalação)

## Sobre

Este projeto é uma aplicação Node.js com Express e Axios, que demonstra como usar diferentes métodos de autenticação ao acessar uma API externa. A aplicação interage com a API pública "Secrets API" e retorna os dados para serem exibidos em uma página HTML gerada por EJS.

## Rotas-de-Autenticação
Este projeto oferece várias rotas que fazem requisições para diferentes endpoints da "Secrets API" usando métodos variados de autenticação.

### 1. Rota sem Autenticação
GET /noAuth
Nesta rota, a aplicação faz uma requisição GET ao endpoint /random da API pública, que não requer qualquer tipo de autenticação.
A resposta será um segredo aleatório da API, exibido em formato JSON na página renderizada.

### 2. Autenticação Básica
GET /basicAuth
Nesta rota, a aplicação acessa o endpoint /all da API, mas especifica que deseja apenas os segredos da página 2. Para isso, é utilizada Autenticação Básica, onde um nome de usuário e senha são passados no cabeçalho da requisição.
Os dados de autenticação são inseridos diretamente no cabeçalho usando o formato Basic Auth.
A resposta conterá uma lista de segredos da página 2.

### 3. Autenticação via API Key
GET /apiKey
Esta rota faz uma requisição ao endpoint /filter da API, filtrando segredos cuja pontuação de constrangimento seja igual ou superior a 5. Para autenticar, utiliza-se uma API Key, que é passada como um parâmetro de consulta na URL.
A chave da API (apiKey) é passada como um parâmetro de consulta na URL.
A resposta exibirá segredos filtrados com base na pontuação.


### 4. Autenticação Bearer Token
GET /bearerToken
Esta rota faz uma requisição ao endpoint /secrets/{id} da API para obter o segredo com o ID 42. A autenticação é feita via Bearer Token, onde o token é enviado no cabeçalho de autorização da requisição.
O Bearer Token é inserido no cabeçalho HTTP como Authorization.
A resposta conterá o segredo associado ao ID 42.

## Como Funciona o Projeto
Autenticação Básica (Basic Auth): Nome de usuário e senha são passados no cabeçalho da requisição.
API Key: Um parâmetro apiKey é adicionado à URL da requisição.
Bearer Token: Um token é inserido no cabeçalho Authorization.
Fluxo de Trabalho
O usuário acessa uma das rotas definidas no servidor (/noAuth, /basicAuth, /apiKey, ou /bearerToken).
O servidor faz uma requisição à API pública, utilizando o método de autenticação necessário.
Os dados da API são renderizados e exibidos no navegador.

## Variáveis de Autenticação
No código, você deve substituir as variáveis de autenticação pelos seus próprios valores:

> const yourUsername = "seuUsername";
> const yourPassword = "suaSenha";
> const yourAPIKey = "suaAPIKey";
> const yourBearerToken = "seuBearerToken";



## Recursos

- Node.js: Ambiente de execução JavaScript.
- Express.js: Framework minimalista para criar aplicações web.
- Axios: Biblioteca de requisições HTTP para interagir com APIs.
- EJS: Template engine para gerar HTML dinâmico com dados fornecidos pelo backend.


## Instalação

Passos para instalar e configurar o projeto localmente.
1. **Clonar o repositório:**
   ```bash
   git clone git@github.com:Joao-VictorCm/API-Authentication.git
