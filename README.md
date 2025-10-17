# 🚀 Bun + Hono + Vite + React Boilerplate

![Bun](https://img.shields.io/badge/Runtime-Bun-ffcc33?logo=bun&logoColor=000)
![Hono](https://img.shields.io/badge/Backend-Hono-orange?logo=hono&logoColor=white)
![Vite](https://img.shields.io/badge/Frontend-Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/UI-React-61DAFB?logo=react&logoColor=white)
![Electron](https://img.shields.io/badge/Desktop-Electron-47848F?logo=electron&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?logo=open-source-initiative)

A simple **full-stack starter** built with **Bun**, **Hono**, and **Vite + React** — including an **Electron** desktop app and Docker support.

---

## 🧱 Tech Stack

| Layer                | Technology                                                                                                  | Description                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Runtime**          | [Bun](https://bun.sh)                                                                                       | Fast JS runtime, package manager, bundler |
| **Backend**          | [Hono](https://hono.dev)                                                                                    | Lightweight web framework                 |
| **Frontend**         | [Vite + React](https://vitejs.dev)                                                                          | Modern web UI with hot reload             |
| **Desktop**          | [Electron](https://www.electronjs.org)                                                                      | Cross-platform desktop wrapper            |
| **Validation**       | [Zod](https://zod.dev)                                                                                      | Type-safe validation                      |
| **OpenAPI / Docs**   | [hono-openapi](https://hono.dev/examples/hono-openapi) & [Swagger UI](https://swagger.io/tools/swagger-ui/) | API spec + interactive docs               |
| **Containerization** | [Docker](https://www.docker.com)                                                                            | Containerized local dev environment       |

---

## 🌐 Milestones

| Platform       | Status | Framework           | Notes                           |
| -------------- | ------ | ------------------- | ------------------------------- |
| 🖥 **Server**   | ✅     | Hono + Bun          | REST API with OpenAPI + Swagger |
| 💻 **Web**     | ✅     | Vite + React        | Web client connected to backend |
| 🪟 **Desktop** | ✅     | Electron            | Cross-platform desktop app      |
| 📱 **Mobile**  | 🚧     | React Native (Expo) | Next milestone (mobile app)     |

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone <your_repo_url>
cd <your_git_clone_folder>
code .
```

### 2. Create a branch

```bash
git checkout -b your_branch_name
```

### 3. Install Dependencies

```bash
bun install
cd frontend && bun install
```

### 4. Environment variables

Copy .env.example and rename a .env.development file in the each project root:

```bash
cp .env.example .env.development && cp frontend/.env.example frontend/.env.development
```

### 5. Run in development

Backend

```bash
bun run dev
```

Frontend

```bash
bun run frontend:dev
```

Electron

```bash
bun run eletron
```

### 6. Build for production

Backend

```bash
bun run prd
```

Frontend

```bash
bun run build:frontend:prod
```

Electron

```bash
bun run pack:win
```

---

## 🐳 Docker

### Build & start

```bash
docker-compose up -d --build
```

### Stop & remove

```bash
docker-compose down
```

---

## 🏁 License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute it.
