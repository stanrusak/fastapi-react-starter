# Fullstack App Starter Kit

This is a starter kit for a fullstack web application with FastAPI on the backend and React with TypeScript on the frontend.

## Features

### Backend (FastAPI)

- **FastAPI** - High-performance API framework
- **Poetry** - Dependency management
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation and serialization
- **SQLAlchemy** - ORM for database interaction

### Frontend (React + Vite)

- **React with TypeScript** - Type-safe UI development
- **Tailwind CSS** - Utility-first styling
- **ShadCN** - UI components for a modern look
- **Vite** - Fast build tool
- **Nginx** - Frontend server

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Python (>=3.11)
- Node.js (>=18.x)

### Backend Setup

```sh
cd backend
poetry install
poetry run uvicorn app.main:app --reload
```

### Frontend Setup

```sh
cd frontend
npm install
npm run dev
```

If you are using VSCode, tasks are already configured in the `.vscode/tasks.json` file to run the backend, frontend, or both. You can also run themy using the following commands: Ctrl+Shift+P > Tasks: Run Task > Start Backend | Start Frontend | Start App.

## Project Structure

```
fullstack-app/
│── backend/     # FastAPI backend
│── frontend/    # React + Vite frontend
│── README.md
```

## License

This project is licensed under the MIT License.
