---
sidebar_position: 4
title: Atualizar Usuário
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Atualizar Usuário

Esta ação lhe permite atualizar um usuário existente no Adda.

## HTTP Request

```powershell
PATCH {{BASE_URL}}/v1/users/{{user_id}}
```

### Request Body

```json
{
  "nickname": "ablufs",
  "location": [0, 0],
  "categories": [
    "6729462956fb7da155915495",
    "6729463256fb7da155915d9a",
    "6729463c56fb7da15591684a"
  ]
}
```

## HTTP Response

### Sucesso

Status:

```
204 - No Content
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
curl --request PATCH \
  --url {{BASE_URL}}/v1/users/{{user_id}} \
  --header 'Content-Type: application/json' \
  --data '{
    "nickname": "ablufs",
    "location": [0, 0],
    "categories": ["string", "string", "string"]
  }'
```
