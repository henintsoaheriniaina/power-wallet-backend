# PowerWallet - Backend

PowerWallet is a personal finance management application. This repository contains the backend of the app, developed in **TypeScript** with **Express**, **MongoDB**, and several modern tools to create a robust and secure API.

## 🚀 Installation

### Prerequisites

- **Bun** (Recommended for native TypeScript support)
- **Node.js** (Version 18 or higher recommended)
- **MongoDB** or a MongoDB service (MongoDB Atlas, local, etc.)

### 1. Clone the project

```bash
git clone https://github.com/henintsoaheriniaina/power-wallet-backend.git
cd power-wallet-backend
```

### 2. Install dependencies

Just run:

```bash
bun install
```

### 3. Configure environment variables

Copy the `.env.example` file and rename it to `.env`. Modify the variables according to your environment.

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/power-wallet
JWT_SECRET=yourSecret
NODE_ENV=development
API_URL=https://localhost:8000
```

### 4. Start the application

In development, use Bun to start the server:

```bash
bun dev
```

The server will run on port `8000` by default. You can configure this in the `.env` file.

## 📚 Project Structure

Here’s the structure of the backend project:

```plaintext
src/
├── config/               # Environnement variables
│   └── config.ts
├── controllers/          # Logic for handling requests
│   ├── authController.ts
│   ├── transactionController.ts
│   └── balanceController.ts
├── db/                   # Database connection
│   └── db.ts
├── middleware/           # Middlewares for error handling and authentication
│   ├── authMiddleware.ts
│   ├── errorMiddleware.ts
│   └── logMiddleware.ts
├── models/               # Mongoose models
│   ├── user.ts
│   ├── transaction.ts
│   └── balance.ts
├── routes/               # Route definitions
│   ├── auth.ts
│   ├── transaction.ts
│   └── balance.ts
├── utils/                # Utility functions
│   ├── cron.ts
│   └── validateWithZod.ts
├── validators/           # Zod validation schemas
│   ├── authValidator.ts
│   ├── balanceValidator.ts
│   └── transactionValidator.ts
├── app.ts                # Main entry point
└── index.ts              # Server startup
```

## 🚀 API Routes

### 1. Authentication

- **POST /api/auth/register**  
  Register a new user.

  **Body:**

  ```json
  {
    "username": "john",
    "email": "john@mail.com",
    "password": "secret123"
  }
  ```

- **POST /api/auth/login**  
  Login for an existing user.

  **Body:**

  ```json
  {
    "email": "john@mail.com",
    "password": "secret123"
  }
  ```

- **DELETE /api/auth/logout**  
  Login out route.

### 2. Transactions

- **GET /api/transactions**  
  Get all transactions for the authenticated user.

- **POST /api/transactions**  
  Create a new transaction.

  **Body:**

  ```json
  {
    "type": "expense",
    "amount": 5000,
    "description": "PC upgrade",
    "date": "2025-04-25"
  }
  ```

- **GET /api/transaction/:id**  
  Get transaction by Id for the authenticated user.
- **PUT /api/transaction/:id**  
  Update a transaction.

  **Body:**

  ```json
  {
    "type": "expense",
    "amount": 5000,
    "description": "PC upgrade",
    "date": "2025-04-25"
  }
  ```

- **DELETE /api/transaction/:id**  
  Delete a transaction .

### 3. Balance

- **GET /api/balance**  
  Get the current balance based on the user's transactions or create if it doesn't exist.
- **PUT /api/balance**  
  Update the current balance based on the transaction's type.

  **Body:**

  ```json
  {
    "transactionType": "expense",
    "amount": 5000
  }
  ```

## 🛠️ Technologies Used

- **Express with Typescript** — Minimal web framework for Node.js
- **MongoDB** — NoSQL database
- **Mongoose** — ODM for MongoDB
- **Zod** — Data validation on the server side
- **JWT (JSON Web Tokens)** — Secure authentication
- **Bun** — Dependency management and fast TypeScript compilation

## 🔒 Security

- **JWT**: Users must be authenticated to access sensitive routes.
- **Global error middleware**: All errors are captured and returned in a uniform way.

## 🧪 Tests

Unit and integration tests can be added as the project evolves. You can set up tests with **Jest** or **Mocha** based on your preference.

## 📦 Deployment

To deploy to a server or cloud service (like **Heroku** or **DigitalOcean**), follow the specific configuration steps for each platform. Make sure to properly configure environment variables and ensure MongoDB is accessible.

## 🌐 Live Deployment

The backend is deployed and accessible at: [https://power-wallet-backend.onrender.com](https://power-wallet-backend.onrender.com)

---

_Powered by Henintsoa Heriniaina (Power)_ ⚡

---
