import { Container } from "@/components/ui/Container";

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-blue-50/30 to-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-brand/10 px-6 py-2 text-sm font-semibold text-brand mb-6">
            Pricing
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            月額 <span className="text-brand">¥3,000</span>
            <br />
            成功すれば実質無料
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            1日成功=100円を月末にキャッシュバック。<br />
            30日成功なら実質無料です。
          </p>
          <div className="mt-12 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand to-blue-500 rounded-3xl blur opacity-25"></div>
            <div className="relative rounded-2xl border-2 border-brand/20 bg-white p-8 shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-gradient-to-br from-brand to-blue-500 p-4 shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <p className="text-base text-slate-700">
                失敗すればお金が減る。成功すれば返ってくる。<br />
                この仕組みで、朝起きるしかなくなります。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
