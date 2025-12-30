from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Roadmap

router = APIRouter(prefix="/roadmaps", tags=["Roadmaps"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/{skill}")
def get_roadmap(skill: str, db: Session = Depends(get_db)):
    return db.query(Roadmap).filter(Roadmap.skill == skill).all()
