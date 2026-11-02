"use client";

import React from "react";
import { Filter, MapPin, Sparkles, X, Check } from "lucide-react";
import { CATEGORIES, TALUKS } from "@/data/spots";

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedTaluk: string;
  setSelectedTaluk: (taluk: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  mustVisitOnly: boolean;
  setMustVisitOnly: (val: boolean) => void;
  filteredCount: number;
  totalCount: number;
  onReset: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedTaluk,
  setSelectedTaluk,
  searchQuery,
  setSearchQuery,
  mustVisitOnly,
  setMustVisitOnly,
  filteredCount,
  totalCount,
  onReset,
}) => {
  const isFiltered =
    selectedCategory !== "All" ||
    selectedTaluk !== "All" ||
    searchQuery.trim() !== "" ||
    mustVisitOnly;

  return (
    <div className="bg-[#101e18]/90 border border-emerald-900/50 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-md mb-8">
      {/* Category Tabs */}
      <div className="mb-5">
        <label className="text-xs uppercase font-bold tracking-wider text-malabar-400 mb-2.5 block">
          Filter by Experience
        </label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-malabar-500 text-white shadow-md shadow-malabar-900/50 border border-malabar-400"
                    : "bg-emerald-950/70 text-slate-300 hover:text-white hover:bg-emerald-900/60 border border-emerald-800/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Controls: Taluks & Must Visit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-emerald-900/40 items-center">
        {/* Taluk Dropdown */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300/80 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-malabar-400" />
            <span>Taluk / Region in Malappuram</span>
          </label>
          <div className="relative">
            <select
              value={selectedTaluk}
              onChange={(e) => setSelectedTaluk(e.target.value)}
              className="w-full bg-[#0d1612] border border-emerald-800/60 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-malabar-400 appearance-none cursor-pointer"
            >
              {TALUKS.map((taluk) => (
                <option key={taluk} value={taluk}>
                  {taluk === "All" ? "All Taluks (District-wide)" : `${taluk} Taluk`}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-emerald-400">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Must-Visit Filter Toggle */}
        <div className="flex items-center pt-2 sm:pt-4">
          <button
            type="button"
            onClick={() => setMustVisitOnly(!mustVisitOnly)}
            className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
              mustVisitOnly
                ? "bg-amber-500/20 text-amber-200 border-amber-500/50"
                : "bg-emerald-950/50 text-slate-300 border-emerald-800/40 hover:bg-emerald-900/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Must-Visit Spots Only</span>
            </div>
            <span
              className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] ${
                mustVisitOnly
                  ? "bg-amber-500 text-black border-amber-400"
                  : "border-emerald-700/60 bg-emerald-900/30"
              }`}
            >
              {mustVisitOnly && <Check className="w-3 h-3 stroke-[3]" />}
            </span>
          </button>
        </div>

        {/* Results Counter & Clear */}
        <div className="flex items-center justify-between lg:justify-end gap-3 pt-2 sm:pt-4">
          <div className="text-xs text-slate-300">
            Showing <strong className="text-malabar-300">{filteredCount}</strong> of {totalCount} spots
          </div>
          {isFiltered && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-xs text-rose-300 hover:text-rose-200 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

