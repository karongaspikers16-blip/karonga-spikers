'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  website?: string;
  description: string;
  since: string;
  impact: string;
  featured?: boolean;
  category?: string;
}

const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Karonga District Council',
    logo: '/sponsors/karonga-council.png',
    tier: 'platinum',
    website: 'https://karonga.gov.mw',
    description: 'Official government partner supporting sports development in Karonga District',
    since: '2020',
    impact: 'Provided funding for youth volleyball programs and stadium improvements',
    featured: true,
    category: 'Government'
  },
  // ...other sponsors
];

export default function SponsorsPage() {
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSponsors, setFilteredSponsors] = useState(sponsors);

  useEffect(() => {
    let filtered = sponsors;

    if (selectedTier !== 'all') {
      filtered = filtered.filter(sponsor => sponsor.tier === selectedTier);
    }

    if (searchTerm) {
      filtered = filtered.filter(sponsor =>
        sponsor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sponsor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sponsor.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSponsors(filtered);
  }, [selectedTier, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors & Partners</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We are grateful for the support of our amazing sponsors and partners who make our success possible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Valued Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={80}
                      height={40}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-logo.png';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{sponsor.name}</h4>
                    <p className="text-gray-600 mb-2">{sponsor.description}</p>
                    <p className="text-sm text-gray-500">Since {sponsor.since}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Sponsor Packages */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Sponsor Packages</h3>
              <p className="text-gray-600 mb-2">Contact us to become a sponsor</p>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Contact Us</Link>
            </div>

            {/* Strategic Partners */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Strategic Partners</h3>
              <p className="text-gray-600 mb-2">Contact us to become a partner</p>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
