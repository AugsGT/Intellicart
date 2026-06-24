#This is the crud layer for creating reading updating and deleting it performs actions on the database
from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate

def create_user(db:Session, user:User):
    db.add(user)
    db.commit()
    db.refresh(user)
    return(user)

def get_user(db: Session, user_id:int):
    return db.query(User).filter(User.id == user_id).first()

def get_user_by_email (db: Session, user_email:str):
    return db.query(User).filter(User.email == user_email).first()

def get_all_users (db:Session):
    return db.query(User).all()

def update_user (db:Session, id:int):
    pass