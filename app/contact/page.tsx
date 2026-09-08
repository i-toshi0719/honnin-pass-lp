import type { Metadata } from "next";

import CtaButton from "@/components/CtaButton";
import PlaceholderPage from "@/components/PlaceholderPage";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `お問い合わせ｜${SITE_NAME}`,
  description: `${SITE_NAME}へのお問い合わせについてのページです。`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="お問い合わせ"
      description={`${SITE_NAME}に関するお問い合わせは、公式LINEから受け付けています。`}
    >
      <CtaButton label="公式LINEから問い合わせる" />
    </PlaceholderPage>
  );
}
