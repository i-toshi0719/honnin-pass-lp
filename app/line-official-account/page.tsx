import type { Metadata } from "next";

import CTA from "@/components/CTA";
import Compare from "@/components/Compare";
import Faq from "@/components/Faq";
import FeatureBand from "@/components/FeatureBand";
import Hero from "@/components/Hero";
import PrivacyDesign from "@/components/PrivacyDesign";
import Problem from "@/components/Problem";
import Steps from "@/components/Steps";
import {
  compare,
  cta,
  customerFlow,
  faq,
  hero,
  integration,
  meta,
  onboarding,
  problem,
} from "@/lib/content/line-official-account";
import { routes, seo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: routes.lineOfficialAccount },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: routes.lineOfficialAccount,
    images: [{ url: seo.ogImage }],
  },
  twitter: { title: meta.title, description: meta.description },
};

export default function LineOfficialAccountPage() {
  return (
    <>
      <Hero {...hero} />
      <Problem {...problem} />
      <FeatureBand id="integration" {...integration} />
      <Steps id="customer-flow" {...customerFlow} />
      <Steps id="onboarding" variant="circle" tone="muted" {...onboarding} />
      <PrivacyDesign />
      <Compare {...compare} />
      <Faq {...faq} />
      <CTA {...cta} />
    </>
  );
}
