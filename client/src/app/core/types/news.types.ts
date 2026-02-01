export interface Category {
  id: string;
  slug: string;
  name: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  imageUrl: string | null;
  publishedAt: Date;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { id: '1', slug: 'suspilnist', name: 'Суспільство' },
  { id: '2', slug: 'podii', name: 'Події' },
  { id: '3', slug: 'politika', name: 'Політика' },
  { id: '4', slug: 'ekonomika', name: 'Економіка' },
  { id: '5', slug: 'sport', name: 'Спорт' },
  { id: '6', slug: 'kultura', name: 'Культура' },
  { id: '7', slug: 'biznes', name: 'Бізнес' },
];
