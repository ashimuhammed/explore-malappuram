"use client";

import React from "react";
import { Compass, MapPin, Sparkles, Search, Mountain, Waves, Trees, Landmark } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectCategory: (cat: string) => void;
  totalSpotsCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectCategory,
  totalSpotsCount,
}) => {
  const quickCategories = [
    { name: "Hill View & Treks", icon: Mountain, color: "hover:border-emerald-400" },
    { name: "River View & Lakes", icon: Compass, color: "hover:border-teal-400" },
    { name: "Beaches & Coastal", icon: Waves, color: "hover:border-cyan-400" },
    { name: "Waterfalls", icon: Sparkles, color: "hover:border-blue-400" },
    { name: "Heritage & Culture", icon: Landmark, color: "hover:border-amber-400" },
    { name: "Forests & Wildlife", icon: Trees, color: "hover:border-green-400" },
  ];

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const spotsSection = document.getElementById("spots");
    if (spotsSection) {
      spotsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Deep Gradient Masks */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/spots/conolly-hero.jpg"
          alt="Nilambur Chaliyar Hanging Bridge, Malappuram"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow filter brightness-70"
        />
        {/* Layered overlays for dramatic contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1410] via-[#0b1410]/80 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-malabar-900/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* District Exclusivity Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-malabar-900/80 border border-malabar-500/40 text-malabar-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg backdrop-blur-md animate-bounce-subtle">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Exclusive To Malappuram District, Kerala</span>
          <span className="w-1.5 h-1.5 rounded-full bg-malabar-400 animate-ping" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Nila to Nilambur, <br />
          <span className="bg-gradient-to-r from-malabar-300 via-emerald-200 to-amber-300 bg-clip-text text-transparent">
            Explore Local Malappuram
          </span>
        </h1>

        {/* Malayalam Subtext & Description */}
        <p className="mt-4 text-base sm:text-lg text-emerald-200/90 font-medium max-w-2xl mx-auto">
          മനോഹരമായ മലനിരകളും പച്ചപ്പാർന്ന മഴക്കാടുകളും പുഴയും കടലും സംഗമിക്കുന്ന മലപ്പുറത്തിന്റെ സ്വന്തം വിനോദസഞ്ചാര കേന്ദ്രങ്ങൾ
        </p>

        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          From the mist-cloaked peaks of <strong>Kodikuthimala</strong> and the historic Zamorin ramparts of <strong>Kottakunnu</strong> to the 180-year-old teak canopies of <strong>Nilambur</strong> and the sacred sands of <strong>River Nila</strong> at Thirunavaya.
        </p>

        {/* Search Bar Input */}
        <form onSubmit={handleHeroSearch} className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center bg-[#13221b]/90 border border-emerald-700/50 rounded-2xl p-2 shadow-2xl backdrop-blur-md focus-within:border-malabar-400 focus-within:ring-2 focus-within:ring-malabar-500/20 transition-all">
            <Search className="w-5 h-5 text-emerald-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search spots, taluks (e.g. Nilambur, Kodikuthimala, waterfalls, boating)..."
              className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-base text-white placeholder-emerald-200/50 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-malabar-500 to-malabar-600 hover:from-malabar-400 hover:to-malabar-500 text-white font-semibold text-xs sm:text-sm shrink-0 shadow-lg shadow-malabar-900/40 hover:shadow-malabar-600/30 transition-all"
            >
              Search Spots
            </button>
          </div>
        </form>

        {/* Quick Category Jump Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs text-slate-400 font-medium mr-1">Quick Browse:</span>
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  onSelectCategory(cat.name);
                  const el = document.getElementById("spots");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-slate-200 text-xs hover:bg-emerald-900/70 transition-all ${cat.color}`}
              >
                <Icon className="w-3.5 h-3.5 text-malabar-400" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Statistics Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-emerald-900/40">
          <div className="text-center p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
            <span className="block text-2xl sm:text-3xl font-extrabold text-malabar-300">
              {totalSpotsCount}
            </span>
            <span className="text-xs text-slate-400">Strictly Malappuram Spots</span>
          </div>
          <div className="text-center p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300">
              9 Taluks
            </span>
            <span className="text-xs text-slate-400">All Regions Covered</span>
          </div>
          <div className="text-center p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-300">
              100% Free
            </span>
            <span className="text-xs text-slate-400">Open Public Travel Guides</span>
          </div>
          <div className="text-center p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
            <span className="block text-2xl sm:text-3xl font-extrabold text-teal-300">
              CCJ & Rails
            </span>
            <span className="text-xs text-slate-400">Direct Transit Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

