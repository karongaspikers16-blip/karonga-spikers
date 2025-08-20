'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Star, TrendingUp, Eye } from 'lucide-react';
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

const sponsors = [
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
  {
    id: '2',
    name: 'National Bank of Malawi',
    logo: '/sponsors/nbm.png',
    tier: 'gold',
    website: 'https://nbm.mw',
    description: 'Banking partner and financial services provider',
    since: '2021',
    impact: 'Financial support for team operations and player development',
    category: 'Financial'
  },
  {
    id: '3',
    name: 'Airtel Malawi',
    logo: '/sponsors/airtel.png',
    tier: 'gold',
    website: 'https://airtel.mw',
    description: 'Telecommunications partner providing connectivity and digital solutions',
    since: '2022',
    impact: 'Sponsored team communication equipment and digital marketing',
    category: 'Technology'
  },
  {
    id: '4',
    name: 'Press Trust',
    logo: '/sponsors/press-trust.png',
    tier: 'silver',
    website: 'https://presstrust.mw',
    description: 'Media partner supporting sports journalism and coverage',
    since: '2021',
    impact: 'Provided media coverage and promotional support',
    category: 'Media'
  },
  {
    id: '5',
    name: 'Game Stores',
    logo: '/sponsors/game-stores.png',
    tier: 'silver',
    website: 'https://game.co.mw',
    description: 'Retail partner providing sports equipment and merchandise',
    since: '2022',
    impact: 'Supplied team uniforms and sports equipment',
    category: 'Retail'
  },
  {
    id: '6',
    name: 'Malawi Revenue Authority',
    logo: '/sponsors/mra.png',
    tier: 'bronze',
    website: 'https://mra.mw',
    description: 'Tax compliance and financial advisory partner',
    since: '2023',
    impact: 'Provided tax advisory services and compliance support',
    category: 'Government'
  }
];

const partners = [
  {
    id: '1',
    name: 'Malawi Volleyball Association',
    logo: '/partners/mva.png',
    website: 'https://malawivolleyball.mw',
    description: 'National governing body for volleyball in Malawi',
    since: '2020',
    impact: 'Official recognition and tournament organization support'
  },
  {
    id: '2',
    name: 'Northern Region Sports Council',
    logo: '/partners/nrsc.png',
    website: 'https://nrsc.mw',
    description: 'National governing body for volleyball in Malawi',
    since: '2020',
    impact: 'Official recognition and tournament organization support'
  },
  {
    id: '3',
    name: 'Northern Region Sports Council',
    logo: '/partners/nrsc.png',
    website: 'https://nrsc.mw',
    description: 'National governing body for volleyball in Malawi',
    since: '2020',
    impact: 'Official recognition and tournament organization support'
  }
];

const sponsorPackages = [
  {
    tier: 'platinum',
    name: 'Platinum Package',
    price: '$10,000+',
    benefits: [
      'Logo on all team jerseys',
      'Stadium banner placement',
      'Social media features',
      'Website homepage placement',
      'VIP match tickets',
      'Player meet & greets'
    ],
    color: 'from-gray-400 to-gray-600'
  },
  {
    tier: 'gold',
    name: 'Gold Package',
    price: '$5,000 - $9,999',
    benefits: [
      'Logo on team website',
      'Match program features',
      'Social media mentions',
      'Stadium signage',
      'Match tickets'
    ],
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    tier: 'silver',
    name: 'Silver Package',
    price: '$2,000 - $4,999',
    benefits: [
      'Website sponsor page',
      'Newsletter features',
      'Event recognition',
      'Social media posts'
    ],
    color: 'from-gray-300 to-gray-500'
  },
  {
    tier: 'bronze',
    name: 'Bronze Package',
    price: '$500 - $1,999',
    benefits: [
      'Website listing',
      'Event programs',
      'Thank you mentions'
    ],
    color: 'from-orange-300 to-orange-500'
  }
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
            {sponsors.map((sponsor) => (
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
            )}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Sponsor Packages</h3>
              <p className="text-gray-600 mb-2">Contact us to become a sponsor</p>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Contact Us</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Strategic Partners</h3>
              <p className="text-gray-600 mb-2">Contact us to become a partner</p>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Contact Us</Link>