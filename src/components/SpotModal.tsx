"use client";

import React, { useState } from "react";
import { TouristSpot } from "@/data/spots";
import {
  X,
  MapPin,
  Clock,
  Ticket,
  Calendar,
  Train,
  Plane,
  Navigation,
  Heart,
  CheckCircle2,
  Lightbulb,
  ExternalLink,
  Share2,
  Check,
} from "lucide-react";

interface SpotModalProps {
  spot: TouristSpot | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (spotId: string) => void;
}

export const SpotModal: React.FC<SpotModalProps> = ({
  spot,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!spot) return null;

  const currentImage = spot.gallery[activeImageIndex] || spot.heroImage;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${spot.name} - Explore Malappuram`,
          text: `Check out ${spot.name} in ${spot.taluk}, Malappuram!`,
          url: window.location.href,
        });
      } catch (e) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-[#0e1914] border border-emerald-800/60 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 text-slate-100 flex flex-col">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery / Image Header */}
        <div className="relative w-full h-72 sm:h-96 bg-black">
          <img
            src={currentImage}
            alt={spot.name}
            className="w-full h-full object-cover object-center transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1914] via-transparent to-black/40" />

          {/* Badges Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="text-sm font-bold text-malabar-300 drop-shadow-md">
                {spot.malayalamName}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-lg">
                {spot.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-malabar-500 text-white">
                  {spot.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-black/60 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-malabar-400" />
                  {spot.taluk} Taluk, Malappuram
                </span>
              </div>
            </div>

            {/* Save & Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-black/60 hover:bg-black/90 text-slate-200 border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5 text-xs font-semibold"
                title="Share spot"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedLink ? "Copied" : "Share"}</span>
              </button>

              <button
                onClick={() => onToggleSave(spot.id)}
                className={`p-2.5 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 text-xs font-semibold ${
                  isSaved
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-900/50"
                    : "bg-black/60 hover:bg-black/90 text-slate-200 border border-white/20"
                }`}
              >
                <Heart className={`w-4 h-4 ${isSaved ? "fill-white" : ""}`} />
                <span>{isSaved ? "Saved" : "Save Spot"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {spot.gallery && spot.gallery.length > 1 && (
          <div className="px-6 py-3 bg-[#0a120e] border-b border-emerald-950 flex gap-2.5 overflow-x-auto">
            {spot.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIndex === idx ? "border-malabar-400 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Main Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Tagline */}
          <p className="text-base sm:text-lg text-emerald-200/90 font-medium leading-relaxed italic border-l-4 border-malabar-400 pl-4">
            "{spot.tagline}"
          </p>

          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-emerald-900/40">
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Timings</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                {spot.timings}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Ticket className="w-3.5 h-3.5 text-amber-400" />
                <span>Entry Fee</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                {spot.entryFee}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>Best Season</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                {spot.bestTimeToVisit}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Train className="w-3.5 h-3.5 text-rose-400" />
                <span>Railway / Airport</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                {spot.nearestStation}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm uppercase font-bold tracking-wider text-malabar-400 mb-2">
              About This Local Destination
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {spot.description}
            </p>
          </div>

          {/* Historical Significance */}
          <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-2xl p-4 sm:p-5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-300 mb-1.5 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Heritage & Historical Significance</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {spot.historyHighlights}
            </p>
          </div>

          {/* Activities List */}
          <div>
            <h3 className="text-sm uppercase font-bold tracking-wider text-malabar-400 mb-3">
              Top Experiences & Activities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {spot.activities.map((act, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-900/40 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-malabar-400 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Local Pro Tips */}
          <div>
            <h3 className="text-sm uppercase font-bold tracking-wider text-amber-400 mb-3">
              Local Insider Tips
            </h3>
            <div className="space-y-2">
              {spot.tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-black/30 p-3 rounded-xl border border-emerald-900/20"
                >
                  <span className="text-amber-400 font-bold shrink-0">#{index + 1}</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Airport & Transit Note */}
          <div className="flex items-center gap-2 text-xs text-slate-400 p-3 bg-emerald-950/20 rounded-xl border border-emerald-900/30">
            <Plane className="w-4 h-4 text-malabar-400 shrink-0" />
            <span>
              Nearest Airport: <strong>{spot.nearestAirport}</strong> (Calicut International Airport CCJ is located right within Malappuram district at Karipur).
            </span>
          </div>

          {/* Action Navigation Footer */}
          <div className="pt-4 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Coordinates: {spot.locationCoords.lat}, {spot.locationCoords.lng}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={spot.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-malabar-500 to-malabar-600 hover:from-malabar-400 hover:to-malabar-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-malabar-900/50 transition-all hover:scale-105"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

