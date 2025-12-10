import React, { useState, useRef, useEffect } from 'react';
import { 
  User, 
  Server, 
  Sparkles, // Only for fallback/reference
  Lightbulb, 
  CheckCircle, 
  FileText, 
  Shield, 
  Bug, 
  GitPullRequest, 
  GitCommit,
  Search,
  Code,
  Terminal,
  AlertTriangle,
  BookOpen,
  X,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  ChevronUp,
  ChevronDown,
  // Icons
  ClipboardList,
  Layers,
  Zap,
  FileSearch,
  RefreshCw,
  ListChecks,
  Eye,
  ShieldCheck,
  UserCheck,
  Wrench,
  Upload,
  StickyNote,
  Rocket
} from 'lucide-react';

// Custom Icon based on the SVG provided by user
const CustomLogoIcon = ({ size = 32, className = "" }) => (
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 224 224" 
    width={size} 
    height={size} 
    className={className}
    fill="currentColor"
  >
    <path d="M95.930351,206.130966 C84.955002,212.484253 75.358803,209.680710 69.994957,198.758377 C65.963593,190.549362 62.132294,182.242050 58.096756,174.035126 C54.505985,166.732697 54.168388,159.232590 55.288059,151.241867 C56.849586,140.097702 57.715046,128.846741 58.572411,117.618134 C58.875256,113.651871 59.893730,109.791733 59.772079,105.742577 C59.689186,102.983490 59.048409,101.078377 56.302605,100.638847 C44.341297,98.724197 38.083508,90.537254 32.710804,80.608589 C27.423782,70.838272 21.128521,61.606636 15.144423,52.222321 C8.818363,42.301739 11.159526,32.581738 20.821064,29.281321 C27.940470,26.849306 34.544228,28.857187 38.893780,35.017963 C44.928051,43.565018 51.321308,51.914940 56.635540,60.896751 C61.133900,68.499626 66.976601,72.036324 76.194206,70.994347 C70.130669,61.263573 68.843086,50.909996 72.477455,40.120060 C74.604645,33.804729 78.433006,28.664036 83.935287,24.827984 C96.084099,16.358124 112.071960,16.623783 123.503502,25.484701 C136.735229,35.740997 138.981598,49.039299 131.130737,70.844604 C132.295349,72.215950 133.924622,71.704948 135.295914,71.602127 C143.223358,71.007759 151.334015,71.104538 159.000092,69.322090 C165.309998,67.854973 169.424316,61.936417 174.238876,57.686531 C178.493027,53.931309 182.715683,50.834492 188.850693,51.632748 C194.873474,52.416401 198.339096,56.108784 200.418762,61.323162 C202.345032,66.152870 201.880875,70.922859 198.148239,74.753357 C190.008194,83.106827 181.711349,91.308525 173.418869,99.511887 C170.244080,102.652580 166.065125,103.187141 161.882370,103.282997 C156.219467,103.412781 150.535339,103.576843 144.890518,103.231850 C140.410126,102.958015 139.243164,104.619476 139.264267,108.948891 C139.421906,141.277084 139.352875,173.606400 139.345291,205.935364 C139.343430,213.902634 135.948685,219.228485 129.446915,221.543610 C122.615982,223.975922 116.018379,222.042572 111.107750,216.165314 C108.636169,213.207214 108.145042,209.564346 107.679085,205.947220 C105.713074,190.685410 103.774544,175.419983 101.870850,160.150299 C101.317970,155.715561 100.914284,151.262222 100.342155,145.875488 C95.875900,150.320602 92.385651,154.730515 89.705360,159.736496 C88.690308,161.632324 89.622795,163.633987 90.614105,165.431549 C93.986778,171.547394 97.430565,177.625534 100.706894,183.792633 C105.168320,192.190445 103.507973,200.142685 95.930351,206.130966 M127.311020,43.365681 C120.759125,28.610445 105.806740,22.379066 92.540237,28.875021 C75.330132,37.301964 72.977760,59.443859 87.991753,71.985779 C89.953690,73.624672 92.230377,75.091957 90.899498,78.101532 C89.702820,80.807640 87.100235,80.501060 84.804771,80.248917 C78.522377,79.558838 72.260574,78.683586 65.983894,77.938324 C60.435776,77.279564 56.661736,74.267830 53.574890,69.691696 C46.777248,59.614456 39.724285,49.706982 32.649681,39.820267 C29.884550,35.956020 25.080303,34.967037 21.779062,37.471310 C17.892857,40.419323 19.222460,43.796425 21.305099,47.169552 C26.642149,55.813663 32.459419,64.212296 37.125641,73.206627 C42.931522,84.397713 50.271133,93.057297 63.549084,94.800766 C63.711208,94.822052 63.864822,94.904785 64.023682,94.954803 C67.219254,95.961166 68.462868,98.124611 68.107697,101.438522 C66.211876,119.127136 64.343475,136.818787 62.517601,154.514755 C62.019203,159.345123 61.992252,164.109726 64.212822,168.687103 C68.500641,177.525833 72.539330,186.485565 76.839615,195.318039 C79.745949,201.287445 84.888161,203.317856 89.872055,200.766830 C95.222763,198.028061 96.681763,192.702515 93.554581,186.834381 C90.343933,180.809631 87.018265,174.846100 83.732796,168.861328 C81.031334,163.940399 80.702080,158.888458 83.823997,154.166656 C87.956146,147.916870 92.522194,141.953598 97.829208,136.625214 C99.459518,134.988327 101.248299,133.201996 103.927330,134.245728 C106.464508,135.234192 106.990715,137.542023 107.288155,139.930283 C109.937553,161.203171 112.964890,182.439468 115.025169,203.769196 C115.685623,210.606766 119.770088,215.055099 124.078079,214.762787 C129.475815,214.396515 131.830261,210.862122 131.830887,202.534225 C131.833313,169.885101 131.819611,137.235992 131.833481,104.586868 C131.837189,95.877266 132.672852,95.030754 141.126770,94.985428 C148.289413,94.947014 155.452789,94.911118 162.614929,94.974716 C165.611130,95.001320 168.114075,94.160500 170.264267,91.997612 C177.075531,85.146149 184.012756,78.419327 190.788116,71.532967 C194.470657,67.790077 194.618118,64.726753 191.662323,61.501003 C188.774170,58.349030 185.618103,58.273762 181.557465,61.626057 C176.936249,65.441139 172.494141,69.472916 167.965820,73.400856 C165.667068,75.394836 163.174835,77.045029 160.034225,77.296165 C147.263077,78.317406 134.491974,79.341545 121.715240,80.288849 C119.423424,80.458771 116.857422,80.755844 115.703972,77.962044 C114.431190,74.879204 116.795540,73.406059 118.683540,71.812126 C127.429512,64.428391 130.574554,55.266056 127.311020,43.365681 z" />
    <path d="M188.841736,127.635017 C192.969955,126.716805 196.696655,125.924767 200.373703,124.946220 C203.255249,124.179382 204.193909,125.724289 204.858276,128.094345 C205.583298,130.680710 204.439789,131.711304 202.107376,132.329910 C191.338074,135.186157 191.347702,135.217819 191.346680,146.437057 C191.346420,149.265289 191.447433,152.099197 191.303940,154.920441 C191.068512,159.549652 187.088394,163.235672 182.449631,163.296722 C177.579544,163.360809 173.302231,159.426849 172.740250,154.366760 C172.294113,150.349777 175.740585,145.032288 179.825134,144.887573 C184.509018,144.721603 184.497620,142.251770 184.786423,138.760422 C185.106369,134.892593 182.292191,129.716766 188.841736,127.635017 z" />
    <path d="M193.071030,16.947765 C189.829224,14.422653 186.386414,13.135041 182.796692,12.423328 C178.932465,11.657191 180.504807,9.104956 180.726181,7.003753 C181.020889,4.206355 183.015945,4.568541 184.837540,5.079552 C204.109344,10.485867 216.139771,26.397131 218.272049,44.954357 C218.814972,49.679543 216.493698,51.709564 213.152115,50.055260 C210.987854,48.983799 211.159958,46.588615 210.916626,44.834843 C209.831116,37.011623 206.471680,30.333353 201.732208,24.158669 C199.434616,21.165302 196.229263,19.398497 193.071030,16.947765 z" />
    <path d="M5.486220,164.160873 C4.898623,160.959259 2.937743,157.395065 6.667471,155.976074 C11.015526,154.321869 11.790849,158.016251 12.307080,161.300446 C14.385838,174.525192 21.519094,184.197647 33.102798,190.679626 C34.684895,191.564941 36.432228,192.184494 38.151337,192.790039 C43.923645,194.823318 43.932011,194.799576 41.472870,200.818802 C23.860235,199.267258 8.493119,182.856216 5.486220,164.160873 z" />
    <path d="M53.749004,20.533575 C56.776642,18.381588 55.580238,15.465665 55.556347,12.980981 C55.523613,9.576424 56.496929,7.646510 60.130722,7.253644 C62.417511,7.006410 64.641411,6.192783 66.899071,5.656587 C69.247406,5.098854 70.771301,5.866015 71.209053,8.375304 C71.605553,10.648124 70.976189,12.769634 68.586716,12.921076 C62.466560,13.308962 61.899162,17.098984 62.309414,21.906450 C62.506901,24.220722 62.346722,26.567089 62.319885,28.898594 C62.267262,33.470478 59.815449,36.014244 55.417824,36.578938 C51.331619,37.103634 48.787529,34.819324 47.422543,31.259188 C45.918163,27.335459 47.141632,24.109716 50.636745,21.816122 C51.454010,21.279810 52.458759,21.029194 53.749004,20.533575 z" />
    <path d="M184.678085,24.007275 C194.072723,28.646645 198.931213,36.163212 200.822983,45.874371 C201.226944,47.948124 201.871719,50.052242 198.734970,50.239857 C196.491394,50.374050 194.212875,50.897457 193.575714,47.309559 C192.108047,39.044815 187.461273,33.098949 179.432846,30.087830 C176.611771,29.029770 176.270691,26.999386 177.110138,24.452789 C178.046082,21.613443 180.086777,22.527821 181.981277,23.035164 C182.780884,23.249298 183.550034,23.577179 184.678085,24.007275 z" />
    <path d="M25.090569,155.703964 C27.841509,155.556549 28.964577,156.302109 29.472240,158.917496 C30.994158,166.758102 35.476631,172.497147 43.001602,175.527771 C46.096016,176.774017 47.199024,178.991501 45.880875,181.793808 C44.644920,184.421387 42.228775,183.277664 40.232780,182.465469 C29.565872,178.124893 23.987358,169.909103 22.100405,158.795670 C21.708218,156.485840 22.580061,155.731125 25.090569,155.703964 z" />
  </svg>
);

