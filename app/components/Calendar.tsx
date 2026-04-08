import Image from "next/image";

export default function MarketCalendar() {
  return (
    <section className="w-full bg-[#F5F5F4] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">

        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-800">
            Market Calendar 2026
          </h2>
          <p className="text-gray-500 text-sm">
            All are welcome at the Marketplace!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[260px] bg-gray-200">
            
            <Image
              src="/coils.png"
              alt="Spring Renewal Gathering"
              fill
              className="object-cover opacity-30"
            />

            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[10px] px-3 py-1 rounded-full bg-green-200 text-green-800 uppercase tracking-wider">
                Spring 2026
              </span>

              <h3 className="text-2xl font-serif text-gray-800 italic">
                The Renewal Gathering
              </h3>

              <p className="text-gray-700 text-sm max-w-sm">
                Celebrating the return of light with pastel palettes, delicate florals, and the full JM Imports collection.
              </p>
            </div>

            <div className="relative z-10 pt-6 text-sm text-gray-700">
              📅 April 12 - 14, 2026
            </div>
          </div>

          <div className="relative rounded-2xl p-8 flex flex-col justify-between min-h-[260px] bg-gradient-to-br from-[#e8e3dc] to-[#d9d4ce]">
            <Image
              src="/autumncolors.png"
              alt="AutumnColors"
              fill
              className="object-cover opacity-30 rounded-2xl"
            />
            <div className="space-y-4">
              <span className="inline-block text-[10px] px-3 py-1 rounded-full bg-yellow-300 text-yellow-900 uppercase tracking-wider">
                Autumn 2026
              </span>

              <h3 className="text-2xl font-serif text-gray-800 italic">
                The Harvest Exchange
              </h3>

              <p className="text-gray-700 text-sm max-w-sm">
                Deep ambers, earthy siennas, and the powerful presence of Musa Jawara’s glasswork.
              </p>
            </div>

            <div className="pt-6 text-sm text-gray-700">
              📅 October 18 - 20, 2026
            </div>
          </div>

        </div>

        {/* MASTERCLASS BANNER */}
        <div className="bg-[#FF7F5033] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg">
              <img src="thinkingicon.png" alt="thinking icon" width={20} />
            </div>

            <div>
              <p className="font-medium text-gray-800 italic">
                Artisan Masterclass
              </p>
              <p className="text-sm text-gray-700">
                Join Musa Jawara for a live glass-pulling demonstration each market morning.
              </p>
            </div>
          </div>

          <button className="bg-white text-[#A43C12] px-6 py-3 rounded-full font-bold text-sm font-medium hover:shadow-md transition">
            Reserve Your Spot
          </button>
        </div>

      </div>
    </section>
  );
}