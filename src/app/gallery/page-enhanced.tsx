'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Calendar, MapPin } from 'lucide-react';

// ---------------------
// Type Definitions
// ---------------------
type ImageItem = {
  src: string;
  alt: string;
};

type GalleryItem = {
  id: number;
  category: string;
  title: string;
  date: string;
  location: string;
  description: string;
  images: ImageItem[];
};

// ---------------------
// Gallery Data
// ---------------------
const galleryData: GalleryItem[] = [
  {
    id: 1,
    category: 'Championship',
    title: 'Regional Championship Victory 2024',
    date: 'March 15, 2024',
    location: 'Karonga Stadium',
    description: 'Our team celebrating the hard-fought victory in the regional championship final.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Team celebration with trophy' },
      { src: '/api/placeholder/400/300', alt: 'Award ceremony' },
      { src: '/api/placeholder/400/300', alt: 'Team photo with medals' }
    ]
  },
  {
    id: 2,
    category: 'Training',
    title: 'Intensive Training Session',
    date: 'February 20, 2024',
    location: 'Karonga Sports Complex',
    description: 'Behind the scenes of our rigorous training sessions preparing for the championship.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Players during training' },
      { src: '/api/placeholder/400/300', alt: 'Coach giving instructions' },
      { src: '/api/placeholder/400/300', alt: 'Team practice match' }
    ]
  },
  {
    id: 3,
    category: 'Community',
    title: 'Youth Development Program',
    date: 'January 10, 2024',
    location: 'Local Community Center',
    description: 'Our community outreach program training the next generation of volleyball players.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Youth training session' },
      { src: '/api/placeholder/400/300', alt: 'Coaches with young players' },
      { src: '/api/placeholder/400/300', alt: 'Community volleyball clinic' }
    ]
  },
  {
    id: 4,
    category: 'Matches',
    title: 'Semi-Final Match Highlights',
    date: 'March 8, 2024',
    location: 'Regional Sports Arena',
    description: 'Action shots from our intense semi-final match that led us to the championship.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Player spiking' },
      { src: '/api/placeholder/400/300', alt: 'Team huddle' },
      { src: '/api/placeholder/400/300', alt: 'Victory celebration' }
    ]
  },
  {
    id: 5,
    category: 'Awards',
    title: 'Individual Awards Ceremony',
    date: 'March 16, 2024',
    location: 'Karonga Stadium',
    description: 'Celebrating individual achievements and recognitions from the championship.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'MVP award presentation' },
      { src: '/api/placeholder/400/300', alt: 'Best setter award' },
      { src: '/api/placeholder/400/300', alt: 'Team awards group photo' }
    ]
  },
  {
    id: 6,
    category: 'Behind the Scenes',
    title: 'Team Bonding Activities',
    date: 'February 5, 2024',
    location: 'Karonga Beach',
    description: 'Team building activities that strengthen our unity and team spirit.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Team at the beach' },
      { src: '/api/placeholder/400/300', alt: 'Group activities' },
      { src: '/api/placeholder/400/300', alt: 'Team dinner' }
    ]
  }
];

const categories = ['All', 'Championship', 'Training', 'Community', 'Matches', 'Awards', 'Behind the Scenes'];

// ---------------------
// Component
// ---------------------
export default function GalleryEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredData = selectedCategory === 'All' 
    ? galleryData 
    : galleryData.filter((item: GalleryItem) => item.category === selectedCategory);

  // ---------------------
  // Lightbox Functions
  // ---------------------
  const openLightbox = (item: GalleryItem, imageIndex: number) => {
    setSelectedImage(item);
    setCurrentImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImage.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => prev === 0 ? selectedImage.images.length - 1 : prev - 1);
    }
  };

  // ---------------------
  // Render
  // ---------------------
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Photo <span className="text-yellow-400">Gallery</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto">
            Capturing our journey, victories, and memorable moments both on and off the court
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-400 font-bold">{galleryData.length}</span> Albums
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-400 font-bold">
                {galleryData.reduce((acc, item) => acc + item.images.length, 0)}
              </span> Photos
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 shadow-lg'
                  : 'bg-white text-blue-900 hover:bg-blue-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((album) => (
            <div key={album.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative group">
                <div className="aspect-w-16 aspect-h-12">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-900 mb-2">{album.images.length}</div>
                      <div className="text-gray-600">Photos</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(album, 0)}
                    className="opacity-0 group-hover:opacity-100 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105"
                  >
                    View Album
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">{album.category}</span>
                  <span className="text-gray-500 text-sm">{album.images.length} photos</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{album.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{album.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{album.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{album.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-900 mb-4">
                        {currentImageIndex + 1} / {selectedImage.images.length}
                      </div>
                      <div className="text-gray-600">Image Preview</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{selectedImage.title}</h3>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-1" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{selectedImage.location}</span>
                  </div>
                </div>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
