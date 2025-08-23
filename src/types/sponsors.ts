import { SanityImage } from './gallery';

export interface SanitySponsor {
  _id: string;
  _type: 'sponsor';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
  logoMetadata: {
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
