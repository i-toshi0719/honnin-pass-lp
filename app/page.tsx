import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HeroSteps from "@/components/HeroSteps";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import PrivacyDesign from "@/components/PrivacyDesign";
import Problem from "@/components/Problem";
import TwoWays from "@/components/TwoWays";
import UseCases from "@/components/UseCases";
import { faq, hero, problem, twoWays } from "@/lib/content/top";

export default function Home() {
  return (
    <>
      <Hero {...hero}>
        <HeroSteps />
      </Hero>
      <Problem {...problem} />
      <HowItWorks />
      <PrivacyDesign />
      <UseCases />
      <TwoWays {...twoWays} />
      <Pricing />
      <Faq {...faq} />
      <CTA />
    </>
  );
}
