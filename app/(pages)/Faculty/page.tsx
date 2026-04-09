import FacultyCard from "@/app/components/FacultyCard";
import FacultyFooter from "@/app/components/FacultyFooter";
import NavComponent from "@/app/components/NavComponent";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0EDEC] text-[#1B1C1B]">
        <NavComponent/>
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <div className="relative h-0 w-full pb-[55.94%]">
          <img
            src="/MasterCraft.png"
            alt="Featured Display"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 mb-20 max-w-7xl px-4">
        <div className="flex flex-row items-start justify-between gap-8">
          <div className="flex w-[384px] flex-col gap-6">
            <div className="flex flex-col items-start text-left">
              <h2 className="mb-2 font-['Liberation_Serif'] text-[24px] leading-tight text-black">
                Small-Group Beading Classes
              </h2>
              <p className="mb-4 font-['Plus_Jakarta_Sans'] text-[16px] leading-relaxed text-[#504444]">
                We believe in the power of intimacy. Our classes are limited to
                <span className="font-bold text-[#8C4B55]"> six </span>
                students to ensure every hand receives the guidance it deserves.
              </p>
              <div className="flex items-center gap-2 text-[#8C4B55]">
                <img
                  src="/calender.png"
                  alt="calendar"
                  className="h-5 w-5"
                />
                <span className="font-['Nimbus_Sans'] text-[16px]">
                  Every Sat 9-12
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[#8C4B55]">
                <img
                  src="/icondot.png"
                  alt="calendar"
                  className="h-5 w-5"
                />
                <span className="font-['Nimbus_Sans'] text-[16px]">
                  $30 per session (Materials included)
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-[384px] flex-col gap-6">
            <div className="flex flex-col items-start text-left">
              <span className="mb-1 text-[10.4px] leading-[15.6px] font-semibold tracking-[2.08px] text-[#8C4B55] uppercase">
                Level I
              </span>
              <h2 className="mb-2 font-['Liberation_Serif'] text-[20px] leading-tight text-black">
                Foundation & Flow
              </h2>
              <p className="mb-4 font-['Plus_Jakarta_Sans'] text-[14px] leading-relaxed text-[#504444]">
                Learn the essential knots, thread tensions, and color theories
                that form the backbone of lasting jewelry design.
              </p>
              <button className="text-[14px] font-semibold text-[#8C4B55] hover:underline">
                View Details
              </button>
            </div>
          </div>

          <div className="flex w-[384px] flex-col gap-6">
            <div className="flex flex-col items-start text-left">
              <span className="mb-1 text-[10.4px] leading-[15.6px] font-semibold tracking-[2.08px] text-[#8C4B55] uppercase">
                Level II
              </span>
              <h2 className="mb-2 font-['Liberation_Serif'] text-[20px] leading-tight text-black">
                Structural Sculpting
              </h2>
              <p className="mb-4 font-['Plus_Jakarta_Sans'] text-[14px] leading-relaxed text-[#504444]">
                Dive into 3D forms using peyote and herringbone stitches. Create
                dimensional wearable art that defies gravity.
              </p>
              <button className="text-[14px] font-semibold text-[#8C4B55] hover:underline">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <FacultyCard />

      <div className="w-full bg-white py-20">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 rounded-[32px] bg-[#F6F3F2] p-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-medium uppercase">
              Begin Your Journey
            </h2>
            <p className="mb-8 max-w-md text-gray-600">
              Each class is a sensory experience. We provide premium glass
              beads, silk threads, and the workspace you need to lose yourself
              in the process.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex h-8 items-center justify-center rounded-full border border-gray-100 bg-white px-4 text-[10px] font-bold uppercase shadow-sm">
                Textile Materials
              </div>
              <div className="flex h-8 items-center justify-center rounded-full border border-gray-100 bg-white px-4 text-[10px] font-bold uppercase shadow-sm">
                Expert Guidance
              </div>
              <div className="flex h-8 items-center justify-center rounded-full border border-gray-100 bg-white px-4 text-[10px] font-bold uppercase shadow-sm">
                Community Space
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              src="/Pearlfaculty.png"
              className="w-1/2 rounded-lg"
              alt="Beads"
            />
            <img
              src="/Hands.png"
              className="mt-8 w-1/2 rounded-lg"
              alt="Crafting"
            />
          </div>
        </section>
        <FacultyFooter/>
      </div>
       </main>
  );
}
