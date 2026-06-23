#This is the crud layer for creating reading updating and deleting it performs actions on the database
from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate

def create_user(db:Session, user:UserCreate):
    pass

def get_user(db: Session, user_id:int):
    pass

def get_user_by_email (db: Session, user_email:str):
    pass

def get_all_users (db:Session):
    pass

def update_user (db:Session, id:int):
    pass
