from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import UserProgress

router = APIRouter(prefix="/progress", tags=["Progress"])

@router.get("/")
def get_progress(db: Session = Depends(get_db)):
    return db.query(UserProgress).all()
