'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  website?: string;
  description?: string;
}

const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Karonga District Council',
    logo: '/sponsors/karonga-council.png',
    tier: 'platinum',
    website: 'https://karonga.gov.mw',
    description: 'Official government partner supporting sports development'
  },
  {
    id: '2',
    name: 'National Bank of Malawi',
    logo: '/sponsors/nbm.png',
    tier: 'gold',
    website: 'https://nbm.mw',
    description: 'Banking partner and financial services provider'
  },
  {
    id: '3',
    name: 'Airtel Malawi',
    logo: '/sponsors/airtel.png',
    tier: 'gold',
    website: 'https://airtel.mw',
    description: 'Telecommunications and connectivity partner'
  },
  {
    id: '4',
    name: 'Malawi Savings Bank',
    logo: '/sponsors/msb.png',
    tier: 'silver',
    website: 'https://msb.mw',
    description: 'Financial services and community banking'
  },
  {
    id: '5',
    name: 'Shoprite Malawi',
    logo: '/sponsors/shoprite.png',
    tier: 'silver',
    website: 'https://shoprite.com',
    description: 'Retail partner providing team nutrition support'
  },
  {
    id: '6',
    name: 'Castel Malawi',
    logo: '/sponsors/castel.png',
    tier: 'bronze',
    website: 'https://castel.mw',
    description: 'Beverage partner for team events'
  }
];

const partners = [
  {
    id: '1',
    name: 'Malawi Volleyball Association',
    logo: '/partners/mva.png',
    website: 'https://malawivolleyball.mw',
    description: 'National governing body for volleyball'
  },
  {
    id: '2',
    name: 'Northern Region Sports Council',
    logo: '/partners/nrsc.png',
    website: 'https://nrsc.mw',
    description: 'Regional sports development organization'
  },
  {
    id: '3',
    name: 'Karonga Youth Sports Association',
    logo: '/partners/kysa.png',
    website: 'https://kysa.mw',
    description: 'Youth development and community outreach'
  }
];

const getTierStyles = (tier: string) => {
  switch (tier) {
    case 'platinum':
      return 'border-4 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100';
    case 'gold':
      return 'border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100';
    case 'silver':
      return 'border-4 border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100';
    case 'bronze':
      return 'border-4 border-orange-400 bg-gradient-to-br from-orange-50 to-orange-100';
    default:
      return 'border-2 border-gray-200 bg-gray-50';
  }
};

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Our Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are grateful for the support of our amazing sponsors and partners who make our success possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Platinum Sponsors</h3>
          <div className="flex justify-center">
            {sponsors.filter(s => s.tier === 'platinum').map(sponsor => (
              <div key={sponsor.id} className={`p-6 rounded-xl ${getTierStyles(sponsor.tier)} max-w-xs mx-4`}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-logo.png';
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{sponsor.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{sponsor.description}</p>
                  {sponsor.website && (
                    <Link
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Visit Website
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-600">Gold Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.filter(s => s.tier === 'gold').map(sponsor => (
              <div key={sponsor.id} className={`p-4 rounded-xl ${getTierStyles(sponsor.tier)}`}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
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
                  <h4 className="font-bold text-base mb-1">{sponsor.name}</h4>
                  <p className="text-xs text-gray-600">{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver & Bronze Sponsors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-600">Silver & Bronze Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sponsors.filter(s => s.tier === 'silver' || s.tier === 'bronze').map(sponsor => (
              <div key={sponsor.id} className={`p-3 rounded-lg ${getTierStyles(sponsor.tier)}`}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={60}
                      height={30}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-logo.png';
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-sm">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partners */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Strategic Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map(partner => (
              <div key={partner.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={60}
                      height={30}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-logo.png';
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
                  {partner.website && (
                    <Link
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Become a Sponsor</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Partner with us to support volleyball development in Karonga and gain valuable exposure for your brand.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us About Sponsorship
          </Link>
        </div>
      </div>
    </section>
  );
}
