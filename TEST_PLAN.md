# Test Plan

## Objective
Test login and todo management in a React + Node.js app.

## Coverage
- Login (valid and invalid)
- Create, Edit, Delete Todos
- API endpoints tested with Supertest
- UI tested with Cypress

## Tools Used
- Cypress (UI testing)
- Supertest + Jest (API testing)

## How to Run
- Start backend: `npm start` in `/todo-backend`
- Start frontend: `npm start` in `/todo-frontend`
- Run API tests: `npm test` in `/todo-backend`
- Run UI tests: `npx cypress open` in `/todo-frontend`

## Assumptions
- No real database (mocked)
- Token authentication is fake

