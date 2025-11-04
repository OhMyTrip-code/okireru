import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap"
});

const baseUrl = "https://okireru.app";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "オキレル",
  url: baseUrl,
  description:
    "朝習慣パーソナルメソッド。金銭コミットと物理的強制で早起きを習慣化するモバイル起床支援サービス。",
  inLanguage: "ja",
  potentialAction: {
    "@type": "RegisterAction",
    target: `${baseUrl}#cta`
  }
};

const applicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "オキレル",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  price: "3000",
  priceCurrency: "JPY",
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "JPY",
    availability: "PreOrder"
  },
  url: baseUrl,
  image: `${baseUrl}/hero-mock.png`,
  description:
    "QR起床と金銭コミットで、朝型習慣を強制的に手に入れるモバイル起床支援サービス。"
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/favicon.ico"
  },
  themeColor: "#F97316"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} bg-slate-50 text-slate-900`}>
        <a href="#main-content" className="skip-link">
          メインコンテンツへスキップ
        </a>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
