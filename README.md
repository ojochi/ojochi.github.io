# ojochi.github.io

Astroで構築した個人サイト「ojochiの作業部屋」です。

## セットアップ

```bash
npm install
npm run dev
```

## コンテンツ管理

Astro Content Collections + Markdownを利用しています。

- Blog: `src/content/blog/*.md`
- News: `src/content/news/*.md`
- Works: `src/content/works/*.md`

スキーマ定義: `src/content/config.ts`

## note RSS 設定

`src/site.config.ts` の `SITE.NOTE_RSS_URL` を差し替えると `/note` の取得先を変更できます。
`/note` はビルド時にRSSを取得し、失敗時は「note準備中」を表示します。

## デプロイ

GitHub Actions (`.github/workflows/deploy.yml`) でGitHub Pagesへデプロイします。
