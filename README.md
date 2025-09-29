# ResuMatch · Full‑Stack Web App

[![CI](https://github.com/alexkachur98/resumatch/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/alexkachur98/resumatch/actions/workflows/ci.yml)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Node](https://img.shields.io/badge/node-%E2%89%A520.0-brightgreen)

ResuMatch is an AI‑assisted platform that helps candidates **match** their resumes to job descriptions, **analyze gaps**, and **improve** their applications.  
This repository hosts the **full application**. We’re starting with the frontend (React + Vite) and will add the backend next.

> 📄 Product documentation lives in **/docs** (SRS + diagrams). See:  
> • **SRS**: [`docs/SRS/ResuMatch-PartA-SRS.pdf`](docs/SRS/ResuMatch-PartA-SRS.pdf)  
> • **Diagrams**: [`docs/diagrams/`](docs/diagrams/)

---

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Quality & CI](#quality--ci)
- [Security](#security)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Features
- Upload resume + job description; view **analysis summary** and suggestions
- Basic routing and pages (Login, Register, Dashboard, Analysis, Results, Plans, Billing, Jobs, Notifications, Profile)
- Clean, **folder‑per‑page** structure; easy to extend
- Ready for **API integration** via `VITE_API_URL`

## Styling conventions
- Global styles live in `src/styles/base.css`.
- Page styles use **CSS Modules**: `PageName.module.css`.
- Import modules with: `import styles from "./Home.module.css"`.
- Prefer semantic class names: `.page`, `.header`, `.title`, `.form`, `.field`, `.actions`.

## Architecture
**Current:** SPA frontend.  
**Planned:** Back end (`server/`) powered by Node.js/Express with a document database (MongoDB), plus an analysis service (LLM‑powered).

```txt
docs/                 ← product docs (SRS, diagrams)
src/                  ← frontend (React + Vite)
server/               ← (planned) backend API, services, DB models
```

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the evolving design.

## Tech Stack
- **Frontend:** React 18, Vite, React Router
- **Backend (planned):** Node.js (20+), Express, MongoDB
- **CI:** GitHub Actions
- **License:** Apache‑2.0

## Project Structure
```txt
resumatch/
  README.md
  package.json
  public/
    vite.svg
  src/
    App.jsx
    main.jsx
    components/
      ProtectedRoute/ProtectedRoute.jsx
      SiteLayout/SiteLayout.jsx
    pages/
      AnalyzeResult/
        AnalyzeResult.jsx
        AnalyzeResult.module.css
      Billing/
        Billing.jsx
        Billing.module.css
      Dashboard/
        Dashboard.jsx
        Dashboard.module.css
      Home/
        Home.jsx
        Home.module.css
      JobPostings/
        JobPostings.jsx
        JobPostings.module.css
      Login/
        Login.jsx
        Login.module.css
      NotFound/
        NotFound.jsx
        NotFound.module.css
      Notifications/
        Notifications.jsx
        Notifications.module.css
      Profile/
        Profile.jsx
        Profile.module.css
      Register/
        Register.jsx
        Register.module.css
      ResumeAnalyze/
        ResumeAnalyze.jsx
        ResumeAnalyze.module.css
      Subscriptions/
        Subscriptions.jsx
        Subscriptions.module.css
  docs/
    ResuMatch-Part A-SRS.pdf
    diagrams/
      *.png
      *.puml
  dist/                         ← build output (after `npm run build`)
  node_modules/                 ← installed dependencies
```

## Getting Started
**Requirements:** Node **20+**, npm.

```bash
# install deps
npm install

# run dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

## Environment Variables
Create a `.env` file in the repo root (do **not** commit real secrets). Use `.env.example` as a template.

```bash
# Frontend
VITE_API_URL=http://localhost:3000
```

## Scripts
- `dev` – start Vite dev server
- `build` – production build to `dist/`
- `preview` – serve the production build locally
- `lint` – run ESLint (if configured)

## Quality & CI
- **CI**: GitHub Actions runs install → lint (if present) → build on PRs and pushes to `main`.
- **Commit style**: Conventional Commits (e.g., `feat:`, `fix:`, `docs:`).
- **Branching**: short‑lived feature branches merged via PR to `main`.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`GIT-QUICKSTART.md`](GIT-QUICKSTART.md).

## Security
Please do **not** file public issues for security problems. Email **AlexKachur98@gmail.com**.  
See [`SECURITY.md`](SECURITY.md).

## Roadmap
- Finish front end 
- Backend API (Express + MongoDB)
- AuthN/AuthZ
- Resume parser, JD parser, scoring heuristics
- LLM‑powered suggestions, prompt tuning
- Subscriptions & billing integration

See [`docs/ROADMAP.md`](docs/ROADMAP.md).

## Contributing
We welcome contributions! Please read:
- [`CONTRIBUTING.md`](CONTRIBUTING.md)
- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

## License
Licensed under the **Apache License 2.0**.  
See [`LICENSE`](LICENSE) and [`NOTICE`](NOTICE).
