import { SanityImage } from './gallery';

export interface SanityTeamMember {
  _id: string;
  _type: 'team';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
  photoMetadata: {
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
