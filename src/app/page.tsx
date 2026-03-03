import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MinnesotaCTA from "@/components/sections/MinnesotaCTA";
import Testimonials from "@/components/sections/Testimonials";
import AreasGrid from "@/components/sections/AreasGrid";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <MinnesotaCTA />
      <Testimonials />
      <AreasGrid />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
