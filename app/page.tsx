import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";

const baseUrl = "https://okireru.app";
const pageTitle = "オキレル | 朝習慣パーソナルメソッド";
const pageDescription =
  "朝寝坊を断ち切るモバイル起床支援サービス。QR起床と金銭コミットで、ただ起きるだけでなく習慣化まで導く『朝習慣パーソナルメソッド』。";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "オキレル",
      "早起き",
      "朝活",
      "モーニングルーティン",
      "習慣化",
      "QR起床",
      "アラームアプリ"
    ],
    alternates: {
      canonical: baseUrl
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: baseUrl,
      siteName: "オキレル",
      type: "website",
      images: [
        {
          url: `${baseUrl}/hero-mock.png`,
          width: 1024,
          height: 640,
          alt: "オキレル アプリモックアップ"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${baseUrl}/hero-mock.png`]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Guarantee />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
