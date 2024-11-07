import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://_admin:English272!@localhost:3306/dashboard_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False