// TypeScript interfaces for all entities

export interface BlogPost {
  id?: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  author?: string;
  tags?: string[];
  keywords?: string;
  isActive?: boolean;
  createdAt?: Date;
}

export interface ContactLead {
  id?: string;
  name: string;
  phone?: string;
  email: string;
  message: string;
  createdAt?: Date;
}

export interface ContentBlock {
  id?: string;
  identifier: string;
  title: string;
  content: string;
  image_url?: string;
}

export interface Location {
  id?: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  description?: string;
}

export interface Product {
  id?: string;
  name: string;
  description: string;
  price?: number;
  image_url?: string;
  features?: string[];
  is_active?: boolean;
}

export interface Service {
  id?: string;
  name: string;
  description: string;
  price?: number;
  features?: string[];
  is_active?: boolean;
}

export interface SiteContent {
  id?: string;
  key: string;
  value: string;
}

export interface SiteSettings {
  id?: string;
  siteName?: string;
  siteDescription?: string;
  contactEmail?: string;
  contactPhone?: string;
  logo?: string;
}

export interface User {
  id: string;
  email: string;
  username?: string;
  createdAt: Date;
  isAdmin?: boolean;
}

