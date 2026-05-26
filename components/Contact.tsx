"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shield } from "lucide-react";

const platforms = [
  {
    name: "ランサーズ",
    body: "提案を送る・直接依頼する。クラウドソーシング最大手。",
    href: "https://www.lancers.jp/profile/peace-craft-dev",
    badge: "Lancers",
    note: "PeaceCraft プロフィール",
  },
  {
    name: "ココナラ",
    body: "サービス購入形式で依頼。価格・納期が明示済み。",
    href: "https://coconala.com/users/6102491",
    badge: "coconala",
    note: "PeaceCraft 出品者ページ",
  },
  {
    name: "CrowdWorks",
    body: "案件相談・スカウト・直接契約。",
    href: "https://crowdworks.jp/public/employees/7011266",
    badge: "CrowdWorks",
    note: "PeaceCraft ワーカープロフィール",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-radial-warm opacity-80 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3">
            Contact
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-ink">
            まずは <span className="text-gradient">無料で相談</span> から。
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            「こんな自動化はできますか？」「LINE Bot を作りたい」など、ふんわりした段階でも大丈夫です。
            下記いずれかのプラットフォームからご連絡ください。30 分のオンライン MTG または DM で、できること・概算費用をお伝えします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group border-warm p-5 md:p-6 hover:translate-y-[-2px] transition-transform"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[11px] tracking-[0.2em] uppercase text-wood-600 font-medium">
                  {p.badge}
                </span>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-sage-600 transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1 text-ink">
                {p.name}
              </h3>
              <div className="text-[11px] text-sage-700 font-medium mb-2">
                → {p.note}
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-warm p-6 md:p-8 bg-sage-50 border-sage-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-sage-200 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-sage-600" />
            </div>
            <div>
              <h3 className="font-display text-base md:text-lg font-semibold text-ink mb-2">
                安心してご連絡いただくために
              </h3>
              <ul className="text-sm text-ink-soft leading-relaxed space-y-1.5">
                <li>
                  ✓ 全てのご相談は <strong className="text-ink">プラットフォーム経由</strong> のみで承ります（スパム・なりすまし対策）
                </li>
                <li>
                  ✓ 各プラットフォームでは <strong className="text-ink">本人確認済み</strong>・<strong className="text-ink">2 段階認証有効</strong>で運用
                </li>
                <li>
                  ✓ ご相談内容・お見積もりは <strong className="text-ink">無料</strong>。ヒアリングのみで終了も歓迎
                </li>
                <li>
                  ✓ NDA（秘密保持契約）にも対応可能
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
