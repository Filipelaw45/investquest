# Invest Quest


## Colaboradores
- Daniel França
- Hélio Andrade
- Carlos Maurício
- Makawlly Rocha
- Filipe Andrade

## Descrição
InvestQuest é um sistema de simulação de compra, venda, lucros e perdas de criptomoedas. Os usuários podem criar contas, realizar simulações de negociação de criptomoedas e acompanhar seu desempenho em um leaderboard na qual recebe Dracoins como recompensas das missões.

## Tecnologias Utilizadas
- **Next.js**
- **TypeScript**
- **ShadCNUI**
- **TailwindCSS**
- **Docker**
- **postgres**

## Funcionalidades
- Cadastro de usuários.
- Login de usuários.
- Simulação de compra e venda de criptomoedas.
- Exibição de lucros e perdas das transações.
- Leaderboard para comparar o desempenho entre os usuários.

## Estrutura de Rotas

### **Simulação de Transações**
- `POST /api/trades/buy` - Simula a compra de criptomoedas.
  - **Body**:
    ```json
    {
      "userId": "string",
      "symbol": "string",
      "quantity": "number"
    }
    ```

- `POST /trades/sell` - Simula a venda de criptomoedas.
  - **Body**:
    ```json
    {
      "tradeId": "string"
    }
    ```

### **Leaderboard**
- `GET /leaderboard` - Retorna a lista de usuários ordenados por quantidade de Dracoins obtidos.

## Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js (v20.3+)
- Docker

### Passos
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd investquest
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o ambiente. Crie um arquivo `.env` com as seguintes variáveis:
   ```env
    AUTH_GITHUB_ID=
    AUTH_GITHUB_SECRET=

    NEXTAUTH_URL=
    NEXTAUTH_SECRET=
    AUTH_SECRET=

    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_DB=

    DATABASE_URL=

   ```

4. Suba o ambiente Docker:
   ```bash
   docker-compose up -d
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

