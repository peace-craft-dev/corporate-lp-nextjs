"use client";

import { motion } from "framer-motion";
import { Bot, BarChart3, Globe, Workflow } from "lucide-react";

const services = [
  {
    icon: Workflow,
    tag: "Automation",
    title: "業務自動化スクリプト",
    body:
      "Excel/Sheets/Notion/API連携、定期実行、Slack通知まで。日々の繰り返し作業を AI で構築。",
    bullets: [
      "Google Sheets / Notion 自動更新",
      "CSV・帳票自動生成 + メール送信",
      "Cron / GitHub Actions による定期実行",
    ],
    price: "¥50,000 〜 ¥150,000",
    delivery: "1〜2 週間",
  },
  {
    icon: Bot,
    tag: "AI Bot",
    title: "AIチャットボット / LINE Bot",
    body:
      "LINE公式アカウント、Webチャット、社内Slack Bot まで。Claude API でカスタム応答を実装。",
    bullets: [
      "FAQ / 予約受付 / 業務サポート Bot",
      "会話履歴・コンテキスト管理",
      "Vercel / Cloud Run へのデプロイ込み",
    ],
    price: "¥80,000 〜 ¥200,000",
    delivery: "1〜2 週間",
  },
  {
    icon: Globe,
    tag: "Web",
    title: "Webサイト・LP制作",
    body:
      "Next.js + Tailwind で SEO・パフォーマンス・モバイル対応を全て満たす本格 LP。",
    bullets: [
      "Lighthouse 90+ の高速サイト",
      "問い合わせフォーム / 予約連携",
      "Vercel 無料枠での運用込み",
    ],
    price: "¥100,000 〜 ¥250,000",
    delivery: "2〜3 週間",
  },
  {
    icon: BarChart3,
    tag: "Data",
    title: "データ分析・ダッシュボード",
    body:
      "売上・KPI を Streamlit や BI ツールで可視化。Google Sheets / DB 連携で自動更新。",
    bullets: [
      "売上・在庫・顧客分析ダッシュボード",
      "Streamlit Cloud / Looker Studio",
      "リアルタイム更新・アラート機能",
    ],
    price: "¥150,000 〜 ¥300,000",
    delivery: "2〜4 週間",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3">
            Services
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-ink">
            4 つのコアサービス
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            個人事業主・中小事業者の課題に直結する 4 領域に特化。
            それ以外もご相談に応じます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-warm p-6 md:p-8 group hover:translate-y-[-2px] transition-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-sage-50 border border-sage-100 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-sage-600" />
                </div>
                <span className="text-[10px] tracking-[0.18em] uppercase text-wood-600 font-medium">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 text-ink">
                {s.title}
              </h3>
              <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-5">
                {s.body}
              </p>
              <ul className="space-y-2 mb-6">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-sage-500 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-0.5">
                    Price
                  </div>
                  <div className="text-sm font-semibold text-ink">{s.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-0.5">
                    Delivery
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {s.delivery}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
