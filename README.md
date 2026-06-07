# 🧪 ServeRest Automation Tests

> A group project developed as part of **Julio de Lima's mentorship program**, combining modern test automation practices with a thoughtful approach to AI-assisted testing — inspired by Michael Bolton's article [*AI and Rapid Software Testing*](https://developsense.com/blog/2025/07/ai-and-rapid-software-testing).

---

## 📖 About This Project

This repository was built by a team of **5 people** as a hands-on challenge proposed during the mentorship. The goal was to read Bolton's article on AI and Rapid Software Testing (RST) and apply its ideas to a real application — critically, not blindly.

We chose **[ServeRest](https://serverest.dev/)**, an open-source REST API simulator designed for practicing test automation. From there, we designed a **monorepo** that covers both layers of the application:

- **API layer** → automated with Java + RestAssured
- **Frontend layer** → automated with Cypress + JavaScript

The project reflects a key lesson from the RST article: *automation is a tool, not a replacement for critical thinking*. Every test suite here was built with intentionality — understanding what we were testing, why, and what risks we were addressing.

---

## 🗂️ Repository Structure

```
serverest-automation-tests/
│
├── api-tests-restassured/     # API test suite (Java + RestAssured)
│   └── README.md              # Setup, test strategy, and how to run
│
├── frontend-tests-cypress/    # Frontend test suite (Cypress + JavaScript)
│   └── README.md              # Setup, test strategy, and how to run
│
└── README.md                  # ← You are here
```

> Each sub-project has its **own dedicated README** with detailed instructions on how to set up the environment, run the tests, and understand the test strategy applied.

---

## 🎯 The Challenge

The mentorship challenge had two parts:

1. **Read the article** — [*AI and Rapid Software Testing*](https://developsense.com/blog/2025/07/ai-and-rapid-software-testing) by Michael Bolton (DevelopSense)
2. **Apply the ideas** — Use the concepts from the article to guide the test design of a real application

### Key ideas from the article that shaped our work

Bolton's article treats AI as a *magical tool* — powerful, but potentially dangerous when used without scrutiny. Some of the principles we brought into this project:

- **Test what you automate** — We didn't just write checks; we validated that our automated tests were actually catching meaningful problems.
- **Don't skip the pause** — One of the RST principles is that going too fast prevents observation. We took time to think about what each test was supposed to reveal.
- **Automate what you understand** — Following Jerry Weinberg's classic warning ("Never automate a process you don't understand"), every scenario was first explored manually before being automated.
- **Skepticism over hype** — AI was used as a support tool during development, but all outputs were reviewed, evaluated, and tested before being accepted.

---

## 🛠️ Tech Stack Overview

| Layer     | Technology              | Language   |
|-----------|-------------------------|------------|
| API Tests | RestAssured + JUnit/TestNG | Java    |
| UI Tests  | Cypress                 | JavaScript |

---

## 🚀 Getting Started

Each sub-project is independent and has its own setup guide. Navigate to the folder that interests you and follow its README:

- 📂 [`api-tests-restassured/README.md`](./api-tests-restassured/README.md) — for API automation setup and execution
- 📂 [`frontend-tests-cypress/README.md`](./frontend-tests-cypress/README.md) — for frontend automation setup and execution

---

## 👥 Team

- Luana Cavalcante 
- Rodrigo Oliveira
- Talita Marques
- Danielle Lima
- Hayala

---

## 📚 References

- [ServeRest — Open Source API for test practice](https://serverest.dev/)
- [AI and Rapid Software Testing — Michael Bolton (DevelopSense)](https://developsense.com/blog/2025/07/ai-and-rapid-software-testing)
- [Rapid Software Testing Approach](https://developsense.com/about-rapid-software-testing)

---

<div align="center">
  <sub>Built with curiosity, critical thinking, and a healthy dose of skepticism. 🔍</sub>
</div>
