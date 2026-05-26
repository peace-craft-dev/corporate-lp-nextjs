"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "無料ヒアリング",
    body:
      "30 分のオンライン MTG または DM で、課題・現状業務・ご希望のゴールを伺います。\nここまで完全無料。",
    detail: "所要 30 分 / オンライン or DM",
  },
  {
    n: "02",
    title: "3 ラウンド型 要件定義",
    body:
      "(1) 業務理解 → (2) 仕様すり合わせ → (3) 最終確認 の 3 段階で要件を確定。\n「思っていたのと違う」をゼロに。",
    detail: "所要 1〜3 日 / 仕様書・見積書を確定",
  },
  {
    n: "03",
    title: "高速実装",
    body:
      "AI ペアプログラミングで実装。途中 1〜2 回の中間レビューで方向ズレを早期検知。\n全コードに人間レビュー + テスト実施。",
    detail: "所要 1〜3 週間 / GitHub で進捗共有",
  },
  {
    n: "04",
    title: "検収・納品",
    body:
      "ソースコード・README・操作マニュアル・テストレポートを統一フォーマットで納品。\n納品物の動作確認後にお支払い。",
    detail: "成果物 4 点セット / 検収書発行",
  },
  {
    n: "05",
    title: "保守・改善",
    body:
      "納品後 30 日間は軽微な修正が無料。\n継続保守・機能追加もご相談に応じます。",
    detail: "30 日無償保守 + 任意の継続契約",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-brand-400 uppercase mb-3">
            Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            ご相談から納品までの <span className="text-gradient">5 ステップ</span>
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            「何が出来上がるか分からない」不安を、要件定義の透明性で解消します。
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-accent-500/30 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex md:items-center"
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1/2 md:-translate-x-1/2 rounded-full bg-brand-gradient glow-brand z-10" />

                <div
                  className={`pl-16 md:pl-0 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16 md:ml-auto md:text-left"
                  }`}
                >
                  <div className="text-[11px] tracking-[0.22em] text-brand-400 mb-1">
                    STEP {s.n}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-2 whitespace-pre-line">
                    {s.body}
                  </p>
                  <p className="text-xs text-ink-muted">{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
