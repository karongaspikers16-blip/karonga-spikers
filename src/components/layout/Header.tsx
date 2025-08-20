"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white p-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Karonga Spikers
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/team">Team</Link>
        <Link href="/matches">Matches</Link>
        <Link href="/results">Results</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/sponsors">Sponsors</Link>
        <Link href="/stats">Statistics</Link>
        <Link href="/register">Register</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Mobile toggle */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(v => !v)} aria-label="Toggle menu">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 w-full bg-blue-900 md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link href="/matches" onClick={() => setIsMenuOpen(false)}>Matches</Link>
            <Link href="/results" onClick={() => setIsMenuOpen(false)}>Results</Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/sponsors" onClick={() => setIsMenuOpen(false)}>Sponsors</Link>
            <Link href="/stats" onClick={() => setIsMenuOpen(false)}>Statistics</Link>
            <Link href="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
            <Link href="/news" onClick={() => setIsMenuOpen(false)}>News</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
