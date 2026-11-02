"use client";

import React from "react";
import { Plane, Train, Bus, CloudSun, ShieldCheck, Phone, AlertCircle, Compass } from "lucide-react";

export const TravelTips: React.FC = () => {
  return (
    <section id="travel-tips" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-malabar-900/60 border border-malabar-500/30 text-malabar-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-malabar-400" />
            <span>Malappuram District Transit & Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Travel Essentials & Connectivity
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about getting around Malappuram, best seasons to visit, and local travel advisories.
          </p>
        </div>

        {/* Transit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Air Card */}
          <div className="glass-panel p-6 rounded-2xl border border-emerald-900/50">
            <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/40 flex items-center justify-center text-sky-400 mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">By Air (Direct Airport)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
              <strong>Calicut International Airport (CCJ)</strong> is physically situated right inside Malappuram district at Karipur (Kondotty Taluk).
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 border-t border-emerald-900/40 pt-3">
              <li>• 14 km to Arimbra Hills</li>
              <li>• 26 km to Malappuram District HQ / Kottakunnu</li>
              <li>• 45 km to Nilambur Teak Forest</li>
            </ul>
          </div>

          {/* Rail Card */}
          <div className="glass-panel p-6 rounded-2xl border border-emerald-900/50">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
              <Train className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">By Scenic Railways</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
              Major stations include <strong>Tirur (TIR)</strong>, Kuttippuram, Angadipuram, and Parappanangadi.
            </p>
            <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/30 text-xs text-emerald-300">
              <strong>Must-Try Experience:</strong> The Shoranur-Nilambur passenger train journey cuts through emerald rainforest corridors.
            </div>
          </div>

          {/* Road Card */}
          <div className="glass-panel p-6 rounded-2xl border border-emerald-900/50">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/40 flex items-center justify-center text-amber-400 mb-4">
              <Bus className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">By Road & KSRTC</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
              Connected smoothly by NH 66 (coastal corridor) and NH 966 (Palakkad-Kozhikode highway).
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 border-t border-emerald-900/40 pt-3">
              <li>• Frequent KSRTC fast passenger buses connecting all taluks</li>
              <li>• Auto-rickshaws available at every rural & urban junction</li>
            </ul>
          </div>
        </div>

        {/* Seasons & Guidelines Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seasons */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-900/60">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <CloudSun className="w-5 h-5 text-amber-400" />
              <span>When to Visit Malappuram</span>
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/40 border border-emerald-900/40">
                <span className="text-xs font-bold text-malabar-300 uppercase tracking-wide">
                  September to February (Peak Season)
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Crisp hill mornings at Kodikuthimala, migratory bird spectacles at Kadalundi reserve, calm tides at Padinharekara beach, and pleasant weather for heritage trails.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-emerald-900/40">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                  June to August (Monsoon Splendor)
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Waterfalls like Adyanpara and Keralamkundu roar with power. The Nilambur teak canopy is radiant green. Perfect for rain photography and Ayurvedic rejuvenation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-emerald-900/40">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  March to May (Summer Months)
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Ideal for early morning hill treks and afternoon beach breezes at Biyyam Kayal and Ponnani harbour.
                </p>
              </div>
            </div>
          </div>

          {/* Local Guidelines & Helplines */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-900/60 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-malabar-400" />
                <span>Responsible Local Tourism</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-malabar-400 mt-2 shrink-0" />
                  <span>
                    <strong>Zero-Plastic Eco Zones:</strong> Conolly's Plot, Nedumkayam, and Kadalundi are strict zero-litter environments. Carry reusable bottles.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-malabar-400 mt-2 shrink-0" />
                  <span>
                    <strong>Waterfall Safety:</strong> Always adhere to lifeguards and forest guide warnings at Adyanpara and Keralamkundu. Avoid deep slippery pools during rain surges.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-malabar-400 mt-2 shrink-0" />
                  <span>
                    <strong>Heritage Etiquette:</strong> Wear modest clothing when visiting places of historical devotion like Thirunavaya Navamukunda Temple, Ponnani Grand Mosque, and Mamburam Maqam.
                  </span>
                </div>
              </div>
            </div>

            {/* Helpline Bar */}
            <div className="mt-6 pt-5 border-t border-emerald-900/40">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Official District Contacts
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-800/30 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="text-xs">
                    <p className="text-slate-400">DTPC Malappuram</p>
                    <p className="font-bold text-white">+91 483 2731504</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-emerald-800/30 flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <div className="text-xs">
                    <p className="text-slate-400">Emergency Police / Rescue</p>
                    <p className="font-bold text-white">112 / 100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

