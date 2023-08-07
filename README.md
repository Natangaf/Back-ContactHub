Claro, aqui está a documentação da API em texto de um README:

**Documentação da API**

Esta API fornece uma maneira de interagir com um banco de dados de usuários e contatos.

**Endpoints**

* Usuários
    * `GET /users`: Lista todos os usuários.
    * `POST /users`: Cria um novo usuário.
    * `PUT /users/{id}`: Atualiza um usuário existente.
    * `DELETE /users/{id}`: Exclui um usuário existente.
* Contatos
    * `GET /contacts`: Lista todos os contatos.
    * `POST /contacts`: Cria um novo contato.
    * `PUT /contacts/{id}`: Atualiza um contato existente.
    * `DELETE /contacts/{id}`: Exclui um contato existente.

**Requisições**

Todas as requisições devem ser feitas no formato JSON.

**Respostas**

Todas as respostas serão retornadas no formato JSON.

**Exemplos**


// Cria um novo usuário
```
POST /users
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```
// Atualiza um usuário existente
```
PUT /users/{id}
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "phone": "987-654-3210"
}
```
// Exclui um usuário existente
```
DELETE /users/{id}
```
// Lista todos os usuários
```
GET /users
```
// Lista todos os contatos
```
GET /contacts
```
// Cria um novo contato
```
POST /contacts
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```

// Atualiza um contato existente
```
PUT /contacts/{id}
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "phone": "987-654-3210"
}
```
// Exclui um contato existente
```
DELETE /contacts/{id}
```

**Autenticação**

A maioria dos endpoints requer autenticação usando um token de autorização. Para autenticar, obtenha um token fazendo uma requisição POST para o endpoint `/login` com credenciais válidas. Inclua o token no cabeçalho `Authorization` para requisições subsequentes a endpoints autenticados.

**Cabeçalhos**

* `Authorization`: O cabeçalho `Authorization` deve conter o token de autorização.
* `Content-Type`: O cabeçalho `Content-Type` deve ser definido como `application/json` para todas as requisições que enviam dados.

**Status Code**

* `200 OK`: A requisição foi bem-sucedida.
* `400 Bad Request`: A requisição está errada.
* `401 Unauthorized`: A requisição não está autenticada.
* `403 Forbidden`: A requisição não é permitida.
* `404 Not Found`: O recurso não foi encontrado.
* `500 Internal Server Error`: Um erro ocorreu no servidor.

**Boa codificação!**