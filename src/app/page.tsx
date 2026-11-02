"use client";

import React, { useState, useMemo, useEffect } from "react";
import { MALAPPURAM_SPOTS, TouristSpot } from "@/data/spots";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { SpotCard } from "@/components/SpotCard";
import { SpotModal } from "@/components/SpotModal";
import { ItinerarySection } from "@/components/ItinerarySection";
import { FoodSection } from "@/components/FoodSection";
import { TravelTips } from "@/components/TravelTips";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { Footer } from "@/components/Footer";
import { Compass, Sparkles, MapPin } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTaluk, setSelectedTaluk] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mustVisitOnly, setMustVisitOnly] = useState<boolean>(false);
  const [activeSpot, setActiveSpot] = useState<TouristSpot | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [savedSpotIds, setSavedSpotIds] = useState<string[]>([]);

  // Load saved wishlist from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("malappuram_saved_spots");
      if (stored) {
        setSavedSpotIds(JSON.parse(stored));
      } else {
        // default with two iconic spots
        setSavedSpotIds(["kottakunnu", "kodikuthimala"]);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Sync saved wishlist
  const handleToggleSave = (spotId: string) => {
    let updated: string[];
    if (savedSpotIds.includes(spotId)) {
      updated = savedSpotIds.filter((id) => id !== spotId);
    } else {
      updated = [...savedSpotIds, spotId];
    }
    setSavedSpotIds(updated);
    try {
      localStorage.setItem("malappuram_saved_spots", JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleClearAllSaved = () => {
    setSavedSpotIds([]);
    try {
      localStorage.removeItem("malappuram_saved_spots");
    } catch (e) {
      // ignore
    }
  };

  // Filtered spots calculation
  const filteredSpots = useMemo(() => {
    return MALAPPURAM_SPOTS.filter((spot) => {
      // Category filter
      if (selectedCategory !== "All" && spot.category !== selectedCategory) {
        return false;
      }

      // Taluk filter
      if (selectedTaluk !== "All" && spot.taluk !== selectedTaluk) {
        return false;
      }

      // Must Visit filter
      if (mustVisitOnly && !spot.isMustVisit) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const inName = spot.name.toLowerCase().includes(query);
        const inMalayalam = spot.malayalamName.toLowerCase().includes(query);
        const inTaluk = spot.taluk.toLowerCase().includes(query);
        const inCategory = spot.category.toLowerCase().includes(query);
        const inTagline = spot.tagline.toLowerCase().includes(query);
        const inDesc = spot.description.toLowerCase().includes(query);
        const inActivities = spot.activities.some((act) => act.toLowerCase().includes(query));

        if (!inName && !inMalayalam && !inTaluk && !inCategory && !inTagline && !inDesc && !inActivities) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTaluk, mustVisitOnly, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedTaluk("All");
    setSearchQuery("");
    setMustVisitOnly(false);
  };

  return (
    <div className="min-h-screen bg-[#09110d] text-slate-100 flex flex-col">
      {/* Top Navbar */}
      <Navbar
        savedCount={savedSpotIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        activeSection="home"
      />

      {/* Hero Section */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectCategory={setSelectedCategory}
        totalSpotsCount={MALAPPURAM_SPOTS.length}
      />

      {/* Main Places Section */}
      <main id="spots" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-malabar-900/60 border border-malabar-500/30 text-malabar-300 text-xs font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5 text-malabar-400" />
              <span>District Destination Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Local Attractions in Malappuram
            </h2>
            <p className="mt-1 text-slate-400 text-sm max-w-2xl">
              Authentic tourist destinations located strictly within the borders of Malappuram district, Kerala.
            </p>
          </div>

          <div className="text-xs text-slate-400">
            Click on any card to view detailed visitor guides, history & exact map coordinates.
          </div>
        </div>

        {/* Filters */}
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedTaluk={selectedTaluk}
          setSelectedTaluk={setSelectedTaluk}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          mustVisitOnly={mustVisitOnly}
          setMustVisitOnly={setMustVisitOnly}
          filteredCount={filteredSpots.length}
          totalCount={MALAPPURAM_SPOTS.length}
          onReset={handleResetFilters}
        />

        {/* Spots Grid */}
        {filteredSpots.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSpots.map((spot) => (
              <SpotCard
                key={spot.id}
                spot={spot}
                onOpenDetails={setActiveSpot}
                isSaved={savedSpotIds.includes(spot.id)}
                onToggleSave={handleToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-4 glass-panel rounded-3xl border border-emerald-900/40 my-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400/50 mb-4">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Matching Local Spots Found</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
              We couldn't find any spots matching your current filters. Try resetting the category, taluk or search query.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-malabar-600 hover:bg-malabar-500 text-white text-xs font-bold transition-all shadow-lg"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      {/* Curated Itinerary Circuits */}
      <ItinerarySection onSelectSpot={setActiveSpot} />

      {/* Local Cuisine & Food Guide */}
      <FoodSection />

      {/* Connectivity, Railway, Airport & Guidelines */}
      <TravelTips />

      {/* Footer */}
      <Footer
        onSelectTaluk={(taluk) => {
          setSelectedTaluk(taluk);
          setSelectedCategory("All");
          setMustVisitOnly(false);
          setSearchQuery("");
        }}
      />

      {/* Spot Detail Modal */}
      <SpotModal
        spot={activeSpot}
        onClose={() => setActiveSpot(null)}
        isSaved={activeSpot ? savedSpotIds.includes(activeSpot.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Saved Spots Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        savedSpotIds={savedSpotIds}
        onRemoveSpot={handleToggleSave}
        onClearAll={handleClearAllSaved}
        onSelectSpot={setActiveSpot}
      />
    </div>
  );
}

