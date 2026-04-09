"use client";

import CardForm from "@/app/components/CardForm";
import InventoryFooter from "@/app/components/InventoryFooter";
import NavComponent from "@/app/components/NavComponent";


export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-[#F0EDEC] text-[#1B1C1B]">
    <NavComponent/>
      <div className="max-w-7xl mx-auto pt-24 pb-16 px-6 flex flex-col items-center justify-center mb-12 text-center">
        <span
          className="uppercase block mb-4 text-gray-400"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "2px",
          }}
        >
          Beads of Contentment
        </span>

        <h1
          className="text-[56px] md:text-[72px] leading-none italic tracking-tighter"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          Our Inventory
        </h1>

        <p
          className="max-w-md uppercase mt-8 text-gray-500"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "2px",
            lineHeight: "15px",
          }}
        >
          A curated selection of tactile treasures, from ethically sourced
          crystals to hand-poured candles, designed to bring a whisper of
          serenity to your daily rituals.
        </p>
      </div>

      <CardForm />

    
      <div className="py-20 bg-white/30 backdrop-blur-sm text-center">
        <button className="px-10 py-4 bg-[#8C4B55] text-white text-xs uppercase tracking-widest hover:bg-[#6e3a42] transition-all">
          Explore All Collections
        </button>
      </div>
<InventoryFooter/>

    </main>
  );
}