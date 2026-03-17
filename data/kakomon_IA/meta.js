// =============================================================================
// 共通テスト過去問 数学IA — メタデータ
// =============================================================================
// 旧課程形式: 各回5問（第3問=確率, 第4問=整数(選択), 第5問=図形(選択)）

var BOOK_DATA_kakomon_IA = {
  id: "kakomon_IA",
  publisher: "共通テスト",
  year: 2024,
  subject: "数学IA",
  title: "共通テスト過去問 数学IA (2021-2024)",
  basePath: "data/kakomon_IA/",
  rounds: [
    // ===================== 2021 第1日程 =====================
    {
      id: "2021_1st", title: "2021年 第1日程",
      questions: [
        {
          id: "2021_1_q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "2次方程式", "解の公式"],
              "[2]": ["図形と計量", "正弦定理", "余弦定理", "三角形の面積"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "2次方程式の解の判別と図形の計量",
            stumbling_points: ["解が有理数になる条件を判別式の平方数に言い換える発想に気づきにくい。", "鈍角・鋭角でのcosの符号変化と辺の大小関係の把握。"],
            key_to_start: "解の公式→根号の中身に着目。図形は余弦定理や面積公式で数式化し角度条件での符号変化を調べましょう。"
          },
          problemImages: Array.from({length: 6}, (_, i) => `images/2021_第1日程_数IA_page${i+1}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2021_第1日程_数IA_解答_page${i+1}.png`)
        },
        {
          id: "2021_1_q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大値・最小値", "文章題のモデル化"],
              "[2]": ["データの分析", "箱ひげ図", "ヒストグラム", "散布図"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "2次関数による事象のモデル化と統計グラフの読み取り",
            stumbling_points: ["文字の関係を立式しy=xzに代入して平方完成する処理。", "箱ひげ図の読み取れる情報と読み取れない情報の混同。"],
            key_to_start: "[1]はピッチzをストライドxの1次関数→y=xzに代入→平方完成。[2]は四分位数の定義に忠実に選択肢を吟味しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/2021_第1日程_数IA_page${i+7}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2021_第1日程_数IA_解答_page${i+6}.png`)
        },
        {
          id: "2021_1_q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: { "[1]": ["場合の数と確率", "反復試行の確率", "条件付き確率"] },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "反復試行の確率と条件付き確率",
            stumbling_points: ["事象の定義や関係性を見失いやすい。", "条件付き確率の分母を排反事象の和で構成する工程。"],
            key_to_start: "事象に記号を割り当てて整理。比の性質を利用する誘導に乗って計算の手間を省きましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/2021_第1日程_数IA_page${i+14}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2021_第1日程_数IA_解答_page${i+11}.png`)
        },
        {
          id: "2021_1_q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: { "[1]": ["整数の性質", "1次不定方程式", "倍数・約数"] },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "1次不定方程式の整数解と周期性",
            stumbling_points: ["特殊解をユークリッドの互除法で導出する計算力。", "円周上の15マスの周期の視点で操作回数を最適化する発想。"],
            key_to_start: "特殊解を見つけて定数倍→右辺の数値を合わせる定石。円周上の移動は±15の実質ゼロを利用しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/2021_第1日程_数IA_page${i+18}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2021_第1日程_数IA_解答_page${i+15}.png`)
        },
        {
          id: "2021_1_q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: { "[1]": ["図形の性質", "角の二等分線の定理", "相似", "方べきの定理", "内接円"] },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "平面図形の総合問題（比、円の定理、相似の活用）",
            stumbling_points: ["3:4:5→直角三角形に気づかない。", "円周角や直角から相似な三角形のペアを見つけ出す難しさ。"],
            key_to_start: "辺の比3:4:5→直角三角形。角の二等分線や円周角で等しい角のペアを探して相似を探索しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/2021_第1日程_数IA_page${i+21}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2021_第1日程_数IA_解答_page${i+19}.png`)
        }
      ]
    },
    // ===================== 2021 第2日程 =====================
    {
      id: "2021_2nd", title: "2021年 第2日程",
      questions: [
        {
          id: "2021_2_q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "絶対値を含む不等式", "不等式の整数解"], "[2]": ["図形と計量", "正弦定理", "図形の最大・最小", "円と直線"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "絶対値不等式の整数解と正弦定理の活用", stumbling_points: ["無理数含む範囲から整数解個数の絞り込み。", "外接円の半径最小→sin値最大=1(直角)への発想の飛躍。"], key_to_start: "[1]は絶対値を外して整数値を絞り込む。[2]は正弦定理2R=c/sinCで分母最大→直角を考えましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/2021_第2日程_数IA_page${i+1}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2021_第2日程_数IA_解答_page${i+1}.png`)
        },
        {
          id: "2021_2_q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "最大値・最小値", "文章題"], "[2]": ["データの分析", "散布図", "ヒストグラム", "平均値・分散"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "利益の最大化と階級値を用たい統計量の計算", stumbling_points: ["価格と売上数の関係を表から1次関数として立式するモデリング。", "階級値を用いた分散の定義通りの計算で誘導の意味を掴めない。"], key_to_start: "[1]は価格xに対する売上数zの傾きを求めて直線式を作る。[2]は分散の文字式の展開式に当てはめましょう。" },
          problemImages: Array.from({length: 7}, (_, i) => `images/2021_第2日程_数IA_page${i+6}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2021_第2日程_数IA_解答_page${i+6}.png`)
        },
        {
          id: "2021_2_q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["場合の数と確率", "独立な試行", "排反事象", "条件付き確率"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "独立な試行と条件付き確率", stumbling_points: ["袋から箱への移動操作で箱の中身のパターン分けの漏れ。", "全事象の確率を排反事象の和で構成するステップ。"], key_to_start: "A,Bの袋から何色の球を取り出したか4パターン→各確率を書き出して整理しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2021_第2日程_数IA_page${i+13}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2021_第2日程_数IA_解答_page${i+11}.png`)
        },
        {
          id: "2021_2_q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["整数の性質", "不定方程式", "平方剰余", "倍数・約数"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "平方数の和と整数の剰余", stumbling_points: ["a≥b≥c≥d≥0の大小関係を使って変数の範囲を絞る発想。", "奇数の平方を8で割った余りは1等の平方剰余の性質。"], key_to_start: "大小関係を活かしてm≤4a²の不等式→aの候補を絞り出すところからスタートしましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2021_第2日程_数IA_page${i+16}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2021_第2日程_数IA_解答_page${i+15}.png`)
        },
        {
          id: "2021_2_q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["図形の性質", "作図と相似", "平行線と線分の比", "方べきの定理", "メネラウスの定理"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "円の作図手順の読み解きと平面図形の諸定理の活用", stumbling_points: ["作図手順から図を描き起こし相似三角形のペアを見つける空間把握。", "方べきやメネラウスを適用する三角形と直線の組み合わせを見失う。"], key_to_start: "作図手順を一つずつ描き込み→接線や平行線から等角をマーク→相似発見。比はメネラウスのキツネ型を探しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2021_第2日程_数IA_page${i+19}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2021_第2日程_数IA_解答_page${i+19}.png`)
        }
      ]
    },
    // ===================== 2022 本試験 =====================
    {
      id: "2022_hon", title: "2022年 本試験",
      questions: [
        {
          id: "2022h_q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "対称式・交代式", "展開と因数分解"], "[2]": ["図形と計量", "三角比の利用", "縮尺と近似値"], "[3]": ["図形と計量", "正弦定理・余弦定理", "2次関数の最大・最小"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "対称式の計算、三角比の測量応用、図形の計量と最大値", stumbling_points: ["3変数の対称式で差の積への変形・代入の工夫。", "図形の弦の長さ≤直径の定義域の見落とし。"], key_to_start: "[1]はx=b-c等の置換。[2][3]は文章から直角三角形モデル→変数1つに絞って2次関数に帰着しましょう。" },
          problemImages: Array.from({length: 7}, (_, i) => `images/2022_本試験_数IA_page${i+1}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/2022_本試験_数IA_解答_page${i+1}.png`)
        },
        {
          id: "2022h_q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "共通解", "グラフの平行移動", "集合と命題"], "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図と相関係数", "変量の変換"] }, aggregate_tags: ["2次関数", "集合と命題", "データの分析"] },
          tips: { topic: "2次方程式の共通解・グラフ移動と実データの統計分析", stumbling_points: ["共通解αで引き算して次数を下げる基本手法。", "膨大な図表から四分位数を正確にカウントする情報処理。"], key_to_start: "共通解はα代入→連立→最高次消去が鉄則。データはデータ総数から四分位数の位置を地道に数え上げましょう。" },
          problemImages: Array.from({length: 8}, (_, i) => `images/2022_本試験_数IA_page${i+8}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/2022_本試験_数IA_解答_page${i+7}.png`)
        },
        {
          id: "2022h_q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["場合の数と確率", "完全順列", "排反事象"], "[2]": ["場合の数と確率", "事象の分割", "余事象"], "[3]": ["場合の数と確率", "条件付き確率"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "プレゼント交換会（完全順列の応用）と条件付き確率", stumbling_points: ["人数増加時のパターン分けで重複や漏れ。", "AからDが自分以外を受け取る事象にEが混在する構造に気づかない。"], key_to_start: "少人数の結果を利用→nCk×残り人数の完全順列の構造に気づいて計算をシステム化しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/2022_本試験_数IA_page${i+16}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2022_本試験_数IA_解答_page${i+13}.png`)
        },
        {
          id: "2022h_q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["整数の性質", "1次不定方程式", "ユークリッドの互除法"], "[2]": ["整数の性質", "累乗の余り", "合同式", "二項定理"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "1次不定方程式と巨大累乗の剰余（合同式の活用）", stumbling_points: ["係数が大きい不定方程式の特殊解導出の手間。", "巨大累乗を割り切れる関係式の両辺累乗で消去する技術。"], key_to_start: "11⁴=16×915+1のような余り1の関係式を両辺累乗→二項定理で展開→割り切れる部分を消去しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2022_本試験_数IA_page${i+20}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2022_本試験_数IA_解答_page${i+17}.png`)
        },
        {
          id: "2022h_q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["図形の性質", "重心の性質", "メネラウスの定理", "線分比"], "[2]": ["図形の性質", "円に内接する四角形", "相似", "方べきの定理"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "重心、メネラウス、円の定理を用いた線分比の総合問題", stumbling_points: ["メネラウスの三角形と直線の組み合わせを複数回見つけ出す難しさ。", "4点同一円周上→相似への論理の飛躍。"], key_to_start: "重心→2:1の比を即書き込み。メネラウスのキツネ形をなぞる。円→方べきと対角の和180°→相似をセットで疑いましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2022_本試験_数IA_page${i+23}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2022_本試験_数IA_解答_page${i+21}.png`)
        }
      ]
    },
    // ===================== 2022 追試験 =====================
    {
      id: "2022_tsui", title: "2022年 追試験",
      questions: [
        {
          id: "2022t_q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "絶対値を含む方程式", "実数解の個数"], "[2]": ["図形と計量", "三角比", "正弦定理・余弦定理", "三角形の決定条件"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "絶対値方程式の解の個数と三角比の図形計量・決定条件", stumbling_points: ["場合分けの解が前提条件を満たすか確認を忘れる。", "sinの値から鋭角/鈍角の複数パターンの吟味。"], key_to_start: "[1]は場合分け→解が条件を満たすか検証。[2]は余弦定理等で数式化→判別式と図形的意味で解を吟味しましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/2022_追試験_数IA_page${i+1}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/2022_追試験_数IA_解答_page${i+1}.png`)
        },
        {
          id: "2022t_q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "図形の面積の最大値", "場合分け"], "[2]": ["データの分析", "散布図と相関係数", "ヒストグラム", "箱ひげ図", "平均値と分散"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "動点による面積の最大値と2変量データの分析・計算", stumbling_points: ["動点の位置をxとaで正確に立式する計算力。", "aの値で定義域が変わるため頂点の区間内外の把握。"], key_to_start: "[1]は各線分長をxとaで書き込み→面積をxの2次関数→平方完成。[2]は誘導式を見比べて代入しましょう。" },
          problemImages: Array.from({length: 7}, (_, i) => `images/2022_追試験_数IA_page${i+7}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/2022_追試験_数IA_解答_page${i+7}.png`)
        },
        {
          id: "2022t_q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["場合の数と確率", "事象の確率", "排反事象", "条件付き確率", "最大・最小の戦略"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "さいころのゲームの条件付き確率と確率最大化戦略", stumbling_points: ["多段ルールの複雑さで事象を見失う。", "投げない方が有利な条件の場合分けと確率比較の煩雑さ。"], key_to_start: "1回目の目ごとに「投げた場合」「投げない場合」のAの分布と確率を表に整理して可視化しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/2022_追試験_数IA_page${i+14}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2022_追試験_数IA_解答_page${i+13}.png`)
        },
        {
          id: "2022t_q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["整数の性質", "1次不定方程式", "余りによる分類", "合同式"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "分数式の整数条件と累乗を割った余り（合同式）", stumbling_points: ["分数和が整数→最小公倍数を掛けて余りに注目する発想の飛躍。", "中国剰余定理的アプローチでの元の余り復元の論理展開。"], key_to_start: "分数→分母を払って整数式に。mod 5, mod 7, mod 11で独立させて考えましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2022_追試験_数IA_page${i+18}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2022_追試験_数IA_解答_page${i+17}.png`)
        },
        {
          id: "2022t_q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["図形の性質", "方べきの定理の逆", "角の二等分線の定理", "メネラウスの定理", "外心"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "平面図形の総合問題（各種定理の複合的な活用）", stumbling_points: ["二等分線+メネラウスの適用対象のキツネ形の抽出。", "複数線分比から実際の長さ→三平方や方べきへの接続。"], key_to_start: "角の二等分線→線分比の定理。一直線上の3点→メネラウスの図形をマーカーでなぞりましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2022_追試験_数IA_page${i+21}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2022_追試験_数IA_解答_page${i+21}.png`)
        }
      ]
    },
    // ===================== 2023 本試験 =====================
    {
      id: "2023_hon", title: "2023年 本試験",
      questions: [
        {
          id: "2023h_q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "1次不等式", "無理数を含む不等式", "連立不等式"], "[2]": ["図形と計量", "正弦定理・余弦定理", "三角形の面積", "2次関数の最大・最小"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "不等式の解の存在範囲と図形の計量における2次関数の活用", stumbling_points: ["連立不等式の共通部分の存在条件でミスしやすい。", "面積の2乗をAB²=xの2次関数として立式し平方完成する帰着処理。"], key_to_start: "[1]は数直線で解の重なりを視覚化。[2]は定理で辺角の関係式→変数1つに絞って最大化を2次関数に翻訳しましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/2023_本試験_数IA_page${i+1}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/2023_本試験_数IA_解答_page${i+1}.png`)
        },
        {
          id: "2023h_q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "関数の決定", "最大値・最小値", "文章題"], "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "分散と標準偏差", "共分散と相関係数"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "利益の関数モデル化と統計グラフの読み取り・文字式による分散計算", stumbling_points: ["利益の式の次数を正確に判定するモデリング。", "賛成(1)/反対(0)の特殊データで文字m,nの分散式の計算。"], key_to_start: "[1]は条件を忠実に数式化。[2]は0,1データではx²の和=xの和の性質で分散をシンプルに整理しましょう。" },
          problemImages: Array.from({length: 7}, (_, i) => `images/2023_本試験_数IA_page${i+7}.png`),
          answerImages: Array.from({length: 7}, (_, i) => `images/2023_本試験_数IA_解答_page${i+7}.png`)
        },
        {
          id: "2023h_q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["場合の数と確率", "反復試行", "図を利用した数え上げ", "条件付き確率"], "[2]": ["場合の数と確率", "余事象"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "座標平面上の点の移動と条件付き確率", stumbling_points: ["y≥0の制限付き移動で公式に頼って経路の重複・漏れ。", "条件付き確率の分母分子を正しく抽出するステップ。"], key_to_start: "格子状の経路図を描いて各交点に到達パターン数をパスカルの三角形の要領で書き込みましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/2023_本試験_数IA_page${i+14}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/2023_本試験_数IA_解答_page${i+14}.png`)
        },
        {
          id: "2023h_q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["整数の性質", "1次不定方程式", "文字の消去", "剰余類"], "[2]": ["整数の性質", "合同式", "条件の必要十分性"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "3変数の1次不定方程式と剰余の絞り込み", stumbling_points: ["3変数→1文字消去→2変数不定方程式への帰着の見通し。", "余りの条件を数式で処理して文字の条件を論理的に絞り込む。"], key_to_start: "xを消去→2変数不定方程式→特殊解→一般解の定石。余りは表でk=0,1,2,…と代入して規則性を見つけましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2023_本試験_数IA_page${i+18}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2023_本試験_数IA_解答_page${i+17}.png`)
        },
        {
          id: "2023h_q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["図形の性質", "円に内接する四角形", "円周角の定理", "円の接線"], "[2]": ["図形の性質", "直角三角形の相似", "三平方の定理", "方べきの定理"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "円の性質（接線、内接四角形）と角度・長さの計量", stumbling_points: ["対角和180°や直径に対する円周角90°から4点同一円周上に気づく空間把握。", "方べき+相似を複数回組み合わせて円の半径等を連鎖的に導く道筋。"], key_to_start: "直角箇所に必ずマーク→直角2つあれば対角和180°(円内接)や円周角の逆が連鎖的に見えてきます。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2023_本試験_数IA_page${i+21}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2023_本試験_数IA_解答_page${i+21}.png`)
        }
      ]
    },
    // ===================== 2023 追試験 =====================
    {
      id: "2023_tsui", title: "2023年 追試験",
      questions: [
        {
          id: "2023t_q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "1次不等式", "連立不等式"], "[2]": ["図形と計量", "正弦定理・余弦定理", "三角形の面積", "2次関数"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "不等式の解の存在範囲と三角比・2次関数の図形最大化", stumbling_points: ["共通部分と解の幅の条件の不等式化でミス。", "sinの値から鋭角/鈍角の符号吟味忘れ。"], key_to_start: "[1]は数直線で重なりを視覚化。[2]は辺角の関係式→AB²=xと置いて面積最大化を2次関数に帰着しましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/2023_追試験_数IA_page${i+1}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2023_追試験_数IA_解答_page${i+1}.png`)
        },
        {
          id: "2023t_q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "関数の決定", "文章題"], "[2]": ["データの分析", "平均値", "分散", "相関係数・共分散"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "利益の2次関数モデル化と文字式による分散・相関係数の算出", stumbling_points: ["価格と売上数のモデリングの難しさ。", "0,1データで文字m,nの分散式のシグマ展開。"], key_to_start: "[1]は条件を忠実に式に。[2]は0,1データの特徴で二乗和=元の和を活用しましょう。" },
          problemImages: Array.from({length: 7}, (_, i) => `images/2023_追試験_数IA_page${i+7}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/2023_追試験_数IA_解答_page${i+6}.png`)
        },
        {
          id: "2023t_q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["場合の数と確率", "反復試行", "図を利用した数え上げ"], "[2]": ["場合の数と確率", "条件付き確率"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "反復試行による点の移動と条件付き確率", stumbling_points: ["y≥0の条件付き経路数を図形的に数え上げる手間。", "条件付き確率の分母分子の正確な抽出。"], key_to_start: "格子経路図を描いてパスカルの三角形の要領で到達パターン数を足し合わせましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/2023_追試験_数IA_page${i+14}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/2023_追試験_数IA_解答_page${i+12}.png`)
        },
        {
          id: "2023t_q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["整数の性質", "1次不定方程式", "文字の消去"], "[2]": ["整数の性質", "剰余類", "余りによる場合分け"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "3変数の1次不定方程式と剰余の条件絞り込み", stumbling_points: ["3変数→1文字消去→2変数不定方程式への帰着。", "合同式で係数と余りの関係から条件を論理的に絞り込む。"], key_to_start: "文字消去→2変数不定方程式→特殊解→一般解の基本手順を実行。余りは表でパターンを書き出しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2023_追試験_数IA_page${i+18}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2023_追試験_数IA_解答_page${i+15}.png`)
        },
        {
          id: "2023t_q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["図形の性質", "チェバの定理・メネラウスの定理", "重心"], "[2]": ["図形の性質", "内接円と接線の長さ", "面積比"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "チェバ・メネラウスの定理と内接円の性質による面積比", stumbling_points: ["複雑な図からチェバ・メネラウスの適用組み合わせを抽出する空間把握力。", "内接円の接線等長の性質から辺の長さを求める手順。"], key_to_start: "三角形の輪郭と直線をペンでなぞって視覚化。内接円→各頂点の接線長を未知数で置いて方程式を立てましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2023_追試験_数IA_page${i+21}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2023_追試験_数IA_解答_page${i+19}.png`)
        }
      ]
    },
    // ===================== 2024 本試験 =====================
    {
      id: "2024_hon", title: "2024年 本試験",
      questions: [
        {
          id: "2024h_q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "無理数の整数部分・小数部分", "式の値", "不等式"], "[2]": ["図形と計量", "三角比の応用", "直角三角形", "空間図形"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "無理数の評価と三角比を用いた空間の測量", stumbling_points: ["平方根の小数第2位を求める不等式評価の精度。", "坂(斜面)に伸びる影の3次元設定で直角三角形を見出す空間把握力。"], key_to_start: "[1]は不等式評価を段階的に狭めていく誘導に乗る。[2]は断面図（直角三角形の組合せ）を描いてsin,cosで表現→方程式しましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/2024_本試験_問題_page${i+1}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2024_本試験_解答_page${i+1}.png`)
        },
        {
          id: "2024h_q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "図形の面積", "動点問題", "最大・最小"], "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図と相関", "変量の変換（標準化）"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "動点の面積変化とマラソンタイムの実データ分析", stumbling_points: ["2動点の異なる速さでの座標をtの区間ごとに場合分けして立式。", "zスコアの概念を初見で読み解き負の相関的ロジックを理解。"], key_to_start: "[1]はt秒後のP,Qの座標→台形から不要な直角三角形を引いて面積S。[2]はzスコア計算式に代入して比較しましょう。" },
          problemImages: Array.from({length: 8}, (_, i) => `images/2024_本試験_問題_page${i+7}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/2024_本試験_解答_page${i+6}.png`)
        },
        {
          id: "2024h_q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["場合の数と確率", "反復試行", "カードがそろう確率"], "[2]": ["場合の数と確率", "事象の分割", "重複順列"], "[3]": ["場合の数と確率", "複雑な事象", "排反に分ける"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "コンプリートガチャ問題（全種類がそろう確率）", stumbling_points: ["n回目で初めてそろう条件でn-1回目までの状態整理。", "種類増加時の排反分割と前の設問の結果を再利用する視点。"], key_to_start: "種類少→直接数え上げor余事象。後半は前の計算結果をパーツとして再利用する視点を持ちましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/2024_本試験_問題_page${i+15}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/2024_本試験_解答_page${i+11}.png`)
        },
        {
          id: "2024h_q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["整数の性質", "進法変換（n進数）"], "[2]": ["整数の性質", "周期性", "最小公倍数"], "[3]": ["整数の性質", "1次不定方程式", "余り（合同式）"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "n進法のタイマーの周期性と1次不定方程式", stumbling_points: ["000に戻る周期=n進3桁の最大値+1=n³の10進変換。", "2つのタイマー同時表示→64x+6=27y+5の不定方程式の立式。"], key_to_start: "n進数→10進数に直して周期を把握。同時表示=周期×x+初回時間で連立→不定方程式に持ち込みましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2024_本試験_問題_page${i+19}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2024_本試験_解答_page${i+14}.png`)
        },
        {
          id: "2024h_q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["図形の性質", "メネラウスの定理", "線分比"], "[2]": ["図形の性質", "方べきの定理", "円と直線の位置関係"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "星型図形でのメネラウスと方べきの定理による位置関係判定", stumbling_points: ["星型の交差線からメネラウスの適用対象を見つけ出す。", "方べきの式の比較→点が円の内部/外部の判定の論理。"], key_to_start: "星型=三角形を直線が貫くメネラウスの定理の宝庫。求めたい比を含む直線をマーカーでなぞりキツネ型を浮かび上がらせましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/2024_本試験_問題_page${i+22}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/2024_本試験_解答_page${i+18}.png`)
        }
      ]
    }
  ]
};
