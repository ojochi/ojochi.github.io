# ojochi.github.io

Astro製の個人サイト「ojochiの作業部屋」。

## ローカル起動

```bash
npm install
npm run dev
```

## 記事追加

- Blog: `src/content/blog/*.md`
- News: `src/content/news/*.md`
- Works: `src/content/works/*.md`

フロントマターは `src/content/config.ts` のschemaに従ってください。

## NOTE_RSS_URL の設定

`src/site.config.ts` の `NOTE_RSS_URL` を任意のRSS URLへ差し替えます。
`/note` ページはビルド時にRSSを取得し、失敗時は「note準備中」を表示します。

## デプロイ（GitHub Pages）

- `main` ブランチへのpushで `.github/workflows/deploy.yml` が実行されます。
- `astro.config.mjs` の `site` は `https://ojochi.github.io` を指定済み（ユーザーサイトのためbaseは`/`）。
- 必要に応じてGitHubリポジトリ設定の Pages ソースを **GitHub Actions** にしてください。
