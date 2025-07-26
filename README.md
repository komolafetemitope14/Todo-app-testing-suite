# 🧪 Todo-app-testing-suite

A full-stack Todo application built with **React (frontend)** and **Node.js + Express (backend)** that showcases robust **automated testing** practices using **Cypress** (UI) and **Supertest + Jest** (API).

---

## 📦 Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Frontend  | React, Axios, Cypress |
| Backend   | Node.js, Express, Jest, Supertest |
| CI/CD     | GitHub Actions     |

---

## 🚀 Features

- ✅ User login with mocked authentication
- ✅ CRUD operations on Todos
- ✅ Functional UI testing (Cypress)
- ✅ REST API test automation (Supertest + Jest)
- ✅ CI/CD integration with GitHub Actions
- ✅ Test plan and documentation included

---

## 🗂️ Project Structure

todo-app-testing-suite/
├── todo-backend/ # Node.js API
│ ├── index.js
│ ├── routes/
│ ├── controllers/
│ ├── tests/ # API tests (Supertest + Jest)
│ └── package.json
├── todo-frontend/ # React App
│ ├── src/
│ ├── cypress/ # Cypress tests
│ └── package.json
├── .github/
│ └── workflows/
│ └── ci.yml # GitHub Actions CI pipeline
├── TEST_PLAN.md # Test strategy document
└── README.md # This file

yaml
Copy
Edit

---

## ⚙️ Setup Instructions (⏱️ ~2 minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app-testing-suite.git
cd todo-app-testing-suite
2. Start the Backend (Node.js API)
bash
Copy
Edit
cd todo-backend
npm install
npm start
Backend runs at: http://localhost:5000

3. Start the Frontend (React App)
bash
Copy
Edit
cd ../todo-frontend
npm install
npm start
Frontend runs at: http://localhost:3000

✅ Running Tests
🧪 API Tests (Supertest + Jest)
bash
Copy
Edit
cd todo-backend
npm test
🌐 UI Tests (Cypress)
bash
Copy
Edit
cd todo-frontend
npx cypress open    # Interactive GUI
# or
npx cypress run     # Headless mode
🔁 CI/CD Pipeline (GitHub Actions)
This project includes a preconfigured GitHub Actions workflow:

Automatically installs dependencies

Runs backend API tests

Builds frontend

Runs Cypress UI tests

File: .github/workflows/ci.yml

CI runs on every push or pull request to the main branch.

📄 Documentation
See TEST_PLAN.md for:

What is being tested

Test coverage details

Tools chosen and reasons

How to run the tests

Assumptions and limitations

🧠 Assumptions
No real database: Data is in-memory (mocked for demo purposes)

Authentication is token-based and hardcoded for simplicity

Focus is on test design and automation integration, not feature richness

📌 Future Improvements
🔐 Use real authentication (JWT + DB)

🧪 Add code coverage reporting with nyc or jest --coverage

📦 Containerize with Docker + Docker Compose

📷 Add visual regression tests with Cypress snapshots

👨‍💻 Author
Your Name – @komolafetemitope14
