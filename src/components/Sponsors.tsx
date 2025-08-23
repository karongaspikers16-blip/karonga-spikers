'use client';

import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { ExternalLink } from 'lucide-react';
import { sanityClient } from '@/lib/sanity';
import { sponsorsQuery, featuredSponsorsQuery } from '@/lib/sanity-queries';
import { SponsorWithUrl } from '@/lib/sanity';

interface SponsorsProps {
  className?: string;
  showFeatured?: boolean;
  showAll?: boolean;
  tierFilter?: string;
}

// SWR fetcher function
const fetcher = (query: string) => sanityClient.fetch(query);

export default function Sponsors({ 
  className = '', 
  showFeatured = true,
  showAll = true,
  tierFilter
}: SponsorsProps) {
  // Use SWR for live data fetching with revalidation
  const { data: sponsors, error, isLoading } = useSWR(
    tierFilter ? `*[_type == "sponsor" && tier == $tier] | order(_createdAt desc) {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      logo,
      website,
      tier,
      description,
      since,
      impact,
      featured,
      category,
      "logoUrl": logo.asset->url,
      "logoMetadata": logo.asset->metadata
    }` : sponsorsQuery,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 30000, // Refresh every 30 seconds
      dedupingInterval: 10000, // Dedupe requests within 10 seconds
    }
  );

  // Get featured sponsors
  const { data: featuredSponsors } = useSWR(
    featuredSponsorsQuery,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 30000,
      dedupingInterval: 10000,
    }
  );

  // Group sponsors by tier
  const sponsorsByTier = sponsors?.reduce((acc: Record<string, SponsorWithUrl[]>, sponsor: SponsorWithUrl) => {
    const tier = sponsor.tier || 'partner';
    if (!acc[tier]) {
      acc[tier] = [];
    }
    acc[tier].push(sponsor);
    return acc;
  }, {}) || {};

  const tierOrder = ['platinum', 'gold', 'silver', 'bronze', 'partner'];

  if (isLoading) {
    return (
      <div className={className}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md animate-pulse">
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-red-600 mb-4">Failed to load sponsors</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!sponsors || sponsors.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-gray-500">No sponsors found.</div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Featured Sponsors */}
      {showFeatured && featuredSponsors && featuredSponsors.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSponsors.map((sponsor: SponsorWithUrl) => (
              <div key={sponsor._id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center">
                  <div className="relative h-32 w-32 mb-4">
                    <Image
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      placeholder="blur"
                      blurDataURL={sponsor.logoMetadata?.lqip || ''}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{sponsor.name}</h3>
                  
                  {sponsor.description && (
                    <p className="text-gray-600 text-center mb-4 line-clamp-3">{sponsor.description}</p>
                  )}

                  {sponsor.website && (
                    <Link
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                    >
                      Visit website
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Sponsors by Tier */}
      {showAll && (
        <div>
          {tierOrder.map(tier => {
            const tierSponsors = sponsorsByTier[tier];
            if (!tierSponsors || tierSponsors.length === 0) return null;

            return (
              <div key={tier} className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize">
                  {tier} Sponsors
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {tierSponsors.map((sponsor: SponsorWithUrl) => (
                    <div key={sponsor._id} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col items-center">
                        <div className="relative h-20 w-20 mb-3">
                          <Image
                            src={sponsor.logoUrl}
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={sponsor.logoMetadata?.lqip || ''}
                          />
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-1 text-center">{sponsor.name}</h4>
                        
                        {sponsor.website && (
                          <Link
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800 text-sm flex items-center"
                          >
                            Visit
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
