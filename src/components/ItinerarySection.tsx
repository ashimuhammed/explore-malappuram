"use client";

import React, { useState } from "react";
import { CURATED_ITINERARIES, DayItinerary } from "@/data/itineraries";
import { MALAPPURAM_SPOTS, TouristSpot } from "@/data/spots";
import {
  Compass,
  Clock,
  Users,
  Sparkles,
  MapPin,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Plus,
  Trash2,
} from "lucide-react";

interface ItinerarySectionProps {
  onSelectSpot: (spot: TouristSpot) => void;
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ onSelectSpot }) => {
  const [activeTab, setActiveTab] = useState<string>(CURATED_ITINERARIES[0].id);
  const [selectedCustomSpots, setSelectedCustomSpots] = useState<string[]>([
    "kottakunnu",
    "kodikuthimala",
    "padinharekara-beach",
  ]);

  const activeItinerary =
    CURATED_ITINERARIES.find((it) => it.id === activeTab) || CURATED_ITINERARIES[0];

  const handleToggleCustomSpot = (id: string) => {
    if (selectedCustomSpots.includes(id)) {
      setSelectedCustomSpots(selectedCustomSpots.filter((s) => s !== id));
    } else {
      if (selectedCustomSpots.length < 5) {
        setSelectedCustomSpots([...selectedCustomSpots, id]);
      }
    }
  };

  return (
    <section id="itineraries" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-malabar-900/60 border border-malabar-500/30 text-malabar-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-malabar-400" />
            <span>Curated Local Travel Circuits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perfect Malappuram Day Trips
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose from professionally curated full-day corridors crafted strictly within Malappuram district, or assemble your own custom itinerary.
          </p>
        </div>

        {/* Trail Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CURATED_ITINERARIES.map((itinerary) => {
            const isActive = activeTab === itinerary.id;
            return (
              <button
                key={itinerary.id}
                onClick={() => setActiveTab(itinerary.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                  isActive
                    ? "bg-gradient-to-r from-malabar-500 to-malabar-600 text-white shadow-xl shadow-malabar-900/50 border border-malabar-400"
                    : "glass-panel-subtle text-slate-300 hover:text-white hover:bg-emerald-950/60"
                }`}
              >
                <Sparkles className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-malabar-400"}`} />
                <span>{itinerary.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Curated Itinerary Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-900/60 relative overflow-hidden">
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-emerald-900/50">
            <div>
              <span className="text-xs font-bold text-malabar-400 uppercase tracking-wider block mb-1">
                Featured Corridor
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeItinerary.title}
              </h3>
              <p className="mt-1 text-sm text-slate-300 max-w-2xl">
                {activeItinerary.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-emerald-800/40 text-xs font-medium text-emerald-300">
                <Clock className="w-3.5 h-3.5 text-malabar-400" />
                <span>{activeItinerary.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-emerald-800/40 text-xs font-medium text-amber-300">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeItinerary.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Timeline of Stops */}
          <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-malabar-500 before:via-emerald-700 before:to-transparent">
            {activeItinerary.stops.map((stop, idx) => {
              const matchedSpot = MALAPPURAM_SPOTS.find((s) => s.id === stop.spotId);
              return (
                <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Timeline Badge */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-[#0c1813] border-2 border-malabar-400 flex items-center justify-center shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-[11px] sm:text-xs font-extrabold text-malabar-300">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Stop Card */}
                  <div className="flex-1 glass-card p-4 sm:p-6 rounded-2xl border border-emerald-900/40">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-malabar-900/80 text-malabar-300 border border-malabar-600/30">
                        {stop.time}
                      </span>
                      {matchedSpot && (
                        <button
                          onClick={() => onSelectSpot(matchedSpot)}
                          className="text-xs text-emerald-400 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                        >
                          <span>View Spot Info</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-malabar-300 transition-colors">
                      {stop.name}
                    </h4>

                    <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {stop.activity}
                    </p>

                    {/* Local tip badge */}
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-950/40 border border-amber-800/40 px-3 py-1.5 rounded-xl">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>
                        <strong>Insider Tip:</strong> {stop.localTip}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Malappuram Itinerary Generator */}
        <div className="mt-14 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-900/60">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-malabar-400" />
                <span>Build Your Own Malappuram Day Itinerary</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Pick up to 5 destinations from Malappuram to craft your personalized day schedule.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-malabar-500/20 text-malabar-300 border border-malabar-500/40">
              {selectedCustomSpots.length}/5 Selected
            </span>
          </div>

          {/* Quick Select Chips */}
          <div className="flex flex-wrap gap-2 my-4">
            {MALAPPURAM_SPOTS.map((s) => {
              const isSelected = selectedCustomSpots.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => handleToggleCustomSpot(s.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-malabar-500 text-white shadow-md border border-malabar-400"
                      : "bg-emerald-950/60 text-slate-300 hover:text-white border border-emerald-800/30"
                  }`}
                >
                  {isSelected ? <CheckCircle2 className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  <span>{s.name}</span>
                  <span className="text-[10px] opacity-75">({s.taluk})</span>
                </button>
              );
            })}
          </div>

          {/* Custom Route Sequence */}
          {selectedCustomSpots.length > 0 && (
            <div className="mt-6 pt-5 border-t border-emerald-900/40">
              <h4 className="text-xs uppercase font-bold text-malabar-400 tracking-wider mb-3">
                Your Customized Route Order
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedCustomSpots.map((spotId, idx) => {
                  const s = MALAPPURAM_SPOTS.find((sp) => sp.id === spotId);
                  if (!s) return null;
                  return (
                    <div
                      key={s.id}
                      className="p-3 rounded-xl bg-black/40 border border-emerald-800/40 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <span className="w-6 h-6 rounded-lg bg-malabar-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div className="truncate">
                          <p className="text-xs font-bold text-white truncate">{s.name}</p>
                          <p className="text-[11px] text-emerald-300/80">{s.taluk} Taluk</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleToggleCustomSpot(s.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 transition-colors"
                        title="Remove stop"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Action trigger */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/${selectedCustomSpots
                      .map((id) => {
                        const s = MALAPPURAM_SPOTS.find((item) => item.id === id);
                        return s ? `${s.locationCoords.lat},${s.locationCoords.lng}` : "";
                      })
                      .filter(Boolean)
                      .join("/")}`;
                    window.open(googleMapsDirectionsUrl, "_blank");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-malabar-500 to-malabar-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-malabar-900/40 hover:scale-105 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Full Multi-Stop Route in Google Maps</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

