export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SanityGalleryItem {
  _id: string;
  _type: 'gallery';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  image: SanityImage;
  category?: string;
  description?: string;
  date?: string;
  location?: string;
}

export interface GalleryItemWithUrl extends Omit<SanityGalleryItem, 'image'> {
  imageUrl: string;
  imageMetadata: {
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
  dimensions: {
    width: number;
    height: number;
    aspectRatio: number;
  };
  lqip: string;
}
