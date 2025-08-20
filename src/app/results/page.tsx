import MatchResultsTracker from '@/components/MatchResultsTracker';
import { Trophy, TrendingUp, Calendar, Target } from 'lucide-react';

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Match Results
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Track our performance and celebrate our victories on the volleyball court
            </p>
          </div>
        </div>
      </div>

      {/* Season Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2024 Season Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our journey through the current season with detailed match results, statistics, and performance insights.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">4</h3>
              <p className="text-gray-600">Wins</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">1</h3>
              <p className="text-gray-600">Loss</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">80%</h3>
              <p className="text-gray-600">Win Rate</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
              <p className="text-gray-600">Total Matches</p>
            </div>
          </div>

          {/* Match Results Tracker */}
          <div className="animate-slide-up" style={{animationDelay: '0.5s'}}>
            <MatchResultsTracker />
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
              Recent Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl animate-slide-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Cup Champions</h3>
                    <p className="text-gray-600">January 2024</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Dominated the Cup Final with a clean 3-0 victory against Mzuzu Mavericks, showcasing exceptional teamwork and skill.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl animate-slide-right">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Winning Streak</h3>
                    <p className="text-gray-600">Current Form</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Currently on a 3-match winning streak, demonstrating consistent performance and strong team chemistry.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl animate-bounce-in">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Upcoming Fixtures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">vs Lilongwe Lightning</h4>
                  <p className="text-gray-600">January 22, 2024</p>
                  <p className="text-gray-600">Away - Lilongwe Arena</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">vs Mzuzu Mavericks</h4>
                  <p className="text-gray-600">January 29, 2024</p>
                  <p className="text-gray-600">Home - Karonga Sports Complex</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">vs Blantyre Blazers</h4>
                  <p className="text-gray-600">February 5, 2024</p>
                  <p className="text-gray-600">Home - Karonga Sports Complex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}