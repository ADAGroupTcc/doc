---
sidebar_position: 3
title: Criar Canal
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Criar Canal

Esta ação lhe permite criar um novo canal no Adda.

## HTTP Request

```powershell
POST {{BASE_URL}}/v1/channels
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
201 - Created
```

### Erro

```json
{
  "error": "internal server error"
}
```
