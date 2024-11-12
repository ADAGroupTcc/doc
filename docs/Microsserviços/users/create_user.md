---
sidebar_position: 3
title: Criar Usuário
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Criar Usuário

Esta ação lhe permite criar um novo usuário no Adda.

## HTTP Request

```powershell
POST {{BASE_URL}}/v1/users
```

### Request Body

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "cpf": "string",
  "location": [0, 0],
  "categories": ["string", "string", "string"]
}
```

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
  "categories": ["string", "string", "string"],
  "is_denunciated": false
}
```

Status:

```
201 - Created
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
curl --request POST \
  --url {{BASE_URL}}/v1/users \
  --header 'Content-Type: application/json' \
  --data '{
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "cpf": "string",
    "location": [0, 0],
    "categories": ["string", "string", "string"]
  }'
```
