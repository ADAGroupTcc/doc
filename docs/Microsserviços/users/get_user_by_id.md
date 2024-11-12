---
sidebar_position: 2
title: Obter Usuário por ID
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Obter Usuário por ID

Esta ação lhe permite obter informações de um usuário específico do Adda.

## HTTP Request

```powershell
GET {{BASE_URL}}/v1/users/{{user_id}}
```

### Path Params

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| user_id   | string | ID do usuário a ser consultado |

### Request Body

Não é necessário eviar um body para a requisição.

## HTTP Response

### Sucesso

```json
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
400 - Bad Request
404 - Not Found
500 - Internal Server Error
```

## cURL

```powershell
curl --request GET \
  --url {{BASE_URL}}/v1/users/{{user_id}} \
  --header 'Content-Type: application/json'
```
