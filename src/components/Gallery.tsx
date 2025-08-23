'use client';

import { useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { sanityClient } from '@/lib/sanity';
import { galleryQuery, galleryByCategoryQuery } from '@/lib/sanity-queries';
import { GalleryItemWithUrl } from '@/lib/sanity';

interface GalleryProps {
  className?: string;
  itemsPerPage?: number;
  category?: string;
}

// SWR fetcher function
const fetcher = (query: string, params?: any) => sanityClient.fetch(query, params);

export default function Gallery({ className = '', itemsPerPage = 12, category }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItemWithUrl | null>(null);
  
  // Determine which query to use based on category
  const query = category && category !== 'All' 
    ? galleryByCategoryQuery(category)
    : galleryQuery;
  
  const queryParams = category && category !== 'All' ? { category } : undefined;

  // Use SWR for live data fetching with revalidation
  const { data: galleryItems, error, isLoading } = useSWR(
    [query, queryParams],
    ([query, params]) => fetcher(query, params),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 30000, // Refresh every 30 seconds
      dedupingInterval: 10000, // Dedupe requests within 10 seconds
    }
  );

  const openLightbox = (item: GalleryItemWithUrl) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}>
        {[...Array(itemsPerPage)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg aspect-square w-full"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (galleryItems.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-gray-500">
          {category && category !== 'All' 
            ? `No gallery images found in category "${category}".`
            : 'No gallery images found.'
          }
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
        {galleryItems.map((item: GalleryItemWithUrl) => (
          <div
            key={item._id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            {/* Image with LQIP placeholder */}
            <div className="relative aspect-square w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={item.lqip}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                  <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    View
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="p-3">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                {item.title}
              </h3>
              {item.category && (
                <p className="text-xs text-gray-500 mt-1">{item.category}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  placeholder="blur"
                  blurDataURL={selectedImage.lqip}
                />
              </div>

              {/* Image info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <div className="text-sm text-gray-600">
                  {selectedImage.category && (
                    <p className="mb-2">
                      <strong>Category:</strong> {selectedImage.category}
                    </p>
                  )}
                  <p>Dimensions: {selectedImage.dimensions.width} × {selectedImage.dimensions.height}</p>
                  <p>Aspect ratio: {selectedImage.dimensions.aspectRatio.toFixed(2)}</p>
                  <p className="mt-2">
                    Added: {new Date(selectedImage._createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
