import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MinnesotaCTA from "@/components/sections/MinnesotaCTA";
import Testimonials from "@/components/sections/Testimonials";
import AreasGrid from "@/components/sections/AreasGrid";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Smart Home Installers Minneapolis | Free Quotes",
  description:
    "Find certified smart home installers in Minneapolis–St. Paul. Compare free quotes for home automation, security, lighting, and theater installation.",
};

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
