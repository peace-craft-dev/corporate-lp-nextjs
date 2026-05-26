"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const platforms = [
  {
    name: "ランサーズ",
    body: "提案を送る・直接依頼する。クラウドソーシング最大手。",
    href: "https://www.lancers.jp/",
    badge: "Lancers",
  },
  {
    name: "ココナラ",
    body: "サービス購入形式で依頼。価格・納期が明示済み。",
    href: "https://coconala.com/",
    badge: "coconala",
  },
  {
    name: "CrowdWorks",
    body: "案件相談・スカウト・直接契約。",
    href: "https://crowdworks.jp/",
    badge: "CrowdWorks",
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
            30 分のオンライン MTG または DM で、できること・概算費用をお伝えします。
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
              <h3 className="font-display text-lg font-semibold mb-2 text-ink">
                {p.name}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-warm p-6 md:p-10 text-center shadow-glow bg-white"
        >
          <div className="w-12 h-12 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-5 h-5 text-sage-600" />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 text-ink">
            直接メールでのご相談も歓迎
          </h3>
          <p className="text-sm md:text-base text-ink-soft mb-6 max-w-xl mx-auto">
            プラットフォームを介さず、直接ご相談いただける場合は以下までお気軽にどうぞ。
            返信は営業時間（平日 9:00 - 19:00）内に 2 時間以内。
          </p>
          <a
            href="mailto:peace.craft.dev@gmail.com?subject=PeaceCraft%20%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87"
            className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-medium shadow-glow transition-colors"
          >
            <Mail className="w-4 h-4" />
            メールで相談する
          </a>
          <p className="text-xs text-ink-muted mt-4 font-mono">
            peace.craft.dev@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
