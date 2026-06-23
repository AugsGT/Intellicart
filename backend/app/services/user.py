from sqlalchemy.orm import Session

from app.models.user import User
from app.crud.user import create_user, get_user_by_email
from app.schemas.user import UserCreate


def register_user(db: Session, user: UserCreate):
    existing = get_user_by_email(db, user.email)

    if existing:
        raise ValueError("Email already exists")

    # TODO: Replace with proper password hashing
    hashed_password = user.password

    db_user = User(
        username=user.username,
        email=user.email,
        password_hash=hashed_password,
    )

    return create_user(db, db_user)