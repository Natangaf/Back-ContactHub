# Documentação da ContactHub

**Para começar, utilize os seguintes comandos:**

# Configuração e Execução da Aplicação

1. Acesse a pasta "back" dentro do repositório e abra o terminal. Instale as dependências necessárias com o seguinte comando:


- Instalar todas as dependências: `npm install `

  se nessesario :`npm install --force`

O parâmetro --force é usado para garantir que todas as dependências sejam instaladas novamente, caso já existam.

2. Crie um arquivo chamado .env na pasta raiz do back e cole o seguinte exemplo de conexão com o banco de dados:
  Tem um aquivo `.env.example` que vc pode copiar como exemplo 
    `DATABASE_URL="mysql://root:password@host:port/nome-do-banco"`
  Certifique-se de mudar o tipo do banco de dados que for utilizar. Substitua os valores root, password, host, port e nome-do-banco pelas informações de conexão do seu banco de dados. Certifique-se de criar o banco de dados antes de executar as migrações.

3. Execute as migrações do banco de dados usando o seguinte comando:

- Executar as migrações: `npm typeorm migration:run -d src/data-source.ts`

4. Após as migrações serem concluídas, execute esse outro comando:

- Iniciar o servidor: `npm run dev`

Bem-vindo à documentação da API! Este guia fornece uma visão geral dos endpoints disponíveis, suas funcionalidades, parâmetros necessários e respostas esperadas.

## Autenticação

A maioria dos endpoints da API requer autenticação usando um bearer token. Para autenticar, obtenha um token fazendo uma requisição POST para o endpoint `/login` com credenciais válidas. Inclua o token no cabeçalho `Authorization` para requisições subsequentes a endpoints autenticados.

# Usuários

## Criar Usuário

**Requisição:**

POST /users
Authorization: Required
Content-Type: application/json

```
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "123456",
  "phone": "2121222"
}
```

**Resposta:**
json

```
{
"id": "user_id",
"name": "John Doe",
"email": "johndoe@example.com"
"phone": "2121222",
"createdAt: DATE"
}
```

## Update User

**Requisição:**

http
PATCH /users
Authorization: Required
Content-Type: application/json

```
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "2121222"
}
```

**Resposta:**
json

```
{
"id": "user_id",
"name": "Updated Name",
"email": "updated@example.com",
"phone": "2121222",
"createdAt": DATE,
}
```

## Delete User

**Requisição:**

http
DELETE /users
Authorization: Required

**Resposta:**
No response

## List User

**Requisição:**

http
GET /users
Authorization: Required

**Resposta:**
json

```
{
"id": "user_id",
"name": "John Doe",
"email": "johndoe@example.com",
"phone": "2121352653",
"createdAt": DATE
},
```

# Contacts

## Create Contact

**Requisição:**

http
POST /contacts
Authorization: Required
Content-Type: application/json

```
{
"name": "Contact Name",
"email": "contact@example.com",
"phone": "555-1234"
}
```

**Resposta:**
json

```
{
"id": "contact_id",
"name": "Contact Name",
"email": "contact@example.com",
"phone": "555-1234"
}
```

## Update Contact

**Requisição:**

http
PATCH /contacts/{id}
Authorization: Required
Content-Type: application/json

```
{
"name": "Updated Name",
"email": "updated@example.com",
"phone": "555-5678"
}
```

**Resposta:**
json

```
{
"id": "contact_id",
"name": "Updated Name",
"email": "updated@example.com",
"phone": "555-5678"
}
```

## Delete Contact

**Requisição:**

http
DELETE /contacts/{id}
Authorization: Required

**Resposta:**
No response

## List All Contacts

**Requisição:**

http
GET /contacts
Authorization: Required

**Resposta:**
json

```
[
{
"id": "contact_id",
"name": "Contact Name 1",
"email": "contact1@example.com",
"phone": "555-1234"
},
{
"id": "contact_id",
"name": "Contact Name 2",
"email": "contact2@example.com",
"phone": "555-5678"
},
// ...
]
```
