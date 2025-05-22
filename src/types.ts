// type definitions

export interface Service {
  id: number;
  name: string;
  description: string;
  category?: string;
  prices?: number[];
}

export interface Package {
  id: number;
  name: string;
  description: string;
  prices: string[];
  time: string;
  previousServiceLabel: boolean;
  services: number[];
}