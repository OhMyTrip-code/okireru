import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type NavItem = {
  label: string;
  href: {
    pathname: string;
    hash?: string;
  };
};

const navItems: NavItem[] = [
  { label: "オキレルとは", href: { pathname: "/", hash: "hero" } },
  { label: "特徴紹介", href: { pathname: "/", hash: "features" } },
  { label: "使い方", href: { pathname: "/", hash: "how-it-works" } },
  { label: "料金プラン", href: { pathname: "/", hash: "pricing" } },
  { label: "よくある質問", href: { pathname: "/", hash: "cta" } }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href={{ pathname: "/", hash: "hero" }}
          aria-label="オキレル ホームに戻る"
          className="flex items-center gap-3"
        >
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" aria-hidden="true"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden="true"></span>
          </span>
          <span className="text-lg font-semibold tracking-wide text-slate-900">オキレル</span>
        </Link>
        <nav aria-label="主要メニュー" className="hidden md:block">
          <ul className="flex items-center gap-6 text-xs font-semibold tracking-[0.25em] text-slate-500">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-slate-900 focus-visible:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={{ pathname: "/", hash: "cta" }}
            className={buttonClasses("primary", "hidden md:inline-flex px-7 py-2.5 text-xs font-semibold tracking-[0.25em] uppercase shadow-none")}
          >
            オキレルをはじめる
          </Link>
          <Link
            href={{ pathname: "/", hash: "cta" }}
            className={buttonClasses("primary", "md:hidden px-6 py-3 text-sm font-semibold shadow-none")}
          >
            事前登録
          </Link>
        </div>
      </Container>
    </header>
  );
}
