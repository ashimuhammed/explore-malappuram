"use client";

import React, { useState, useEffect } from "react";
import { Compass, Heart, MapPin, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  savedCount: number;
  onOpenWishlist: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ savedCount, onOpenWishlist, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore Spots", href: "#spots" },
    { name: "Curated Trails", href: "#itineraries" },
    { name: "Local Flavors", href: "#cuisine" },
    { name: "Travel Essentials", href: "#travel-tips" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c1813]/90 backdrop-blur-md border-b border-emerald-900/40 shadow-lg py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Malappuram badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-malabar-400 to-malabar-700 flex items-center justify-center shadow-lg shadow-malabar-900/40 border border-malabar-300/30 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-malabar-300 transition-colors">
                  MALAPPURAM
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-malabar-500/20 text-malabar-300 border border-malabar-500/30 rounded-full">
                  100% Local Only
                </span>
              </div>
              <p className="text-xs text-emerald-300/70 font-medium">
                എന്റെ മലപ്പുറം • Heritage & Wild Trails
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-malabar-300 transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Wishlist & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenWishlist}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-700/40 text-xs font-semibold shadow-inner transition-all hover:scale-105 active:scale-95"
              title="Saved Local Spots"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? "text-rose-400 fill-rose-400" : "text-emerald-300"}`} />
              <span className="hidden sm:inline">Saved Spots</span>
              {savedCount > 0 && (
                <span className="w-5 h-5 flex items-center justify-center text-[11px] font-bold bg-rose-500 text-white rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            <a
              href="#spots"
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-malabar-500 to-malabar-600 hover:from-malabar-400 hover:to-malabar-500 text-white text-xs font-bold shadow-md shadow-malabar-900/50 hover:shadow-malabar-600/30 transition-all hover:scale-105"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Explore Places</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-emerald-950/60 border border-emerald-800/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1813]/98 border-b border-emerald-900/60 px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-xl animate-in slide-in-from-top-4">
          <div className="px-2 pb-2 border-b border-emerald-900/40 flex items-center justify-between">
            <span className="text-xs uppercase font-bold text-malabar-400">Navigation</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/40">
              Malappuram District
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-malabar-300 hover:bg-emerald-900/30 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#spots"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-malabar-500 to-malabar-600 text-white text-sm font-bold shadow-md"
          >
            <Compass className="w-4 h-4" />
            Discover All 15+ Local Spots
          </a>
        </div>
      )}
    </nav>
  );
};

