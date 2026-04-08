"use client";

import Link from "next/link";

const NavComponent = () => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6 bg-white">
  
      <div className="text-xl font-serif italic text-rose-900 tracking-wide">
        Beads of Contentment
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm tracking-widest text-gray-600">
        <Link href="/" className="text-rose-900 border-b border-rose-900 pb-1">
          HOME
        </Link>
        <Link href="/inventory" className="hover:text-rose-900">
          INVENTORY
        </Link>
        <Link href="/marketdays" className="hover:text-rose-900">
          MARKET DAYS
        </Link>
        <Link href="/classes" className="hover:text-rose-900">
          CLASSES
        </Link>
      </div>

      <div className="flex items-center gap-5 text-rose-900">
        <img src="heart.png" alt="heart icon" width={25} />
        <img src="shoppingbag.png" alt="shopping bag icon" width={25} />

      </div>
    </nav>
  );
}

export default NavComponent;