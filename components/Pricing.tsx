"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Light",
    price: "¥50,000〜",
    tag: "業務自動化スクリプト",
    delivery: "1〜2 週間",
    body: "Excel・Sheets・Notion 等の単発自動化。",
    bullets: [
      "業務 1〜2 工程の自動化",
      "Slack / メール通知連携",
      "READMEと操作マニュアル",
      "30日無償保守",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "¥80,000〜¥200,000",
    tag: "LINE Bot / 業務システム / LP",
    delivery: "1〜3 週間",
    body: "1 つのプロダクトを完成形で。",
    bullets: [
      "対話・予約・通知などのコア機能一式",
      "Vercel / Cloud Run へデプロイ込み",
      "ドキュメント・テスト・セキュリティ監査",
      "30日無償保守",
      "中間レビュー 2 回",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "¥150,000〜¥300,000",
    tag: "ダッシュボード / 複合システム",
    delivery: "2〜4 週間",
    body: "データ連携を含む高機能案件。",
    bullets: [
      "複数データソース連携",
      "リアルタイム更新 / アラート",
      "管理画面・権限・ログ",
      "30日無償保守",
      "月次の改善提案 1 回（任意）",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] text-brand-400 uppercase mb-3">
            Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            透明な <span className="text-gradient">価格表</span>
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            目安となる固定価格を公開しています。要件確定後に最終見積もりをお出しします。
            <br className="hidden md:inline" />
            ランニング費用（API・サーバー）は顧客負担で透明化しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl p-6 md:p-8 ${
                t.highlight
                  ? "border-gradient glow-brand"
                  : "border border-border bg-bg-card"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] tracking-[0.2em] uppercase bg-brand-gradient text-white px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-xs tracking-[0.2em] text-ink-muted uppercase mb-1">
                {t.tag}
              </div>
              <h3 className="text-2xl font-bold mb-1">{t.name}</h3>
              <div className="text-3xl font-bold text-gradient mb-1">
                {t.price}
              </div>
              <div className="text-xs text-ink-muted mb-4">
                納期目安: {t.delivery}
              </div>
              <p className="text-sm text-ink-soft mb-6">{t.body}</p>
              <ul className="space-y-2.5 mb-8">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-ink-soft">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-2.5 rounded-lg font-medium text-sm transition-all ${
                  t.highlight
                    ? "bg-brand-gradient text-white hover:scale-[1.02]"
                    : "border border-border-strong text-ink hover:bg-white/[0.04]"
                }`}
              >
                このプランで相談する
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-ink-muted mt-10">
          ※ 上記は目安価格です。仕様確定後に固定見積もりをお出しします。商用利用・著作権譲渡含む契約はオプションでご相談ください。
        </p>
      </div>
    </section>
  );
}
