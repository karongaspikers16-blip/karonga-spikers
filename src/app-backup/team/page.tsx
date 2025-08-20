'use client';

import Image from 'next/image';
import { useState } from 'react';

// -----------------
// Type Definitions
// -----------------
type Player = {
  id: number;
  name: string;
  position: string;
  number: number;
  bio: string;
  imagePlaceholder: string;
};

type Coach = {
  id: number;
  name: string;
  position: string;
  bio: string;
  imagePlaceholder: string;
};

type TeamMember = Player | Coach;

// -----------------
// Team Data
// -----------------
const coaches: Coach[] = [
  {
    id: 1,
    name: "James Mwanza",
    position: "Head Coach",
    bio: "Former national team player with over 15 years of coaching experience. Led the team to multiple regional championships.",
    imagePlaceholder: "JM"
  },
  {
    id: 2,
    name: "Grace Nyirenda",
    position: "Assistant Coach",
    bio: "Specializes in player development and tactical analysis. Has been with the club since 2018.",
    imagePlaceholder: "GN"
  },
  {
    id: 3,
    name: "Peter Banda",
    position: "Strength & Conditioning",
    bio: "Certified fitness trainer focused on athletic performance and injury prevention.",
    imagePlaceholder: "PB"
  }
];

const players: Player[] = [
  {
    id: 1,
    name: "Chifundo Mbewe",
    position: "Outside Hitter",
    number: 7,
    bio: "Team captain and offensive powerhouse. Known for powerful spikes and leadership on the court.",
    imagePlaceholder: "CM"
  },
  // ... add the rest of your players here
];

// -----------------
// Component
// -----------------
export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<'players' | 'coaches'>('players');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Type-safe function
  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Team</h1>
          <p className="text-lg">Meet the talented individuals who make Karonga Spikers a winning team</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('players')}
              className={`py-4 px-6 font-medium text-lg ${activeTab === 'players' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Players
            </button>
            <button
              onClick={() => setActiveTab('coaches')}
              className={`py-4 px-6 font-medium text-lg ${activeTab === 'coaches' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Coaching Staff
            </button>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activeTab === 'players' && players.map((player) => (
            <div 
              key={player.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleMemberClick(player)}
            >
              <div className="h-64 bg-primary-100 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary-600 flex items-center justify-center text-white text-4xl font-bold">
                  {player.imagePlaceholder}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{player.name}</h3>
                  <span className="bg-primary-600 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {player.number}
                  </span>
                </div>
                <p className="text-primary-600 font-medium mb-2">{player.position}</p>
                <p className="text-gray-600 line-clamp-2">{player.bio}</p>
              </div>
            </div>
          ))}

          {activeTab === 'coaches' && coaches.map((coach) => (
            <div 
              key={coach.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleMemberClick(coach)}
            >
              <div className="h-64 bg-primary-100 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary-600 flex items-center justify-center text-white text-4xl font-bold">
                  {coach.imagePlaceholder}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{coach.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{coach.position}</p>
                <p className="text-gray-600 line-clamp-2">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h2>
                  <p className="text-primary-600 font-medium">{selectedMember.position}</p>
                </div>
                {'number' in selectedMember && (
                  <span className="bg-primary-600 text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    {selectedMember.number}
                  </span>
                )}
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>
              <div className="mb-6 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-primary-600 flex items-center justify-center text-white text-5xl font-bold">
                  {selectedMember.imagePlaceholder}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Biography</h3>
                <p className="text-gray-700">{selectedMember.bio}</p>
              </div>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex justify-end">
              <button 
                onClick={closeModal}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
