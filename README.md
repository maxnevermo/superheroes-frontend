# 🦹🦸‍♂️ Superheroes Gallery — Frontend

A small gallery application to browse, view, and manage superheroes.

---

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **React Router** for client-side routing
- **Axios** for HTTP requests
- **shadcn/ui** for UI components (built on Radix + Tailwind)
- **ESLint** (TypeScript-aware configs) + **Prettier**

---

## Features

- **Home Page:** paginated list of superheroes *(5 per page)*
- **Details Page:** hero profile with image and key information
- **CRUD:** create, read, update, and delete heroes

---

## Getting Started

### 1) Install dependencies
```
npm i
```

### 2) Configure environment

Create a .env file in the project root and set the API base URL:
```
VITE_API_URL="https://your-backend.example.com"
```

### 3) Start the dev server
```
npm run dev
```

Open the app in your browser at the URL printed by the Vite dev server.
