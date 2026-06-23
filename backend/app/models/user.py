from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base
#by using base we are telling sqlalchemy that user is an orm model
class User(Base):
    __tablename__="users"
#create columns like id with type integer and properties primary key and be indexed
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    username:Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    email:Mapped[str] = mapped_column(String(50), unique=True, nullable = False)
    password_hash:Mapped[str] = mapped_column(String(255), unique=True, nullable =False)


