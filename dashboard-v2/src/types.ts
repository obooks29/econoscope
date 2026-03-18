export interface EconomicData {
  gdp: number;
  inflation: number;
  exchangeRate: number;
  lastUpdated: string;
}

export interface PriceAlert {
  id: string;
  commodity: string;
  price: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
