# Repository Guide

## Prerequisites
- Git, Node 20+, npm

## First‑time Setup
```bash
npm install
```

## Running Locally
```bash
npm run dev
```

## Building
```bash
npm run build
npm run preview
```

## GitHub
```bash
git init
git add .
git commit -m "<message>"
git branch -M main
git remote add origin https://github.com/alexkachur98/resumatch.git
git push -u origin main
```

## Branch Strategy
- Use short‑lived feature branches and PRs to `main`.
- Keep PRs small and focused.
- Let CI pass before merging.