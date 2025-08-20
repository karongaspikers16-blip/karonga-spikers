'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Karonga Spikers</h3>
            <p className="mb-4">Karonga Spikers is a premier volleyball club based in Karonga, Malawi. We are committed to excellence in volleyball and developing talented players.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-secondary-300 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/matches" className="hover:text-secondary-300 transition-colors">
                  Matches
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-secondary-300 transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-secondary-300 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p>Karonga Stadium</p>
              <p>Karonga, Malawi</p>
              <p>Phone: +265 123 456 789</p>
              <p>Email: info@karongaspikers.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-700 pt-6 text-center">
          <p>&copy; {currentYear} Karonga Spikers Volleyball Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
