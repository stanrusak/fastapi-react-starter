from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Fullstack App API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "message": "FastAPI service is running"}

@app.get("/api/items")
async def get_items():
    # Mock data, replace with DB queries later
    return [
        {"id": 1, "name": "Item 1", "description": "Description 1"},
        {"id": 2, "name": "Item 2", "description": "Description 2"},
        {"id": 3, "name": "Item 3", "description": "Description 3"},
    ]