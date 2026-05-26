import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peacecraft.dev"),
  title: {
    default: "PeaceCraft — AIで業務を、人手いらずで変革する",
    template: "%s | PeaceCraft",
  },
  description:
    "AI Native Development で、業務自動化・AIチャットボット・LP制作・データ分析を、従来の2〜5倍の速度と中価格帯（5〜15万円〜）で。個人事業主・中小事業者のための受託開発。",
  keywords: [
    "AI開発",
    "AI Native Development",
    "Vibe Coding",
    "業務自動化",
    "LINE Bot",
    "LP制作",
    "Next.js",
    "Streamlit",
    "Claude",
    "ChatGPT",
    "受託開発",
    "個人事業主",
  ],
  openGraph: {
    title: "PeaceCraft — AIで業務を、人手いらずで変革する",
    description:
      "AI Native Development で、業務自動化・AIチャットボット・LP制作・データ分析を、従来の2〜5倍速・中価格帯で提供。",
    type: "website",
    locale: "ja_JP",
    siteName: "PeaceCraft",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeaceCraft — AIで業務を、人手いらずで変革する",
    description:
      "AI Native Development で、業務自動化・AIチャットボット・LP制作・データ分析を、従来の2〜5倍速・中価格帯で提供。",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PeaceCraft",
  alternateName: "ピースクラフト",
  description:
    "AI Native Development を採用した受託開発サービス。業務自動化・AIチャットボット・LP制作・データ分析を高速・高品質で提供。",
  url: "https://peacecraft.dev",
  sameAs: ["https://github.com/peace-craft-dev"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
