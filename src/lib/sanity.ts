import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration with live updates support
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for better performance
  apiVersion: '2025-08-21',
  token: process.env.SANITY_API_TOKEN,
  // Enable real-time updates in development
  withCredentials: false,
  ignoreBrowserTokenWarning: true,
});

// Image URL builder for optimized images
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// Helper function to format image URLs with optimization
export const getOptimizedImageUrl = (
  source: any,
  width?: number,
  height?: number,
  quality: number = 80
) => {
  if (!source) return null;
  
  let image = builder.image(source);
  
  if (width) image = image.width(width);
  if (height) image = image.height(height);
  if (quality) image = image.quality(quality);
  
  return image.url();
};

// Export types from the types directory
export type { 
  SanityImage, 
  SanityGalleryItem, 
  GalleryItemWithUrl 
} from '@/types/gallery';

export type { 
  SanityNewsArticle, 
  NewsArticleWithUrl 
} from '@/types/news';

export type { 
  SanitySponsor, 
  SponsorWithUrl 
} from '@/types/sponsors';

export type { 
  SanityTeamMember, 
  TeamMemberWithUrl 
} from '@/types/team';

export type { 
  SanityMatch, 
  MatchWithFormattedData 
} from '@/types/matches';
