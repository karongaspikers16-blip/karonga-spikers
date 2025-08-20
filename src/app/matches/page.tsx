'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

// Match data - in a real app, this would come from a database
const upcomingMatches = [
  {
    id: 1,
    opponent: "Mzuzu Hammers",
    date: "June 15, 2024",
    time: "14:00",
    location: "Karonga Stadium",
    isHome: true,
    tournamentName: "Northern Region League"
  },
  {
    id: 2,
    opponent: "Lilongwe Sharks",
    date: "June 22, 2024",
    time: "15:30",
    location: "Lilongwe Community Center",
    isHome: false,
    tournamentName: "Friendly Match"
  },
  {
    id: 3,
    opponent: "Blantyre Blazers",
    date: "July 5, 2024",
    time: "13:00",
    location: "Blantyre Sports Complex",
    isHome: false,
    tournamentName: "National Cup - Quarter Finals"
  },
];

const pastMatches = [
  {
    id: 101,
    opponent: "Mzuzu University",
    date: "May 28, 2024",
    score: { home: 3, away: 1 },
    location: "Karonga Stadium",
    isHome: true,
    tournamentName: "Northern Region League",
    result: "win"
  },
  {
    id: 102,
    opponent: "Nkhata Bay Waves",
    date: "May 15, 2024",
    score: { home: 3, away: 0 },
    location: "Karonga Stadium",
    isHome: true,
    tournamentName: "Northern Region League",
    result: "win"
  },
  {
    id: 103,
    opponent: "Zomba Power",
    date: "May 8, 2024",
    score: { home: 2, away: 3 },
    location: "Zomba Community Hall",
    isHome: false,
    tournamentName: "National Cup - Round of 16",
    result: "loss"
  },
  {
    id: 104,
    opponent: "Chitipa United",
    date: "April 30, 2024",
    score: { home: 3, away: 2 },
    location: "Karonga Stadium",
    isHome: true,
    tournamentName: "Northern Region League",
    result: "win"
  },
  {
    id: 105,
    opponent: "Mzimba Attackers",
    date: "April 22, 2024",
    score: { home: 1, away: 1 },
    location: "Mzimba Community Center",
    isHome: false,
    tournamentName: "Northern Region League",
    result: "draw"
  },
];

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Matches</h1>
          <p className="text-lg">Follow our journey through the season</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-6 font-medium text-lg ${activeTab === 'upcoming' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Upcoming Matches
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-6 font-medium text-lg ${activeTab === 'results' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Results
            </button>
          </div>
        </div>
      </div>

      {/* Matches Content */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'upcoming' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Matches</h2>
            {upcomingMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <span className="text-sm font-medium text-primary-600 mb-1 block">{match.tournamentName}</span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {match.isHome ? 'Karonga Spikers vs ' + match.opponent : match.opponent + ' vs Karonga Spikers'}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{match.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={`px-4 py-2 rounded-md ${match.isHome ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} font-medium`}>
                        {match.isHome ? 'Home' : 'Away'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'results' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Match Results</h2>
            {pastMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <span className="text-sm font-medium text-primary-600 mb-1 block">{match.tournamentName}</span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {match.isHome ? 'Karonga Spikers vs ' + match.opponent : match.opponent + ' vs Karonga Spikers'}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{match.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold mb-2">
                        {match.isHome ? match.score.home : match.score.away} - {match.isHome ? match.score.away : match.score.home}
                      </div>
                      <div className={`px-4 py-1 rounded-full text-sm font-medium ${match.result === 'win' ? 'bg-green-100 text-green-800' : match.result === 'loss' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {match.result === 'win' ? 'Win' : match.result === 'loss' ? 'Loss' : 'Draw'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}