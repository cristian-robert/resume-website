// src/types/api.ts
export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface About {
  id: number;
  title: string;
  description: string;
  email: string;
  location: string;
  education: string[];
}

export interface Skill {
  id: number;
  category: string;
  items: string[];
}
