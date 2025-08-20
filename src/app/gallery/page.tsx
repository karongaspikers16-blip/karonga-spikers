'use client';

import { useState } from 'react';

type ImageType = { src: string; alt: string };
type AlbumType = {
  id: number;
  category: string;
  title: string;
  date: string;
  location: string;
  description: string;
  images: ImageType[];
};

const galleryData: AlbumType[] = [
  {
    id: 1,
    category: 'Championship',
    title: 'Regional Championship Victory 2024',
    date: 'March 15, 2024',
    location: 'Karonga Stadium',
    description: 'Celebrating our victory in the regional championship.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Team celebration' },
      { src: '/api/placeholder/400/300', alt: 'Award ceremony' },
    ],
  },
  {
    id: 2,
    category: 'Training',
    title: 'Intensive Training Session',
    date: 'February 20, 2024',
    location: 'Karonga Sports Complex',
    description: 'Behind the scenes of our training sessions.',
    images: [
      { src: '/api/placeholder/400/300', alt: 'Players training' },
      { src: '/api/placeholder/400/300', alt: 'Coach instructions' },
    ],
  },
];

const categories = ['All', 'Championship', 'Training'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<AlbumType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredData =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: AlbumType, imageIndex: number) => {
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
      setCurrentImageIndex(
        currentImageIndex === 0 ? selectedImage.images.length - 1 : currentImageIndex - 1
      );
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Photo Gallery</h1>

      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat ? 'bg-yellow-400 text-blue-900' : 'bg-white text-blue-900'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((album) => (
          <div
            key={album.id}
            className="bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => openLightbox(album, 0)}
          >
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <span className="text-blue-900 font-bold">{album.title}</span>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">{album.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-3xl w-full">
            <button onClick={closeLightbox} className="absolute top-2 right-2 text-white text-2xl">
              &times;
            </button>
            <div className="bg-white rounded-lg p-4">
              <img
                src={selectedImage.images[currentImageIndex].src}
                alt={selectedImage.images[currentImageIndex].alt}
                className="w-full h-96 object-cover rounded"
              />
              <div className="mt-2 flex justify-between">
                <button onClick={prevImage} className="px-3 py-1 bg-blue-600 text-white rounded">
                  Previous
                </button>
                <button onClick={nextImage} className="px-3 py-1 bg-blue-600 text-white rounded">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
