"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const FooterEnhanced = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-yellow-400">Karonga</span> Spikers
            </h3>
            <p className="text-blue-200">
              Excellence in volleyball, pride in our community. Join us in our journey to greatness.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/matches" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Matches
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-200">Karonga Stadium, Malawi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-200">+265 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-blue-200">info@karongaspikers.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Stay Connected</h4>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter for the latest updates and match schedules.
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 bg-blue-800 border border-blue-600 rounded-md text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400"
              />
              <button className="px-4 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            &copy; {currentYear} Karonga Spikers Volleyball Club. All rights reserved.
          </p>
          <p className="text-blue-200 mt-2">
            Excellence in volleyball, pride in our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEnhanced;
