"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* background grid */}
      <div className="absolute inset-0 bg-grid-dark bg-grid-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_50%,transparent_100%)] opacity-50" />
      {/* radial glow */}
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-ink-soft mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
          AI Native Development — Vibe Coding 時代の受託開発
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          AIで業務を、
          <br className="hidden sm:inline" />
          <span className="text-gradient">人手いらずで変革する。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-ink-soft max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AIエージェント（Claude、GPT等）と人間エンジニアの協働で、
          <br className="hidden md:inline" />
          業務自動化・AIチャットボット・LP制作・データ分析を
          <span className="text-ink font-medium"> 従来の2〜5倍速 </span>
          で構築します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-gradient text-white px-6 py-3 rounded-lg font-medium glow-brand hover:scale-[1.02] transition-transform"
          >
            無料で相談する
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/peace-craft-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass text-ink px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors"
          >
            <Github className="w-4 h-4" />
            実例コードを見る
          </a>
        </motion.div>

        {/* indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "開発スピード", value: "2〜5×" },
            { label: "中価格帯", value: "¥5〜15万〜" },
            { label: "返信速度", value: "2時間以内" },
            { label: "コードレビュー", value: "全件" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {s.value}
              </div>
              <div className="text-xs text-ink-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
