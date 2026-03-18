# 🌍 EconoScope

> Real-time Economic Intelligence for Nigeria's Invisible Economy

**DigitalOcean Gradient™ AI Hackathon 2026**

[![Demo Video](https://img.shields.io/badge/Demo-Video-red)](https://youtu.be/ZK7MW3dY_6k)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Deployed-success)](https://github.com/obooks29/econoscope)

---

## 🎯 The Problem

2 billion people work in Africa's informal economy. Their governments can't see them. Official GDP data arrives **6 months late**. Economic reports measure only **40% of real activity**. When rice prices spike 30% overnight, policymakers learn about it from Twitter, not data systems.

**Nigeria's informal economy:** ₦61.7 trillion ($38B USD) - completely unmeasured.

---

## 💡 Our Solution

🚀 **DEPLOYED TO PRODUCTION** - EconoScope makes the invisible visible using:

- 🤖 **AI Agent** (DigitalOcean Gradient ADK) - LIVE on production
- 💱 **Exchange Rate API** - Real USD/NGN rates (₦1,364.24 right now)
- 🌤️ **Weather API** - Lagos weather affecting crops (28°C, Cloudy today)
- 📰 **News API** - Nigeria economic headlines

**Coming Soon:**
- 🛰️ Satellite data (NASA VIIRS nightlights)
- 🚢 Shipping activity (MarineTraffic port data)
- 💰 Market prices (NAFIS Nigeria)

---

## 🏆 Built With DigitalOcean Gradient™ AI

- ✅ **Gradient AI Agent Development Kit (ADK)** - Economic Oracle with dual personas
- ✅ **Gradient AI Agentic Cloud** - Production deployment (LIVE)
- 📋 Droplets (planned) - PostgreSQL + TimescaleDB
- 📋 Spaces (planned) - Data storage
- 📋 App Platform (planned) - Dashboard hosting

---

## 🤖 The Economic Oracle

Our Gradient AI agent has **two distinct personas** and is **deployed to production**:

**Government Mode:** Formal policy analysis
```
CURRENT INDICATORS (LIVE):
- Exchange Rate: ₦1,364.24/USD
- Weather: 28°C, Cloudy in Lagos
- Inflation: 14.2%

POLICY RECOMMENDATIONS:
1. Expedite port clearance procedures
2. Monitor exchange rate impact on imports
3. Weather-based crop insurance programs

CONFIDENCE: 87%
SOURCES: ExchangeRate-API, Open-Meteo, NewsAPI, CBN 2024
```

**Farmer Mode:** Simple, actionable advice
```
📊 Current Situation (LIVE):
• Dollar rate: ₦1,364.24/$ today
• Weather in Lagos: 28°C, Cloudy
• Rice prices: Up 12% this week

💡 What You Should Do:
1. Dollar is at ₦1,364, imported rice will be expensive
2. Weather is cloudy, watch for crop delays
3. Stock up on supplies if you can
```

---

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- NewsAPI key (free at https://newsapi.org)

### 1. Clone Repository
```bash
git clone https://github.com/obooks29/econoscope.git
cd econoscope
```

### 2. Set Up Agent
```bash
cd agent
python -m venv venv-agent
source venv-agent/bin/activate  # Windows: .\venv-agent\Scripts\Activate.ps1
pip install -r requirements.txt

# Add NewsAPI key to .env file
# Create .env with: NEWSAPI_KEY=your_key_here

# Initialize Gradient agent
gradient agent init

# Run agent locally
gradient agent run --port 8085
```

### 3. Set Up Backend
```bash
cd ../dashboard/backend
pip install -r requirements.txt
python -m uvicorn main_simple:app --reload --host 127.0.0.1 --port 8000
```

### 4. Set Up Frontend
```bash
cd ../../dashboard-v2
npm install
npm run dev
```

### 5. Test the Agent
```bash
# Test local agent
curl http://localhost:8085/run -X POST \
  -H "Content-Type: application/json" \
  -d '{"question":"Should I buy rice?","user_type":"farmer"}'

# Test production agent (requires auth token)
curl -X POST https://agents.do-ai.run/v1/.../econoscope-oracle/run \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"question":"Should I buy rice?","user_type":"farmer"}'
```

Open http://localhost:3000 in your browser.

---

## 📁 Project Structure

```
econoscope/
├── agent/                      # Gradient AI Agent (ADK)
│   ├── main.py                # Agent with dual personas + 3 live data sources
│   ├── gradient.yaml          # Agent configuration
│   └── requirements.txt
├── dashboard/
│   └── backend/               # FastAPI backend
│       ├── main_simple.py     # Calls Gradient agent
│       └── requirements.txt
├── dashboard-v2/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatOracle.tsx
│   │   └── services/
│   │       └── api.ts         # API client
│   └── package.json
└── README.md
```

---

## 🎬 Demo Video

▶️ [Watch the 2.5-minute demo](https://youtu.be/ZK7MW3dY_6k)

Shows:
- Production agent deployment
- Live data integration (exchange rates, weather, news)
- Dual persona responses
- Code walkthrough

---

## 🎯 Impact

**For 2 Billion People:**
- Real-time price warnings
- Weather-based farming advice
- SMS on basic phones (no smartphone needed)

**For Governments:**
- See the invisible 65% of economy
- Predict price shocks 7-14 days early
- Data-driven policy with confidence scores

---

## 🏅 Hackathon Prizes Targeted

- **Best AI Agent Persona** ($2,000) - Dual persona Economic Oracle working in production
- **Best Program for the People** ($2,000) - SMS alerts on Nokia phones for 2B unbanked people
- **The Great Whale** ($2,000) - Comprehensive platform utilization

---

## 🛠️ Technology Stack

**AI & ML:**
- DigitalOcean Gradient AI ADK
- Python 3.14

**Backend:**
- FastAPI (async)
- httpx (for live API calls)
- PostgreSQL + TimescaleDB (planned)

**Frontend:**
- React 18
- Vite
- TailwindCSS
- TypeScript

**Live Data Sources (Working Now):**
- ExchangeRate-API (USD/NGN rates)
- Open-Meteo API (Lagos weather)
- NewsAPI (Nigeria headlines)

**Planned Data Sources:**
- NASA VIIRS (satellite nightlights)
- MarineTraffic (port activity)
- NAFIS Nigeria (commodity prices)

---

## 🚧 Known Issues

- Frontend caching causing stale Oracle responses (backend + agent work perfectly via curl)
- Some dashboard buttons are concept demos (Generate Insights, Export Report)

---

## 🔮 Roadmap

**Phase 1:** ✅ MVP Complete
- [x] Gradient AI agent with dual personas
- [x] 3 live data sources (Exchange Rate, Weather, News)
- [x] Production deployment on DigitalOcean

**Phase 2:** Post-Hackathon
- [ ] NASA VIIRS satellite data integration
- [ ] MarineTraffic API for port activity
- [ ] Africa's Talking SMS integration
- [ ] Deploy backend/frontend to App Platform
- [ ] Set up Spaces for data storage
- [ ] Add Managed Database (PostgreSQL + TimescaleDB)

**Phase 3:** Scale
- [ ] Expand to Kenya, Ghana (West Africa)
- [ ] Partner with Nigerian government (NAFIS, NBS, CBN)
- [ ] Free tier for NGOs and academic research
- [ ] Mobile app for smartphone users

---

## 📝 License

MIT License - Free for NGOs, governments, and academic use

See [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Bukola Jimoh**

- GitHub: [@obooks29](https://github.com/obooks29)
- Devpost: [@bukolaayodelejimoh](https://devpost.com/bukolaayodelejimoh)
- Email: bukolaayodelejimoh@gmail.com

---

## 🙏 Acknowledgments

- DigitalOcean Gradient™ AI Team
- Major League Hacking (MLH)
- Nigerian economic data providers (CBN, NAFIS, NBS)

---

<p align="center">
  <strong>Built for DigitalOcean Gradient™ AI Hackathon 2026</strong><br/>
  <em>Making the invisible visible - one API call at a time</em> 🚀
</p>
