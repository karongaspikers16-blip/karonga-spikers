'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Trophy, Users } from 'lucide-react';

// Featured upcoming match data
const upcomingMatch = {
  opponent: "Mzuzu Hammers",
  date: "June 15, 2024",
  time: "14:00",
  location: "Karonga Stadium",
};

// Recent news items
const recentNews = [
  {
    id: 1,
    title: "Karonga Spikers Win Regional Championship",
    date: "May 28, 2024",
    excerpt: "The team secured a decisive victory in the final match against...",
  },
  {
    id: 2,
    title: "New Training Program Launched for Youth Players",
    date: "May 15, 2024",
    excerpt: "Our club is proud to announce a new development program aimed at...",
  },
  {
    id: 3,
    title: "Team Captain Selected for National Squad",
    date: "May 3, 2024",
    excerpt: "We're proud to announce that our team captain has been selected...",
  },
];

// Home page component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">Karonga Spikers Volleyball Club</h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">Excellence in volleyball, pride in our community</p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-right">
                <Link 
                  href="/team" 
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center shadow-lg"
                >
                  Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/matches" 
                  className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                >
                  View Matches
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <span className="text-5xl md:text-7xl font-bold animate-pulse-slow">KS</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-10 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">Why Choose Karonga Spikers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center animate-slide-up group">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-full mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <Trophy className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Championship Legacy</h3>
              <p className="text-gray-600">Multiple regional championships and national tournament appearances.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center animate-slide-up group" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-full mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <Users className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Elite Coaching</h3>
              <p className="text-gray-600">Experienced coaches dedicated to player development and team success.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center animate-slide-up group" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-full mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                <Calendar className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Focused</h3>
              <p className="text-gray-600">Committed to developing volleyball in Karonga and supporting local youth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Match Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-slide-up">Next Match</h2>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Karonga Spikers vs {upcomingMatch.opponent}</h3>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                  <span>{upcomingMatch.date} at {upcomingMatch.time}</span>
                </div>
                <p className="text-gray-600">{upcomingMatch.location}</p>
              </div>
              <Link 
                  href="/matches" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                >
                  Match Details
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-slide-up">Recent News</h2>
            <Link 
              href="/news" 
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-all duration-300 transform hover:scale-105 animate-fade-in"
            >
              View All News <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((item, index) => (
              <div key={item.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up group" style={{animationDelay: `${index * 0.2}s`}}>
                <span className="text-sm text-gray-500 mb-3 block">{item.date}</span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.excerpt}</p>
                <Link 
                  href={`/news/${item.id}`} 
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-all duration-300 transform hover:translate-x-1"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Our Sponsors & Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are grateful for the support of our amazing sponsors and partners who make our success possible
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-12">
            {/* Platinum Sponsors */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Platinum Sponsors</h3>
              <div className="flex justify-center">
                <div className="border-4 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl max-w-xs">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-28 h-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded flex items-center justify-center text-white font-bold">
                        Karonga Council
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Karonga District Council</h4>
                    <p className="text-sm text-gray-600 mb-3">Official government partner supporting sports development</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold Sponsors */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-yellow-600">Gold Sponsors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-20 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        NBM
                      </div>
                    </div>
                    <h4 className="font-bold text-base mb-1">National Bank of Malawi</h4>
                    <p className="text-xs text-gray-600">Banking partner and financial services provider</p>
                  </div>
                </div>
                <div className="border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-20 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        Airtel
                      </div>
                    </div>
                    <h4 className="font-bold text-base mb-1">Airtel Malawi</h4>
                    <p className="text-xs text-gray-600">Telecommunications and connectivity partner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Silver & Bronze Sponsors */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-600">Supporting Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <div className="border-2 border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold">MSB</span>
                    </div>
                    <h4 className="font-bold text-sm">Malawi Savings Bank</h4>
                  </div>
                </div>
                <div className="border-2 border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold">Shoprite</span>
                    </div>
                    <h4 className="font-bold text-sm">Shoprite Malawi</h4>
                  </div>
                </div>
                <div className="border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold">Castel</span>
                    </div>
                    <h4 className="font-bold text-sm">Castel Malawi</h4>
                  </div>
                </div>
                <div className="border-2 border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white rounded flex items-center justify-center">
                      <span className="text-xs font-bold">+More</span>
                    </div>
                    <h4 className="font-bold text-sm">And More...</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div className="text-center mt-12 bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">Become a Sponsor</h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Partner with us to support volleyball development in Karonga and gain valuable exposure for your brand.
            </p>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              Contact Us About Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
