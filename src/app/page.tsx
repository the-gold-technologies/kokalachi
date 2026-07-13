import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Discover } from "@/components/sections/Discover";
import { PopularDestinations } from "@/components/sections/PopularDestinations";
import { Features } from "@/components/sections/Features";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { AvailableDestinations } from "@/components/sections/AvailableDestinations";
import { ExploreBanner } from "@/components/sections/ExploreBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { NewsAndArticles } from "@/components/sections/NewsAndArticles";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Discover />
        <PopularDestinations />
        <Features />
        <PromoBanner />
        <AvailableDestinations />
        <ExploreBanner />
        <Testimonials />
        <NewsAndArticles />
      </main>
      
      <Footer />
    </div>
  );
}
