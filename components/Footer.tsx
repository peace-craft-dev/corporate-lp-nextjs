import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-brand-gradient" />
              <span className="font-semibold text-lg">PeaceCraft</span>
            </div>
            <p className="text-xs text-ink-muted max-w-md">
              AI Native Development —
              個人事業主・中小事業者のための受託開発。屋号: PeaceCraft（2026 年開業）。
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/peace-craft-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              無料相談
            </a>
            <a
              href="#pricing"
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              価格
            </a>
            <a
              href="#showcase"
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              実例
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-ink-muted">
            © 2026 PeaceCraft. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Built with Next.js 14 · Tailwind · Framer Motion · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
