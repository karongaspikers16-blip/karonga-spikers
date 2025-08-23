'use client';

import { Instagram } from 'lucide-react';
import Image from 'next/image';

const instagramPosts = [
  {
    id: 1,
    image: "/placeholder-instagram-1.jpg",
    caption: "Training hard for the upcoming championship! 💪 #KarongaSpikers #VolleyballLife",
    likes: 234,
    comments: 18,
    date: "2 days ago"
  },
  {
    id: 2,
    image: "/placeholder-instagram-2.jpg",
    caption: "Congratulations to our U18 team for winning the regional tournament! 🏆 #ProudMoment",
    likes: 456,
    comments: 32,
    date: "5 days ago"
  },
  {
    id: 3,
    image: "/placeholder-instagram-3.jpg",
    caption: "Team bonding session at the beach! Great team spirit 🌊 #TeamWork",
    likes: 189,
    comments: 12,
    date: "1 week ago"
  },
  {
    id: 4,
    image: "/placeholder-instagram-4.jpg",
    caption: "New training equipment arrived! Ready to level up our game 🏐",
    likes: 312,
    comments: 25,
    date: "1 week ago"
  }
];

export default function InstagramFeedSection() {
  return (
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
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Instagram Post</span>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-center p-4">
                    <p className="text-sm mb-2 line-clamp-3">{post.caption}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
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
  );
}
