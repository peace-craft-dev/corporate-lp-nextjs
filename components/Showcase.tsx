"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const works = [
  {
    title: "Google Sheets 売上レポート自動化",
    repo: "sales-report-automation",
    body:
      "Sheets API で売上データ取得 → pandas で集計 → 別シートにレポート出力 → Slack 通知。月次の集計作業を自動化する典型例。",
    tags: ["Python", "Google Sheets API", "pandas", "Slack"],
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Claude API 搭載 LINE Bot",
    repo: "claude-line-bot",
    body:
      "FastAPI + LINE Messaging API + Claude API。FAQ Bot・予約 Bot・業務サポート Bot などへ展開可能なベース実装。",
    tags: ["Python", "FastAPI", "LINE", "Claude API"],
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "コーポレート LP（このサイト自身）",
    repo: "corporate-lp-nextjs",
    body:
      "Next.js 14 App Router + Tailwind + Framer Motion。AI Native Development の世界観を体現した、いま見ているこのサイト自身。",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    accent: "from-violet-500/20 to-fuchsia-500/10",
    isSelf: true,
  },
  {
    title: "Streamlit 売上ダッシュボード",
    repo: "sales-dashboard-streamlit",
    body:
      "Pandas + Plotly + Streamlit で売上推移・カテゴリ別分析・KPI カードを可視化。Excel/Sheets/DB から自動更新。",
    tags: ["Python", "Streamlit", "Plotly", "pandas"],
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-brand-400 uppercase mb-3">
            Showcase
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            実例コード <span className="text-gradient">公開中</span>
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            主要 4 サービスの実装例を GitHub で全公開しています。
            <br className="hidden md:inline" />
            「同じものを作って」「ここをカスタムして」もすぐ着手可能。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {works.map((w, i) => (
            <motion.a
              key={w.repo}
              href={`https://github.com/peace-craft-dev/${w.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative border-gradient p-6 md:p-7 overflow-hidden hover:translate-y-[-2px] transition-transform"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${w.accent} opacity-50 pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <Github className="w-3.5 h-3.5" />
                    <span className="font-mono">{w.repo}</span>
                  </div>
                  {w.isSelf && (
                    <span className="text-[10px] tracking-[0.18em] uppercase text-brand-400 border border-brand-500/40 px-2 py-0.5 rounded-full">
                      You are here
                    </span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-gradient transition-colors">
                  {w.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">
                  {w.body}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-brand-400 group-hover:text-brand-300 transition-colors">
                  GitHub で見る
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
