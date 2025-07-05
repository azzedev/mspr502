from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from dotenv import load_dotenv
from pydantic import BaseModel
from typing import List
import os
import joblib

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En prod, restreindre aux domaines nécessaires
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = os.getenv('DB_URL')
if not DATABASE_URL:
    raise Exception("DB_URL manquant dans le .env")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# === Modèle Pydantic ===
class RTPredictionInput(BaseModel):
    features: List[float]

# === Chargement des modèles ===
try:
    model_rt = joblib.load('../models/xgboost_rt_model.pkl')
    print("Modèle RT chargé avec succès")
except Exception as e:
    print(f"Erreur lors du chargement du modèle RT : {e}")
    model_rt = None

try:
    model_mortality = joblib.load('../models/xgboost_mortality_model.pkl')
    print("Modèle Mortality chargé avec succès")
except Exception as e:
    print(f"Erreur lors du chargement du modèle Mortality : {e}")
    model_mortality = None

# === Routes ===

@app.get("/")
def root():
    return {"message": "API de prédiction COVID RT et Mortality est en ligne."}

@app.get("/test-db")
def test_db_connection(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "success", "message": "Connexion à la base PostgreSQL OK"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur de connexion : {str(e)}")

@app.get("/model-config")
def get_model_config():
    try:
        config = joblib.load('../models/model_configs.pkl')

        rt_features = config.get('rt_features', [])
        mortality_features = config.get('mortality_features', [])

        return {
            "status": "success",
            "rt_features_count": len(rt_features),
            "rt_features": rt_features,
            "mortality_features_count": len(mortality_features),
            "mortality_features": mortality_features,
            "config_keys": list(config.keys()) if isinstance(config, dict) else "Not a dictionary"
        }
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Fichier model_configs.pkl non trouvé")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors du chargement : {str(e)}")

@app.post("/predict/rt")
def predict_rt(input_data: RTPredictionInput):
    if model_rt is None:
        raise HTTPException(status_code=500, detail="Modèle RT non chargé")

    if len(input_data.features) != model_rt.n_features_in_:
        raise HTTPException(
            status_code=400,
            detail=f"Nombre de features incorrect. Attendu : {model_rt.n_features_in_}, reçu : {len(input_data.features)}"
        )

    try:
        prediction = model_rt.predict([input_data.features])[0]
        return {
            "model": "rt",
            "prediction": float(prediction),
            "features_used": input_data.features
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur prédiction RT : {str(e)}")

@app.post("/predict/mortality")
def predict_mortality(input_data: RTPredictionInput):
    if model_mortality is None:
        raise HTTPException(status_code=500, detail="Modèle Mortality non chargé")

    if len(input_data.features) != model_mortality.n_features_in_:
        raise HTTPException(
            status_code=400,
            detail=f"Nombre de features incorrect. Attendu : {model_mortality.n_features_in_}, reçu : {len(input_data.features)}"
        )

    try:
        prediction = model_mortality.predict([input_data.features])[0]
        return {
            "model": "mortality",
            "prediction": float(prediction),
            "features_used": input_data.features
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur prédiction Mortality : {str(e)}")
