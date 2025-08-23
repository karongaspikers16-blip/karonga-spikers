import { SanityImage } from './gallery';

export interface SanityNewsArticle {
  _id: string;
  _type: 'news';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  content: string;
  publishedAt: string;
  image?: SanityImage;
  excerpt?: string;
  author?: string;
  category?: string;
  featured?: boolean;
  slug?: {
    _type: 'slug';
    current: string;
  };
  tags?: string[];
}

export interface NewsArticleWithUrl extends Omit<SanityNewsArticle, 'image'> {
  imageUrl?: string;
  imageMetadata?: {
    dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    lqip: string;
    palette?: {
      darkMuted: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      darkVibrant: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      lightMuted: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      lightVibrant: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      muted: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
      vibrant: {
        background: string;
        foreground: string;
        population: number;
        title: string;
      };
    };
  };
}
