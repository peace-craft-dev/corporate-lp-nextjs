import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcmeCorp — 業務効率化のための AI ソリューション",
  description:
    "中小企業向けに、AI を活用した業務自動化・AIチャットボット・データ分析を提供。短納期・高品質を実現します。",
  keywords: ["AI", "業務自動化", "DX", "中小企業", "AIチャットボット"],
  openGraph: {
    title: "AcmeCorp — 業務効率化のための AI ソリューション",
    description:
      "中小企業向けに、AI を活用した業務自動化・AIチャットボット・データ分析を提供。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcmeCorp — 業務効率化のための AI ソリューション",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AcmeCorp",
  description: "AI で業務効率化を支援する企業（PeaceCraft サンプル作品）",
  url: "https://example.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
