import Contribute from "@/components/landing-page/contribute";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import TechStack from "@/components/landing-page/tech-stack";
import Testimonials from "@/components/landing-page/testimonials";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <Features />
      <TechStack />
      <Testimonials />
      <Contribute />
    </main>
  );
}
