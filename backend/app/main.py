#fastapi main file
from fastapi import FastAPI
from sqlalchemy import text
from app.database import engine
from app.api.user import router as user_router

app=FastAPI()

app.include_router(user_router)
@app.get("/")
def root():
    with engine.connect() as conn:
        version = conn.execute(text("SELECT version();")).scalar()

    return{
        "status": "Backend Running",
        "database":"connected",
        "postgres":version
    }
