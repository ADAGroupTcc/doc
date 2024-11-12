---
sidebar_position: 4
title: Atualizar Canal
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Atualizar Canal

Esta ação lhe permite atualizar um canal existente no Adda.

## HTTP Request

```powershell
PATCH {{BASE_URL}}/v1/channels/{{channel_id}}
```

### Request Body

```json
{
  "description": "string",
  "members": ["string", "string"],
  "admins": ["string", "string"]
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
  --url {{BASE_URL}}/v1/channels/{{channel_id}} \
  --header 'Content-Type: application/json' \
  --data '{
    "description": "string",
    "members": ["string", "string"],
    "admins": ["string", "string"]
  }'
```
