"use client";

import React from "react";
import { TouristSpot } from "@/data/spots";
import { MapPin, Clock, Ticket, Star, Heart, ArrowUpRight, Sparkles } from "lucide-react";

interface SpotCardProps {
  spot: TouristSpot;
  onOpenDetails: (spot: TouristSpot) => void;
  isSaved: boolean;
  onToggleSave: (spotId: string) => void;
}

export const SpotCard: React.FC<SpotCardProps> = ({
  spot,
  onOpenDetails,
  isSaved,
  onToggleSave,
}) => {
  return (
    <div className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-emerald-900/40 relative">
      <div>
        {/* Image Container with Badges */}
        <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
          <img
            src={spot.heroImage}
            alt={spot.name}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101e18] via-transparent to-black/30" />

          {/* Taluk badge */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-malabar-400" />
              {spot.taluk}
            </span>
            {spot.isMustVisit && (
              <span className="px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-500/90 text-black flex items-center gap-1 shadow-md">
                <Sparkles className="w-2.5 h-2.5" />
                Must Visit
              </span>
            )}
          </div>

          {/* Wishlist toggle button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(spot.id);
            }}
            aria-label={isSaved ? "Remove from saved" : "Save spot"}
            className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all ${
              isSaved
                ? "bg-rose-500 text-white shadow-lg shadow-rose-900/50 scale-105"
                : "bg-black/50 text-slate-200 hover:text-white hover:bg-black/80"
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? "fill-white" : ""}`} />
          </button>

          {/* Category Chip at bottom of image */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-malabar-900/80 text-malabar-300 border border-malabar-600/40 backdrop-blur-sm">
              {spot.category}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-xs font-bold text-amber-300 border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{spot.rating}</span>
            <span className="text-[10px] text-slate-400 font-normal">({spot.reviewsCount})</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          {/* Malayalam Name */}
          <div className="text-xs font-semibold text-malabar-400 mb-0.5">
            {spot.malayalamName}
          </div>

          {/* Main Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-malabar-300 transition-colors line-clamp-1">
            {spot.name}
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {spot.tagline}
          </p>

          {/* Quick Info Grid */}
          <div className="mt-4 pt-3 border-t border-emerald-950 flex flex-wrap gap-y-2 gap-x-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5" title="Operating Timings">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate max-w-[170px]">{spot.timings.split("(")[0]}</span>
            </div>
            <div className="flex items-center gap-1.5" title="Entry Charges">
              <Ticket className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate max-w-[170px]">{spot.entryFee}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0">
        <button
          onClick={() => onOpenDetails(spot)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-900/40 hover:bg-malabar-600 border border-emerald-700/50 hover:border-malabar-400 text-emerald-200 hover:text-white text-xs font-bold transition-all shadow-sm group-hover:shadow-malabar-900/40"
        >
          <span>Explore Details & Route</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

