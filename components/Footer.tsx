import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "特徴", href: "#features" },
  { label: "使い方", href: "#how-it-works" },
  { label: "料金", href: "#pricing" },
  { label: "お問い合わせ", href: "#cta" },
  { label: "利用規約", href: "#" },
  { label: "プライバシー", href: "#" }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-br from-slate-50 to-white py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/okireru-logo-small.png" alt="オキレル" width={120} height={32} className="h-8 w-auto" />
        </div>
        <nav aria-label="フッターナビゲーション">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-600">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-brand focus-visible:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-slate-500">© 2025 オキレル</p>
      </Container>
    </footer>
  );
}
