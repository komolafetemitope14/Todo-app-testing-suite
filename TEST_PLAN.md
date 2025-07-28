# TEST_PLAN.md

## Objective
Test login and todo management functionality in a full-stack React + Node.js app.

## Coverage
- Login (valid and invalid credentials)
- Create, Edit, Delete Todos
- API endpoints tested with **Postman + Newman**
- UI tested with **Cypress**

## Tools Used
- Cypress (UI testing)
- Postman + Newman (API testing)

## How to Run

### Backend Setup

# Navigate to backend folder
cd /todo-backend

# Install backend dependencies
npm install

# Start backend server
npm start
Frontend Setup

# Navigate to frontend folder
cd /todo-frontend

# Install frontend dependencies
npm install

# Start frontend development server
npm start
Run API Tests (Newman)

# Ensure backend is running

# Run the Postman collection using Newman
newman run postman_collection.json

# Replace `postman_collection.json` with the actual filename
Run UI Tests (Cypress)

# Ensure frontend is running

# Open Cypress test runner in GUI mode
npx cypress open

# OR run tests in headless mode
npx cypress run
Assumptions
No real database; data is mocked or stored in-memory

Token authentication is simulated for testing purposes

No external APIs are required for tests


