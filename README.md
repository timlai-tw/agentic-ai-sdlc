# Agentic SDLC Explorer

[![Live demo](https://img.shields.io/badge/Live%20Demo-sdlc.timlai.dev-1e90ff?style=for-the-badge)](https://sdlc.timlai.dev/)

簡介
-
`Agentic SDLC Explorer` 是一個示範專案，透過輕量的前端介面（Vite + React）視覺化展示 Agent（自動化代理）在軟體開發生命週期（SDLC）中可協助的各項工作。

目標
-
- 示範 Agent 在需求分析、系統設計、開發、測試、審查與部署等階段的可能應用。
- 提供可直接執行的範例介面，方便快速瀏覽與擴充實作範例。

主要功能與 SDLC 範疇
-
- 需求 / Backlog：檢視功能文件、分析程式碼庫、系統設計。
- 開發 / Agentic Coding：IDE 協助編碼、程式碼補全、程式碼搜尋、舊程式碼翻譯。
- 測試與安全：生成單元測試、協助除錯、進行安全性分析、準備 Code Review。
- 程式碼提交與審查：建立 Commit / PR、協助審查與安全審核、提供建議。
- 部署與維運：推送至非正式環境、處理測試環境錯誤、支援發佈流程。
- 文件與發佈：產生或更新文件、撰寫 Release Notes、協助正式佈署相關作業。

快速上手
-
在專案目錄執行：

```pwsh
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev

# 建置（產生 production bundle）
npm run build
```

若使用 `pnpm` 或 `yarn`，可對應執行 `pnpm install` / `pnpm run dev` 或 `yarn` / `yarn dev`。

專案重點檔案
-
- `index.html`：專案進入點
- `package.json`：腳本與相依套件
- `vite.config.js`：Vite 設定
- `tailwind.config.js` / `postcss.config.js`：樣式設定
- `src/`：前端原始碼
  - `index.css`：全域樣式
  - `main.jsx`：React 入口
  - `SdlcExplorer.jsx`：主元件（SDLC 探索器）

常用指令
-
- `npm run dev`：啟動開發伺服器
- `npm run build`：產生 production bundle（輸出到 `dist/`）
- `npm run preview`：本機預覽 production build（若設定）

線上示範
-
- Live demo： https://sdlc.timlai.dev/

部署建議
-
此專案為靜態前端，建議部署方式：

- GitHub Pages：將 `dist/` 部署到 `gh-pages` 或使用 GitHub Actions 自動部署。
- Vercel / Netlify：直接連結 GitHub repo，自動化建置與發佈。

如何貢獻
-
- 歡迎提出 Issue 或 Pull Request。
- 若要擴充 agent 功能或串接後端，可新增 `services/` 或 `api/` 模組。
- 想加入 CI、測試或 lint，建議新增相應的 GitHub Actions workflow。

授權
-
- 本專案採用 MIT 授權（參見 `LICENSE`）。

聯絡
-
- 若需協助或有建議，請在本專案的 GitHub repo 提出 Issue。
