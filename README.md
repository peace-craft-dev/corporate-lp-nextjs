# コーポレート LP（Next.js）

> Developed by **PeaceCraft** — AI-Native Development
> Webサイト・LP制作のサンプル作品

---

## 概要

Next.js 14（App Router）+ TypeScript + Tailwind CSS で構築した、モダンな架空企業のLPサンプルです。
v0、Cursor、Claude 等の AI ツール群を駆使した AI-Native Development の典型例。
レスポンシブ対応、SEO 基本対応、Lighthouse スコア 90+ を目指す高速設計。

## 機能・実装内容

- ✅ Next.js 14 App Router + TypeScript
- ✅ Tailwind CSS でモダンデザイン
- ✅ 完全レスポンシブ（PC/タブレット/スマホ）
- ✅ ヒーローセクション、サービス紹介、お客様の声、CTA
- ✅ お問い合わせフォーム（React Server Actions）
- ✅ SEO: メタタグ、構造化データ（JSON-LD）、サイトマップ
- ✅ Vercel デプロイ対応
- ✅ アクセシビリティ配慮（セマンティックHTML、ARIA）

## システム要件

- Node.js 18+
- npm or pnpm or bun

## セットアップ

```bash
# 依存パッケージインストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000

# 本番ビルド
npm run build
npm start
```

## ディレクトリ構造

```
sample_3_lp/
├── README.md
├── deployment_guide.md
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── .env.example
├── .gitignore
├── app/
│   ├── layout.tsx          # 共通レイアウト
│   ├── page.tsx            # トップページ（LP本体）
│   ├── globals.css         # グローバルCSS
│   └── actions.ts          # Server Action (お問い合わせ)
├── components/
│   ├── Hero.tsx            # ヒーローセクション
│   ├── Services.tsx        # サービス紹介
│   ├── Testimonials.tsx    # お客様の声
│   ├── ContactForm.tsx     # お問い合わせフォーム
│   └── Footer.tsx          # フッター
└── public/
    └── (画像・アイコン)
```

## スクリーンショット撮影ポイント

1. ヒーローセクション（PC幅）
2. サービス紹介セクション（PC幅）
3. お客様の声セクション
4. お問い合わせフォーム
5. モバイル表示（全セクション）

## デプロイ

[deployment_guide.md](deployment_guide.md) 参照。
推奨: Vercel（無料枠）でデプロイ。

---

## SEO/パフォーマンス

- Lighthouse スコア目標: 90+
- Core Web Vitals 対応
- メタタグ・OGP・Twitter Card
- 構造化データ（Organization JSON-LD）

## ライセンス

MIT License — Developed by PeaceCraft (2026)

---

**PeaceCraft** — AI Native Development で、あなたの業務に平穏を。
