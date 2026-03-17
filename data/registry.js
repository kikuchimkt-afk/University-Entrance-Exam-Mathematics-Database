// =============================================================================
// 共通テスト数学データベース - 問題集レジストリ
// =============================================================================

var BOOK_REGISTRY = [
  {
    id: "sundai_2025_IA",
    publisher: "駿台",
    year: 2025,
    subject: "数学IA",
    title: "2025年 駿台実戦問題集 数学IA",
    dataPath: "data/sundai_2025_IA/meta.js",
    enabled: true
  },
  // ↓ 新しい問題集はここに追加（meta.js + images/ を用意してから）
  {
    id: "sundai_2024_IA",
    publisher: "駿台",
    year: 2024,
    subject: "数学IA",
    title: "2024年 駿台実践問題集 数学IA",
    dataPath: "data/sundai_2024_IA/meta.js",
    enabled: true
  },
  {
    id: "zkai_2025_IA",
    publisher: "Z会",
    year: 2025,
    subject: "数学IA",
    title: "2025年 Z会実戦模試 数学IA",
    dataPath: "data/zkai_2025_IA/meta.js",
    enabled: true
  },
  {
    id: "kawai_2025_IA",
    publisher: "河合塾",
    year: 2025,
    subject: "数学IA",
    title: "2025年 河合塾マーク式総合問題集 数学IA",
    dataPath: "data/kawai_2025_IA/meta.js",
    enabled: true
  },
  {
    id: "kawai_2024_IA",
    publisher: "河合塾",
    year: 2024,
    subject: "数学IA",
    title: "2024年 河合塾マーク式総合問題集 数学IA",
    dataPath: "data/kawai_2024_IA/meta.js",
    enabled: true
  },
  {
    id: "zkai_2024_IA",
    publisher: "Z会",
    year: 2024,
    subject: "数学IA",
    title: "2024年 Z会実戦模試 数学IA",
    dataPath: "data/zkai_2024_IA/meta.js",
    enabled: true
  },
  {
    id: "sundai_2023_IA",
    publisher: "駿台",
    year: 2023,
    subject: "数学IA",
    title: "2023年 駿台実践問題集 数学IA",
    dataPath: "data/sundai_2023_IA/meta.js",
    enabled: true
  },
  {
    id: "kawai_2023_IA",
    publisher: "河合塾",
    year: 2023,
    subject: "数学IA",
    title: "2023年 河合塾マーク式総合問題集 数学IA",
    dataPath: "data/kawai_2023_IA/meta.js",
    enabled: true
  },
  {
    id: "kakomon_IA",
    publisher: "共通テスト",
    year: 2024,
    subject: "数学IA",
    title: "共通テスト過去問 数学IA (2021-2024)",
    dataPath: "data/kakomon_IA/meta.js",
    enabled: true
  },
  {
    id: "zkai_2023_IA",
    publisher: "Z会",
    year: 2023,
    subject: "数学IA",
    title: "2023年 Z会実戦模試 数学IA",
    dataPath: "data/zkai_2023_IA/meta.js",
    enabled: true
  },
  {
    id: "sundai_2025_IIBC",
    publisher: "駿台",
    year: 2025,
    subject: "数学IIBC",
    title: "2025年 駿台実戦問題集 数学IIBC",
    dataPath: "data/sundai_2025_IIBC/meta.js",
    enabled: true
  },
  {
    id: "sundai_2024_IIB",
    publisher: "駿台",
    year: 2024,
    subject: "数学IIB",
    title: "2024年 駿台実践問題集 数学IIB",
    dataPath: "data/sundai_2024_IIB/meta.js",
    enabled: true
  },
  {
    id: "kawai_2025_IIBC",
    publisher: "河合塾",
    year: 2025,
    subject: "数学IIBC",
    title: "2025年 河合塾マーク式総合 数学IIBC",
    dataPath: "data/kawai_2025_IIBC/meta.js",
    enabled: true
  },
  {
    id: "zkai_2025_IIBC",
    publisher: "Z会",
    year: 2025,
    subject: "数学IIBC",
    title: "2025年 Z会実戦模試 数学IIBC",
    dataPath: "data/zkai_2025_IIBC/meta.js",
    enabled: true
  },
  {
    id: "kakomon_IIB",
    publisher: "過去問",
    year: 2024,
    subject: "数学IIB",
    title: "共通テスト 数学IIB/IIBC 過去問",
    dataPath: "data/kakomon_IIB/meta.js",
    enabled: true
  }
];

// 出版社カラーテーマ
var PUBLISHER_THEMES = {
  "駿台": { color: "#10b981", bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)", icon: "🟢" },
  "Z会":  { color: "#3b82f6", bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.3)", icon: "🔵" },
  "河合塾": { color: "#ef4444", bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.3)", icon: "🔴" },
  "東進": { color: "#f59e0b", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.3)", icon: "🟡" },
  "代ゼミ": { color: "#8b5cf6", bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.3)", icon: "🟣" },
  "共通テスト": { color: "#d97706", bg: "rgba(217,119,6,0.15)", border: "rgba(217,119,6,0.3)", icon: "⭐" }
};

// 科目一覧
var SUBJECTS = ["数学IA", "数学IIB", "数学IIBC"];

// 単元カテゴリ分類
var TAG_CATEGORIES = {
  "数と式": { color: "#6366f1", icon: "📐" },
  "集合と命題": { color: "#8b5cf6", icon: "🔗" },
  "2次関数": { color: "#ec4899", icon: "📈" },
  "図形と計量": { color: "#14b8a6", icon: "📏" },
  "データの分析": { color: "#f59e0b", icon: "📊" },
  "図形の性質": { color: "#10b981", icon: "🔺" },
  "平面図形": { color: "#22c55e", icon: "⬡" },
  "空間図形": { color: "#06b6d4", icon: "🧊" },
  "場合の数と確率": { color: "#f97316", icon: "🎲" }
};
