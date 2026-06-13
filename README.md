# BIX Financial Dashboard

Um dashboard financeiro moderno criado com Next.js, React e styled-components. O aplicativo permite que usuários façam login com uma conta demo, explorem transações, filtrem por categorias e visualizem gráficos resumidos de receitas, despesas e saldo.

## Funcionalidades

- Página de login com credenciais de demonstração
- Navegação responsiva com sidebar
- Filtro de transações por conta, setor, estado e intervalo de datas
- Cards de resumo para saldo total, receitas e despesas
- Gráfico de barras mensal
- Gráfico de linha de saldo acumulado
- Tabela de transações com paginação e virtualização
- Persistência local de filtros usando armazenamento do navegador

## Credenciais de Demonstração

- Email: `admin@bix.com`
- Senha: `123456`

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- styled-components
- React Hook Form
- Zod
- TanStack React Table
- Recharts
- Sonner para notificações
- Zustand (para padrões de gerenciamento de estado, caso seja usado em outras partes)

## Iniciando

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador.

## Scripts Disponíveis

- `npm run dev` – inicia o servidor de desenvolvimento
- `npm run build` – gera a build de produção
- `npm run start` – executa a build de produção
- `npm run lint` – executa o ESLint

## Estrutura do Projeto

- `src/app` – rotas, layouts e páginas do aplicativo
- `src/components` – componentes reutilizáveis de UI e dashboard
- `src/contexts` – provider e hooks de estado do dashboard
- `src/actions` – ações de autenticação e lógica do lado do servidor
- `src/lib` – utilitários para cálculo, filtragem e armazenamento
- `src/data` – dados de transações de exemplo
- `src/schemas` – schemas de validação
- `src/styles` – definições de tema e estilos globais

## Observações

- O fluxo de login usa uma action simples no servidor e simulação de sessão via cookie.
- Os dados de transações são carregados de um arquivo JSON local em `src/data/transactions.json`.
- Os filtros são salvos no `localStorage`, então permanecem ativos entre visitas.

## Deploy

Este app pode ser deployado no Vercel ou em qualquer provedor que suporte Next.js.

1. Gere a build: `npm run build`
2. Inicie o servidor de produção: `npm run start`

---

Sinta-se à vontade para personalizar o projeto adicionando autenticação real, dados de transações via API ou funcionalidade de exportação/download.
