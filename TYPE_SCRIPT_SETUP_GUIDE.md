# TypeScript Setup Guide for Karonga Spikers

This guide documents the comprehensive TypeScript setup for the Karonga Spikers website, including type definitions, Sanity CMS integration, and live data fetching components.

## 📁 Type Definitions Structure

### Core Types Location: `src/types/`

- **`gallery.ts`** - Types for gallery images and media
- **`news.ts`** - Types for news articles and blog posts
- **`sponsors.ts`** - Types for sponsors and partners
- **`team.ts`** - Types for team members and players
- **`matches.ts`** - Types for matches and game results
- **`index.ts`** - Combined exports and utility types

## 🎯 Type Definitions Overview

### 1. Gallery Types (`src/types/gallery.ts`)
```typescript
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface SanityGalleryItem {
  _id: string;
  _type: 'gallery';
  title: string;
  image: SanityImage;
  category?: string;
  description?: string;
  date?: string;
  location?: string;
}

export interface GalleryItemWithUrl extends Omit<SanityGalleryItem, 'image'> {
  imageUrl: string;
  imageMetadata: ImageMetadata;
  dimensions: { width: number; height: number; aspectRatio: number };
  lqip: string;
}
```

### 2. News Types (`src/types/news.ts`)
```typescript
export interface SanityNewsArticle {
  _id: string;
  _type: 'news';
  title: string;
  content: string;
  publishedAt: string;
  image?: SanityImage;
  excerpt?: string;
  author?: string;
  category?: string;
  featured?: boolean;
  slug?: { _type: 'slug'; current: string };
  tags?: string[];
}

export interface NewsArticleWithUrl extends Omit<SanityNewsArticle, 'image'> {
  imageUrl?: string;
  imageMetadata?: ImageMetadata;
}
```

### 3. Sponsor Types (`src/types/sponsors.ts`)
```typescript
export interface SanitySponsor {
  _id: string;
  _type: 'sponsor';
  name: string;
  logo: SanityImage;
  website?: string;
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze' | 'partner';
  description?: string;
  since?: string;
  impact?: string;
  featured?: boolean;
  category?: string;
}

export interface SponsorWithUrl extends Omit<SanitySponsor, 'logo'> {
  logoUrl: string;
  logoMetadata: ImageMetadata;
}
```

### 4. Team Types (`src/types/team.ts`)
```typescript
export interface SanityTeamMember {
  _id: string;
  _type: 'team';
  name: string;
  role: string;
  jersey: number;
  photo: SanityImage;
  bio: string;
  position?: 'setter' | 'outside hitter' | 'opposite hitter' | 'middle blocker' | 'libero' | 'defensive specialist';
  height?: string;
  weight?: string;
  birthDate?: string;
  yearsWithTeam?: number;
  isCaptain?: boolean;
  isActive?: boolean;
  socialMedia?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface TeamMemberWithUrl extends Omit<SanityTeamMember, 'photo'> {
  photoUrl: string;
  photoMetadata: ImageMetadata;
}
```

### 5. Match Types (`src/types/matches.ts`)
```typescript
export interface SanityMatch {
  _id: string;
  _type: 'match';
  opponent: string;
  date: string;
  location: string;
  score?: string;
  isHome?: boolean;
  tournamentName?: string;
  status?: 'upcoming' | 'completed' | 'postponed' | 'cancelled';
  result?: 'win' | 'loss' | 'draw';
  homeScore?: number;
  awayScore?: number;
  sets?: Array<{
    setNumber: number;
    homeScore: number;
    awayScore: number;
  }>;
  matchReport?: string;
  highlights?: string[];
  attendance?: number;
  venue?: string;
  competition?: string;
  round?: string;
}

export interface MatchWithFormattedData extends SanityMatch {
  formattedDate: string;
  formattedTime: string;
  isPast: boolean;
  scoreDisplay: string;
  resultType: 'win' | 'loss' | 'draw' | 'upcoming';
}
```

## 🔄 Live Data Components

### Gallery Component (`src/components/Gallery.tsx`)
- Uses SWR for live data fetching
- Automatic revalidation every 30 seconds
- Optimized image loading with LQIP placeholders
- Lightbox functionality for image viewing

### News Component (`src/components/News.tsx`)
- Real-time news article updates
- Search and category filtering
- Featured articles support
- Responsive grid layout

### Sponsors Component (`src/components/Sponsors.tsx`)
- Tier-based sponsor organization
- Featured sponsors section
- Website links with external link icons
- Responsive grid layouts

## 🛠️ Sanity Integration

### Enhanced Sanity Client (`src/lib/sanity.ts`)
```typescript
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2025-08-21',
  token: process.env.SANITY_API_TOKEN,
  withCredentials: false,
  ignoreBrowserTokenWarning: true,
});
```

### Query Library (`src/lib/sanity-queries.ts`)
- Pre-built GROQ queries for all content types
- Image URL and metadata transformations
- Filtering and sorting capabilities
- Helper functions for data fetching

## 🚀 Usage Examples

### Using Types in Components
```typescript
import { NewsArticleWithUrl } from '@/types';

interface NewsCardProps {
  article: NewsArticleWithUrl;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.excerpt}</p>
    </div>
  );
};
```

### Data Fetching with SWR
```typescript
import useSWR from 'swr';
import { newsQuery } from '@/lib/sanity-queries';
import { sanityClient } from '@/lib/sanity';

const fetcher = (query: string) => sanityClient.fetch(query);

const { data: newsArticles, error, isLoading } = useSWR(
  newsQuery,
  fetcher,
  {
    revalidateOnFocus: false,
    refreshInterval: 30000,
  }
);
```

## 🎨 Image Optimization

### URL Builder Helper
```typescript
export const getOptimizedImageUrl = (
  source: any,
  width?: number,
  height?: number,
  quality: number = 80
) => {
  let image = builder.image(source);
  if (width) image = image.width(width);
  if (height) image = image.height(height);
  if (quality) image = image.quality(quality);
  return image.url();
};
```

## 🔧 Environment Variables

Required environment variables:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

## 📊 Performance Features

- **LQIP (Low Quality Image Placeholders)** - Blurred image placeholders
- **CDN Optimization** - Automatic CDN usage in production
- **Deduplication** - Prevents duplicate requests
- **Type Safety** - Full TypeScript coverage
- **Live Updates** - Real-time content synchronization

## 🚨 Error Handling

All components include:
- Loading states with skeleton screens
- Error boundaries with retry functionality
- Empty state handling
- Type-safe error messages

## 📱 Responsive Design

All components are built with:
- Mobile-first responsive design
- Flexible grid layouts
- Optimized image sizes for different breakpoints
- Touch-friendly interactions

This TypeScript setup provides a robust foundation for the Karonga Spikers website with excellent developer experience, type safety, and real-time content updates.
