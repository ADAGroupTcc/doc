---
sidebar_position: 2
title: Obter Canal por ID
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Obter Canal por ID

Esta ação lhe permite obter informações de um canal específico do Adda.

## HTTP Request

```powershell
GET {{BASE_URL}}/v1/channels/{{channel_id}}
```

## HTTP Response

### Sucesso

```json
{
  "id": "string",
  "description": "string",
  "members": ["string", "string"],
  "admins": ["string", "string"],
  "created_at": "timestamp",
  "updated_at": "timestamp"
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
