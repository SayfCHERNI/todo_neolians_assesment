# ✅ Cypress Gherkin Tests – TodoMVC App

This project automates **functional tests** for the [TodoMVC React App](https://todomvc.com/examples/react/dist/) using **Cypress** + **Cucumber (Gherkin syntax)**.

---



## 📌 Step 1 – Tested Functionalities

The following features were tested:

- Add new tasks
- Mark tasks as completed
- Filter tasks (`All`, `Active`, `Completed`)
- Clear completed tasks

---

## 📌 Step 2 – Positive Scenarios

- Add a new todo
- Mark items completed and check counter
- Edit an existing todo
- Delete a todo

📂 File: `cypress/e2e/features/positive.feature`

---

## 📌 Step 3 – Negative Scenarios

- Do not accept duplicate todos
- Do not allow overly long todos
- Editing a todo to empty does not overwrite it
- Do not delete a todo without user action

📂 File: `cypress/e2e/features/negative.feature`

---

## 🚀 Install Dependencies

Clone the repository and install dependencies:

```bash
git clone https://github.com/SayfCHERNI/Sayf-ASSETMENT.git

npm install

-----

-----▶️ Run Cypress with UI

To open Cypress Test Runner:

npm run test

--------📂 Project Structure

cypress/
 ├── e2e/
 │   ├── features/
 │   │   ├── positive.feature
 │   │   ├── negative.feature
 │   ├── step_definitions/
 │   │   ├── positive.js
 │   │   ├── negative.js
 ├── pages/
 │   └── TodoPage.js
 ├── support/
 │   ├── commands.js
 │   └── e2e.js
cypress.config.js
package.json
README.md

-----------------
🛠️ Tech Stack

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/) – End-to-End testing framework  
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) – Gherkin support  
- [TodoMVC](https://todomvc.com/) – Sample web application for testing  


----👨‍💻 Author

Created for QA Interview Preparation by Seyf CHERNI