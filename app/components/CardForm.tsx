"use client";

export default function InventoryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10 flex flex-wrap gap-4 overflow-x-auto pb-6 whitespace-nowrap">
        <button
          style={{
            width: "133.63px",
            height: "36px",
            letterSpacing: "0.35px",
          }}
          className="rounded-[9999px] font-['Plus_Jakarta_Sans'] text-[14px] uppercase bg-[#8C4B55] text-white"
        >
          All Treasure
        </button>
        <button
          style={{
            width: "133.63px",
            height: "36px",
            letterSpacing: "0.35px",
          }}
          className="rounded-[9999px] font-['Plus_Jakarta_Sans'] text-[14px] uppercase bg-[#F6F3F2] text-black"
        >
          Beads & Chams
        </button>
        <button
          style={{
            width: "133.63px",
            height: "36px",
            letterSpacing: "0.35px",
          }}
          className="rounded-[9999px] font-['Plus_Jakarta_Sans'] text-[14px] uppercase bg-[#F6F3F2] text-black"
        >
          Jewelry
        </button>
        <button
          style={{
            width: "133.63px",
            height: "36px",
            letterSpacing: "0.35px",
          }}
          className="rounded-[9999px] font-['Plus_Jakarta_Sans'] text-[14px] uppercase bg-[#F6F3F2] text-black"
        >
          Spiritual Tools
        </button>
        <button
          style={{
            width: "133.63px",
            height: "36px",
            letterSpacing: "0.35px",
          }}
          className="rounded-[9999px] font-['Plus_Jakarta_Sans'] text-[14px] uppercase bg-[#F6F3F2] text-black"
        >
          Lifestyle
        </button>
      </div>

      <div className="flex w-full flex-wrap items-start gap-6 mb-8">
        <div className="flex flex-col items-start w-full md:w-auto">
          <div className="mb-4 aspect-[800/450] w-full md:w-[800px] max-w-full bg-gray-100">
            <img
              src="/Invetory1.jpg"
              alt="Crystal Flower Beads"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full md:w-[800px] max-w-full items-start justify-between">
            <div
              style={{ width: "257.75px", height: "52px" }}
              className="flex flex-col text-left"
            >
              <h3 className="font-['Plus_Jakarta_Sans'] text-[18px] font-light">
                Crystal Flower Beads
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] font-light text-gray-500">
                Hand-carved rose quartz
              </p>
            </div>
            <div className="font-['Plus_Jakarta_Sans'] text-[18px] font-light text-[#8C4B55]">
              $42.00
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-auto">
          <div className="mb-4 aspect-square w-full md:w-[384px] max-w-full bg-gray-100">
            <img
              src="/Inventory2.jpg"
              alt="Colored Beads"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <h3 className="font-['Noto_Serif'] text-[20px]">Colored Beads</h3>
            <p
              style={{ lineHeight: "20px" }}
              className="font-['Plus_Jakarta_Sans'] text-[14px] text-gray-500"
            >
              Artisan glass selection
            </p>
            <div className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#8C4B55]">
              $18.00
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-between gap-6 mb-8">
        {[
          { src: "/Evileye.jpg", title: "Evil Eye Beads", price: "$24.00" },
          { src: "/CrystalRing.png", title: "Crystal Rings", price: "$85.00" },
          { src: "/RawCrystal.png", title: "Raw Crystal", price: "$35.00" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start w-full md:w-[384px]"
          >
            <div className="mb-4 h-[480px] w-full max-w-full bg-gray-100">
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-left">
              <h3 className="font-['Noto_Serif'] text-[20px]">{item.title}</h3>
              <div className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#8C4B55]">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap items-start justify-between gap-4 mb-8">
        <div className="flex w-full md:w-[280px] flex-col gap-3">
          <div className="aspect-square w-full md:w-[280px] flex-shrink-0">
            <img
              src="/JewelChar.jpg"
              alt="Jewelry Charms"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <h3 className="font-['Noto_Serif'] text-[20px]">Jewelry Charms</h3>
            <div className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#8C4B55]">
              $12.00
            </div>
          </div>
        </div>

        <div className="flex w-full md:w-[592px] flex-col gap-3">
          <div className="h-[370px] w-full md:w-[592px] flex-shrink-0">
            <img
              src="/Earings.jpg"
              alt="Earrings"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <h3 className="font-['Noto_Serif'] text-[20px]">Earrings</h3>
            <div className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#8C4B55]">
              $58.00
            </div>
          </div>
        </div>

        <div className="flex w-full md:w-[280px] flex-col gap-3">
          <div className="aspect-square w-full md:w-[280px] flex-shrink-0">
            <img
              src="/Candles.jpg"
              alt="Artisan Candles"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <h3 className="font-['Noto_Serif'] text-[20px]">Artisan Candles</h3>
            <div className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#8C4B55]">
              $32.00
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-between gap-4 mb-8">
        {[
          { src: "/Sound.jpg", title: "Sound Bowls", price: "$145.00" },
          { src: "/WindChines.jpg", title: "Wind Chimes", price: "$64.00" },
          { src: "/Bag.jpg", title: "Atelier Bags", price: "$48.00" },
        ].map((item, i) => (
          <div key={i} className="flex w-full md:w-[384px] flex-col gap-3">
            <div className="aspect-square w-full flex-shrink-0">
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <h3 className="font-['Noto_Serif'] text-[20px]">{item.title}</h3>
              <div className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium text-[#8C4B55]">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto h-[300px] md:h-[521px] w-full max-w-[1216px] flex-shrink-0 overflow-hidden">
        <img
          src="/Crystalinventory.jpg"
          alt="Featured"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
