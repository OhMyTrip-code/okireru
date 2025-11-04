import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-slate-50 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand/10 px-6 py-2 text-sm font-semibold text-brand">
            朝習慣パーソナルメソッド
          </div>
          <h1 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl sm:leading-[1.1]">
            朝起きられないその日々、
            <br />
            <span className="text-brand">終わりにしませんか</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            QR起床と金銭コミットで朝を強制的に変える。<br />
            成功すれば実質無料。失敗すればお金が減る。<br />
            この仕組みで、あなたの朝は変わる。
          </p>
          <div className="mt-12">
            <Link href="#cta" className={buttonClasses("primary", "text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-shadow")}>
              今すぐ事前登録する
            </Link>
          </div>
          <div className="mt-16">
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-2xl">
                <Image
                  src="/hero-mock.png"
                  alt="オキレル アプリのモックアップ"
                  width={800}
                  height={500}
                  priority
                  className="w-full"
                />
              </div>
              {/* 装飾的なバッジ */}
              <div className="absolute -bottom-4 -right-4 hidden md:block">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg border border-slate-200">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
                  </svg>
                  <span className="text-sm font-semibold text-slate-700">成功率 98.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
