'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Users, Star, Calendar, Mail, Phone, MapPin } from 'lucide-react';

// Enhanced team data with detailed information
const teamMembers = [
  {
    id: 1,
    name: "James Mwale",
    position: "Team Captain & Outside Hitter",
    number: 7,
    height: "1.92m",
    weight: "85kg",
    experience: "5 years",
    achievements: ["Regional MVP 2023", "National Team Selection", "Top Scorer 2024"],
    image: "/api/placeholder/300/400",
    stats: { spikes: 245, blocks: 89, serves: 178 },
    bio: "James brings exceptional leadership and powerful attacking skills to the team. His dedication and strategic thinking make him an invaluable asset both on and off the court."
  },
  {
    id: 2,
    name: "Sarah Banda",
    position: "Libero",
    number: 1,
    height: "1.68m",
    weight: "62kg",
    experience: "4 years",
    achievements: ["Best Libero 2023", "Defensive Player of the Year"],
    image: "/api/placeholder/300/400",
    stats: { digs: 312, receptions: 445, aces: 23 },
    bio: "Sarah's incredible defensive skills and quick reflexes make her the backbone of our defense. Her ability to read the game is unmatched."
  },
  {
    id: 3,
    name: "David Phiri",
    position: "Middle Blocker",
    number: 12,
    height: "1.98m",
    weight: "95kg",
    experience: "6 years",
    achievements: ["Best Blocker 2022-2024", "All-Star Team Selection"],
    image: "/api/placeholder/300/400",
    stats: { blocks: 156, spikes: 189, serves: 67 },
    bio: "David's imposing presence at the net and exceptional blocking ability make him a formidable opponent. His experience brings stability to the team."
  },
  {
    id: 4,
    name: "Grace Moyo",
    position: "Setter",
    number: 5,
    height: "1.75m",
    weight: "68kg",
    experience: "5 years",
    achievements: ["Best Setter 2023", "Team Playmaker Award"],
    image: "/api/placeholder/300/400",
    stats: { assists: 567, blocks: 45, serves: 123 },
    bio: "Grace's precision setting and court vision create countless scoring opportunities. Her leadership and communication skills are vital to our offensive strategy."
  },
  {
    id: 5,
    name: "Michael Tembo",
    position: "Opposite Hitter",
    number: 10,
    height: "1.90m",
    weight: "88kg",
    experience: "4 years",
    achievements: ["Rising Star 2023", "Most Improved Player"],
    image: "/api/placeholder/300/400",
    stats: { spikes: 198, blocks: 78, serves: 145 },
    bio: "Michael's powerful attacks from the right side and consistent performance make him a key offensive weapon. His dedication to improvement is inspiring."
  },
  {
    id: 6,
    name: "Linda Chirwa",
    position: "Outside Hitter",
    number: 8,
    height: "1.80m",
    weight: "72kg",
    experience: "3 years",
    achievements: ["Rookie of the Year 2023", "All-Tournament Team"],
    image: "/api/placeholder/300/400",
    stats: { spikes: 167, blocks: 56, serves: 89 },
    bio: "Linda's versatility and powerful attacks from the left side make her a consistent threat. Her energy and enthusiasm lift the entire team."
  }
];

const coachingStaff = [
  {
    name: "Coach Peter Mwansa",
    role: "Head Coach",
    experience: "15 years",
    achievements: ["5 Regional Championships", "National Coach of the Year 2023"],
    image: "/api/placeholder/300/400",
    bio: "With 15 years of coaching experience, Peter brings strategic expertise and player development skills that have transformed our team into champions."
  },
  {
    name: "Coach Anna Kaunda",
    role: "Assistant Coach",
    experience: "10 years",
    achievements: ["Youth Development Expert", "Technical Coach Award"],
    image: "/api/placeholder/300/400",
    bio: "Anna specializes in technical skills and youth development. Her attention to detail and innovative training methods have elevated our team's performance."
  }
];

const teamStats = {
  championships: 5,
  nationalAppearances: 3,
  playersSelected: 8,
  winRate: 78
};

export default function TeamPageEnhanced() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto">
              Excellence in volleyball, dedication to the sport, and pride in our community
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">{teamStats.championships}</div>
                <div className="text-blue-200">Championships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{teamStats.nationalAppearances}</div>
                <div className="text-blue-200">National Appearances</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{teamStats.playersSelected}</div>
                <div className="text-blue-200">Players Selected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{teamStats.winRate}%</div>
                <div className="text-blue-200">Win Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-blue-900">
            Our Players
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((player) => (
              <div key={player.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-900">{player.number}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    #{player.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{player.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-2">{player.position}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div>Height: {player.height}</div>
                    <div>Weight: {player.weight}</div>
                    <div>Experience: {player.experience}</div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Stats</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-blue-900">{player.stats.spikes || player.stats.digs || player.stats.assists}</div>
                        <div className="text-gray-600 text-xs">{player.position.includes('Hitter') ? 'Spikes' : player.position.includes('Libero') ? 'Digs' : 'Assists'}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-900">{player.stats.blocks || player.stats.receptions || player.stats.blocks}</div>
                        <div className="text-gray-600 text-xs">Blocks</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-900">{player.stats.serves || player.stats.aces || player.stats.serves}</div>
                        <div className="text-gray-600 text-xs">Serves</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Achievements</h4>
                    <div className="flex flex-wrap gap-1">
                      {player.achievements.map((achievement, index) => (
                        <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{player.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-blue-900">
            Coaching Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coachingStaff.map((coach) => (
              <div key={coach.name} className="bg-gray-50 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{coach.name}</h3>
                    <p className="text-yellow-600 font-semibold">{coach.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Experience</h4>
                  <p className="text-gray-600">{coach.experience}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Achievements</h4>
                  <div className="flex flex-wrap gap-1">
                    {coach.achievements.map((achievement, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Interested in Joining Our Team?
            </h2>
            <p className="text-xl mb-8 text-blue-200">
              Whether you're a player, coach, or supporter, there's a place for you in the Karonga Spikers family.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-6 w-6 text-yellow-400" />
                <span>+265 123 456 789</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-6 w-6 text-yellow-400" />
                <span>info@karongaspikers.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <span>Karonga Stadium</span>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
