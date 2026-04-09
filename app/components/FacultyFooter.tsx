import React from 'react'

const FacultyFooter = () => {
  return (
    <div>
       <footer className="w-full border-t border-gray-100 bg-[#FAFAF9] py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Liberation_Serif'] text-[24px] text-[#4C0519]">
               The Curated Atelier.
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#57534E]">
              © 2024 The Curated Atelier. Crafted for the Modern Maker.
            </p>
          </div>
         
          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] font-bold tracking-wider text-[#4C0519] uppercase">
              Visit Us
            </h3>
            <p className="text-[14px] text-[#57534E]">
              123 Artisan Alley
              <br />
              Suite 402, Bloom District
              <br />
              San Francisco, CA 94103
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] font-bold tracking-wider text-[#4C0519] uppercase">
              Contact
            </h3>
            <p className="text-[14px] text-[#57534E]">
              hello@curatedatelier.com
              <br />
              (415) 555-0198
            </p>
          </div>
        
          <div className="flex flex-col gap-3">
            <h3 className="text-[14px] font-bold tracking-wider text-[#4C0519] uppercase">
              Shop Policies
            </h3>
            <p className="text-[14px] text-[#57534E]">
              Sustainability
              <br />
              Shipping & Returns
              <br />
              Privacy Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FacultyFooter
