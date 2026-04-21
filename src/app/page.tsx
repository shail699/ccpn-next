import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import History from "@/components/sections/History";
import Academics from "@/components/sections/Academics";
import Admissions from "@/components/sections/Admissions";
import Facilities from "@/components/sections/Facilities";
import Sports from "@/components/sections/Sports";
import Achievements from "@/components/sections/Achievements";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <History />
      <Academics />
      <Admissions />
      <Facilities />
      <Sports />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
