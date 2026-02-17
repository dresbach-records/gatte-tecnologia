# GATTE Tecnologia

Este é o site da GATTE Tecnologia, uma empresa especializada em soluções de gestão, TI e certificação digital.

## Visão Geral

O projeto foi desenvolvido com [Next.js](https://nextjs.org/) e [Tailwind CSS](https://tailwindcss.com/) para uma experiência de usuário moderna e performática. O design é responsivo e se adapta a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (com App Router)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Ícones:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## Estrutura do Projeto

- `src/app/`: Contém as páginas principais e o layout da aplicação.
  - `page.tsx`: A página inicial (landing page).
  - `layout.tsx`: O layout principal que envolve todas as páginas.
  - `globals.css`: Estilos globais e configuração do tema do Tailwind CSS.
  - `solucoes/`: Contém as páginas dedicadas para cada solução e promoção.
    - `[nome-da-solucao]/page.tsx`: Página detalhada de uma solução específica.
    - `layout.tsx`: Layout compartilhado pelas páginas de soluções.
- `src/components/`: Componentes React reutilizáveis.
  - `ui/`: Componentes de UI da biblioteca ShadCN.
  - `*.tsx`: Componentes que representam o header, footer e as seções da landing page (Hero, Sobre, Serviços, etc.).
- `public/`: Arquivos estáticos, como imagens e a logo (`GATTE.png`).

## Como Rodar o Projeto Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/)

### Passos

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  Abra seu navegador e acesse [http://localhost:9002](http://localhost:9002).

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento do Next.js na porta 9002.
- `build`: Compila a aplicação para produção.
- `start`: Inicia o servidor de produção após o build.
- `lint`: Executa o linter para verificar a qualidade do código.

## Deploy

O deploy da aplicação é feito através do Firebase App Hosting.
