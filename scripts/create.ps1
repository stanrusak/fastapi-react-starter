# Create backend structure
New-Item -ItemType Directory -Path backend\app\api, backend\app\models, backend\app\services -Force

# Create frontend directory
New-Item -ItemType Directory -Path frontend -Force

# Set up python project
Set-Location backend
poetry init --name backend --description "CohortBuilder FastAPI Backend" --author "Stanislav Rusak"
poetry add fastapi uvicorn sqlalchemy pydantic python-dotenv
New-Item -ItemType File -Path app\__init__.py
New-Item -ItemType File -Path app\main.py
New-Item -ItemType File -Path app\api\__init__.py
Set-Location ..

# Use npm to create a new Vite project with React and TypeScript
npm create vite@latest frontend -- --template react-ts
Set-Location frontend
npm install