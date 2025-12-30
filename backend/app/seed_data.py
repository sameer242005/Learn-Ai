from app.database import SessionLocal, engine
from app.models import Base, User
from passlib.context import CryptContext

pwd = CryptContext(schemes=["bcrypt"], deprecated="auto")

Base.metadata.create_all(bind=engine)

db = SessionLocal()

user = User(
    name="Sameer",
    email="sameer@gmail.com",
    password=pwd.hash("123456")
)

db.add(user)
db.commit()
db.close()

print("SEEDED")
