import { Container } from "@/components/ui/Container";

export default function Guarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50/30 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"></div>
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-6 py-2 text-sm font-semibold text-emerald-700 mb-6">
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
            </svg>
            保証
          </div>
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-emerald-500 to-green-500 p-6 shadow-xl">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            30日間、効果を実感できなければ<br />
            <span className="text-brand">全額返金</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            オキレルを30日間使用しても、<br />
            朝起きられない状況が改善されなければ、<br />
            お支払いいただいた費用を全額返金いたします。
          </p>
          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand">30日</div>
              <div className="text-sm text-slate-600 mt-1">無条件返金</div>
            </div>
            <div className="w-px bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand">100%</div>
              <div className="text-sm text-slate-600 mt-1">全額返金</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


