from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from ai import generate_email

app = FastAPI()

# CORS (important for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserInput(BaseModel):
    name: str
    company: str
    role: str
    goal: str

@app.get("/")
def home():
    return {"status": "running"}

@app.post("/generate-email")
def generate(data: UserInput):
    try:
        email = generate_email(data.dict())
        return {"email": email}
    except Exception as e:
        print(f"[ERROR] /generate-email failed: {e}")
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )