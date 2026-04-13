import Image from "next/image";

const PickYourVibe = () => {
  return (
    <section className="bg-[#f3efee] px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 italic">
              Pick Your Vibe
            </h2>
            <p className="text-gray-500 mt-3 max-w-md">
              Curation designed for the specific energy you wish to embody
              today.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs text-gray-400 uppercase">
            <span className="w-12 h-px bg-gray-300"></span>
            The Atelier Selection
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="relative w-full h-[480px]">
              <Image src="/Glow.jpg" alt="Ethereal Glow" fill />
            </div>
            <div className="relative w-full h-[480px]">
              <Image src="/Soul.jpg" alt="Earthbound Soul" fill />
            </div>
            <div className="relative w-full h-[480px]">
              <Image src="/Romantic.jpg" alt="Modern Romantic" fill />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PickYourVibe;
