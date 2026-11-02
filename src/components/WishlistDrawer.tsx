"use client";

import React from "react";
import { TouristSpot, MALAPPURAM_SPOTS } from "@/data/spots";
import { X, Heart, MapPin, Trash2, ArrowUpRight, Printer, Navigation } from "lucide-react";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedSpotIds: string[];
  onRemoveSpot: (id: string) => void;
  onClearAll: () => void;
  onSelectSpot: (spot: TouristSpot) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  savedSpotIds,
  onRemoveSpot,
  onClearAll,
  onSelectSpot,
}) => {
  if (!isOpen) return null;

  const savedSpots = MALAPPURAM_SPOTS.filter((s) => savedSpotIds.includes(s.id));

  const handlePrint = () => {
    window.print();
  };

  const handleOpenGoogleMapsRoute = () => {
    if (savedSpots.length === 0) return;
    const coordsPath = savedSpots
      .map((s) => `${s.locationCoords.lat},${s.locationCoords.lng}`)
      .join("/");
    window.open(`https://www.google.com/maps/dir/${coordsPath}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#0e1914] border-l border-emerald-900/60 shadow-2xl h-full flex flex-col z-10 text-slate-100">
        {/* Header */}
        <div className="p-5 border-b border-emerald-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
            <h2 className="text-lg font-bold text-white">Your Saved Spots</h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              {savedSpots.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-emerald-900/40 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {savedSpots.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400/50 mb-3">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-300">No spots saved yet</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Tap the heart icon on any Malappuram destination to save it to your personalized travel wish list!
              </p>
            </div>
          ) : (
            savedSpots.map((spot) => (
              <div
                key={spot.id}
                className="p-3 rounded-2xl glass-card border border-emerald-900/40 flex items-center gap-3 group"
              >
                <img
                  src={spot.heroImage}
                  alt={spot.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-300 font-semibold mb-0.5">
                    <MapPin className="w-3 h-3 text-malabar-400" />
                    <span>{spot.taluk} Taluk</span>
                  </div>
                  <h4 className="text-sm font-bold text-white truncate group-hover:text-malabar-300 transition-colors">
                    {spot.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate">{spot.entryFee}</p>
                </div>

                <div className="flex flex-col gap-1 items-end">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectSpot(spot);
                    }}
                    className="p-1.5 rounded-lg text-emerald-400 hover:text-white hover:bg-emerald-800/50 transition-colors"
                    title="View details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveSpot(spot.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/50 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {savedSpots.length > 0 && (
          <div className="p-5 border-t border-emerald-900/40 space-y-2.5 bg-[#0a130f]">
            <button
              onClick={handleOpenGoogleMapsRoute}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-malabar-500 to-malabar-600 text-white font-bold text-xs shadow-lg shadow-malabar-900/50 hover:from-malabar-400 hover:to-malabar-500 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Route All Saved Spots on Maps</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-slate-200 text-xs font-semibold border border-emerald-800/40 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print List</span>
              </button>

              <button
                onClick={onClearAll}
                className="px-4 py-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 text-xs font-semibold border border-rose-800/40 transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

