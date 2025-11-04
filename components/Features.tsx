import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "起こす",
    description: "アラームと通知で徹底的に起こす。ベッドから離脱を強制します。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          fill="currentColor"
        />
        <circle cx="12" cy="9" r="2" fill="white" />
      </svg>
    ),
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "証明する",
    description: "QRコードスキャンで起床を証明。ベッドから離れないと止まりません。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="7" y="7" width="3" height="3" fill="currentColor" />
        <rect x="14" y="7" width="3" height="3" fill="currentColor" />
        <rect x="7" y="14" width="3" height="3" fill="currentColor" />
        <rect x="14" y="14" width="3" height="3" fill="currentColor" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "続ける",
    description: "成功すればキャッシュバック。失敗すればお金が減る。この仕組みで続けられます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-brand/10 px-6 py-2 text-sm font-semibold text-brand mb-6">
            Features
          </div>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            3つの仕組みで朝を変える
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative space-y-6 rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-brand/50 hover:shadow-xl"
              >
                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                  <div className="w-12 h-12">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
