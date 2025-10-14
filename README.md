# Smart Money Blog (DevOps Practice)

Full-stack blog app (React + Express + MongoDB) designed for DevOps practice: CI/CD, Docker, deployment, monitoring.

## Quickstart (local, without Docker)

1. Clone repo
2. Start backend:
   ```bash
   cd smart-money-blog/backend
   npm install
   # copy .env.example to .env and set MONGO_URI if you have MongoDB; otherwise it falls back to in-memory demo
   npm run dev
   ```
3. Start frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
4. Open http://localhost:5173 (frontend Vite default) — or as shown by the dev server.

## With Docker (simple)

```bash
# build & run
docker-compose up --build
# frontend => http://localhost:3000
# backend => http://localhost:5000 (API at /api/posts)
```

## Features
- List posts, view post page
- Create posts via API (POST /api/posts)
- Starter Tailwind + Vite frontend
- Dockerfile + docker-compose
- Ready to add GitHub Actions for CI/CD

## Next steps for DevOps practice
- Add GitHub Actions workflows for lint/test/build/publish
- Add environment-based Docker builds
- Configure remote MongoDB (Atlas) or use managed DB
- Add monitoring (Prometheus + Grafana) or simple healthcheck endpoints

Enjoy — tell me which CI/CD provider or cloud you want to deploy to and I’ll generate the pipeline.
