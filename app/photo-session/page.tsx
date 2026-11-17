import type { Metadata } from "next";

import CTA from "@/components/CTA";
import HeroPhoto from "@/components/HeroPhoto";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import PrivacyDesign from "@/components/PrivacyDesign";
import Problem from "@/components/Problem";
import { meta, problem } from "@/lib/content/photo-session";
import { routes, seo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: routes.photoSession },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: routes.photoSession,
    images: [{ url: seo.ogImage }],
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function PhotoSessionPage() {
  return (
    <>
      <HeroPhoto />
      <Problem {...problem} />
      <HowItWorks />
      <PrivacyDesign />
      <Pricing />
      <CTA />
    </>
  );
}
