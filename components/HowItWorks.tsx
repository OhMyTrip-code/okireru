import { Container } from "@/components/ui/Container";

const steps = [
  {
    title: "事前登録",
    description: "アプリを予約し、目標の起床時間とベッドサイドのバーコードを登録します。"
  },
  {
    title: "アラーム",
    description: "設定時刻になるとアラームと通知が鳴動。ベッドから離れないと止められません。"
  },
  {
    title: "スキャン",
    description: "登録したバーコードを5分以内にスキャン。動いていることが証明され、アラームが静まります。"
  },
  {
    title: "キャッシュバック",
    description: "成功した日数×100円を月末に還元。継続するほど自己投資が返ってきます。"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">Process</p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            起床習慣を支える、4つのリズム
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            毎朝のテンション任せではなく、仕組みで動く起床体験をデザインしました。最初の登録からキャッシュバックまで一連の流れが一本の線でつながっています。
          </p>
          <ol className="relative mt-12 space-y-10 border-l border-slate-200 pl-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[1.5rem] flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="ml-8 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
