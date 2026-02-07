import { Hero } from "@/components/sections/Hero";
import { RoomShowcase } from "@/components/sections/RoomShowcase";
import { Navbar } from "@/components/layout/Navbar";
import { StickyBottomBar } from "@/components/layout/StickyBottomBar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand text-slate font-sans selection:bg-ocean/20 pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <RoomShowcase />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
