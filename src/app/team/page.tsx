'use client';

import Image from 'next/image';
import { useState } from 'react';

// Team data - in a real app, this would come from a database
const coaches = [
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

const players = [
  {
    id: 1,
    name: "Chifundo Mbewe",
    position: "Outside Hitter",
    number: 7,
    bio: "Team captain and offensive powerhouse. Known for powerful spikes and leadership on the court.",
    imagePlaceholder: "CM"
  },
  {
    id: 2,
    name: "Blessings Gondwe",
    position: "Setter",
    number: 3,
    bio: "Playmaker with exceptional ball handling skills. Controls the team's offensive rhythm.",
    imagePlaceholder: "BG"
  },
  {
    id: 3,
    name: "Kondwani Phiri",
    position: "Middle Blocker",
    number: 12,
    bio: "Defensive specialist with impressive vertical leap. Leads the team in blocks per set.",
    imagePlaceholder: "KP"
  },
  {
    id: 4,
    name: "Yamikani Mhango",
    position: "Libero",
    number: 1,
    bio: "Agile defender with lightning-fast reflexes. Exceptional at receiving serves and defensive digs.",
    imagePlaceholder: "YM"
  },
  {
    id: 5,
    name: "Chimwemwe Banda",
    position: "Outside Hitter",
    number: 9,
    bio: "Versatile player known for consistent performance and powerful jump serve.",
    imagePlaceholder: "CB"
  },
  {
    id: 6,
    name: "Thoko Nyasulu",
    position: "Opposite Hitter",
    number: 15,
    bio: "Powerful attacker with a strong right-hand spike. Key scorer in critical moments.",
    imagePlaceholder: "TN"
  },
  {
    id: 7,
    name: "Mphatso Kamanga",
    position: "Middle Blocker",
    number: 8,
    bio: "Rising talent with exceptional blocking ability and quick attacks from the middle.",
    imagePlaceholder: "MK"
  },
  {
    id: 8,
    name: "Dalitso Mbewe",
    position: "Setter",
    number: 5,
    bio: "Backup setter with precise ball placement and tactical serving.",
    imagePlaceholder: "DM"
  },
  {
    id: 9,
    name: "Innocent Mtambo",
    position: "Outside Hitter",
    number: 11,
    bio: "Young talent with impressive jumping ability and developing all-around skills.",
    imagePlaceholder: "IM"
  },
  {
    id: 10,
    name: "Wongani Chisale",
    position: "Libero",
    number: 2,
    bio: "Defensive specialist with excellent court awareness and passing accuracy.",
    imagePlaceholder: "WC"
  },
  {
    id: 11,
    name: "Precious Kaunda",
    position: "Middle Blocker",
    number: 14,
    bio: "Tall and athletic with a natural talent for blocking and quick attacks.",
    imagePlaceholder: "PK"
  },
  {
    id: 12,
    name: "Tamandani Msiska",
    position: "Opposite Hitter",
    number: 10,
    bio: "Powerful server with a strong attack from the back row.",
    imagePlaceholder: "TM"
  }
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('players');
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
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
              {/* Additional information could be added here */}
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