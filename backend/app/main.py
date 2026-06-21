
from fastapi import FastAPI
from sqlalchemy import text
from app.database import engine

app=FastAPI()

@app.get("/")
def root():
    with engine.connect() as conn:
        version = conn.execute(text("SELECT version();")).scalar()

    return{
        "database":"connected",
        "postgres":version
    }
