"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "AI で作ったコードって、本当に大丈夫？",
    a: "AI が生成したコードは必ず人間エンジニアが最終レビュー・テストし、OWASP Top 10 準拠のセキュリティ監査を通します。AI を「下書き役」に使うことで速度を上げ、品質保証は人間が担保する設計です。",
  },
  {
    q: "ランニング費用（API・サーバー代）は誰が払うの？",
    a: "Claude API・OpenAI API・LINE Messaging API・Vercel・Streamlit Cloud などの利用料は、顧客様ご自身のアカウントで管理・支払いいただきます。透明化のため弊社では預かりません（金額目安はサービス提案時に共有）。",
  },
  {
    q: "著作権・成果物の権利は？",
    a: "原則、納品物の著作権は顧客様に譲渡します（個別契約で明示）。ただし、汎用的なフレームワーク・ライブラリ部分はオープンソースライセンスに従います。商用二次配布についてはご相談ください。",
  },
  {
    q: "納品後の修正は何回まで？",
    a: "納品から30日間は軽微な修正（バグ修正・誤字脱字・小規模調整）を無償で対応します。仕様変更を伴う改修は別途お見積もりです。長期保守は月額契約でも対応可能。",
  },
  {
    q: "途中でキャンセルしたい場合は？",
    a: "要件定義完了前: 無料キャンセル可。実装着手後: 着手分の作業料金（時間清算）をご請求します。具体的な扱いは個別契約書に明記しています。",
  },
  {
    q: "個人事業主・1人エンジニアでも安心して頼めますか？",
    a: "はい。むしろ規模の小さい受託こそ AI Native Development の強みが発揮されます。大手開発会社では採算が合わない 5〜30 万円帯を、品質を落とさず提供することを得意としています。",
  },
  {
    q: "対応エリアは？オンラインのみ？",
    a: "オンライン対応のみで全国どこでも受託可能です。MTG は Google Meet / Zoom / Slack ハドル / Discord などお好みのツールで。",
  },
  {
    q: "NDA（秘密保持契約）は結べる？",
    a: "はい、可能です。要件ヒアリング前に NDA を締結する流れにも対応します。テンプレートあり、顧客様の雛形にも対応可能。",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-brand-400 uppercase mb-3">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            よくあるご質問
          </h2>
          <p className="text-ink-soft">
            ここに無いご質問は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "rounded-xl border transition-colors overflow-hidden",
                  isOpen
                    ? "border-brand-500/30 bg-white/[0.02]"
                    : "border-border bg-bg-card hover:border-border-strong"
                )}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className="text-sm md:text-base font-medium">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 shrink-0 text-ink-muted transition-transform",
                      isOpen && "rotate-180 text-brand-400"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
