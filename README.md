# Agentic SDLC Explorer

簡短說明：這個專案示範 Agentic AI 在軟體開發生命週期（SDLC）中協助開發者的探索性工具與範例介面。

內容摘要：
- 建置工具：Vite + React
- 樣板檔案：`index.html`、`src/`、`package.json` 等

快速上手：

```pwsh
# 安裝套件
npm install

# 本機開發
npm run dev

# 建置產出
npm run build
```

更多細節請參閱專案內的 `ref/` 資料夾與相關文件。

License: 本專案授權採用 MIT（見 `LICENSE`）。
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
