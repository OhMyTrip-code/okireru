import Image from "next/image";
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
  { label: "特徴", href: { pathname: "/", hash: "features" } },
  { label: "使い方", href: { pathname: "/", hash: "how-it-works" } },
  { label: "料金", href: { pathname: "/", hash: "pricing" } },
  { label: "お問い合わせ", href: { pathname: "/", hash: "cta" } }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/85 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href={{ pathname: "/", hash: "hero" }} aria-label="オキレル ホームに戻る">
          <Image src="/okireru-logo-small.png" alt="オキレル" width={200} height={53} priority className="h-10 w-auto sm:h-12" />
        </Link>
        <nav aria-label="主要メニュー" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-brand focus-visible:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link href={{ pathname: "/", hash: "cta" }} className={buttonClasses("primary", "hidden md:inline-flex")}>
            今すぐ事前登録
          </Link>
          <Link href={{ pathname: "/", hash: "cta" }} className={buttonClasses("secondary", "md:hidden")}>
            事前登録
          </Link>
        </div>
      </Container>
    </header>
  );
}
