import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー | オキレル",
  description: "オキレルが取得する個人情報の取り扱いについて記載しています。"
};

const sections = [
  {
    title: "1. 収集する情報",
    body:
      "当社は、事前登録フォームを通じて取得したメールアドレスなど、サービス提供に必要な最小限の個人情報を収集します。"
  },
  {
    title: "2. 利用目的",
    body:
      "取得した個人情報は、サービスの提供・改善、重要なお知らせの通知、お問い合わせへの対応の目的で利用します。"
  },
  {
    title: "3. 第三者提供",
    body:
      "法令で認められる場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。"
  },
  {
    title: "4. 安全管理",
    body:
      "当社は、個人情報の漏えい、滅失、毀損を防止するために適切な安全管理措置を講じます。"
  }
];

export default function PrivacyPage() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-slate-500">
            <Link href={{ pathname: "/" }} className="hover:text-brand">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            プライバシーポリシー
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">プライバシーポリシー</h1>
          <p className="text-slate-600">
            本ポリシーでは、オキレルが取得する個人情報の取扱方針を記載しています。安心してご利用いただくために、以下の内容をご確認ください。
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
