from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import DeclarativeBase

from app.config import DATABASE_URL
#sql alchemy engine automatically connects to db
engine= create_engine(DATABASE_URL)
#session factory
SessionLocal = sessionmaker(
    autoflush=False,
    autocommit=False,
    bind=engine
)
#to open a session 
#use db =SessionLocal()
class Base(DeclarativeBase):
    pass