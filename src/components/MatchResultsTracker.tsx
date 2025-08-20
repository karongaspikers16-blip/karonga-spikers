'use client';

import { useState } from 'react';
import { Calendar, MapPin, Trophy, Users, TrendingUp, Filter, Search } from 'lucide-react';

interface MatchResult {
  id: string;
  date: string;
  opponent: string;
  venue: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: string;
  sets: {
    set1: { home: number; away: number };
    set2: { home: number; away: number };
    set3: { home: number; away: number };
    set4?: { home: number; away: number };
    set5?: { home: number; away: number };
  };
  result: 'win' | 'loss';
  competition: string;
  highlights?: string[];
}

const matchResults: MatchResult[] = [
  {
    id: '1',
    date: '2024-01-15',
    opponent: 'Lilongwe Lightning',
    venue: 'Karonga Sports Complex',
    homeTeam: 'Karonga Spikers',
    awayTeam: 'Lilongwe Lightning',
    homeScore: 3,
    awayScore: '1',
    sets: {
      set1: { home: 25, away: 22 },
      set2: { home: 23, away: 25 },
      set3: { home: 25, away: 18 },
      set4: { home: 25, away: 20 }
    },
    result: 'win',
    competition: 'National League',
    highlights: ['Excellent serving by John Banda', 'Strong blocking performance']
  },
  {
    id: '2',
    date: '2024-01-08',
    opponent: 'Blantyre Blazers',
    venue: 'Blantyre Stadium',
    homeTeam: 'Blantyre Blazers',
    awayTeam: 'Karonga Spikers',
    homeScore: 3,
    awayScore: '2',
    sets: {
      set1: { home: 25, away: 27 },
      set2: { home: 25, away: 23 },
      set3: { home: 23, away: 25 },
      set4: { home: 25, away: 22 },
      set5: { home: 15, away: 12 }
    },
    result: 'loss',
    competition: 'National League',
    highlights: ['Close 5-set match', 'Great comeback attempt in set 3']
  },
  {
    id: '3',
    date: '2024-01-01',
    opponent: 'Mzuzu Mavericks',
    venue: 'Karonga Sports Complex',
    homeTeam: 'Karonga Spikers',
    awayTeam: 'Mzuzu Mavericks',
    homeScore: 3,
    awayScore: '0',
    sets: {
      set1: { home: 25, away: 18 },
      set2: { home: 25, away: 21 },
      set3: { home: 25, away: 16 }
    },
    result: 'win',
    competition: 'Cup Final',
    highlights: ['Dominant performance', 'Clean sweep victory', 'Championship winning match']
  },
  {
    id: '4',
    date: '2023-12-20',
    opponent: 'Zomba Zappers',
    venue: 'Zomba Arena',
    homeTeam: 'Zomba Zappers',
    awayTeam: 'Karonga Spikers',
    homeScore: 1,
    awayScore: '3',
    sets: {
      set1: { home: 25, away: 27 },
      set2: { home: 20, away: 25 },
      set3: { home: 25, away: 23 },
      set4: { home: 22, away: 25 }
    },
    result: 'win',
    competition: 'National League',
    highlights: ['Away victory', 'Strong finish in set 4']
  },
  {
    id: '5',
    date: '2023-12-15',
    opponent: 'Dedza Dynamos',
    venue: 'Karonga Sports Complex',
    homeTeam: 'Karonga Spikers',
    awayTeam: 'Dedza Dynamos',
    homeScore: 3,
    awayScore: '1',
    sets: {
      set1: { home: 25, away: 20 },
      set2: { home: 22, away: 25 },
      set3: { home: 25, away: 19 },
      set4: { home: 25, away: 17 }
    },
    result: 'win',
    competition: 'National League',
    highlights: ['Home crowd support', 'Consistent performance']
  }
];

const competitions = ['All', 'National League', 'Cup Final'];
const results = ['All', 'Win', 'Loss'];

