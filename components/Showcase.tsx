"use client";

import { motion } from "framer-motion";
import { ExternalLink, PlayCircle } from "lucide-react";

const works = [
  {
    title: "Google Sheets 売上レポート自動化",
    subtitle: "業務自動化スクリプト",
    body:
      "Sheets API で売上データ取得 → pandas で集計 → 別シートにレポート出力 → Slack 通知。月次の集計作業を完全自動化。",
    tags: ["Python", "Google Sheets API", "pandas", "Slack"],
    demo: "https://sales-report-automation-showcase.vercel.app/",
    accent: "from-sage-100 to-bg-warm",
  },
  {
    title: "Claude API 搭載 LINE Bot",
    subtitle: "AIチャットボット",
    body:
      "FastAPI + LINE Messaging API + Claude API。FAQ Bot・予約 Bot・業務サポート Bot などへ展開可能なベース実装。",
    tags: ["Python", "FastAPI", "LINE", "Claude API"],
    demo: "https://claude-line-bot-showcase.vercel.app/",
    accent: "from-wood-50 to-bg-warm",
  },
  {
    title: "PeaceCraft 公式 LP",
    subtitle: "Webサイト・LP制作（このサイト自身）",
    body:
      "Next.js 14 + Tailwind + Framer Motion で構築。AI Native Development の世界観を体現した、いま見ているこのサイト自身。",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    demo: "https://corporate-lp-nextjs.vercel.app/",
    accent: "from-sage-100 to-wood-50",
    isSelf: true,
  },
  {
    title: "Streamlit 売上ダッシュボード",
    subtitle: "データ分析・ダッシュボード",
    body:
      "Pandas + Plotly + Streamlit で売上推移・カテゴリ別分析・KPI カードを可視化。Excel/Sheets/DB から自動更新。",
    tags: ["Python", "Streamlit", "Plotly", "pandas"],
    demo: "https://sales-dashboard-streamlit.streamlit.app/",
    accent: "from-wood-50 to-sage-50",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3">
            Showcase
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-ink">
            実例デモ <span className="text-gradient">公開中</span>
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            主要 4 サービスの実装例を、すぐ触れる Web デモとして公開しています。
            <br className="hidden md:inline" />
            「同じものを作って」「ここをカスタムして」もすぐ着手可能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.demo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative border-warm p-6 md:p-7 overflow-hidden hover:translate-y-[-2px] transition-transform"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${w.accent} opacity-60 pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-wood-600 font-medium">
                    {w.subtitle}
                  </div>
                  {w.isSelf && (
                    <span className="text-[10px] tracking-[0.18em] uppercase text-sage-700 bg-sage-50 border border-sage-200 px-2 py-0.5 rounded-full">
                      You are here
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2 text-ink group-hover:text-sage-700 transition-colors">
                  {w.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">
                  {w.body}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white border border-border text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-sage-700 font-medium group-hover:text-sage-800 transition-colors">
                  <PlayCircle className="w-4 h-4" />
                  実例デモを開く
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
