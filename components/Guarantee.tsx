import { Container } from "@/components/ui/Container";

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50/70 p-10 text-center shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Guarantee</p>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-slate-900 sm:text-4xl">
            30日間で効果を感じなければ
            <br className="hidden sm:block" />
            <span className="text-brand-dark">全額返金</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600">
            オキレルを30日間使っても朝が変わらなかった場合、理由を問わず利用料金をすべて返金します。続けられる仕組みを提供する自信の証です。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">期間</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">30日</p>
            </div>
            <div className="h-12 w-px bg-slate-200" aria-hidden="true"></div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">返金率</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">100%</p>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-500">
            * 返金はサポート窓口にご連絡いただくことで即日対応いたします。
          </p>
        </div>
      </Container>
    </section>
  );
}
