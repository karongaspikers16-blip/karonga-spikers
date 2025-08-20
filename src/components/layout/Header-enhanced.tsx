"use client";

import Link from "next/link";
import { Menu, X, Trophy } from "lucide-react";
import { useState } from "react";

const HeaderEnhanced = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold tracking-tight hover:text-yellow-400 transition-colors">
          <Trophy className="h-8 w-8 text-yellow-400" />
          <span>
            <span className="text-yellow-400">Karonga</span> Spikers
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-yellow-400 transition-colors font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/team" className="hover:text-yellow-400 transition-colors font-medium relative group">
            Team
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/matches" className="hover:text-yellow-400 transition-colors font-medium relative group">
            Matches
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/news" className="hover:text-yellow-400 transition-colors font-medium relative group">
            News
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors font-medium relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-blue-700 transition-colors" 
          onClick={() => setIsMenuOpen(v => !v)} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 w-full bg-blue-900 md:hidden z-50 shadow-xl">
            <nav className="flex flex-col items-center gap-4 py-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors py-2">
                Home
              </Link>
              <Link href="/team" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors py-2">
                Team
              </Link>
              <Link href="/matches" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors py-2">
                Matches
              </Link>
              <Link href="/news" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors py-2">
                News
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400 transition-colors py-2">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderEnhanced;
