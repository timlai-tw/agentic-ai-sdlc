# Agentic SDLC Explorer

簡短說明：這個專案示範 Agentic AI 在軟體開發生命週期（SDLC）中協助開發者的探索性工具與範例介面。

內容摘要：

快速上手：

# Agentic SDLC Explorer

短述
-
本專案示範如何將 Agentic AI 概念應用於軟體開發生命週期（SDLC），提供一個以 Vite + React 建構的輕量前端範例，方便快速瀏覽與擴充。

主要目標
-
- 示範 Agent（自動化代理）在需求、設計、實作、測試與部署各階段的輔助流程。
- 提供可直接執行的範例介面與參考文件，幫助開發者思考如何在真實專案中導入 agentic workflow。

功能亮點
-
- 簡單的 SPA 前端介面（Vite + React）
- 範例說明文件與流程圖位於 `ref/`

快速上手
-
先安裝相依套件，然後啟動開發伺服器：

```pwsh
# 安裝套件
npm install

# 本機開發（Vite dev server）
npm run dev

# 建置輸出
npm run build
```

如果你使用 `pnpm` 或 `yarn`，可對應使用 `pnpm install` / `pnpm run dev` 或 `yarn` / `yarn dev`。

專案結構（重點）
-
- `index.html` - 專案進入點
- `package.json` - 腳本與相依套件
- `vite.config.js` - Vite 設定
- `tailwind.config.js` / `postcss.config.js` - 樣式相關設定
- `src/` - 原始前端程式碼
	- `index.css` - 全域樣式
	- `main.jsx` - React 入口
	- `SdlcExplorer.jsx` - 主元件（SDLC 探索器）
- `ref/` - 文件與說明（包含流程圖、部署與初始說明）

開發常用指令
-
- `npm run dev`：啟動開發伺服器
- `npm run build`：產生 production bundle（`dist/`）
- `npm run preview`：本機預覽 production build（若有設定）

部署建議
-
此專案為靜態前端，建議部署到 GitHub Pages、Netlify 或 Vercel：

- GitHub Pages：將 `dist/` 內容部署到 `gh-pages` 或透過 Actions 自動部署
- Vercel / Netlify：直接連接 GitHub repo，自動化建置與發佈

貢獻 & 討論
-
歡迎提出 issue 或 PR：

- 若要擴充 agent 功能層或串接後端，可新增 `services/` 或 `api/` 模組
- 若要加入 CI、測試或 lint，建議新增 GitHub Actions workflow

授權
-
本專案採用 MIT 授權（見 `LICENSE`）。

聯絡
-
若需進一步協助或有想法，請在 GitHub repo 發 issue。
# Agentic SDLC Explorer

This project renders the interactive SDLC wave visualization from the provided source. The code in `src.txt` was identified as a React component (JSX, React hooks, `lucide-react` icons), so it was renamed to `src/SdlcExplorer.jsx` and scaffolded into a Vite + React + Tailwind CSS app for easy local development.

## What changed
- Detected language: React (JavaScript with JSX) based on `useState`, `useEffect`, JSX return, and `lucide-react` imports.
- Renamed `src.txt` to `src/SdlcExplorer.jsx` under a new `src/` folder.
- Added Vite + React + Tailwind toolchain (package.json, Vite config, Tailwind/PostCSS setup, entry `src/main.jsx`, and styles `src/index.css`).
- Added a minimal `.gitignore`.

## Project structure
```
.
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ index.css
│  └─ SdlcExplorer.jsx
└─ .gitignore
```

## Prerequisites
- Node.js 18+ (recommended for Vite 5).
- npm (comes with Node). Yarn/pnpm also work with equivalent commands.

## Setup & run locally
```bash
# install dependencies
npm install

# start dev server (default http://localhost:5173)
npm run dev

# optional: production build
npm run build

# optional: preview the build
npm run preview
```

## Notes
- Tailwind classes used in the component are provided by the Tailwind setup in `index.css`.
- If the dev server port 5173 is busy, adjust `server.port` in `vite.config.js`.
- All UI logic remains in `src/SdlcExplorer.jsx`; `src/main.jsx` simply mounts it.
