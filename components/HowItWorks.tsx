import { Container } from "@/components/ui/Container";

const steps = [
  {
    title: "登録する",
    description: "アプリをダウンロードし、起床時刻を設定します。",
    illustration: (
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-xl"></div>
        <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-xl">
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-white/30"></div>
            <div className="h-8 w-3/4 rounded bg-white"></div>
            <div className="h-2 w-1/2 rounded bg-white/30"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "スキャンする",
    description: "アラームが鳴ったら、バーコードをスキャンします。",
    illustration: (
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-green-500/20 blur-xl"></div>
        <div className="relative rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 shadow-xl">
          <svg viewBox="0 0 24 24" className="w-full h-16 text-white">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="7" y="7" width="3" height="3" fill="currentColor" />
            <rect x="14" y="7" width="3" height="3" fill="currentColor" />
            <rect x="7" y="14" width="3" height="3" fill="currentColor" />
            <rect x="14" y="14" width="3" height="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    )
  },
  {
    title: "続ける",
    description: "成功すればキャッシュバック。習慣化します。",
    illustration: (
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-brand/20 blur-xl"></div>
        <div className="relative rounded-2xl bg-gradient-to-br from-brand to-blue-600 p-6 shadow-xl">
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-brand/10 px-6 py-2 text-sm font-semibold text-brand mb-6">
              How it works
            </div>
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              使い方はとてもシンプル
            </h2>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute -right-6 top-12 hidden h-0.5 w-12 bg-gradient-to-r from-brand to-transparent md:block"></div>
                )}
                <div className="space-y-6 text-center">
                  <div className="mx-auto">
                    {step.illustration}
                  </div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
