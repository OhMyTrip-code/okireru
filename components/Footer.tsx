import Image from "next/image";
import Link from "next/link";
import type { UrlObject } from "url";
import { Container } from "@/components/ui/Container";

type FooterLink = {
  label: string;
  href: UrlObject;
};

const footerLinks: FooterLink[] = [
  { label: "特徴", href: { pathname: "/", hash: "features" } },
  { label: "使い方", href: { pathname: "/", hash: "how-it-works" } },
  { label: "料金", href: { pathname: "/", hash: "pricing" } },
  { label: "お問い合わせ", href: { pathname: "/", hash: "cta" } },
  { label: "利用規約", href: { pathname: "/terms" } },
  { label: "プライバシー", href: { pathname: "/privacy" } }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/okireru-logo-small.png" alt="オキレル" width={120} height={32} className="h-7 w-auto" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">オキレル</span>
        </div>
        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-slate-900 focus-visible:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-slate-400">© 2025 オキレル</p>
      </Container>
    </footer>
  );
}
