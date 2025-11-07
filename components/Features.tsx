import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "起こす",
    description: "アラームと通知で徹底的に起こす。ベッドから離脱を強制します。"
  },
  {
    title: "証明する",
    description: "QRコードスキャンで起床を証明。ベッドから離れないと止まりません。"
  },
  {
    title: "続ける",
    description: "成功すればキャッシュバック。失敗すればお金が減る。この仕組みで続けられます。"
  }
];

export default function Features() {
  return (
    <section id="features" className="border-y border-slate-100 bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">Features</p>
            <h2 className="text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
              3つの仕組みで
              <br className="hidden sm:block" />
              朝のスタートを整える
            </h2>
            <p className="text-base leading-7 text-slate-600">
              オキレルは派手な機能ではなく、毎朝の行動を徹底的にデザインしています。起こす、証明する、続ける。3つのステップが揃うことで、寝ぼけた意志をシステム化します。
            </p>
          </div>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className="group flex items-start gap-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:border-brand/50 hover:bg-white"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold shadow-sm text-slate-900">
                  0{index + 1}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-dark">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-slate-400">/ メソッド</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
