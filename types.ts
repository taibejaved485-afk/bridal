import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  longDescription?: string;
  features?: string[];
  duration?: string;
  imageUrl?: string;
  icon: LucideIcon;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}