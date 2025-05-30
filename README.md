# 🛵 TechTudo Delivery

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-3178C6?logo=typescript)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js)

Sistema de gerenciamento de pedidos com frontend em **React + TypeScript** e backend em **Node.js + Express + TypeScript**, organizado em arquitetura MVC. Ideal para praticar conceitos de desenvolvimento fullstack.

![TechTudo Delivery Demo](https://via.placeholder.com/800x400?text=Screenshot+do+Sistema+TechTudo+Delivery)

## 📦 Funcionalidades

✅ **Cadastrar Pedido**  
✅ **Listar Pedidos**  
✅ **Marcar Pedido como Entregue**  
✅ **Remover Pedidos Entregues**  
✅ **Interface simples com React**  
✅ **API REST com Express + MVC**

## 🛠️ Tecnologias Utilizadas

### ⚙️ Backend
- Node.js v18+
- TypeScript 4.9+
- Express 4.18+
- Nodemon 3.0+
- Arquitetura MVC

### 💻 Frontend
- React 18+
- Vite 4.4+
- TypeScript 5.0+
- Axios 1.4+
- HTML5 e CSS3

## 🗂️ Estrutura de Pastas

```
TechTudoDelivery/
├── backend/
│   ├── controller/
│   │   └── PedidoController.ts
│   ├── model/
│   │   └── PedidoModel.ts
│   ├── routes/
│   │   └── pedido.routes.ts
│   ├── server.ts
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── api.ts
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js v18+
- npm v9+
- TypeScript v4.9+

### 🛠 Backend

1. Acesse a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm run dev
```
> Servidor rodando em: http://localhost:5000

### 💻 Frontend

1. Acesse a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação:
```bash
npm run dev
```
> Aplicação disponível em: http://localhost:5173

## 🔗 Endpoints da API

| Método | Endpoint                  | Descrição                         |
|--------|---------------------------|-----------------------------------|
| GET    | `/pedidos`                | Lista todos os pedidos           |
| POST   | `/pedidos`                | Cadastra um novo pedido          |
| PATCH  | `/pedidos/:id/entregar`   | Marca pedido como entregue       |
| DELETE | `/pedidos/entregues`      | Remove pedidos entregues         |

## 🧠 Melhorias Futuras

🧪 **Testes Automatizados**  
- Implementar testes com Jest/Vitest
- Adicionar testes E2E com Cypress

💾 **Persistência de Dados**  
- Integrar com MongoDB ou PostgreSQL
- Implementar migrações de banco de dados

🔒 **Segurança**  
- Adicionar autenticação JWT
- Implementar middleware de validação

📱 **Responsividade**  
- Design responsivo para mobile
- Componentes adaptáveis

🎨 **UI Avançada**  
- Integrar TailwindCSS ou Styled Components
- Animações e feedbacks visuais

## 👨‍💻 Autor

**Seu Nome**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil) 
[![Portfolio](https://img.shields.io/badge/Portfolio-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://seusite.com)

✉️ Contato: [seuemail@email.com](mailto:seuemail@email.com)

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

---

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/techtudo-delivery.git
cd techtudo-delivery
```
