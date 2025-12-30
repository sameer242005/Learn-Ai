
from fastapi import APIRouter, Depends, Body
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import UserProgress
from app.schemas import ProgressCreate

router = APIRouter(prefix="/progress", tags=["Progress"])

@router.post("/")
def mark_progress(
    step_id: int = Body(...),
    status: str = Body("completed"),
    db: Session = Depends(get_db)
):
    progress = UserProgress(user_id=1, step_id=step_id, status=status)
    db.add(progress)
    db.commit()
    return {"message": "Progress recorded", "step_id": step_id, "status": status}