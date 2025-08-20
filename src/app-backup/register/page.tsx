import PlayerRegistrationForm from '@/components/PlayerRegistrationForm';
import { Users, Trophy, Heart } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Become part of Karonga Spikers and experience the thrill of competitive volleyball
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Community</h3>
              <p className="text-gray-600">
                Connect with passionate volleyball players and build lasting friendships
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Excellence</h3>
              <p className="text-gray-600">
                Train with experienced coaches and compete at the highest level
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health & Fitness</h3>
              <p className="text-gray-600">
                Improve your physical fitness while having fun and staying active
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <PlayerRegistrationForm />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
              What to Expect After Registration
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-slide-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Application Review</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Review of your application within 3-5 business days
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Phone or email contact to discuss your interest
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Invitation to attend a practice session
                  </li>
                </ul>
              </div>

              <div className="animate-slide-right">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Started</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Skills assessment during trial practice
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Team placement based on skill level
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Welcome package with team information
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl animate-bounce-in">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Training Schedule
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900">Beginners</h4>
                  <p className="text-gray-600">Tuesdays & Thursdays</p>
                  <p className="text-gray-600">6:00 PM - 8:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Intermediate</h4>
                  <p className="text-gray-600">Mondays & Wednesdays</p>
                  <p className="text-gray-600">7:00 PM - 9:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced</h4>
                  <p className="text-gray-600">Daily Training</p>
                  <p className="text-gray-600">5:30 PM - 8:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}