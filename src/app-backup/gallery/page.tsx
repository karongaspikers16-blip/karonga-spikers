'use client';

import PhotoGallery from '@/components/PhotoGallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Moments that define our journey
          </p>
          <div className="w-24 h-1 bg-white mx-auto animate-scale-in"></div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Want to Share Your Photos?
          </h2>
          <p className="text-lg mb-8 animate-fade-in">
            Have great shots from our matches or events? We'd love to feature them in our gallery!
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 animate-bounce-in">
            Submit Photos
          </button>
        </div>
      </section>
    </div>
  );
}