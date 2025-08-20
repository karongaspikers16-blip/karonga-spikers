'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: 'team' | 'matches' | 'training' | 'events';
  title: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/team-photo-1.jpg',
    alt: 'Team Photo 2024',
    category: 'team',
    title: 'Team Photo 2024'
  },
  {
    id: 2,
    src: '/images/match-action-1.jpg',
    alt: 'Volleyball Match Action',
    category: 'matches',
    title: 'Championship Match'
  },
  {
    id: 3,
    src: '/images/training-session-1.jpg',
    alt: 'Training Session',
    category: 'training',
    title: 'Training Session'
  },
  {
    id: 4,
    src: '/images/team-celebration.jpg',
    alt: 'Team Celebration',
    category: 'events',
    title: 'Victory Celebration'
  },
  {
    id: 5,
    src: '/images/team-photo-2.jpg',
    alt: 'Team Group Photo',
    category: 'team',
    title: 'Team Group Photo'
  },
  {
    id: 6,
    src: '/images/match-action-2.jpg',
    alt: 'Spike Action',
    category: 'matches',
    title: 'Perfect Spike'
  }
];

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'team', label: 'Team' },
  { key: 'matches', label: 'Matches' },
  { key: 'training', label: 'Training' },
  { key: 'events', label: 'Events' }
];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Capturing the spirit and energy of Karonga Spikers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{photo.title}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
               onClick={() => setSelectedPhoto(null)}>
            <div className="relative max-w-4xl max-h-full animate-scale-in"
                 onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-400 to-secondary-400">
                  <div className="w-full h-96 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{selectedPhoto.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedPhoto.title}</h3>
                  <p className="text-gray-600 capitalize">{selectedPhoto.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}