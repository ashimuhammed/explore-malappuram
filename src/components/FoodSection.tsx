"use client";

import React, { useState } from "react";
import { MALAPPURAM_CUISINE, LocalDelicacy } from "@/data/cuisines";
import { Utensils, MapPin, Sparkles, Coffee } from "lucide-react";

export const FoodSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Specialty Meal", "Seafood", "Snack & Sweet", "Beverage"];

  const filteredCuisine =
    selectedFilter === "All"
      ? MALAPPURAM_CUISINE
      : MALAPPURAM_CUISINE.filter((c) => c.category === selectedFilter);

  return (
    <section id="cuisine" className="py-20 relative bg-[#0b1410]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>Malabar Culinary Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Authentic Flavors of Malappuram
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            From slow-cooked dum biriyanis and coastal Ponnani fish curries to paper-thin pathiris and refreshing evening Sulaimani tea.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === cat
                  ? "bg-amber-500 text-black shadow-md shadow-amber-900/40 font-bold"
                  : "bg-emerald-950/60 text-slate-300 hover:text-white border border-emerald-900/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cuisine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCuisine.map((dish, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden border border-emerald-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101e18] via-transparent to-black/20" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/90 text-black shadow-md">
                    {dish.category}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-xs font-semibold text-amber-400 block mb-0.5">
                    {dish.malayalam}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{dish.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-emerald-900/40 flex items-center gap-2 text-xs text-emerald-300/90 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-malabar-400 shrink-0" />
                  <span>
                    <strong>Where to try:</strong> {dish.bestLocations}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Food Street Recommendations */}
        <div className="mt-14 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-900/60">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 mb-4">
            <Coffee className="w-5 h-5 text-amber-400" />
            <span>Famous Malappuram Food Hotspots for Travelers</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-900/40">
              <h4 className="text-sm font-bold text-amber-300 mb-1">Kottakunnu Food Walk</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Evening street food stalls lining the hill park entrance: pazham pori with beef, hot shawarma, fresh lime sodas, and rolls.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-900/40">
              <h4 className="text-sm font-bold text-amber-300 mb-1">Ponnani Harbour Shacks</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Coastal messes serving catch-of-the-day fish fry, spicy curries, squid roast, and pathiris along the historic wharf.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-900/40">
              <h4 className="text-sm font-bold text-amber-300 mb-1">Kottakkal Heritage Messes</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Renowned for tender Kerala ghee rice (Neychoru), Erachi roast, authentic dum biriyanis, and herbal Ayurvedic warm water.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-900/40">
              <h4 className="text-sm font-bold text-amber-300 mb-1">Tirur Chayakadas</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traditional tea shops near the railway station famous for hot Unnakaya, muttamala, samosas, and freshly whipped Sulaimani.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

