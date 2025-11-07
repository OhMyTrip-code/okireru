import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const phrases = [
  "三日坊主、何年目？",
  "ただ起きるんじゃない、習慣にしよう",
  "朝型で人生を変えろ"
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="pointer-events-none absolute -top-40 right-[-6rem] h-80 w-80 rounded-full bg-brand/50 blur-3xl sm:right-0"></div>
      <div className="pointer-events-none absolute top-[-6rem] right-24 hidden h-32 w-32 rounded-full bg-[#FFE29A] blur-2xl lg:block"></div>
      <Container>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">最強目覚ましアプリ</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl">
              もう起きれないはやめよう
            </h1>
            <p className="mt-4 text-2xl font-medium text-slate-700">早起き・朝活の習慣化に。</p>
            <div className="mt-8 space-y-3 text-xl leading-8 text-slate-600">
              {phrases.map((phrase) => (
                <p key={phrase}>{phrase}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href={{ pathname: "/", hash: "cta" }}
                className={buttonClasses("primary", "px-12 py-4 text-lg shadow-md")}
              >
                オキレルをはじめる
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
            <Image
              src="/hero-image.jpg"
              alt="朝のコーヒーを楽しむ時間"
              fill
              sizes="(min-width: 1024px) 500px, 400px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
