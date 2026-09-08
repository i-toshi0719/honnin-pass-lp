import Link from "next/link";

import CtaButton from "@/components/CtaButton";
import { SITE_NAME, navItems } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4 sm:h-16">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-ink sm:text-xl"
          >
            {SITE_NAME}
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <CtaButton size="sm" className="shrink-0" />
        </div>

        {/* モバイルはメニュー開閉を持たず、常時表示のリンク行にする（クライアントJS不要） */}
        <nav className="flex items-center gap-5 overflow-x-auto pb-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-slate-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
