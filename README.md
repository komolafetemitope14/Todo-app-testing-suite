# Todo App Testing Suite

A full-stack Todo application built with React (frontend) and Node.js + Express (backend), focused on implementing automated testing using Cypress and Newman. CI automation is currently being integrated using GitHub Actions to streamline testing on push and pull requests on the UAT branch.

---

## 📁 Project Structure

## Project Structure

```
Todo-app-testing-suite
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
├── TEST_PLAN.md
│
├── todo-frontend
│   ├── cypress/                 # Cypress UI tests
│   ├── cypress.config.js        # Cypress configuration
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── components/          # Reusable UI components
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── package.json
│   └── package-lock.json
│
└── todo-backend
    ├── app/                     # Business logic / controllers
    ├── app.js                   # Express app configuration
    ├── index.js                 # Application entry point
    ├── test/                    # Postman API tests
    │   └── todo-api.postman_collection.json
    ├── package.json
    └── package-lock.json
```
## ✅ Testing Overview

### Frontend (React)
- Tested with **Cypress**
- UI flows like login and todo management are verified

### Backend (Node.js)
- Tested using **Newman**
- Uses a Postman collection to validate API endpoints

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/todo-app-testing-suite.git
cd todo-app-testing-suite
2. Start the Backend

cd todo-backend
npm install
npm start
# Runs at http://localhost:5000
3. Start the Frontend

cd ../todo-frontend
npm install
npm start
# Runs at http://localhost:3000
🧪 Running Tests
API Tests (Newman)

cd todo-backend
newman run test/todo-api.postman_collection.json
UI Tests (Cypress)


cd todo-frontend
npx cypress open       # GUI mode
# or
npx cypress run        # Headless mode
🔁 CI/CD with GitHub Actions (In Progress)
A CI pipeline is being configured to:

Run automatically on each push or pull request

Execute both frontend (Cypress) and backend (Newman) test suites

Only allow merging into main after tests pass and reviewers approve

Workflow configuration will live in:

.github/workflows/ci.yml
📄 Documentation
See TEST_PLAN.md for:

Full testing strategy

Tools used

Instructions to run tests

Known limitations

🧠 Assumptions
No real database (mock or in-memory data only)

Token-based authentication is simulated

Application is for demonstrating testing workflows

🔧 Future Plans
Add code coverage (e.g., with NYC or Jest)

Add Docker support

Include visual snapshot testing with Cypress

Finalize and deploy the full CI pipeline

👨‍💻 Author
Temitope Komolafe
GitHub: @komolafetemitope14
