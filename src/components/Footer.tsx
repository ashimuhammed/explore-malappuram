"use client";

import React from "react";
import { Compass, Heart, ArrowUp, MapPin, Sparkles } from "lucide-react";
import { TALUKS } from "@/data/spots";

interface FooterProps {
  onSelectTaluk: (taluk: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTaluk }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080e0b] border-t border-emerald-950 text-slate-300 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-950">
          {/* Brand & Manifesto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-malabar-400 to-malabar-700 flex items-center justify-center shadow-lg border border-malabar-300/30">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  MALAPPURAM
                </span>
                <p className="text-xs text-emerald-400 font-semibold">
                  എന്റെ മലപ്പുറം • Local Tourist Guide
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              A curated travel platform committed exclusively to authentic local attractions within Malappuram district, Kerala. From the ancient teak heritage of Nilambur to the historic shores of River Nila.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-[11px] font-semibold text-malabar-300">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>100% Malappuram District Focus</span>
            </div>
          </div>

          {/* Taluks Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-malabar-400" />
              <span>Explore By Taluk</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {TALUKS.filter((t) => t !== "All").map((taluk) => (
                <button
                  key={taluk}
                  onClick={() => {
                    onSelectTaluk(taluk);
                    const el = document.getElementById("spots");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left py-1 text-slate-400 hover:text-malabar-300 transition-colors"
                >
                  {taluk} Taluk
                </button>
              ))}
            </div>
          </div>

          {/* Key Tourist Hubs */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Iconic Spot Highlights
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <a href="#spots" className="hover:text-emerald-300 transition-colors">
                  • Kodikuthimala (Mini Ooty)
                </a>
              </li>
              <li>
                <a href="#spots" className="hover:text-emerald-300 transition-colors">
                  • Kottakunnu Hill Garden & Fort
                </a>
              </li>
              <li>
                <a href="#spots" className="hover:text-emerald-300 transition-colors">
                  • Conolly's Plot & Teak Museum
                </a>
              </li>
              <li>
                <a href="#spots" className="hover:text-emerald-300 transition-colors">
                  • Padinharekara Azhimukham Beach
                </a>
              </li>
              <li>
                <a href="#spots" className="hover:text-emerald-300 transition-colors">
                  • Thirunavaya Mamankam Sands
                </a>
              </li>
              <li>
                <a href="#spots" className="hover:text-emerald-300 transition-colors">
                  • Keralamkundu Basin Waterfall
                </a>
              </li>
            </ul>
          </div>

          {/* Official Tourism & Travel Help */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Official Tourism Contacts
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p>
                <strong className="text-slate-200">DTPC Malappuram Office:</strong>
                <br />
                Civil Station, Malappuram, Kerala 676505
              </p>
              <p>
                <strong className="text-slate-200">Phone:</strong> +91 483 2731504
              </p>
              <p>
                <strong className="text-slate-200">Nearest Airport:</strong> Calicut International Airport (CCJ), Karipur, Malappuram
              </p>
              <p>
                <strong className="text-slate-200">Emergency Police:</strong> 112 / 100
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>Crafted with pride for</span>
            <span className="text-emerald-300 font-semibold">Malappuram District, Kerala</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/30 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

