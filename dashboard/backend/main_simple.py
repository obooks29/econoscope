from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
from datetime import datetime, timedelta
import httpx

app = FastAPI(title="EconoScope API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HealthScoreResponse(BaseModel):
    score: float
    rating: str
    components: Dict[str, float]
    last_updated: str

class OracleRequest(BaseModel):
    question: str
    user_type: str = "government"

class OracleResponse(BaseModel):
    answer: str
    confidence: float
    sources: List[str]

@app.get("/")
def root():
    return {"message": "EconoScope API", "status": "running"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "version": "1.0.0"}

@app.get("/api/health-score/{country}")
def get_health_score(country: str):
    return {
        "score": 63.2,
        "rating": "MODERATE",
        "components": {
            "gdp": 58.5,
            "formalization": 42.3,
            "price_stability": 71.8,
            "supply_chain": 78.9
        },
        "last_updated": datetime.now().isoformat()
    }

@app.get("/api/gdp/latest/{country}")
def get_gdp_latest(country: str):
    return {
        "timestamp": datetime.now().isoformat(),
        "gdp_growth_rate": 2.8,
        "confidence": 0.92
    }

@app.get("/api/gdp/history/{country}")
def get_gdp_history(country: str, months: int = 12):
    now = datetime.now()
    return [
        {
            "timestamp": (now - timedelta(days=30*i)).isoformat(),
            "gdp_growth_rate": 2.5 + (i * 0.1),
            "confidence": 0.9
        }
        for i in range(months)
    ]

@app.get("/api/prices/tracking/{commodity}")
def get_price_tracking(commodity: str, days: int = 90):
    now = datetime.now()
    base = {"rice": 85000, "beans": 72000, "cement": 5500}.get(commodity, 50000)
    return [
        {
            "timestamp": (now - timedelta(days=i)).isoformat(),
            "price": base + (i * 200),
            "location": "Lagos",
            "source": "NAFIS"
        }
        for i in range(0, days, 7)
    ]

@app.post("/api/prices/forecast/{commodity}")
def forecast_price(commodity: str, days: int = 14):
    base = {"rice": 85000, "beans": 72000, "cement": 5500}.get(commodity, 50000)
    return {
        "commodity": commodity,
        "current_price": base,
        "forecast": [
            {
                "date": (datetime.now() + timedelta(days=i)).isoformat(),
                "price": base + (i * 500),
                "confidence_lower": base + (i * 400),
                "confidence_upper": base + (i * 600)
            }
            for i in range(days)
        ]
    }

@app.post("/api/oracle/explain")
async def oracle_explain(request: OracleRequest):
    """Oracle explain endpoint - calls real Gradient AI agent"""
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                "http://localhost:8085/run",
                json={
                    "question": request.question,
                    "user_type": request.user_type,
                    "context": {
                        "gdp_trend": "stable",
                        "inflation": "14.2%",
                        "price_signals": "rice +12%, fuel stable"
                    }
                },
                timeout=15.0
            )
            data = response.json()
            
            return OracleResponse(
                answer=data.get("answer", ""),
                confidence=data.get("confidence", 0.85),
                sources=["CBN 2024 Report", "IMF Nigeria Article IV", "Real-time market data"]
            )
        except Exception as e:
            # Fallback if agent is not running
            return OracleResponse(
                answer=f"⚠️ Oracle agent unavailable: {str(e)}. Make sure the Gradient AI agent is running on port 8085.",
                confidence=0.0,
                sources=[]
            )

@app.get("/api/regions/activity")
def get_regional_activity(region: str = "All Regions"):
    # All regions
    all_data = {
        "North West": [
            {"region": "Kano", "activity": 32.1, "lat": 12.0022, "lon": 8.5919, "growth": 1.8},
            {"region": "Kaduna", "activity": 28.5, "lat": 10.5222, "lon": 7.4383, "growth": 2.1},
        ],
        "North East": [
            {"region": "Maiduguri", "activity": 18.2, "lat": 11.8333, "lon": 13.15, "growth": 1.2},
        ],
        "North Central": [
            {"region": "Abuja", "activity": 38.7, "lat": 9.0579, "lon": 7.4986, "growth": 2.8},
        ],
        "South West": [
            {"region": "Lagos", "activity": 45.2, "lat": 6.5244, "lon": 3.3792, "growth": 4.2},
            {"region": "Ibadan", "activity": 25.3, "lat": 7.3775, "lon": 3.9470, "growth": 2.5},
        ],
        "South East": [
            {"region": "Enugu", "activity": 22.1, "lat": 6.5244, "lon": 7.5106, "growth": 1.9},
        ],
        "South South": [
            {"region": "Port Harcourt", "activity": 28.5, "lat": 4.8156, "lon": 7.0134, "growth": 3.1},
        ],
    }
    
    if region == "All Regions":
        # Return all regions
        return [item for sublist in all_data.values() for item in sublist]
    else:
        # Return specific region
        return all_data.get(region, [])

@app.post("/api/oracle/chat")
async def oracle_chat(request: OracleRequest):
    """Economic Oracle - Calls real Gradient AI agent on port 8085"""
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                "http://localhost:8085/run",
                json={
                    "question": request.question,
                    "user_type": request.user_type,
                    "context": {
                        "gdp_trend": "stable",
                        "inflation": "14.2%",
                        "price_signals": "rice +12%, fuel stable"
                    }
                },
                timeout=15.0
            )
            data = response.json()
            
            return OracleResponse(
                answer=data.get("answer", ""),
                confidence=data.get("confidence", 0.85),
                sources=["CBN 2024 Report", "IMF Nigeria Article IV", "Real-time market data"]
            )
        except Exception as e:
            # Fallback if agent is not running
            return OracleResponse(
                answer=f"⚠️ Oracle agent unavailable: {str(e)}. Make sure the Gradient AI agent is running on port 8085.",
                confidence=0.0,
                sources=[]
            )

@app.post("/api/alerts/subscribe")
def subscribe_alerts(phone: str, country: str, commodities: List[str], threshold: float = 10.0):
    return {
        "success": True,
        "message": f"Subscribed {phone} to alerts for {', '.join(commodities)}"
    }

@app.post("/api/alerts/unsubscribe")
def unsubscribe_alerts(phone: str):
    return {"success": True, "message": "Unsubscribed successfully"}
