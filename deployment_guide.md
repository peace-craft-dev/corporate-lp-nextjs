# デプロイガイド: Next.js コーポレート LP

> ユーザー（取締役会）作業手順
> 推定所要時間: 30-45分

---

## Step 1: ローカル開発・動作確認

```bash
cd sample_3_lp

# 依存パッケージインストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000 で確認

# 本番ビルドテスト
npm run build
npm start
```

## Step 2: Vercel デプロイ（推奨）

### 2.1 Vercel アカウント作成
1. [Vercel](https://vercel.com/) にサインアップ
2. GitHub アカウント連携

### 2.2 GitHub にプッシュ
```bash
git init
git add .
git commit -m "Initial commit: corporate LP"
gh repo create PeaceCraft/sample-corporate-lp --public --source=. --push
```

### 2.3 Vercel でインポート
1. Vercel ダッシュボード → 「New Project」
2. GitHub リポジトリを選択
3. Framework Preset: Next.js（自動検出）
4. Deploy ボタンを押下

数分で公開 URL が発行されます（例: `https://sample-corporate-lp.vercel.app`）。

### 2.4 カスタムドメイン（オプション）
1. Vercel プロジェクト設定 → Domains
2. 独自ドメインを追加
3. DNS 設定（A/CNAME レコード）

## Step 3: パフォーマンス確認

[PageSpeed Insights](https://pagespeed.web.dev/) でデプロイ URL を入力し、Lighthouse スコア確認。
目標: Performance 90+、Accessibility 95+、SEO 100。

## Step 4: スクリーンショット撮影

撮影するスクリーン:
1. **ヒーローセクション**（PC幅 1920×1080）
2. **サービス紹介**（PC幅）
3. **お客様の声**
4. **お問い合わせフォーム**
5. **モバイル表示**（375×812）— 全セクション縦長スクショ

撮影ツール推奨:
- macOS: スクリーンショット（Cmd+Shift+5）
- Chrome DevTools: デバイスエミュレーション
- [Figma](https://figma.com): モックアップ作成も可

## Step 5: ポートフォリオ掲載

各CSサイトに以下を掲載:
- スクリーンショット 4-5枚
- デモURL（Vercel）
- GitHubリポジトリURL（公開設定後）
- 短い説明文:
  > Next.js + Tailwind CSS で構築したコーポレートLP のサンプル。AI-Native Development により、デザイン・実装を高速化。お問い合わせフォームは React Server Actions で実装。

## ランニング費用

- Vercel: 無料枠（個人プロジェクト範囲内）
- カスタムドメイン: 年1,000〜3,000円（任意）

## カスタマイズ案

実案件向けに以下を変更可能:
- カラー: `tailwind.config.ts` の `peace`/`accent`
- フォント: `next/font` で Google Fonts 読み込み
- コンテンツ: `components/` の各セクションを編集
- お問い合わせ送信先: `app/actions.ts` で SendGrid/Resend 連携

## トラブルシュート

### Q. `npm install` でエラー
A. Node.js バージョン確認（18+ 必須）、`npm cache clean --force` を試す

### Q. Vercel デプロイで型エラー
A. ローカルで `npm run type-check` 実行、エラーを修正してから再 push

### Q. お問い合わせフォームが動かない
A. Server Actions は本番ビルドが必要。Vercel デプロイ後に再確認

---

**PeaceCraft** — お困りの際はお気軽にお問い合わせください。
