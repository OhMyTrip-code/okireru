import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "利用規約 | オキレル",
  description: "オキレルのサービス利用にあたって適用される利用規約を掲載しています。"
};

const sections = [
  {
    title: "第1条（適用）",
    body:
      "本規約は、オキレル（以下、当社といいます）が提供するサービスの利用条件を定めるものです。本サービスを利用するすべての方は、本規約に同意したものとみなします。"
  },
  {
    title: "第2条（登録）",
    body:
      "利用を希望する方は、当社が定める方法により申し込みを行ってください。登録希望者が未成年の場合、法定代理人の同意を得たうえで申し込みを行うものとします。"
  },
  {
    title: "第3条（禁止事項）",
    body:
      "利用者は、法令または公序良俗に反する行為、当社または第三者の権利を侵害する行為、その他当社が不適切と判断する行為をしてはなりません。"
  },
  {
    title: "第4条（規約の変更）",
    body:
      "当社は、必要と判断した場合には、本規約を変更することがあります。変更後の規約は、本サイト上に掲示した時点から効力を生じるものとします。"
  }
];

export default function TermsPage() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-slate-500">
            <Link href={{ pathname: "/" }} className="hover:text-brand">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            利用規約
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">利用規約</h1>
          <p className="text-slate-600">
            本規約は、オキレルが提供するサービスをご利用いただく際の条件を定めたものです。内容をご確認の上、ご不明点がありましたらお問い合わせください。
          </p>
        </div>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-800">{section.title}</h2>
              <p className="leading-relaxed text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="border-t border-slate-200 pt-6 text-sm text-slate-500">
          制定日: 2025年11月4日
        </div>
      </div>
    </Container>
  );
}
