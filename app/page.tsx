import About from "@/components/About";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problem from "@/components/Problem";
import UseCases from "@/components/UseCases";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <About />
      <HowItWorks />
      <Benefits />
      <UseCases />
      <CTA />
    </>
  );
}
