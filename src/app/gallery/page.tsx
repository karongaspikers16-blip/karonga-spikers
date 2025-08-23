'use client';

import { useState } from 'react';
import Gallery from '@/components/Gallery';
import { ChevronLeft, ChevronRight, X, Calendar, MapPin } from 'lucide-react';

// Categories for filtering (you can modify these based on your Sanity data structure)
const categories = ['All', 'Championship', 'Training', 'Community', 'Matches', 'Awards', 'Behind the Scenes'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
              <span className="text-yellow-400 font-bold">Live</span> Updates
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-400 font-bold">Sanity</span> Powered
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
        <div className="container mx-auto px-4">
          <Gallery category={selectedCategory !== 'All' ? selectedCategory : undefined} />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Real-time Gallery Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our gallery is powered by Sanity CMS, which means new images appear instantly 
            as soon as they're uploaded to the studio. No need to rebuild or redeploy the website!
          </p>
        </div>
      </section>
    </div>
  );
}
