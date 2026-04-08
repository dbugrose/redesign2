import Image from "next/image";

 const Etc =() => {
  return (
    <section className="bg-[#FCF9F8] px-10 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-16">
          
          <div className="grid grid-cols-[140px_1fr] gap-6 items-start">
            <div className="relative w-full h-[140px]">
              <Image
                src="/market.png"
                alt="Market beads"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] text-[#8C4B55] uppercase mb-2">
                Seasonal Events
              </p>
              <h3 className="font-serif text-2xl text-gray-800 mb-3">
                Market Days
              </h3>
              <p className="text-gray-500 text-sm mb-4 max-w-sm">
                Join us for our monthly open-air curated market, featuring guest
                artisans and exclusive vintage bead drops.
              </p>
              <button className="text-sm text-[#8C4B55] hover:underline flex items-center gap-1">
                View Schedule →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_180px] gap-6 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#8C4B55] uppercase mb-2">
                Workshops
              </p>
              <h3 className="font-serif text-2xl text-gray-800 mb-3">
                Beading Classes
              </h3>
              <p className="text-gray-500 text-sm mb-4 max-w-sm">
                Master the intricate techniques of adornment in our intimate,
                light-filled studio sessions.
              </p>
              <button className="text-sm text-[#8C4B55] hover:underline flex items-center gap-1">
                Reserve a Seat →
              </button>
            </div>

            <div className="relative w-full h-[180px]">
              <Image
                src="/classes.png"
                alt="Beading class"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F6F3F2] p-8 rounded-lg max-w-md w-full">
          
          <h3 className="font-serif text-lg text-gray-800 mb-6">
            Atelier Hours & Location
          </h3>

          <div className="space-y-6 text-sm text-gray-600">
            
            <div>
              <p className="text-xs tracking-widest text-[#8C4B55] uppercase mb-1">
                Visit Our Studio
              </p>
              <p>
                124 Serenity Lane, Suite 400 <br />
                The Creative Quarter, Charleston
              </p>
            </div>

            <div className="relative w-full h-[140px] rounded-md overflow-hidden">
              <Image
                src="/map.png"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 text-xs">
              <div>
                <p className="tracking-widest text-[#8C4B55] uppercase mb-1">
                  Operating Hours
                </p>
                <p>
                  Mon – Fri: 10am – 6pm <br />
                  Saturday: 11am – 5pm <br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <p className="tracking-widest text-[#8C4B55] uppercase mb-1">
                  Contact Us
                </p>
                <p>
                  hello@beadsofcontentment.com <br />
                  +1 (843) 555-0192
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Etc;