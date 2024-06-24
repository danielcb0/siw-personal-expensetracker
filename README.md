Here is a README for your project with the necessary dependencies and steps to run it:

```markdown
# SIW Personal Expense Tracker

## Project Name
**SIW Personal Expense Tracker**

## Author
**Daniel Carrera Bonilla**

## Description
SIW Personal Expense Tracker is a web application designed to help users track their personal expenses. The application allows users to create and manage categories, record transactions, and view various charts and reports about their spending habits.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have a working backend server (Spring Boot) running on `http://localhost:8080/api`.

## Installation
Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Clone the Repository
```bash
git clone https://github.com/your-username/siw-personal-expensetracker.git
cd siw-personal-expensetracker
```

### Install Dependencies
Install the necessary npm packages:
```bash
npm install
```

## Dependencies
The project uses the following main dependencies:

### React
- `react`
- `react-dom`
- `react-router-dom`

### Axios
- `axios`

### Chart.js
- `chart.js`
- `react-chartjs-2`

### Development Dependencies
- `@babel/core`
- `webpack`
- `webpack-cli`
- `webpack-dev-server`

## Running the Application
To start the development server, run:
```bash
npm start
```
This command will start the React development server on `http://localhost:3000`.

## Usage
1. **Login/Register**: Users can register a new account or log in with existing credentials.
2. **Dashboard**: After logging in, users will be directed to the dashboard where they can view their categories and total expenses.
3. **Manage Categories**: Users can add, edit, or delete categories.
4. **Transactions**: Within each category, users can add, edit, and delete transactions. They can also view charts representing their spending data.
5. **Budget Management**: Users can view and manage their budget, seeing the total available funds and adding more if necessary.

## Project Structure
```plaintext
src/
├── components/
│   ├── Dashboard.js
│   ├── Login.js
│   ├── Register.js
│   ├── CategoryTransactions.js
│   ├── Budget.js
│   ├── Header.js
│   ├── PrivateRoute.js
│   ├── TransactionList.js
│   ├── CategoryChart.js
│   └── TrendsChart.js
├── services/
│   ├── authService.js
│   ├── categoryService.js
│   ├── transactionService.js
│   └── budgetService.js
├── App.js
├── index.js
└── styles.css
```

## API Endpoints
Ensure your backend API is running and accessible at `http://localhost:8080/api`. The frontend makes requests to the following endpoints:

- **User Authentication**
  - POST `/api/users/login`
  - POST `/api/users/register`
- **Categories**
  - GET `/api/categories`
  - POST `/api/categories`
  - PUT `/api/categories/:categoryId`
  - DELETE `/api/categories/:categoryId`
- **Transactions**
  - GET `/api/categories/:categoryId/transactions`
  - POST `/api/categories/:categoryId/transactions`
  - PUT `/api/categories/:categoryId/transactions/:transactionId`
  - DELETE `/api/categories/:categoryId/transactions/:transactionId`
- **Budget**
  - GET `/api/budget/:userId`
  - POST `/api/budget/update/:userId`
