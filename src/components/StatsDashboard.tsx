'use client';

import { useState } from 'react';
import { Trophy, TrendingUp, Users, Target, Calendar, Award } from 'lucide-react';

interface TeamStats {
  wins: number;
  losses: number;
  draws: number;
  totalMatches: number;
  winPercentage: number;
  setsWon: number;
  setsLost: number;
  pointsScored: number;
  pointsConceded: number;
}

interface PlayerStats {
  id: number;
  name: string;
  position: string;
  matchesPlayed: number;
  points: number;
  aces: number;
  blocks: number;
  digs: number;
}

const teamStats: TeamStats = {
  wins: 18,
  losses: 4,
  draws: 2,
  totalMatches: 24,
  winPercentage: 75,
  setsWon: 58,
  setsLost: 22,
  pointsScored: 1847,
  pointsConceded: 1432
};

const topPlayers: PlayerStats[] = [
  {
    id: 1,
    name: "John Banda",
    position: "Spiker",
    matchesPlayed: 22,
    points: 342,
    aces: 28,
    blocks: 45,
    digs: 89
  },
  {
    id: 2,
    name: "Mary Phiri",
    position: "Setter",
    matchesPlayed: 24,
    points: 156,
    aces: 15,
    blocks: 12,
    digs: 134
  },
  {
    id: 3,
    name: "Peter Mwale",
    position: "Libero",
    matchesPlayed: 23,
    points: 89,
    aces: 8,
    blocks: 3,
    digs: 198
  },
  {
    id: 4,
    name: "Grace Tembo",
    position: "Middle Blocker",
    matchesPlayed: 20,
    points: 234,
    aces: 12,
    blocks: 67,
    digs: 45
  }
];

const monthlyPerformance = [
  { month: 'Jan', wins: 3, losses: 1 },
  { month: 'Feb', wins: 4, losses: 0 },
  { month: 'Mar', wins: 3, losses: 2 },
  { month: 'Apr', wins: 4, losses: 1 },
  { month: 'May', wins: 4, losses: 0 },
  { month: 'Jun', wins: 0, losses: 0 }
];

export default function StatsDashboard() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'players' | 'performance'>('overview');

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'primary' }: {
    icon: any;
    title: string;
    value: string | number;
    subtitle?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning';
  }) => {
    const colorClasses = {
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      success: 'from-green-500 to-green-600',
      warning: 'from-yellow-500 to-yellow-600'
    };

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[color]} text-white`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Team Statistics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Track our performance and celebrate our achievements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {[
              { key: 'overview', label: 'Overview', icon: Trophy },
              { key: 'players', label: 'Top Players', icon: Users },
              { key: 'performance', label: 'Performance', icon: TrendingUp }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setSelectedTab(key as any)}
                className={`flex items-center px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  selectedTab === key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Trophy}
                title="Matches Won"
                value={teamStats.wins}
                subtitle={`${teamStats.winPercentage}% win rate`}
                color="success"
              />
              <StatCard
                icon={Target}
                title="Total Matches"
                value={teamStats.totalMatches}
                subtitle="This season"
                color="primary"
              />
              <StatCard
                icon={TrendingUp}
                title="Sets Won"
                value={teamStats.setsWon}
                subtitle={`vs ${teamStats.setsLost} lost`}
                color="secondary"
              />
              <StatCard
                icon={Award}
                title="Points Scored"
                value={teamStats.pointsScored.toLocaleString()}
                subtitle={`vs ${teamStats.pointsConceded.toLocaleString()} conceded`}
                color="warning"
              />
            </div>

            {/* Win/Loss Chart */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Season Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{teamStats.wins}</span>
                    </div>
                  </div>
                  <p className="font-semibold text-green-600">Wins</p>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{teamStats.losses}</span>
                    </div>
                  </div>
                  <p className="font-semibold text-red-600">Losses</p>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{teamStats.draws}</span>
                    </div>
                  </div>
                  <p className="font-semibold text-yellow-600">Draws</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Players Tab */}
        {selectedTab === 'players' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <h3 className="text-xl font-bold">Top Performers This Season</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Player</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Matches</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Points</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Aces</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Blocks</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Digs</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topPlayers.map((player, index) => (
                      <tr key={player.id} className="hover:bg-gray-50 transition-colors duration-200 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{player.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.position}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{player.matchesPlayed}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">{player.points}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{player.aces}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{player.blocks}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{player.digs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {selectedTab === 'performance' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Performance</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {monthlyPerformance.map((month, index) => (
                  <div key={month.month} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="text-sm font-medium text-gray-500 mb-2">{month.month}</div>
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-green-600">{month.wins}W</div>
                      <div className="text-lg font-bold text-red-600">{month.losses}L</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}