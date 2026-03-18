# \# 🌍 EconoScope

# 

# > Real-time Economic Intelligence for Nigeria's Invisible Economy

# 

# \*\*DigitalOcean Gradient™ AI Hackathon 2026\*\*

# 

# \[!\[Demo Video](https://img.shields.io/badge/Demo-Video-red)]((https://youtu.be/ZK7MW3dY_6k))

# \[!\[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

# 

# \## 🎯 The Problem

# 

# 2 billion people work in Africa's informal economy. Their governments can't see them. Official GDP data arrives \*\*6 months late\*\*. Economic reports measure only \*\*40% of real activity\*\*. When rice prices spike 30% overnight, policymakers learn about it from Twitter, not data systems.

# 

# \## 💡 Our Solution

# 

# EconoScope makes the invisible visible using:

# \- 🛰️ \*\*Satellite data\*\* (NASA VIIRS nightlights)

# \- 🚢 \*\*Shipping activity\*\* (MarineTraffic port data)

# \- 💰 \*\*Market prices\*\* (NAFIS Nigeria + informal markets)

# \- 🤖 \*\*AI Agent\*\* (DigitalOcean Gradient ADK)

# 

# \## 🏆 Built With DigitalOcean Gradient™ AI

# 

# \- \*\*Gradient AI Agent Development Kit (ADK)\*\* - Economic Oracle with dual personas

# \- \*\*Gradient AI Agentic Cloud\*\* - Agent hosting infrastructure

# \- Droplets (planned) - PostgreSQL database

# \- Spaces (planned) - Data lake storage

# \- App Platform (planned) - Dashboard deployment

# 

# \## 🤖 The Economic Oracle

# 

# Our Gradient AI agent has \*\*two distinct personas\*\*:

# 

# \*\*Government Mode:\*\* Formal policy analysis

# ```

# CURRENT INDICATORS:

# \- GDP Trend: Stable

# \- Inflation Rate: 14.2%

# 

# POLICY RECOMMENDATIONS:

# 1\. Expedite port clearance procedures

# 2\. Release strategic rice reserves

# ...

# ```

# 

# \*\*Farmer Mode:\*\* Simple, actionable advice

# ```

# 📊 Current Situation:

# \- Rice prices: Up 12% this week

# 

# 💡 What You Should Do:

# 1\. Buy rice this week before prices rise

# 2\. Stock up on supplies if you can

# ...

# ```

# 

# \## 🚀 Quick Start

# 

# \### Prerequisites

# \- Python 3.11+

# \- Node.js 18+

# \- DigitalOcean account (for deployment)

# 

# \### 1. Clone Repository

# ```bash

# git clone https://github.com/YOUR\_USERNAME/econoscope.git

# cd econoscope

# ```

# 

# \### 2. Set Up Agent

# ```bash

# cd agent

# python -m venv venv-agent

# source venv-agent/bin/activate  # Windows: .\\venv-agent\\Scripts\\Activate.ps1

# pip install -r requirements.txt

# 

# \# Initialize Gradient agent

# gradient agent init

# 

# \# Run agent

# gradient agent run --port 8085

# ```

# 

# \### 3. Set Up Backend

# ```bash

# cd ../dashboard/backend

# pip install -r requirements.txt

# python -m uvicorn main\_simple:app --reload --host 127.0.0.1 --port 8000

# ```

# 

# \### 4. Set Up Frontend

# ```bash

# cd ../../dashboard-v2

# npm install

# npm run dev

# ```

# 

# \### 5. Test the Agent

# ```bash

# \# Test directly

# curl http://localhost:8085/run -X POST \\

# &#x20; -H "Content-Type: application/json" \\

# &#x20; -d '{"question":"Should I buy rice?","user\_type":"farmer"}'

# 

# \# Test via backend

# curl http://localhost:8000/api/oracle/chat -X POST \\

# &#x20; -H "Content-Type: application/json" \\

# &#x20; -d '{"question":"Should I buy rice?","user\_type":"farmer"}'

# ```

# 

# Open http://localhost:3000 in your browser.

# 

# \## 📁 Project Structure

# ```

# econoscope/

# ├── agent/                  # Gradient AI Agent (ADK)

# │   ├── main.py            # Agent with dual personas

# │   ├── gradient.yaml      # Agent configuration

# │   └── requirements.txt

# ├── dashboard/

# │   └── backend/           # FastAPI backend

# │       ├── main\_simple.py # Calls Gradient agent

# │       └── requirements.txt

# ├── dashboard-v2/          # React frontend

# │   ├── src/

# │   │   ├── components/

# │   │   │   └── ChatOracle.tsx

# │   │   └── services/

# │   │       └── api.ts     # API client

# │   └── package.json

# └── README.md

# ```

# 

# \## 🎬 Demo Video

# 

# \[Watch the 3-minute demo](YOUR\_YOUTUBE\_LINK\_HERE)

# 

# \## 🏅 Hackathon Prizes Targeted

# 

# \- \*\*Best AI Agent Persona\*\* ($2,000) - Dual persona Economic Oracle

# \- \*\*Best Program for the People\*\* ($2,000) - SMS alerts on Nokia phones

# \- \*\*The Great Whale\*\* ($2,000) - Comprehensive platform utilization

# 

# \## 🛠️ Technology Stack

# 

# \*\*AI \& ML:\*\*

# \- DigitalOcean Gradient ADK

# \- Python 3.14

# 

# \*\*Backend:\*\*

# \- FastAPI

# \- httpx

# \- PostgreSQL (planned)

# 

# \*\*Frontend:\*\*

# \- React 18

# \- Vite

# \- TailwindCSS

# \- TypeScript

# 

# \*\*Data Sources:\*\*

# \- NASA VIIRS (satellite)

# \- MarineTraffic (shipping)

# \- NAFIS Nigeria (prices)

# \- GDELT (news sentiment)

# 

# \## 🚧 Known Issues

# 

# \- Frontend caching causing stale Oracle responses (backend + agent work perfectly via curl)

# \- Deployment blocked by DigitalOcean payment verification

# 

# \## 📝 License

# 

# MIT License - see \[LICENSE](LICENSE) file

# 

# \## 👨‍💻 Author

# 

# \*\*Bukola Jimoh\*\*

# \- Devpost: \[@bukolaasweolelajimoh](https://devpost.com/bukolaasweolelajimoh)

# \- Email: bukolaasweolelajimoh@gmail.com

# 

# \## 🙏 Acknowledgments

# 

# \- DigitalOcean Gradient™ AI Team

# \- Major League Hacking (MLH)

# \- Nigerian economic data providers (CBN, NAFIS, NBS)

# 

# \---

# 

# Built for \*\*DigitalOcean Gradient™ AI Hackathon 2026\*\*

