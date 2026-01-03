from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from app.database import engine, get_db
from app import models, schemas
from app.auth import create_access_token, decode_access_token

# =====================================================
# 1️⃣ CREATE APP FIRST (THIS FIXES YOUR ERROR)
# =====================================================
app = FastAPI(title="LearnAI Backend")

# =====================================================
# 2️⃣ CREATE DATABASE TABLES
# =====================================================
models.Base.metadata.create_all(bind=engine)

# =====================================================
# 3️⃣ IMPORT ROUTERS *AFTER* app EXISTS
# =====================================================
from app.routes.roadmap import router as roadmap_router
from app.routes.progress import router as progress_router

# =====================================================
# 4️⃣ INCLUDE ROUTERS
# =====================================================
app.include_router(roadmap_router)
app.include_router(progress_router)

# =====================================================
# 5️⃣ CORS (FOR FRONTEND)
# =====================================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================================
# AUTH / SECURITY
# =====================================================
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str):
    return pwd_context.verify(plain, hashed)

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    payload = decode_access_token(credentials.credentials)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")

    email = payload.get("sub")
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")

    return user

# =====================================================
# AUTH ROUTES
# =====================================================
@app.post("/signup")
def signup(user: schemas.UserSignup, db: Session = Depends(get_db)):
    if db.query(models.User).filter(models.User.email == user.email).first():
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = models.User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
    )

    db.add(new_user)
    db.commit()
    return {"message": "Signup successful"}

@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": db_user.email})

    return {
        "access_token": token,
        "user": {
            "name": db_user.name,
            "email": db_user.email,
        }
    }

@app.get("/me")
def me(current_user: models.User = Depends(get_current_user)):
    return {
        "name": current_user.name,
        "email": current_user.email,
    }

# =====================================================
# ROOT (TEST)
# =====================================================
@app.get("/")
def root():
    return {"message": "LearnAI backend running 🚀"}
