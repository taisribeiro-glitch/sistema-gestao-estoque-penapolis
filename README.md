# 📦 Sistema Web de Gestão e Otimização de Estoque para Entidades Assistenciais de Penápolis

> **Projeto Integrador de Tecnologia da Informação II & III**  
> **Programa de Extensão UFMS Digital (95DX7.200525)**  
> **Estudante:** Tais Ribeiro Barroso  
> **Curso:** Tecnologia da Informação  

---

## 📌 Sobre o Projeto

Muitas entidades assistenciais e Organizações da Sociedade Civil (OSCs) enfrentam dificuldades na gestão do fluxo de doações devido ao uso de registros manuais ou planilhas descentralizadas. A ausência de um controle centralizado frequentemente resulta na perda de itens perecíveis devido ao vencimento de prazos e em desajustes no atendimento às famílias vulneráveis.

Este projeto de extensão consiste no desenvolvimento de uma aplicação web dinâmica e responsiva voltada à automação do inventário, controle de prazos de validade e geração de alertas para itens críticos, promovendo maior transparência e eficiência operacional no terceiro setor do município de Penápolis/SP.

---

## 🚀 Funcionalidades Principais

- **Autenticação e Controle de Acesso:** Perfis diferenciados para administradores e voluntários.
- **Gestão de Categorias e Produtos:** Cadastro completo de itens (alimentos, higiene, vestuário), incluindo quantidade mínima de segurança e prazos de validade.
- **Registro de Movimentações:** Lançamento simplificado de entradas (doações/compras) e saídas (distribuição/consumo).
- **Painel de Controle (Dashboard):** Indicadores visuais do estoque e alertas automáticos de produtos próximos do vencimento.
- **Interface Responsiva:** Adaptada para navegação intuitiva em smartphones, tablets e desktops (Mobile-First).

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** React, Vite, HTML5 Semântico, Tailwind CSS, Lucide React (ícones).
- **Back-end:** Node.js, Express, ORM Prisma.
- **Banco de Dados:** PostgreSQL.
- **Testes & Qualidade:** Vitest, Supertest, React Testing Library.
- **Versionamento:** Git e GitHub (Fluxo Git Flow simplificado).

---

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── components/     # Componentes reutilizáveis (botões, modais, cards)
│   ├── pages/          # Páginas da aplicação (Dashboard, Estoque, Movimentações)
│   ├── hooks/          # Hooks customizados
│   ├── services/       # Conexão e chamadas à API REST
│   └── utils/          # Funções utilitárias e validações
├── prisma/             # Schema e migrações do banco de dados
├── public/             # Ativos estáticos (imagens, ícones)
└── tests/              # Suíte de testes unitários e de integração
