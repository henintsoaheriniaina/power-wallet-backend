# PowerWallet - Backend

PowerWallet is a personal finance management application. This repository contains the backend of the app, developed in **TypeScript** with **Express**, **MongoDB**, and several modern tools to create a robust and secure API.

## 🚀 Installation

### Prerequisites

- **Node.js** (Version 18 or higher recommended)
- **MongoDB** or a MongoDB service (MongoDB Atlas, local, etc.)
- **Bun** (Recommended for native TypeScript support)

### 1. Clone the project

```bash
git clone https://github.com/henintsoaheriniaina/power-wallet-backend.git
cd power-wallet-backend
```

### 2. Install dependencies

If you're using **Bun**, just run:

```bash
bun install
```

Or if you're using **npm**, run the following command:

```bash
npm install
```

### 3. Configure environment variables

Copy the `.env.example` file and rename it to `.env`. Modify the variables according to your environment.

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/power-wallet
JWT_SECRET=yourSecret
NODE_ENV=development
```

### 4. Start the application

In development, use Bun (or npm) to start the server:

```bash
bun dev
```

Or with **npm**:

```bash
npm run dev
```

The server will run on port `5000` by default. You can configure this in the `.env` file.

## 📚 Project Structure

Here’s the structure of the backend project:

```plaintext
src/
├── controllers/          # Logic for handling requests
│   ├── authController.ts
│   ├── transactionController.ts
│   └── balanceController.ts
├── middleware/           # Middlewares for error handling and authentication
│   ├── authMiddleware.ts
│   └── errorMiddleware.ts
├── models/               # Mongoose models
│   ├── User.ts
│   └── Transaction.ts
├── routes/               # Route definitions
│   ├── auth.ts
│   ├── transaction.ts
│   └── balance.ts
├── validators/           # Zod validation schemas
│   ├── transactionValidator.ts
├── utils/                # Utility functions
│   └── validateWithZod.ts
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

### 3. Balance

- **GET /api/balance**  
  Get the current balance based on the user's transactions.

## 🛠️ Technologies Used

- **Express** — Minimal web framework for Node.js
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

---

_Powered by Henintsoa Heriniaina (Power)_ ⚡

---
