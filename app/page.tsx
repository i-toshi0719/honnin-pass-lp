import About from "@/components/About";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OrganizerLine from "@/components/OrganizerLine";
import PrivacyDesign from "@/components/PrivacyDesign";
import Problem from "@/components/Problem";
import UseCases from "@/components/UseCases";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <About />
      <OrganizerLine />
      <HowItWorks />
      <PrivacyDesign />
      <Benefits />
      <UseCases />
      <CTA />
    </>
  );
}
