# CMSC129 Lab 4 - Notes App

## App Description
A simple Notes Application that allows students to manage their personal notes. 
The application supports creating, reading, updating, and deleting notes (CRUD). 
It focuses on simplicity and strict Test-Driven Development (TDD).

## User Stories
1. **As a student, I want to create notes, so that I can save important information.**
2. **As a student, I want to edit notes, so that I can correct or update information later.**
3. **As a student, I want to delete notes, so that I can remove unnecessary information.**

## Tech Stack
* **Frontend:** React + Vite
* **Backend:** Express
* **Testing:** 
  * Unit: Jest
  * Integration: Jest + Supertest
  * System/E2E: Playwright

## Testing Strategy
We are following a strict Red-Green-Refactor TDD cycle. The testing approach is structured into three levels:
1. **Unit Tests (3 minimum):** Pure logic functions (e.g., `validateNoteTitle()`, `validateNoteContent()`, `generateNoteId()`). Tested with Jest.
2. **Integration Tests (2 minimum):** Testing the HTTP request-response cycle for the note API routes (e.g., `POST /notes`, `GET /notes`). Tested with Jest + Supertest.
3. **System Tests (3 minimum):** Testing the complete user stories simulating actual browser behavior. Tested with Playwright.

## Setup Outline
### Prerequisites
- Node.js installed

### Installation & Running Locally
1. Clone the repository.
2. Navigate to the client directory: `cd client`
3. Install frontend dependencies: `npm install`
4. Start the frontend: `npm run dev`
5. Navigate to the server directory: `cd ../server`
6. Install backend dependencies: `npm install`
7. Start the backend: `npm start`

### Running Tests
- **Unit Tests:** `npm run test:unit`
- **Integration Tests:** `npm run test:integration`
- **System Tests:** `npm run test:system`

## Test Results
### Unit Tests (Phase 1)

#### Commit 1
![Validation 1](server/imgs/validation1.png)
![Test Suites 1](server/imgs/testsuites1.png)

#### Commit 2
![Validation 2](server/imgs/validation2.png)
![Test Suites 2](server/imgs/testsuites2.png)

#### Commit 3
![Validation 3](server/imgs/validation3.png)
![Test Suites 3](server/imgs/testsuites3.png)
