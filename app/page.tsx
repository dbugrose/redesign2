import Image from "next/image";
import NavComponent from "./components/NavComponent";
import Hero from "./components/Hero";
import PickYourVibe from "./components/PickYourVibe";
import Etc from "./components/Etc";
import Newsletter from "./components/Newsletter";
import FooterComponent  from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
      <NavComponent/>
      <Hero/>
      <PickYourVibe/>
      <Etc/>
      <Newsletter/>
      <FooterComponent/>
      </main>
    </div>
  );
}
