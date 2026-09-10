import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import PrivacyDesign from "@/components/PrivacyDesign";
import Problem from "@/components/Problem";
import UseCases from "@/components/UseCases";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <PrivacyDesign />
      <UseCases />
      <Pricing />
      <CTA />
    </>
  );
}
