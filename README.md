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

## Newsのブラウザ管理（Decap CMS）

`/admin` から News を作成・編集できます。保存先は `src/content/news/*.md` です。

- 管理画面URL: `https://ojochi.github.io/admin/`
- 設定ファイル:
`public/admin/index.html`
`public/admin/config.yml`

### 1. GitHub OAuth App を作成

GitHub > Settings > Developer settings > OAuth Apps > New OAuth App で作成します。

- Application name: 任意（例: `ojochi news cms`）
- Homepage URL: `https://ojochi.github.io`
- Authorization callback URL: `https://YOUR_OAUTH_PROXY_DOMAIN/callback`

作成後に `Client ID` と `Client Secret` を控えます。

### 2. OAuthプロキシを用意

GitHub Pages は静的ホスティングのため、`Client Secret` を直接置けません。  
Decap CMS用のOAuthプロキシ（Decap公式のプロキシ実装など）を別サービスで動かします。

最低限必要な環境変数の例:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `ORIGIN=https://ojochi.github.io`

### 3. Decap CMS設定を差し替え

`public/admin/config.yml` の以下を実値に変更します。

- `backend.base_url: https://YOUR_OAUTH_PROXY_DOMAIN`
- `backend.auth_endpoint: /auth`（プロキシ実装に合わせて変更）

### 4. Newsのfrontmatter

CMSから作成されるNewsは次の項目を扱います。

- `title` (string)
- `date` (YYYY-MM-DD)
- `description` (string)
- `draft` (boolean, optional)
- `body` (markdown本文)

`draft: true` の記事はサイト上の News 一覧・Home の Latest News に表示されません。

## note RSS 設定

`src/site.config.ts` の `SITE.NOTE_RSS_URL` を差し替えると `/note` の取得先を変更できます。
`/note` はビルド時にRSSを取得し、失敗時は「note準備中」を表示します。

## デプロイ

GitHub Actions (`.github/workflows/deploy.yml`) でGitHub Pagesへデプロイします。
