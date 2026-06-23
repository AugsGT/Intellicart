from dotenv import load_dotenv
import os
#connect to the .env file
load_dotenv()
DATABASE_URL=os.getenv("DATABASE_URL")