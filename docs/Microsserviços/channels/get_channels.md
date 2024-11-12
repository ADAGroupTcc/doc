---
sidebar_position: 1
title: Listagem de Canais
---

:::info
Para saber onde obter os valores referentes ao `BASE_URL` confira a sessão de [introdução](../../intro)
:::

# Listagem de Canais

Esta ação lhe permite obter informações de um ou mais canais do Adda.

## HTTP Request

```powershell
GET {{BASE_URL}}/v1/channels
```

### Query Params

| Parâmetro    | Tipo    | Descrição                                      |
| ------------ | ------- | ---------------------------------------------- |
| channel_ids  | string  | Informe um ou mais canais separados por ','    |
| show_members | boolean | Viabiliza o retorno do objeto members completo |

### Request Body

Não é necessário enviar um body para a requisição.

## HTTP Response

### Sucesso - Sem o parâmetro show_members

```json
{
  "channels": [
    {
      "id": "string",
      "description": "string",
      "members": ["string", "string"],
      "admins": ["string", "string"],
      "created_at": "timestamp",
      "updated_at": "timestamp"
    }
  ],
  "next_page": 1
}
```

Status:

```
200 - Ok
```

### Sucesso - Com o parâmetro show_members

```json
{
  "channels": [
    {
      "id": "string",
      "description": "string",
      "members": [
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
      "admins": [
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
      "created_at": "timestamp",
      "updated_at": "timestamp"
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
