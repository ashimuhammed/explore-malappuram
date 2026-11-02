import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Explore Malappuram | Local Places, Hidden Gems & Heritage Trails",
  description: "An exclusive modern guide dedicated strictly to the local tourist places, misty hilltops, roaring waterfalls, ancient Mamankam heritage, and lush rainforests of Malappuram district, Kerala.",
  keywords: [
    "Malappuram tourist places",
    "Kottakunnu",
    "Kodikuthimala",
    "Nilambur Teak Museum",
    "Nedumkayam Rainforest",
    "Adyanpara Waterfalls",
    "Padinharekara Beach",
    "Biyyam Kayal",
    "Keralamkundu Waterfalls",
    "Thirunavaya Mamankam",
    "Arimbra Hills",
    "Malappuram Kerala tourism"
  ],
  authors: [{ name: "Malappuram Local Tourism" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0b1410] text-slate-100 antialiased selection:bg-malabar-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
