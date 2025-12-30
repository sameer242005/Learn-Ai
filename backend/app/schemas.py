from pydantic import BaseModel

class UserSignup(BaseModel):
    name: str
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class RoadmapResponse(BaseModel):
    title: str
    description: str

    class Config:
        from_attributes = True
