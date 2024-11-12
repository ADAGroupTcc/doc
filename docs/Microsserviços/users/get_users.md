---
sidebar_position: 1
title: Listagem de Usuários
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Listagem de Usuários

Esta ação lhe permite obter informações de um ou mais usuários do Adda.

## HTTP Request

```powershell
GET {{BASE_URL}}/v1/users
```

### Query Params

| Parâmetro       | Tipo    | Descrição                                         |
| --------------- | ------- | ------------------------------------------------- |
| user_ids        | string  | Informe um ou mais usuários separados por ','     |
| show_categories | boolean | Viabiliza o retorno do objeto categories completo |

### Request Body

Não é necessário eviar um body para a requisição.

## HTTP Response

### Sucesso - Sem o parâmetro show_categories

```json
{
  "users": [
    {
      "id": "string",
      "created_at": "timestamp",
      "updated_at": "timestamp",
      "first_name": "string",
      "last_name": "string",
      "nickname": "string",
      "email": "string",
      "cpf": "string",
      "location": [0, 0],
      "categories": ["string", "string", "string"],
      "is_denunciated": false
    },
    {
      "id": "string",
      "created_at": "timestamp",
      "updated_at": "timestamp",
      "first_name": "string",
      "last_name": "string",
      "nickname": "string",
      "email": "string",
      "cpf": "string",
      "location": [0, 0],
      "categories": ["string", "string", "string"],
      "is_denunciated": false
    }
  ],
  "next_page": 1
}
```

Status:

```
200 - Ok
```

### Sucesso - Com o parâmetro show_categories

```json
{
  "users": [
    {
      "id": "string",
      "created_at": "timestamp",
      "updated_at": "timestamp",
      "first_name": "string",
      "last_name": "string",
      "nickname": "string",
      "email": "string",
      "cpf": "string",
      "location": [0, 0],
      "categories": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "classification": 0,
          "created_at": "timestamp",
          "updated_at": "timestamp"
        },
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "classification": 0,
          "created_at": "timestamp",
          "updated_at": "timestamp"
        }
      ],
      "is_denunciated": false
    }
  ]
}
```

Status:

```
200 - Ok
```

### Erro

```json
{
  "error": "internal server error"
}
```

Possíveis status code de erro:

```
500 - Internal Server Error
```

## cURL

```powershell
curl --request GET \
  --url {{BASE_URL}}/v1/users \
  --header 'Content-Type: application/json'
```
