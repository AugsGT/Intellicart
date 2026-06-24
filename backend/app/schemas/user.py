from pydantic import BaseModel, EmailStr, ConfigDict
#pydantic validator that checcks data format and 
class UserCreate(BaseModel):
    username:str
    email:EmailStr
    password:str

class UserRead(BaseModel):
    id:int
    username:str
    email:EmailStr

    model_config=ConfigDict(from_attributes= True)
    
    