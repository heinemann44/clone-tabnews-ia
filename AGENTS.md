# AGENTS.md

Clone do TabNews desenvolvido para o curso.dev com o apoio de agentes de IA.

## Princípios

- Prefira sempre a solução mais simples que resolva o problema.
- Não adicione dependências, arquivos ou configurações sem necessidade real.
- Escreva código, comentários e documentação seguindo o estilo do que já existe no projeto.

## Stack e estrutura

- Next.js com React, em JavaScript.
- As rotas usam o App Router: cada pasta em `app/` é um segmento de rota, e o arquivo `page.js` dela define a página. O layout raiz fica em `app/layout.js`.
- `next.config.js` fixa `turbopack.root` na pasta do projeto. Não remova: sem isso, o Next.js pode adotar como raiz um projeto Node em uma pasta pai e herdar a configuração dele.

## Comandos

- `npm install`: instala as dependências.
- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o build de produção.
- `npm start`: serve o build de produção.

## Fluxo de trabalho

- Antes de concluir uma alteração, rode `npm run build` e confira o resultado em `npm run dev`.
- Instale dependências com versão exata e mantenha o `package-lock.json` versionado.
- Rode `npm audit` ao mudar dependências e informe qualquer vulnerabilidade encontrada.
- Não versione `node_modules` nem `.next`.
- Só faça commit ou push quando for solicitado.

## Solução de problemas

- Erros inesperados no servidor de desenvolvimento após mudar a configuração costumam vir de cache antigo. Pare o servidor, apague a pasta `.next` e inicie de novo.
