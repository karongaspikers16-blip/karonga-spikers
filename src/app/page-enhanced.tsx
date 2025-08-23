'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Trophy, Users, ChevronRight, Star } from 'lucide-react';

// Enhanced data with team colors
const upcomingMatch = {
  opponent: "Mzuzu Hammers",
  date: "June 15, 2024",
  time: "14:00",
  location: "Karonga Stadium",
  competition: "Regional Championship",
};

const recentNews = [
  {
    id: 1,
    title: "Karonga Spikers Win Regional Championship",
    date: "May 28, 2024",
    excerpt: "The team secured a decisive victory in the final match against Mzuzu Hammers, bringing home the regional championship trophy.",
    category: "Championship",
  },
  {
    id: 2,
    title: "New Training Program Launched for Youth Players",
    date: "May 15, 2024",
    excerpt: "Our club is proud to announce a new development program aimed at nurturing young volleyball talent in Karonga.",
    category: "Development",
  },
  {
    id: 3,
    title: "Team Captain Selected for National Squad",
    date: "May 3, 2024",
    excerpt: "We're proud to announce that our team captain has been selected to represent Malawi in the upcoming African Championships.",
    category: "National Team",
  },
];

const achievements = [
  {
    title: "Regional Champions",
    count: "5x",
    description: "Consecutive regional championships",
  },
  {
    title: "National Finalists",
    count: "3x",
    description: "National tournament appearances",
  },
  {
    title: "Players Selected",
    count: "8x",
    description: "National team selections",
  },
];

export default function HomeEnhanced() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fadeInUp">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">Karonga</span> Spikers
                <br />
                <span className="text-2xl lg:text-3xl font-normal">Volleyball Club</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-200">
                Excellence in volleyball, pride in our community
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/team" 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/matches" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  View Matches
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-56 h-56 lg:w-72 lg:h-72 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl font-bold text-yellow-400">KS</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Est. 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-blue-900">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">{achievement.count}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-blue-900">
            Why Choose Karonga Spikers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Championship Legacy</h3>
              <p className="text-gray-600">
                Multiple regional championships and national tournament appearances. Our track record speaks for itself.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Elite Coaching</h3>
              <p className="text-gray-600">
                Experienced coaches dedicated to player development and team success. We invest in our players' futures.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                Committed to developing volleyball in Karonga and supporting local youth through sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Match Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Next Match</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Karonga Spikers vs {upcomingMatch.opponent}
                </h3>
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-yellow-400" />
                    <span>{upcomingMatch.date}</span>
                  </div>
                  <span className="text-yellow-400">•</span>
                  <span>{upcomingMatch.time}</span>
                </div>
                <p className="text-blue-200 mt-2">{upcomingMatch.location}</p>
                <p className="text-sm text-blue-300 mt-1">{upcomingMatch.competition}</p>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="/matches" 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center"
                >
                  View Match Details <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-0">
              Latest News
            </h2>
            <Link 
              href="/news" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center"
            >
              View All News <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link 
                    href={`/news/${item.id}`} 
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Sections */}
      <TestimonialsSection />
      <InstagramFeedSection />
      <NewsletterSection />

    </div>
  );
}

/* Placeholder components to prevent build errors */
function TestimonialsSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Testimonials</h2>
      <p className="text-gray-600">User testimonials will go here.</p>
    </section>
  );
}

function InstagramFeedSection() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Instagram Feed</h2>
      <p className="text-gray-600">Instagram posts will go here.</p>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-16 bg-blue-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-4">Get the latest news and updates from Karonga Spikers.</p>
      <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300">
        Subscribe
      </button>
    </section>
  );
}
