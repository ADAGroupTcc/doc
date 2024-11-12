---
sidebar_position: 5
title: Deletar Canal
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Deletar Canal

Esta ação lhe permite deletar um canal existente no Adda.

## HTTP Request

```powershell
DELETE {{BASE_URL}}/v1/channels/{{channel_id}}
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
curl --request DELETE \
  --url {{BASE_URL}}/v1/channels/{{channel_id}} \
  --header 'Content-Type: application/json'
```
