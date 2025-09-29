# Architecture Overview

ResuMatch is evolving into a full‑stack application.

## Current (Frontend)
- React + Vite SPA (client‑side routing)
- Pages for auth, dashboard, resume analysis, results, plans, billing, jobs, notifications, profile

## Planned (Backend)
- Node.js (20+) + Express
- MongoDB (document store)
- Modular services for resume parsing, JD parsing, and scoring
- Queue/worker (optional) for long‑running analysis
- Environment‑specific configuration; 12‑factor principles

## Data Flow (planned)
1. Client uploads resume & job posting (text/file)
2. API stores artifacts in object store (TBD) and metadata in DB
3. Analysis service computes match score + suggestions (LLM + heuristics)
4. Client polls/streams results; user can export or iterate

See [`docs/diagrams/`](./diagrams/) for system diagrams.