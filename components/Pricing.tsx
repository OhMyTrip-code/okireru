import { Container } from "@/components/ui/Container";

const perks = [
  "目標達成で月額全額キャッシュバック",
  "毎日100円のリワードで習慣化",
  "途中解約はいつでもOK"
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-slate-100 bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            さあ3,000円で朝起きれる未来の自分へ投資しよう
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600">
            早起きが続いた日数分だけキャッシュバック。全ての成功日が月末にまとめてAmazonギフトカードで届きます。
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-slate-200 bg-slate-50/70 p-10 text-left shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">monthly</span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">¥3,000</span>
                <span className="text-sm text-slate-500">/ 月</span>
              </div>
            </div>
            <span className="rounded-full border border-brand/40 px-4 py-1 text-xs font-semibold text-brand-dark">
              成功日 × ¥100 キャッシュバック
            </span>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-slate-600">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-brand-dark">
                  ●
                </span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-slate-500">
            * キャッシュバックは前月分を翌月初旬に送付します。未使用の期間がある場合は日割りで返金します。
          </p>
        </div>
      </Container>
    </section>
  );
}
