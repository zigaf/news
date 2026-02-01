export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  categoryName: string;
  publishedAt: Date;
  readTime: number;
  author: string;
  isFeatured?: boolean;
  views?: number;
  hasFlag?: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  color?: string;
}

export interface CityStatus {
  alert: boolean;
  electricity: boolean;
  water: boolean;
  transport: boolean;
  lastUpdate: Date;
}
