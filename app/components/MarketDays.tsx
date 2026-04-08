import Image from "next/image";

const MarketDays = () => {
  return (
    <section className="w-full min-h-screen bg-[#F5F5F4] py-20 px-6 md:px-12 lg:px-20">
      <div className="w-full mx-auto min-h-screen items-center bg-[#F5F5F4]">

            <Image
              src="/MarketDays.png" 
              alt="Luminous beads"
              fill
              className="object-contain my-40"
      
            />
          </div>
    </section>
  );
}
export default MarketDays;