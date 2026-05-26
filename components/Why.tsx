"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, MessageCircle, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "2〜5倍の開発速度",
    body:
      "AIエージェントとの協働で、設計・実装・テスト・ドキュメントを並列処理。\n従来の見積もり2〜4週間を1〜2週間に短縮。",
  },
  {
    icon: Wallet,
    title: "中価格帯（5〜15万円〜）",
    body:
      "開発会社の半額以下、フリーランス相場と同等。\n固定見積もりで追加費用なし。透明な価格表を公開。",
  },
  {
    icon: ShieldCheck,
    title: "全コード人間レビュー",
    body:
      "AIに生成させたコードは全件、人間エンジニアが最終レビュー。\nOWASP Top 10 準拠のセキュリティ監査・テスト実施。",
  },
  {
    icon: MessageCircle,
    title: "2時間以内の返信",
    body:
      "営業時間（平日9:00-19:00）内のお問い合わせは2時間以内に必ず返信。\n質問・修正依頼にも即対応。",
  },
];

export default function Why() {
  return (
    <section id="why" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-brand-400 uppercase mb-3">
            Why PeaceCraft
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            なぜ <span className="text-gradient">いま</span> AI Native なのか
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            開発会社に依頼するには高すぎ、フリーランスに頼むにはバラつきが大きい。
            その中間を、AI 協働で安定した品質で実現します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-gradient p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
                  <r.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm md:text-base text-ink-soft leading-relaxed whitespace-pre-line">
                    {r.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