export default function MatchResultsTracker() {
  const [selectedCompetition, setSelectedCompetition] = useState('All');
  const [selectedResult, setSelectedResult] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMatch, setSelectedMatch] = useState<MatchResult | null>(null);

  const filteredMatches = matchResults.filter(match => {
    const competitionMatch = selectedCompetition === 'All' || match.competition === selectedCompetition;
    const resultMatch = selectedResult === 'All' || 
      (selectedResult === 'Win' && match.result === 'win') ||
      (selectedResult === 'Loss' && match.result === 'loss');
    const searchMatch = searchTerm === '' || 
      match.opponent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.venue.toLowerCase().includes(searchTerm.toLowerCase());
    
    return competitionMatch && resultMatch && searchMatch;
  });

  const totalMatches = matchResults.length;
  const wins = matchResults.filter(match => match.result === 'win').length;
  const losses = matchResults.filter(match => match.result === 'loss').length;
  const winPercentage = Math.round((wins / totalMatches) * 100);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getSetScore = (sets: MatchResult['sets']) => {
    const setArray = [sets.set1, sets.set2, sets.set3, sets.set4, sets.set5].filter(Boolean);
    return setArray.map((set, index) => (
      <span key={index} className="text-sm text-gray-600">
        {set!.home}-{set!.away}
        {index < setArray.length - 1 && ', '}
      </span>
    ));
  };

  return (
    <div className="space-y-8">
      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Wins</p>
              <p className="text-3xl font-bold">{wins}</p>
            </div>
            <Trophy className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Total Losses</p>
              <p className="text-3xl font-bold">{losses}</p>
            </div>
            <Users className="w-8 h-8 text-red-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Win Rate</p>
              <p className="text-3xl font-bold">{winPercentage}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Matches</p>
              <p className="text-3xl font-bold">{totalMatches}</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-lg animate-slide-up">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <select
            value={selectedCompetition}
            onChange={(e) => setSelectedCompetition(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {competitions.map(comp => (
              <option key={comp} value={comp}>{comp}</option>
            ))}
          </select>

          <select
            value={selectedResult}
            onChange={(e) => setSelectedResult(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {results.map(result => (
              <option key={result} value={result}>{result}</option>
            ))}
          </select>

          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by opponent or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Match Results */}
      <div className="space-y-4">
        {filteredMatches.map((match, index) => (
          <div
            key={match.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedMatch(match)}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      match.result === 'win' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {match.result === 'win' ? 'WIN' : 'LOSS'}
                    </span>
                    <span className="text-sm text-gray-500">{match.competition}</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {match.homeTeam} vs {match.awayTeam}
                    </h3>
                    <div className="text-2xl font-bold text-primary-600">
                      {match.homeScore} - {match.awayScore}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(match.date)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {match.venue}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="text-sm text-gray-600 mb-1">Set Scores:</div>
                  <div className="space-x-2">
                    {getSetScore(match.sets)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <div className="text-gray-400 mb-4">
            <Trophy className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No matches found</h3>
          <p className="text-gray-500">Try adjusting your filters or search terms</p>
        </div>
      )}

      {/* Match Detail Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Match Details</h2>
                <button
                  onClick={() => setSelectedMatch(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedMatch.homeTeam} vs {selectedMatch.awayTeam}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 mb-4">
                    {selectedMatch.homeScore} - {selectedMatch.awayScore}
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(selectedMatch.date)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedMatch.venue}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Set by Set Breakdown</h4>
                  <div className="space-y-2">
                    {Object.entries(selectedMatch.sets).map(([setName, scores]) => (
                      scores && (
                        <div key={setName} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{setName.toUpperCase()}</span>
                          <span className="font-bold">{scores.home} - {scores.away}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
                
                {selectedMatch.highlights && selectedMatch.highlights.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Match Highlights</h4>
                    <ul className="space-y-2">
                      {selectedMatch.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}