const SdlcExplorer = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const scrollContainerRef = useRef(null);
  
  // State for drag-to-scroll
  const [isDown, setIsDown] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0); 
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);
  const hasDragged = useRef(false);
  
  // State for touch pinch-zoom
  const initialPinchDistance = useRef(null);
  
  // State for Zoom
  const [scale, setScale] = useState(1);

  // State for Header Collapse
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);

  // Configuration for the wave layout
  const NODE_WIDTH = 96;   
  const X_SPACING = 280;   
  const Y_AMPLITUDE = 120; 
  // Moved baseline significantly down to 600 to separate phases and nodes clearly
  const Y_BASELINE = 600;  
  const PADDING_LEFT = 150;
  // Increased content height to accommodate the lower baseline
  const CONTENT_HEIGHT = 1100; 

  // Phase Definitions
  const phases = [
    {
      range: [1, 4],
      title: "需求 / Backlog",
      description: [
        "Review feature document（檢視功能文件）",
        "Analyse codebase（分析現有程式碼）",
        "System design（系統設計）"
      ],
      color: "border-yellow-400 bg-yellow-50 text-yellow-800"
    },
    {
      range: [5, 8],
      title: "開發 / Agentic Coding",
      description: [
        "Starts writing code through IDE（開發者在 IDE 開始寫程式）",
        "Suggest and autocomplete code（Agent AI 提示與自動完成程式碼）",
        "Code search（程式碼搜尋，用於除錯與共用）",
        "Translate legacy code（將舊語言程式碼片段轉換為新語言）"
      ],
      color: "border-blue-400 bg-blue-50 text-blue-800"
    },
    {
      range: [9, 12],
      title: "測試與安全性 / Agentic Testing & Security",
      description: [
        "Generate unit tests（產生單元測試）",
        "Debug issues（協助除錯問題）",
        "Security Analysis（安全性分析）",
        "Code review preparation（為 Code Review 做準備）"
      ],
      color: "border-purple-400 bg-purple-50 text-purple-800"
    },
    {
      range: [13, 17],
      title: "程式碼提交與審查 / Agentic Review",
      description: [
        "Code Commit（提交程式碼）",
        "Create PR / MR（建立 Pull Request / Merge Request）",
        "Code review（程式碼審查）",
        "Security review（安全性審查）",
        "Review suggestions（開發者檢視 Agent AI 建議）"
      ],
      color: "border-indigo-400 bg-indigo-50 text-indigo-800"
    },
    {
      range: [18, 22],
      title: "部署與維運 / Deployment and Operations",
      description: [
        "Pushes to non-prod（推送到測試／預備環境）",
        "Bug occurs（在非正式環境中出現錯誤）"
      ],
      color: "border-red-400 bg-red-50 text-red-800"
    },
    {
      range: [23, 25],
      title: "文件與發佈 / Agentic Documentation",
      description: [
        "Documentation（產出或更新文件）",
        "Release notes（產出版本發佈說明）",
        "Production（佈署到正式環境）"
      ],
      color: "border-emerald-400 bg-emerald-50 text-emerald-800"
    }
  ];

  const nodes = [
    { 
      id: 1, 
      title: "Backlog", 
      titleZh: "待辦清單",
      type: "start", 
      icon: ClipboardList, 
      category: "Planning", 
      categoryZh: "規劃階段",
      description: "Initial collection of features and tasks.", 
      descriptionZh: "收集功能需求與待辦事項的初始清單。",
      details: "Product requirements are gathered and prioritized.",
      detailsZh: "產品需求在此階段被收集並排列優先順序。"
    },
    { 
      id: 2, 
      title: "Review Docs", 
      titleZh: "審閱文件",
      type: "agent", 
      icon: FileText, 
      category: "Agentic Migration", 
      categoryZh: "代理遷移",
      description: "AI reviews documentation.", 
      descriptionZh: "AI 審閱相關文件。",
      details: "Analyzes PRD for technical constraints.",
      detailsZh: "分析產品需求文件 (PRD) 以找出技術限制。"
    },
    { 
      id: 3, 
      title: "Analyse Code", 
      titleZh: "分析程式碼",
      type: "agent", 
      icon: Search, 
      category: "Analysis", 
      categoryZh: "分析階段",
      description: "AI scans existing codebase.", 
      descriptionZh: "AI 掃描現有程式碼庫。",
      details: "Understands context and dependencies.",
      detailsZh: "理解程式碼上下文與依賴關係。"
    },
    { 
      id: 4, 
      title: "System Design", 
      titleZh: "系統設計",
      type: "developer", 
      icon: Layers, 
      category: "Design", 
      categoryZh: "設計階段",
      description: "Developer creates architecture.", 
      descriptionZh: "開發者建立系統架構。",
      details: "High-level structural design.",
      detailsZh: "高層次的結構化設計。"
    },
    { 
      id: 5, 
      title: "Start Coding", 
      titleZh: "開始撰寫程式",
      type: "developer", 
      icon: Code, 
      category: "Agentic Coding", 
      categoryZh: "代理編碼",
      description: "Implementation begins.", 
      descriptionZh: "開始實作功能。",
      details: "Developer opens IDE with AI context ready.",
      detailsZh: "開發人員開啟 IDE，AI 已準備好上下文資訊。"
    },
    
    { 
      id: 6, 
      title: "Auto Complete", 
      titleZh: "自動補全",
      type: "agent", 
      icon: Zap, 
      category: "Agentic Coding", 
      categoryZh: "代理編碼",
      description: "Intelligent code completion.", 
      descriptionZh: "智慧程式碼補全。",
      details: "Suggests functions based on context.",
      detailsZh: "根據上下文建議函數與邏輯。"
    },
    { 
      id: 7, 
      title: "Code Search", 
      titleZh: "程式碼搜尋",
      type: "agent", 
      icon: FileSearch, 
      category: "Troubleshooting", 
      categoryZh: "疑難排解",
      description: "AI finds relevant examples.", 
      descriptionZh: "AI 尋找相關程式範例。",
      details: "Locates patterns within the repo.",
      detailsZh: "在版控儲存庫中找到類似的模式。"
    },
    { 
      id: 8, 
      title: "Translate Legacy", 
      titleZh: "轉換舊程式碼",
      type: "agent", 
      icon: RefreshCw, 
      category: "Migration", 
      categoryZh: "遷移階段",
      description: "Converts old syntax.", 
      descriptionZh: "轉換舊版程式語法。",
      details: "Refactors legacy code to modern standards.",
      detailsZh: "將遺留的程式碼重構為現代標準。"
    },
    { 
      id: 9, 
      title: "Gen Unit Tests", 
      titleZh: "生成測試",
      type: "agent", 
      icon: Terminal, 
      category: "Testing", 
      categoryZh: "測試階段",
      description: "AI generates tests.", 
      descriptionZh: "AI 自動生成測試。",
      details: "Creates edge-case tests automatically.",
      detailsZh: "自動建立邊界情況的測試案例。"
    },
    { 
      id: 10, 
      title: "Security Scan", 
      titleZh: "安全掃描",
      type: "agent", 
      icon: Shield, 
      category: "Security", 
      categoryZh: "安全階段",
      description: "Pre-commit vulnerability scan.", 
      descriptionZh: "程式碼提交前的漏洞掃描。",
      details: "Identifies potential security flaws.",
      detailsZh: "識別潛在的安全漏洞。"
    },

    { 
      id: 11, 
      title: "Debug Issues", 
      titleZh: "智慧除錯",
      type: "agent", 
      icon: Bug, 
      category: "Debugging", 
      categoryZh: "除錯階段",
      description: "AI helps fix logic errors.", 
      descriptionZh: "AI 協助修復邏輯錯誤。",
      details: "Interactive debugging suggestions.",
      detailsZh: "提供互動式的除錯建議。"
    },
    { 
      id: 12, 
      title: "Review Prep", 
      titleZh: "審查準備",
      type: "agent", 
      icon: ListChecks, 
      category: "Review", 
      categoryZh: "審查階段",
      description: "Auto-formatting & comments.", 
      descriptionZh: "自動格式化與註解。",
      details: "Prepares code for human review.",
      detailsZh: "為人工審查準備程式碼。"
    },
    { 
      id: 13, 
      title: "Commit", 
      titleZh: "提交程式碼",
      type: "system", 
      icon: GitCommit, 
      category: "Version Control", 
      categoryZh: "版本控制",
      description: "Code committed to repo.", 
      descriptionZh: "程式碼提交至版控儲存庫。",
      details: "Changes saved to VCS.",
      detailsZh: "將程式碼變更儲存至版本控制系統。"
    },
    { 
      id: 14, 
      title: "Create PR", 
      titleZh: "建立 PR",
      type: "developer", 
      icon: GitPullRequest, 
      category: "Version Control", 
      categoryZh: "版本控制",
      description: "Developer opens Pull Request.", 
      descriptionZh: "開發人員建立 Pull Request。",
      details: "Request to merge changes.",
      detailsZh: "請求將變更合併至指定分支。"
    },
    { 
      id: 15, 
      title: "Code Review", 
      titleZh: "程式碼審查",
      type: "agent", 
      icon: Eye, 
      category: "Review", 
      categoryZh: "審查階段",
      description: "AI performs first pass review.", 
      descriptionZh: "AI 執行初次審查。",
      details: "Checks for style and logic issues.",
      detailsZh: "檢查風格與邏輯問題。"
    },

    { 
      id: 16, 
      title: "Security Review", 
      titleZh: "安全審查",
      type: "agent", 
      icon: ShieldCheck, 
      category: "Security", 
      categoryZh: "安全階段",
      description: "Deep security audit.", 
      descriptionZh: "深度安全審查。",
      details: "Cross-module vulnerability check.",
      detailsZh: "跨模組的漏洞檢查。"
    },
    { 
      id: 17, 
      title: "Review & Accept", 
      titleZh: "審閱與接受",
      type: "developer", 
      icon: UserCheck, 
      category: "Review", 
      categoryZh: "審查階段",
      description: "Human sign-off.", 
      descriptionZh: "人工簽核。",
      details: "Developer approves and merges.",
      detailsZh: "開發人員核准並合併程式碼。"
    },
    { 
      id: 18, 
      title: "Push to Staging", 
      titleZh: "推送至 Staging",
      type: "system", 
      icon: Server, 
      category: "Deployment", 
      categoryZh: "部署階段",
      description: "Deploy to QA env.", 
      descriptionZh: "部署至 QA 環境。",
      details: "CI/CD pipeline runs.",
      detailsZh: "執行 CI/CD 流程。"
    },
    { 
      id: 19, 
      title: "Bug Found", 
      titleZh: "發現 Bug",
      type: "system", 
      icon: AlertTriangle, 
      category: "Incident", 
      categoryZh: "事件處理",
      description: "Issue detected in QA.", 
      descriptionZh: "在 QA 中發現問題。",
      details: "Monitoring finds a problem.",
      detailsZh: "監控在系統中發生的問題。"
    },
    { 
      id: 20, 
      title: "Log Analysis", 
      titleZh: "日誌分析",
      type: "agent", 
      icon: FileSearch, 
      category: "Debugging", 
      categoryZh: "除錯階段",
      description: "AI analyzes logs.", 
      descriptionZh: "AI 分析日誌。",
      details: "Pinpoints root cause from logs.",
      detailsZh: "從日誌中找出根本原因。"
    },

    { 
      id: 21, 
      title: "Analyze & Fix", 
      titleZh: "分析與修復",
      type: "developer", 
      icon: Wrench, 
      category: "Fixing", 
      categoryZh: "修復階段",
      description: "Developer applies fix.", 
      descriptionZh: "開發人員套用修復。",
      details: "Implements patch based on analysis.",
      detailsZh: "依據分析實作修補程式。"
    },
    { 
      id: 22, 
      title: "Push Fix", 
      titleZh: "推送修補程式",
      type: "system", 
      icon: Upload, 
      category: "Deployment", 
      categoryZh: "部署階段",
      description: "Hotfix deployed.", 
      descriptionZh: "部署修補程式。",
      details: "Patch goes through pipeline.",
      detailsZh: "修補程式通過部署流程。"
    },
    { 
      id: 23, 
      title: "Documentation", 
      titleZh: "更新文件",
      type: "agent", 
      icon: BookOpen, 
      category: "Docs", 
      categoryZh: "文件階段",
      description: "AI updates docs.", 
      descriptionZh: "AI 更新技術文件。",
      details: "Updates API references & Readmes.",
      detailsZh: "更新 API 參考與 Readme 檔案。"
    },
    { 
      id: 24, 
      title: "Release Notes", 
      titleZh: "發佈說明",
      type: "agent", 
      icon: StickyNote, 
      category: "Release", 
      categoryZh: "發佈階段",
      description: "Drafts release notes.", 
      descriptionZh: "發佈說明草稿。",
      details: "Summarizes changes for users.",
      detailsZh: "為使用者總結變更內容。"
    },
    { 
      id: 25, 
      title: "Production", 
      titleZh: "正式上線",
      type: "end", 
      icon: Rocket, 
      category: "Complete", 
      categoryZh: "完成",
      description: "Live deployment.", 
      descriptionZh: "正式環境部署。",
      details: "Feature available to users.",
      detailsZh: "對使用者開放功能。"
    }
  ];

  // Calculate coordinates for each node based on a sine wave
  const nodeCoordinates = nodes.map((node, index) => {
    const x = PADDING_LEFT + index * X_SPACING;
    const y = Y_BASELINE + Math.sin(index * 0.6) * Y_AMPLITUDE;
    return { ...node, x, y };
  });

  const originalTotalWidth = PADDING_LEFT + nodes.length * X_SPACING + 300;
  // Calculate dimensions based on scale
  const scaledTotalWidth = originalTotalWidth * scale;
  const scaledTotalHeight = CONTENT_HEIGHT * scale;

  const generateWavePath = () => {
    if (nodeCoordinates.length === 0) return "";
    
    // CHANGED: Start from further left to create the "piercing" effect through the first node
    const startX = nodeCoordinates[0].x - 200;
    // CHANGED: Extend a bit further right as well
    const endX = nodeCoordinates[nodeCoordinates.length - 1].x + 200;
    
    // Calculate starting Y position
    const startIndex = (startX - PADDING_LEFT) / X_SPACING;
    const startY = Y_BASELINE + Math.sin(startIndex * 0.6) * Y_AMPLITUDE;
    
    let d = `M ${startX} ${startY}`;

    // Resolution of the curve (step size in pixels)
    const step = 10; 

    for (let x = startX; x <= endX; x += step) {
      // Reverse calculate the 'index' based on x to get the same y
      const index = (x - PADDING_LEFT) / X_SPACING;
      // USING SINE WAVE FORMULA directly for smooth curve
      const y = Y_BASELINE + Math.sin(index * 0.6) * Y_AMPLITUDE;
      d += ` L ${x} ${y}`;
    }
    
    return d;
  };

  // Helper function for the pulse ring color
  const getPulseColor = (type) => {
    switch (type) {
        case 'developer': return 'ring-green-400'; // Changed to ring-* to support the ring utility
        case 'system': return 'ring-red-400';
        case 'agent': return 'ring-blue-400';
        case 'start': return 'ring-yellow-400';
        case 'end': return 'ring-emerald-400';
        default: return 'ring-slate-400';
    }
  };

  // Helper function for the text color based on node type
  const getTextColorClass = (type) => {
    switch (type) {
        case 'developer': return 'text-green-600';
        case 'system': return 'text-red-600';
        case 'agent': return 'text-blue-600';
        case 'start': return 'text-yellow-600';
        case 'end': return 'text-emerald-600';
        default: return 'text-slate-600';
    }
  };

  const getColorStyles = (type, isSelected) => {
    const base = "transition-all duration-300 ease-out flex items-center justify-center border-4 relative z-10 shadow-lg cursor-pointer";
    const selected = isSelected ? "scale-110 z-20" : "hover:scale-105 hover:shadow-xl";
    switch (type) {
      case 'developer': return `${base} ${selected} bg-white border-green-400 text-green-600 ${isSelected ? 'ring-green-200' : ''}`;
      case 'system': return `${base} ${selected} bg-white border-red-400 text-red-600 ${isSelected ? 'ring-red-200' : ''}`;
      case 'agent': return `${base} ${selected} bg-white border-blue-400 text-blue-600 ${isSelected ? 'ring-blue-200' : ''}`;
      case 'start': return `${base} ${selected} bg-white border-yellow-400 text-yellow-600 ${isSelected ? 'ring-yellow-200' : ''}`;
      case 'end': return `${base} ${selected} bg-white border-emerald-500 text-emerald-600 ${isSelected ? 'ring-emerald-200' : ''}`;
      default: return `${base} ${selected} bg-white border-slate-300 text-slate-600`;
    }
  };

  const scrollToNode = (index) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    // Base width
    let viewWidth = container.clientWidth;
    
    // Check if panel is open (we have a selected node) and we are on desktop
    // We check window.innerWidth directly to ensure we match the CSS media query logic
    const isDesktop = window.innerWidth >= 768; // 768px is 'md' in Tailwind
    const panelWidth = 480; // w-[480px]

    // If a node is selected, we assume the panel is open/opening
    if (selectedNode && isDesktop) {
        viewWidth -= panelWidth;
    }

    const currentScrollLeft = container.scrollLeft;
    
    // Calculate the absolute X position of the node's center
    const nodeXCenter = (PADDING_LEFT + index * X_SPACING) * scale;
    
    // Determine visible bounds within the ADJUSTED view width
    // The view starts at currentScrollLeft
    // The "safe" view ends at currentScrollLeft + viewWidth
    const buffer = 50; 
    
    // Check if node is outside the "safe" area (the left part of the screen not covered by panel)
    const isOutOfView = 
      nodeXCenter < currentScrollLeft + buffer || 
      nodeXCenter > currentScrollLeft + viewWidth - buffer;

    if (isOutOfView) {
      // Center the node within the `viewWidth` (the visible left part)
      // The center of the visible area is currentScrollLeft + viewWidth / 2
      // We want nodeXCenter to be at that point.
      // So newScrollLeft = nodeXCenter - viewWidth / 2
      container.scrollTo({
        left: nodeXCenter - viewWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  // --- Zoom Handlers ---
  const handleZoomIn = () => setScale(s => Math.min(s + 0.1, 2.5));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.1, 0.5));

  // --- Wheel Zoom Handler ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = -e.deltaY;
        const zoomSpeed = 0.1;
        setScale(currentScale => Math.min(Math.max(currentScale + (delta > 0 ? zoomSpeed : -zoomSpeed), 0.5), 2.5));
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // --- Drag to Scroll Handlers ---
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    hasDragged.current = false;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    startY.current = e.pageY - scrollContainerRef.current.offsetTop;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    scrollTop.current = scrollContainerRef.current.scrollTop;
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPanning(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPanning(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    
    const walkX = (x - startX.current) * 2; 
    const walkY = (y - startY.current) * 2;

    if (Math.abs(walkX) > 5 || Math.abs(walkY) > 5) {
        setIsPanning(true);
        hasDragged.current = true;
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walkX;
        scrollContainerRef.current.scrollTop = scrollTop.current - walkY;
    }
  };

  // --- Mobile Touch Handlers (Pinch & Pan) ---
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      // Pinch started
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      initialPinchDistance.current = Math.hypot(
        touch1.pageX - touch2.pageX,
        touch1.pageY - touch2.pageY
      );
    } else if (e.touches.length === 1) {
      // Pan started
      // Capture initial state for absolute panning
      startX.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
      startY.current = e.touches[0].pageY - scrollContainerRef.current.offsetTop;
      scrollLeft.current = scrollContainerRef.current.scrollLeft;
      scrollTop.current = scrollContainerRef.current.scrollTop;
      hasDragged.current = false; // Reset drag flag
    }
  };

  const handleTouchMove = (e) => {
    if (e.cancelable) e.preventDefault(); // Prevent native scroll

    if (e.touches.length === 2) {
      // Pinch Zoom Logic
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistance = Math.hypot(
        touch1.pageX - touch2.pageX,
        touch1.pageY - touch2.pageY
      );

      if (initialPinchDistance.current) {
        const delta = currentDistance - initialPinchDistance.current;
        const zoomSpeed = 0.005; // Sensitivity factor
        
        setScale(currentScale => {
            const newScale = currentScale + delta * zoomSpeed;
            return Math.min(Math.max(newScale, 0.5), 2.5);
        });
        
        // Reset distance for smooth continuous zooming
        initialPinchDistance.current = currentDistance;
      }
    } else if (e.touches.length === 1 && scrollContainerRef.current) {
        // Pan Logic - Absolute Tracking
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        const y = e.touches[0].pageY - scrollContainerRef.current.offsetTop;
        
        // No multiplier for touch usually, stick to 1:1 for direct mapping
        const walkX = (x - startX.current);
        const walkY = (y - startY.current);

        // Threshold to distinguish tap from drag
        if (Math.abs(walkX) > 5 || Math.abs(walkY) > 5) {
            setIsPanning(true);
            hasDragged.current = true;
            scrollContainerRef.current.scrollLeft = scrollLeft.current - walkX;
            scrollContainerRef.current.scrollTop = scrollTop.current - walkY;
        }
    }
  };

  const handleTouchEnd = () => {
    initialPinchDistance.current = null;
    setIsPanning(false);
    setTimeout(() => {
        hasDragged.current = false;
    }, 100);
  };

  // --- Toggle Selection Logic ---
  const handleNodeClick = (node) => {
    if (hasDragged.current) return;
    
    // Toggle: If clicked node is already selected, deselect it. Otherwise select it.
    setSelectedNode(prev => (prev?.id === node.id ? null : node));
  };

  useEffect(() => {
    if (selectedNode) {
        const index = nodes.findIndex(n => n.id === selectedNode.id);
        scrollToNode(index);
    }
  }, [selectedNode]);

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden select-none">
      {/* Header */}
      <header 
        className={`
          bg-white border-b border-slate-200 shadow-sm z-30 shrink-0 relative transition-all duration-300 ease-in-out
          ${isHeaderCollapsed ? 'py-0 h-0 min-h-0 border-none' : 'px-6 py-4'}
        `}
      >
        <div className={`flex flex-col w-full overflow-hidden transition-all duration-300 ${isHeaderCollapsed ? 'opacity-0 h-0' : 'opacity-100'}`}>
           <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                {/* Custom SVG Icon, no background, directly colored */}
                <CustomLogoIcon size={40} className="text-blue-600" />
                
                <div>
                  <h1 className="text-xl font-bold text-slate-800 flex flex-col md:flex-row md:items-baseline md:gap-2">
                    Agentic AI and SDLC Orchestration
                  </h1>
                </div>
              </div>
              
              {/* Controls & Legend - Hidden when collapsed */}
              {!isHeaderCollapsed && (
                <div className="flex items-center gap-8 animate-in fade-in duration-300">
                    {/* Zoom Controls */}
                    <div className="hidden lg:flex items-center gap-2 text-slate-600 text-sm bg-slate-50 px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                        <button 
                          onClick={handleZoomIn}
                          className="p-1 hover:bg-slate-200 rounded transition-colors"
                          title="Zoom In"
                        >
                          <ZoomIn size={18} />
                        </button>
                        <span className="text-slate-300">|</span>
                        <button 
                          onClick={handleZoomOut}
                          className="p-1 hover:bg-slate-200 rounded transition-colors"
                          title="Zoom Out"
                        >
                          <ZoomOut size={18} />
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-6 text-lg font-semibold bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div> 
                        Developer
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div> 
                        System
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div> 
                        Agentic AI
                    </div>
                    </div>
                </div>
              )}
           </div>
        </div>

        {/* Collapse/Expand Button at Bottom Right of Header */}
        <button 
          onClick={() => setIsHeaderCollapsed(!isHeaderCollapsed)}
          className={`
            absolute right-4 bg-white border border-slate-200 shadow-md p-1.5 rounded-full hover:bg-slate-50 transition-all z-40
            ${isHeaderCollapsed ? 'top-2' : 'bottom-0 translate-y-1/2'} 
          `}
          title={isHeaderCollapsed ? "Expand Header" : "Collapse Header"}
        >
          {isHeaderCollapsed ? <ChevronDown size={16} className="text-slate-500" /> : <ChevronUp size={16} className="text-slate-500" />}
        </button>

      </header>

      {/* Main Content Area - Canvas */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Scrollable Horizontal Canvas with Drag & Touch Logic */}
        <div 
            ref={scrollContainerRef}
            className={`
                flex-1 overflow-auto bg-slate-50 relative 
                ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}
            `}
            // Mouse Events
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            // Touch Events
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
                backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
                backgroundSize: '30px 30px',
                touchAction: 'none' // Important to prevent default browser gestures
            }}
        >
          {/* Sizing Container */}
          <div style={{ width: scaledTotalWidth, height: scaledTotalHeight }} className="relative overflow-hidden">
            
            {/* Scaling Wrapper */}
            <div 
                style={{ 
                    width: originalTotalWidth, 
                    height: CONTENT_HEIGHT, // Base height
                    transform: `scale(${scale})`,
                    transformOrigin: `0 0`, 
                }}
                className="relative"
            >
                {/* SVG Wave Line Layer */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#cbd5e1" />
                            <stop offset="50%" stopColor="#94a3b8" />
                            <stop offset="100%" stopColor="#cbd5e1" />
                        </linearGradient>
                    </defs>
                    <path 
                        d={generateWavePath()} 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        className="opacity-60"
                    />
                </svg>

                {/* --- Phase Annotation Layer --- */}
                {phases.map((phase, idx) => {
                    const startNode = nodeCoordinates[phase.range[0] - 1];
                    const endNode = nodeCoordinates[phase.range[1] - 1];
                    // Center point between start and end node
                    const centerX = (startNode.x + endNode.x) / 2;
                    const width = endNode.x - startNode.x;
                    
                    return (
                        <div 
                            key={idx}
                            className={`absolute border-t-4 border-l-2 border-r-2 rounded-t-xl px-4 py-3 flex flex-col items-center pointer-events-none ${phase.color}`}
                            style={{
                                left: centerX,
                                // UPDATED: Shifted from 50 to 10 to move up as requested
                                top: 10, 
                                width: width + NODE_WIDTH + 40, 
                                height: 340, // Fixed height for alignment
                                transform: 'translateX(-50%)',
                                paddingBottom: '3rem', 
                            }}
                        >
                            {/* Phase Title */}
                            <h3 className="text-2xl font-bold mb-4 text-center whitespace-nowrap bg-transparent px-3 py-1 rounded-lg">
                                {phase.title}
                            </h3>

                            {/* Phase Description List */}
                            <div className="text-xl font-medium leading-relaxed bg-white/60 px-6 py-4 rounded-xl backdrop-blur-md shadow-sm w-full h-full">
                                <ul className="list-disc pl-6 space-y-2">
                                    {phase.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}


                {/* Nodes Layer */}
                {nodeCoordinates.map((node, index) => {
                    const isSelected = selectedNode?.id === node.id;
                    return (
                        <div 
                            key={node.id}
                            className="absolute flex flex-col items-center"
                            style={{ 
                                left: node.x, 
                                top: node.y, 
                                width: NODE_WIDTH, 
                                transform: 'translate(-50%, -48px)' 
                            }}
                        >
                             {/* Blinking Outer Ring (Separate Element) */}
                             {isSelected && (
                                <div 
                                    className={`
                                        absolute top-0 left-0 w-24 h-24 rounded-full
                                        border-4 border-transparent 
                                        ring-4 ring-offset-4 ${getPulseColor(node.type)}
                                        animate-pulse 
                                        scale-110 z-10
                                    `}
                                    style={{ animationDuration: '0.6s' }} // Faster blinking
                                ></div>
                            )}

                            <button
                                onClick={(e) => handleNodeClick(node)}
                                className={`
                                    w-24 h-24 rounded-full 
                                    ${getColorStyles(node.type, isSelected)}
                                    z-20 relative bg-white
                                `}
                            >
                                <node.icon size={36} strokeWidth={2} />
                            </button>

                            <div className={`
                                mt-14 text-center w-64 transition-all duration-300 pointer-events-none
                                ${isSelected ? 'opacity-100 transform translate-y-0' : 'opacity-90'}
                            `}>
                                <div className="bg-transparent px-2 py-1">
                                    <span className="text-2xl font-bold text-slate-400 uppercase tracking-widest block mb-1">
                                        Step {node.id}
                                    </span>
                                    <h3 className={`text-2xl font-bold leading-tight mb-1 ${isSelected ? getTextColorClass(node.type) : 'text-slate-600'}`}>
                                        {node.title}
                                    </h3>
                                    <span className="text-lg block font-medium text-slate-500">
                                        {node.titleZh}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>
        </div>

        {/* Side Panel (Details) */}
        <div className={`
          fixed md:absolute inset-y-0 right-0 w-full md:w-[480px] bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-40 border-l border-slate-200 flex flex-col
          ${selectedNode ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {selectedNode && (
            <>
              {/* Panel Header */}
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border
                    ${selectedNode.type === 'agent' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                      selectedNode.type === 'developer' ? 'bg-green-100 text-green-700 border-green-200' : 
                      selectedNode.type === 'start' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                      selectedNode.type === 'end' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                      'bg-red-100 text-red-700 border-red-200'}
                  `}>
                    {selectedNode.category} / {selectedNode.categoryZh}
                  </span>
                  <button 
                    onClick={() => setSelectedNode(null)}
                    className="p-2 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className={`p-4 rounded-2xl shadow-sm ${
                    selectedNode.type === 'agent' ? 'bg-blue-100 text-blue-600' : 
                    selectedNode.type === 'developer' ? 'bg-green-100 text-green-600' : 
                    selectedNode.type === 'start' ? 'bg-yellow-100 text-yellow-600' :
                    selectedNode.type === 'end' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    <selectedNode.icon size={48} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">{selectedNode.title}</h2>
                    <h3 className="text-xl text-slate-500 font-normal mt-1">{selectedNode.titleZh}</h3>
                  </div>
                </div>
              </div>

              {/* Panel Content - Larger Text */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Overview / 概覽
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-2xl font-medium mb-2">
                    {selectedNode.description}
                  </p>
                  <p className="text-slate-500 leading-relaxed text-xl mt-1">
                    {selectedNode.descriptionZh}
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Technical Details / 技術細節
                  </h4>
                  <p className="text-slate-600 text-xl leading-relaxed mb-2">
                    {selectedNode.details}
                  </p>
                  <p className="text-slate-500 text-xl leading-relaxed">
                    {selectedNode.detailsZh}
                  </p>
                </div>
              </div>

              {/* Panel Footer: Navigation */}
              <div className="p-6 bg-white border-t border-slate-100 flex justify-between items-center">
                 <button 
                  onClick={() => {
                    const idx = nodes.findIndex(n => n.id === selectedNode.id);
                    if (idx > 0) setSelectedNode(nodes[idx - 1]);
                  }}
                  disabled={selectedNode.id === 1}
                  className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-slate-600 hover:bg-slate-50 rounded-xl disabled:opacity-30 disabled:hover:bg-transparent"
                 >
                   <ChevronLeft size={24} /> Previous
                 </button>
                 
                 <span className="text-base font-mono text-slate-400">
                   {selectedNode.id} / {nodes.length}
                 </span>

                 <button 
                  onClick={() => {
                    const idx = nodes.findIndex(n => n.id === selectedNode.id);
                    if (idx < nodes.length - 1) setSelectedNode(nodes[idx + 1]);
                  }}
                  disabled={selectedNode.id === nodes.length}
                  className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-slate-600 hover:bg-slate-50 rounded-xl disabled:opacity-30 disabled:hover:bg-transparent"
                 >
                   Next <ChevronRight size={24} />
                 </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SdlcExplorer;