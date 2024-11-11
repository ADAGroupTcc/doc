---
sidebar_position: 1
---

# Introdução

Venha entender como o Adda funciona **em menos de 5 minutos**.

## Pré-requisitos:

Para começar a testar, você vai precisar escolher um dos nossos ambientes.

### Render: QA

Todo nosso ambiente de **homologação** está hospedado gratuitamente no Render.

#### Como iniciar?

Antes de tudo, deverá ser executado: **GET** **_TBD_**/warmup.

E aguardar a seguinte resposta:

```json
{
  "status": "started"
}
```

Com isso, o ambiente está configurado. Não temos um gateway nesse ambiente, então será preciso acessar cada api diretamente.

Para isso, os endereços são:

1. https://ms-users-api.onrender.com
2. https://ms-channel-api.onrender.com
3. https://ms-messages-api.onrender.com
4. https://ms-categories-api.onrender.com
5. https://ms-channel-sorter-ai.onrender.com
6. https://ms-handler-api.onrender.com

## Aws: PROD

Todo nosso ambiente de **produção** está hospedado na AWS.

### [TBD]

## Microsserviços:

Nosso ecossistema foi construido em microsserviços.

Para saber mais sobre, acesse [aqui!](/docs/microsservicos)
