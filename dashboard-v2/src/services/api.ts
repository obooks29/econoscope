const API_BASE = 'http://localhost:8000';

export const api = {
  async getStats() {
    const response = await fetch(`${API_BASE}/api/stats`);
    return response.json();
  },

  async getGDPHistory() {
    const response = await fetch(`${API_BASE}/api/gdp/history`);
    return response.json();
  },

  async getPriceAlerts() {
    const response = await fetch(`${API_BASE}/api/prices/alerts`);
    return response.json();
  },

  async getRegionalActivity() {
    const response = await fetch(`${API_BASE}/api/regions/activity`);
    return response.json();
  },

  async chatWithOracle(question: string, userType = 'government') {
    const response = await fetch(`${API_BASE}/api/oracle/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, user_type: userType })
    });
    return response.json();
  }
};