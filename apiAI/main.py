from fastapi import FastAPI, Request, UploadFile, File, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey, text, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship
from fastapi.responses import JSONResponse
import os
from dotenv import load_dotenv
from sqlalchemy import text

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_USERNAME = os.getenv('DB_USERNAME', 'postgres')
DB_PASSWORD = os.getenv('DB_PASSWORD', 'msprb3covid')
DB_DATABASE = os.getenv('DB_DATABASE', 'postgres')
DB_HOST = os.getenv('DB_HOST', 'db.nqtehrucadgjikutlaqr.supabase.co')
DB_PORT = os.getenv('DB_PORT', 5432)

DATABASE_URL = f"postgresql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_DATABASE}"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/test-db")
def test_db_connection(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "success", "message": "Connexion à la base PostgreSQL OK"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur de connexion : {str(e)}")

