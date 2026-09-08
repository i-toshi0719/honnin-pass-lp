import type { Metadata } from "next";

import PlaceholderPage from "@/components/PlaceholderPage";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `プライバシーポリシー｜${SITE_NAME}`,
  description: `${SITE_NAME}のプライバシーポリシーのページです。`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="プライバシーポリシー"
      description={`${SITE_NAME}のプライバシーポリシーを掲載する予定のページです。`}
    />
  );
}
