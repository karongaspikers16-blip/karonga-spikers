'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { Calendar, ChevronRight } from 'lucide-react';
import { sanityClient } from '@/lib/sanity';
import { newsQuery } from '@/lib/sanity-queries';
import { NewsArticleWithUrl } from '@/lib/sanity';

interface NewsProps {
  className?: string;
  itemsPerPage?: number;
  showFilters?: boolean;
}

// SWR fetcher function
const fetcher = (query: string) => sanityClient.fetch(query);

export default function News({ 
  className = '', 
  itemsPerPage = 6, 
  showFilters = true 
}: NewsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Use SWR for live data fetching with revalidation
  const { data: newsArticles, error, isLoading } = useSWR(
    newsQuery,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 30000, // Refresh every 30 seconds
      dedupingInterval: 10000, // Dedupe requests within 10 seconds
    }
  );

  // Get unique categories for filter
  const categories = ['All', ...new Set(
    newsArticles?.map((article: NewsArticleWithUrl) => article.category).filter(Boolean) || []
  )] as string[];

  // Filter articles based on search term and category
  const filteredArticles = newsArticles?.filter((article: NewsArticleWithUrl) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
        {[...Array(itemsPerPage)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-red-600 mb-4">Failed to load news articles</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!newsArticles || newsArticles.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-gray-500">No news articles found.</div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Filters */}
      {showFilters && (
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
              {categories.map((category: string) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article: NewsArticleWithUrl) => (
          <div key={article._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* Image */}
            <div className="relative h-48">
              {article.imageUrl ? (
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={article.imageMetadata?.lqip || ''}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Image placeholder</p>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-600 mr-2">
                  <Calendar className="h-3 w-3 inline mr-1" />
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
                {article.category && (
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                    {article.category}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>

              <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                {article.excerpt || article.content.substring(0, 150)}...
              </p>

              <Link
                href={`/news/${article._id}`}
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
  );
}
