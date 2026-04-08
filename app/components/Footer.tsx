import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-[#fffaf9] px-10 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm text-gray-600">
        
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-gray-800">
            Beads of Contentment
          </h3>
          <p className="text-gray-500 text-sm">
            © 2024 Beads of Contentment. Crafted for the Modern Maker.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-[#8C4B55] uppercase mb-4">
            Explore
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="#">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#">
                Rare Stones
              </Link>
            </li>
            <li>
              <Link href="#">
                Gifts
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-[#8C4B55] uppercase mb-4">
            Information
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="#">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="#">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-[#8C4B55] uppercase mb-4">
            Social
          </h4>
          <div className="flex items-center gap-4 text-gray-600">
          
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;