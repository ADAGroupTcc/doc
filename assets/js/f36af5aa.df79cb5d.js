"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[556],{396:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"Microsservi\xe7os/users/update_user","title":"Atualizar Usu\xe1rio","description":"Para saber onde obter os valores referentes ao BASE_URL confira a sess\xe3o de introdu\xe7\xe3o","source":"@site/docs/Microsservi\xe7os/users/update_user.md","sourceDirName":"Microsservi\xe7os/users","slug":"/Microsservi\xe7os/users/update_user","permalink":"/doc/docs/Microsservi\xe7os/users/update_user","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Atualizar Usu\xe1rio"},"sidebar":"tutorialSidebar","previous":{"title":"Criar Usu\xe1rio","permalink":"/doc/docs/Microsservi\xe7os/users/create_user"},"next":{"title":"Deletar Usu\xe1rio","permalink":"/doc/docs/Microsservi\xe7os/users/delete_user"}}');var o=r(4848),t=r(8453);const i={sidebar_position:4,title:"Atualizar Usu\xe1rio"},a="Atualizar Usu\xe1rio",d={},c=[{value:"HTTP Request",id:"http-request",level:2},{value:"Request Body",id:"request-body",level:3},{value:"HTTP Response",id:"http-response",level:2},{value:"Sucesso",id:"sucesso",level:3},{value:"Erro",id:"erro",level:3},{value:"cURL",id:"curl",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["Para saber onde obter os valores referentes ao ",(0,o.jsx)(s.code,{children:"BASE_URL"})," confira a sess\xe3o de ",(0,o.jsx)(s.a,{href:"../../intro",children:"introdu\xe7\xe3o"})]})}),"\n",(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"atualizar-usu\xe1rio",children:"Atualizar Usu\xe1rio"})}),"\n",(0,o.jsx)(s.p,{children:"Esta a\xe7\xe3o lhe permite atualizar um usu\xe1rio existente no Adda."}),"\n",(0,o.jsx)(s.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-powershell",children:"PATCH {{BASE_URL}}/v1/users/{{user_id}}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"request-body",children:"Request Body"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "nickname": "ablufs",\n  "location": [0, 0],\n  "categories": [\n    "6729462956fb7da155915495",\n    "6729463256fb7da155915d9a",\n    "6729463c56fb7da15591684a"\n  ]\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"http-response",children:"HTTP Response"}),"\n",(0,o.jsx)(s.h3,{id:"sucesso",children:"Sucesso"}),"\n",(0,o.jsx)(s.p,{children:"Status:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"204 - No Content\n"})}),"\n",(0,o.jsx)(s.h3,{id:"erro",children:"Erro"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "error": "internal server error"\n}\n'})}),"\n",(0,o.jsx)(s.p,{children:"Poss\xedveis status code de erro:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"400 - Bad Request\n404 - Not Found\n500 - Internal Server Error\n"})}),"\n",(0,o.jsx)(s.h2,{id:"curl",children:"cURL"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-powershell",children:'curl --request PATCH \\\n  --url {{BASE_URL}}/v1/users/{{user_id}} \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "nickname": "ablufs",\n    "location": [0, 0],\n    "categories": ["string", "string", "string"]\n  }\'\n'})})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>a});var n=r(6540);const o={},t=n.createContext(o);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);