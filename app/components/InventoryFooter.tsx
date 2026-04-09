import React from "react";

const InventoryFooter = () => {
  return (
    <div>
      <footer className="w-full bg-[#FAFAF9] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Liberation_Serif'] text-[24px] text-[#4C0519]">
              The Curated Atelier
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#57534E]">
              Crafted for the modern maker
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#4C0519]">
              Visit Us
            </h3>
            <p className="text-[14px] text-[#57534E]">122 Artisan Way,</p>
            <p className="text-[14px] text-[#57534E]">Savannah, GA 31401</p>

            <div className="w-full max-w-67 aspect-67/34 bg-gray-200 rounded-sm overflow-hidden">
              <img
                src="/map.jpeg"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#4C0519]">
              Inquiries
            </h3>
            <div className="flex flex-col gap-2 text-[14px] text-[#57534E]">
              <a href="#" className="hover:text-[#4C0519]">
                Sustainability
              </a>
              <a href="#" className="hover:text-[#4C0519]">
                Shipping & Returns
              </a>
              <a href="#" className="hover:text-[#4C0519]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#4C0519]">
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#4C0519]">
                Connect
              </h3>

              <div className="flex flex-row gap-4">
                <a href="/" className="w-4 h-4 block">
                  <img
                    src="/icon1.png"
                    alt="Social 1"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href="/" className="w-4 h-4 block">
                  <img
                    src="/icon2.png"
                    alt="Social 2"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a href="/" className="w-4 h-4 block">
                  <img
                    src="/icon3.png"
                    alt="Social 3"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>

            <p className="text-[12px] text-[#57534E]">
              © 2024 The Curated Atelier
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InventoryFooter;
