import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee, Stats } from "@/components/sections/marquee-stats";
import { Features } from "@/components/sections/features";
import { Showcase } from "@/components/sections/showcase";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen flex-col bg-canvas">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Stats />
        <Features />
        <Showcase />
        <Process />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
