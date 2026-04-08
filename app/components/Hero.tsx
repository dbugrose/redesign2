import Image from "next/image";


const Hero = () => {
  return (
    <section className="w-full bg-[#f6f3f2] px-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-6">
          <p className="text-xs text-[#8C4B55] uppercase">
            Beads of Contentment
          </p>

          <h1 className="font-serif text-5xl md:text-6xl text-gray-800 italic">
            The Fine Art of <br />
            Personal{" "}
            <span className="text-[#EB9AA6] italic">Adornment</span>
          </h1>

          <p className="text-gray-500 max-w-md">
            Discover a tactile sanctuary where every bead tells a story of
            craftsmanship and every stone radiates a unique energy.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <button className="bg-[linear-gradient(to_right,_#8C4B55_0%,_#EB9AA6_100%)] text-white px-6 py-3 rounded-full">
              Begin Your Journey
            </button>

            <button className="text-sm tracking-wider text-[#8C4B55] border-b border-gray-400 hover:text-rose-400 hover:border-rose-400">
              OUR STORY
            </button>
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-sm">
          <Image
            src="/rosequartz.png" 
            alt="Rose quartz beads"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero