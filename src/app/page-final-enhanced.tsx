'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Trophy, Users, ChevronRight, Star, Instagram, Mail, Send } from 'lucide-react';

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
    count: "8",
    description: "National team selections",
  },
];

const testimonials = [
  {
    name: "Sarah Mwale",
    role: "Team Captain",
    content: "Karonga Spikers has transformed my life. The coaching is world-class, and the team environment is incredibly supportive. We've achieved so much together!",
    rating: 5
  },
  {
    name: "James Banda",
    role: "Parent",
    content: "My daughter joined the youth program last year, and the improvement in her confidence and skills has been remarkable. The coaches truly care about each player's development.",
    rating: 5
  },
  {
    name: "Maria Chirwa",
    role: "Alumni Player",
    content: "The discipline and teamwork I learned at Karonga Spikers helped me succeed not just in volleyball, but in my academic and professional life. Forever grateful!",
    rating: 5
  }
];

export default function HomeFinalEnhanced() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Enhanced Styling */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
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
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
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

      {/* Features Section with Enhanced Cards */}
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

      {/* Upcoming Match Section with Enhanced Design */}
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

      {/* Recent News Section with Enhanced Cards */}
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

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              What People Say About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our players, parents, and community members about their experiences with Karonga Spikers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="h-8 w-8 text-pink-600 mr-2" />
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                Follow Us on Instagram
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest moments, behind-the-scenes content, and team highlights
            </p>
            <a 
              href="https://instagram.com/karongaspikers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-semibold"
            >
              @karongaspikers
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 1, caption: "Training hard for the upcoming championship! 💪", likes: 234, comments: 18 },
              { id: 2, caption: "Congratulations to our U18 team for winning the regional tournament! 🏆", likes: 456, comments: 32 },
              { id: 3, caption: "Team bonding session at the beach! Great team spirit 🌊", likes: 189, comments: 12 },
              { id: 4, caption: "New training equipment arrived! Ready to level up our game 🏐", likes: 312, comments: 25 }
            ].map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Instagram Post</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://instagram.com/karongaspikers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with Karonga Spikers
            </h2>
            
            <p className="text-xl mb-8 text-blue-200">
              Get the latest news, match updates, and exclusive content delivered straight to your inbox
            </p>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <p className="text-sm mt-4 text-blue-300">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Whether you're a player, coach, or supporter, there's a place for you in the Karonga Spikers family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              Join Our Team
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Sponsors & Partners</h2>
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
                      <div className="w-28 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white font-bold">
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
          <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
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
    </div>
  );
}
