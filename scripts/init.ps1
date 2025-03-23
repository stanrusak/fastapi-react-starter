# Install Python dependencies
Set-Location .\backend
poetry install
Set-Location ..

# Install Node dependencies
Set-Location .\frontend
npm install

# create .env.local file
Set-Content -Path .env.local -Value "VITE_BACKEND_URL=http://localhost:8000"
