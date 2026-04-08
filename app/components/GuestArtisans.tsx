import Image from "next/image";

export default function GuestArtisans() {
  return (
    <section className="w-full bg-[#efedea] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="max-w-xl space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 italic">
            Guest Artisans
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We are honored to host global treasures and master craftsmen for the
            2026 season.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-xl p-6 flex gap-6 items-start shadow-sm hover:shadow-md transition">
            <div className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0">
              <Image
                src="/jmimports.png"
                alt="JM Imports"
                fill
                className="object-cover grayscale"
              />
            </div>

            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#705D00]">
                Premium Gemstones
              </p>

              <h3 className="text-lg font-semibold text-gray-800">
                JM Imports
              </h3>

              <p className="text-gray-600 text-sm">
                Direct importers of ethereal moonstones and raw sapphire cuts
                from the heart of Asia. Their 2026 collection features exclusive
                “Sun-Drenched rose quartz”.
              </p>

              <button className="text-[#A43C12] text-sm font-medium hover:underline">
                Explore Collection →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 flex gap-6 items-start shadow-sm hover:shadow-md transition">
            <div className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0 bg-gray-200">
              <Image
                src="/musajawara.png"
                alt="Musa Jawara"
                fill
                className="object-cover grayscale"
              />
            </div>

            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#476733]">
                Ancestral Craft
              </p>

              <h3 className="text-lg font-semibold text-gray-800">
                Musa Jawara
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Master glass-smith from West Africa. Musa brings centuries-old
                techniques of recycled glass bead-making, creating bold,
                vibrant statements of culture.
              </p>

              <button className="text-[#A43C12] text-sm font-medium hover:underline">
                Meet the Artisan →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}