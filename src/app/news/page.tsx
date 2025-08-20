'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { newsArticles } from '../../data/news'; // fixed relative import

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Get unique categories for filter
  const categories = ['All', ...new Set(newsArticles.map(article => article.category))];

  // Filter articles based on search term and category
  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">News & Announcements</h1>
          <p className="text-lg">Stay updated with the latest from Karonga Spikers</p>
        </div>
      </div>

      {/* News Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Latest News</h2>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Search news..."
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder</p>
                </div>
                {/* Uncomment below when actual images are ready in public/news/ */}
                {/* <Image src={article.image!} alt={article.title} fill className="object-cover" /> */}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-600 mr-2">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    {article.date}
                  </span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{article.excerpt}</p>

                <Link
                  href={`/news/${article.id}`}
                  className="text-primary-600 hover:text-primary-800 font-medium flex items-center mt-auto"
                >
                  Read more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No news articles found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
