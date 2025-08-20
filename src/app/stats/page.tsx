'use client';

import StatsDashboard from '@/components/StatsDashboard';

export default function StatsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">
            Team Statistics
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Performance metrics and achievements
          </p>
          <div className="w-24 h-1 bg-white mx-auto animate-scale-in"></div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <StatsDashboard />

      {/* Additional Insights */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-secondary-400 mb-2">5</div>
              <div className="text-lg font-medium">Championships Won</div>
              <div className="text-sm text-gray-400">Since 2019</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-secondary-400 mb-2">150+</div>
              <div className="text-lg font-medium">Matches Played</div>
              <div className="text-sm text-gray-400">Total career</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-secondary-400 mb-2">25</div>
              <div className="text-lg font-medium">Active Players</div>
              <div className="text-sm text-gray-400">Current roster</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}