// =============================================================================
// 河合塾 2023年度版 マーク式総合問題集 数学IA — メタデータ
// =============================================================================
// 旧課程形式: 各回5問（第3問=確率, 第4問=整数(選択), 第5問=図形(選択)）
// PDFは問題+解説一体型（第X回_問題解説.pdf）

var BOOK_DATA_kawai_2023_IA = {
  id: "kawai_2023_IA",
  publisher: "河合塾",
  year: 2023,
  subject: "数学IA",
  title: "2023年 河合塾マーク式総合問題集 数学IA",
  basePath: "data/kawai_2023_IA/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "素因数と倍数", "集合と命題", "必要条件・十分条件"],
              "[2]": ["図形と計量", "三角形と内接円", "相似な三角形", "余弦定理", "正弦定理"]
            },
            aggregate_tags: ["集合と命題", "図形と計量"]
          },
          tips: {
            topic: "素因数と倍数に関する命題の真偽判定、三角形の計量と内接円の半径",
            stumbling_points: ["必要条件と十分条件の定義混同や素因数の個数に注目した反例発見が難しい。", "内接円の半径を三角形の面積を介する公式で求めることを思いつきにくい。", "角の二等分線の性質と面積比・線分比の関連付けができない。"],
            key_to_start: "命題は素因数分解で具体的条件式に整理。図形は余弦定理→正弦→面積→内接円の公式の王道手順を踏みましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第1回_問題解説_page${i+2}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/第1回_問題解説_page${i+12}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "2次関数の立式", "2次関数の最大値"],
              "[2]": ["データの分析", "箱ひげ図", "散布図", "相関係数", "分散・共分散"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "文章題からの2次関数立式と最大値問題、散布図・分散の性質の読み取り",
            stumbling_points: ["散在する条件を統合して1つの2次関数に立式する情報整理不足。", "散布図上の傾き-1の直線が新変数zを表していることの読み落とし。", "新変数zの分散を共分散を利用して計算する手順への不慣れ。"],
            key_to_start: "利益=(売価-原価)×個数-人件費の基本式に条件を代入→2次関数に。z=x+yの分散は偏差の平方和を展開→分散と共分散に帰着させましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第1回_問題解説_page${i+7}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第1回_問題解説_page${i+18}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "数直線上の点の移動", "反復試行", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "規則にしたがって動く点の座標の確率と条件付き確率",
            stumbling_points: ["奇数回は負、偶数回は正の方向という交互ルールの煩雑さ。", "指定座標に到達するための各回の目の出方を網羅できない。", "条件付き確率の分母・分子の積事象を正しく捉えられない。"],
            key_to_start: "2回の移動を1セットとしてx=2回目-1回目と変数を置き換えて整理しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題解説_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第1回_問題解説_page${i+15}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["整数の性質", "正の約数の個数と総和", "方程式", "素因数分解"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "素因数分解を利用した約数の個数・総和の計算と条件を満たす整数の決定",
            stumbling_points: ["約数の総和公式を正確に記憶しておらず式を組み立てられない。", "約数個数の条件から素因数分解の形を特定できない。", "約数の総和の式から素数の大小関係を絞り込む場合分けの論理不足。"],
            key_to_start: "約数の個数・総和の公式を書き出す→個数からn=p^a q^b…の形を決定→総和に代入して不等式で素数を絞り込みましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題解説_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第1回_問題解説_page${i+19}.png`)
        },
        {
          id: "r1q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "円と三角形", "線分比と面積比", "重心", "方べきの定理", "メネラウスの定理"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "円と三角形における方べき・メネラウスの定理を用いた線分比と面積比",
            stumbling_points: ["円と直線の交点から方べきの定理の適用を連想できない。", "メネラウスの定理を適用する三角形と直線のキツネ形を抽出できない。", "2辺の中点→交点が重心→2:1の内分比に気づけない。"],
            key_to_start: "円と割線→方べきの定理。線分比→メネラウスのキツネ形をなぞる。中点条件→重心の2:1を利用しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題解説_page${i+8}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第1回_問題解説_page${i+19}.png`)
        }
      ]
    },
    // ===================== 第2回 =====================
    {
      id: "round2", title: "第2回",
      questions: [
        {
          id: "r2q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["集合と命題", "背理法", "必要条件・十分条件"],
              "[2]": ["図形と計量", "正弦定理", "三角比の表", "測量問題"]
            },
            aggregate_tags: ["集合と命題", "図形と計量"]
          },
          tips: {
            topic: "無理数の背理法证明と三角比の測量問題",
            stumbling_points: ["複雑な無理数の計算式で反例を思いつきにくい。", "対偶利用の発想や必要・十分条件の定義混同。", "測量問題で方角条件から正確な図を起こし正弦定理適用の三角形を見つけにくい。"],
            key_to_start: "集合は要素の具体値を計算して確認。測量問題は方角から内角→正確な図を描くことから始めましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第2回_問題解説_page${i+2}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第2回_問題解説_page${i+12}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大値", "扇形の弧の長さと面積"],
              "[2]": ["データの分析", "幹葉図", "箱ひげ図", "散布図と相関係数", "変量の変換"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "図形条件からの2次関数の最大値問題と幹葉図・散布図のデータ分析",
            stumbling_points: ["扇形の周の長さ条件を数式化し面積を1変数2次関数にする文字処理。", "幹葉図から四分位数を正確に数え上げる点。", "すべての点が直線上にある特殊な散布図での相関係数の導出。"],
            key_to_start: "周の長さ=6から不要文字を消去→1変数2次関数。幹葉図はデータ総数確認→順番に四分位数を把握しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第2回_問題解説_page${i+7}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第2回_問題解説_page${i+17}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "非復元抽出", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "玉の非復元抽出における分数の和の条件と条件付き確率",
            stumbling_points: ["分数の和が特定値になる玉の数の組み合わせの漏れ。", "同じ数字の玉が複数ある場合の順列計算での重複・抜け。", "条件付き確率の分母・分子の場合の数の切り分け。"],
            key_to_start: "分数の値が整数になる組み合わせ→和が指定値のパターンをリストアップ→各並べ方を階乗で計算しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_問題解説_page${i+15}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["整数の性質", "1次不定方程式", "整数の割り算と余り", "無理数の証明"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "1次不定方程式の整数解と余りによる場合分けを用いた証明",
            stumbling_points: ["特殊解を見つけ一般解を文字kで表す手順の習熟不足。", "kの偶奇や3の倍数で場合分けして余りを求める論理展開。", "平方根が無理数の証明を平方数と余りの関係に帰着させる発想。"],
            key_to_start: "特殊解1つ→辺々引く→一般解をkの式で表す定石。余り問題はk=2l,3mと置いて展開しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解説_page${i+18}.png`)
        },
        {
          id: "r2q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "重心・外心", "角の二等分線", "方べきの定理", "メネラウスの定理"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "直角三角形の五心の性質と円が絡む線分比・面積比",
            stumbling_points: ["直角三角形の外心が斜辺の中点に一致する基本性質の知識抜け。", "角の二等分線の定理と方べきの定理を組み合わせた線分の連鎖的計算。", "メネラウスの定理で必要な線分比のキツネ形の抽出。"],
            key_to_start: "直角三角形→外心は斜辺の中点、重心は中線を2:1に内分。メネラウスで線分比→底辺比・高さ比で面積比に変換しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解説_page${i+18}.png`)
        }
      ]
    },
    // ===================== 第3回 =====================
    {
      id: "round3", title: "第3回",
      questions: [
        {
          id: "r3q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["集合と命題", "必要条件・十分条件", "2次不等式", "絶対値を含む不等式"],
              "[2]": ["図形と計量", "余弦定理", "正弦定理", "三角比の表"]
            },
            aggregate_tags: ["集合と命題", "図形と計量"]
          },
          tips: {
            topic: "不等式の解に基づく集合の包含関係と三角比の応用（メリーゴーラウンド）",
            stumbling_points: ["絶対値を含む不等式の文字定数の区間包含関係の処理。", "動点の位置関係を中心角として捉え直す発想。", "三角比の表から近似角度を求めて見えない時間を算出する引き算の解釈。"],
            key_to_start: "不等式→数直線→端点の白丸黒丸に注意して視覚化。動点→中心角の変化に翻訳→三角比の表から角度を拾いましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第3回_問題解説_page${i+2}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第3回_問題解説_page${i+12}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "動点問題", "線分の長さの2乗", "方程式の解の個数"],
              "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図", "変量の変換"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "折れ線上の2動点間距離の2乗のグラフとデータ分析",
            stumbling_points: ["速さが異なる2動点の各時間帯の位置をtの式で正確に表せない。", "距離の2乗の2次関数とy=k²の交点個数からkの範囲を読み取る視覚処理。", "変量変換z=180xで分散が係数の2乗倍になる公式の適用。"],
            key_to_start: "時間tの範囲ごとに各点の距離をtで表し→三平方や余弦定理で距離の2乗をtの2次関数に。変量変換公式を正確に思い出しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第3回_問題解説_page${i+7}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第3回_問題解説_page${i+17}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "同じものを含む順列", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "白球と黒球の順列と球を取り除く操作の確率",
            stumbling_points: ["白球の間にある黒球のパターンを漏れなく数え上げる。", "球を取り除き並べ直す操作の状態遷移の把握。", "条件付き確率の分母分子の場合の数の混同。"],
            key_to_start: "2個の白球の間の黒球数に注目→初期パターンを分類→各状態の発生確率と次の遷移の流れを整理しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_問題解説_page${i+15}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["整数の性質", "整数の割り算と余り", "1次不定方程式", "連続する整数の性質"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "平方数を割った余りの性質と1次不定方程式の整数解",
            stumbling_points: ["a²とaを26で割った余りが等しい→a²-aが26の倍数への同値変形。", "a(a-1)が連続2整数の積→必ず偶数の性質に気づけない。", "特殊解→一般解の手順への不慣れ。"],
            key_to_start: "余りが等しい→差が倍数の定石。連続2整数の積は偶数。特殊解1つ→辺々引く→一般解の王道手順を踏みましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第3回_問題解説_page${i+18}.png`)
        },
        {
          id: "r3q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "接線と弦の作る角", "相似な三角形", "方べきの定理", "メネラウスの定理", "面積比"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "円の接線が絡む三角形の相似とメネラウスの定理による線分比・面積比",
            stumbling_points: ["接弦定理を見落として相似な三角形を見つけられない。", "方べきの定理を適用する状況に気づかない。", "メネラウスの定理の三角形と直線のセット抽出ができない。"],
            key_to_start: "円と接線→接弦定理→等しい角をマーク→共通角で相似発見。面積比→メネラウスで底辺比を求めましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第3回_問題解説_page${i+20}.png`)
        }
      ]
    },
    // ===================== 第4回 =====================
    {
      id: "round4", title: "第4回",
      questions: [
        {
          id: "r4q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "無理数の値の評価", "絶対値"],
              "[2]": ["図形と計量", "三角柱の体積", "余弦定理"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "無理数の式の値の評価と三角柱の切断による体積・線分比の計量",
            stumbling_points: ["√X²=|X|の絶対値の中身の正負による場合分けを忘れる。", "三角柱を斜めに切断した立体の体積を錐体に分割する発想が出ない。"],
            key_to_start: "平方根は必ず絶対値をつけてから外す。立体求積は高さを求めやすい底面を見つけるか、錐体に分割して足し合わせましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第4回_問題解説_page${i+2}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第4回_問題解説_page${i+12}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "関数の立式", "グラフの交点", "方程式の解"],
              "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図と相関係数"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "移動距離の関数化とグラフの交点、ヒストグラム・散布図のデータ読み取り",
            stumbling_points: ["2人の移動ルールを時間ごとに場合分けして正確に関数化できない。", "散布図で条件を満たすデータ群を境界直線で絞り込む手順の不足。"],
            key_to_start: "時間で場合分け→各区間の距離の式を立てる。散布図は条件式を直線に翻訳して領域を考えましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第4回_問題解説_page${i+7}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第4回_問題解説_page${i+17}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "反復試行の確率", "条件付き確率", "経路図を用いた確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "くじ引きによるアイテム獲得の推移と条件付き確率、経路図への帰着",
            stumbling_points: ["試行回数増加時の状態遷移の漏れ。", "途中で個数が等しくならない条件をxy平面の経路問題に置き換える発想。"],
            key_to_start: "推移表を書いて整理。2変数の増減→xy平面の最短経路問題に翻訳→視覚化して数えましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第4回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_問題解説_page${i+15}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["整数の性質", "2次式の値が整数となる条件", "1次不定方程式", "2進法の小数"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "分数式が整数となる条件と1次不定方程式の解、2進法の小数",
            stumbling_points: ["分数式が整数→分母が分子の約数の絞り込みができない。", "2変数で平方完成を利用して候補を絞る発想が出ない。"],
            key_to_start: "分数が整数→分母の式が分子の約数。2次式は1文字で平方完成→2乗の項で値の範囲を絞り込みましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第4回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第4回_問題解説_page${i+18}.png`)
        },
        {
          id: "r4q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "余弦定理による角の判定", "接弦定理", "相似な三角形", "方べきの定理", "メネラウスの定理"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "円の接線と三角形の相似、方べき・メネラウスの定理による線分比",
            stumbling_points: ["接弦定理を適用し忘れて相似三角形を発見できない。", "複数の円が交差する図で各円に独立して方べきやメネラウスを適用する視点の切り替え。"],
            key_to_start: "円と接線→接弦定理で等しい角に印→共通角で相似発見。円が2つ→1つずつ注目して方べきの交点を探しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第4回_問題解説_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第4回_問題解説_page${i+20}.png`)
        }
      ]
    },
    // ===================== 第5回 =====================
    {
      id: "round5", title: "第5回",
      questions: [
        {
          id: "r5q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "無理数の計算", "絶対値", "連立1次不等式"],
              "[2]": ["2次関数", "グラフの頂点と切片", "1次関数"],
              "[3]": ["2次関数", "日常生活への応用", "2次不等式"]
            },
            aggregate_tags: ["数と式", "2次関数"]
          },
          tips: {
            topic: "絶対値を含む無理数の計算、2次関数の係数判定、日常事象の数式化",
            stumbling_points: ["√X²=|X|の場合分けの基本手順の抜け。", "2つの2次関数のグラフの頂点やy切片から係数の符号を論理判定。", "空走距離・制動距離の設定を2次関数の式に正しく翻訳できない。"],
            key_to_start: "文章題は定義通りにL=l₁+l₂を書き出し、不等式L≦7を解く数学の問題に帰着させましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題解説_page${i+2}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第5回_問題解説_page${i+10}.png`)
        },
        {
          id: "r5q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["図形と計量", "余弦定理", "正弦定理", "三角形の面積", "円に内接する四角形"],
              "[2]": ["データの分析", "箱ひげ図", "四分位範囲と四分位偏差", "散布図", "相関係数", "変量の変換"]
            },
            aggregate_tags: ["図形と計量", "データの分析"]
          },
          tips: {
            topic: "円に内接する四角形の計量と複数データの箱ひげ図・散布図の相関分析",
            stumbling_points: ["対角の和180°→cos(180°-θ)=-cosθで余弦定理連立の発想。", "標準偏差0や四分位数が等しい極端な条件からデータ分布を推論。", "変量変換X=0.8xで相関係数Rが変化しない性質の知識抜け。"],
            key_to_start: "円内接四角形→対角の和180°を図に書く→共通の対角線で2つの三角形に余弦定理。極端なデータ例で命題の真偽を確認しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題解説_page${i+7}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第5回_問題解説_page${i+15}.png`)
        },
        {
          id: "r5q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "サイコロの目の積", "反復試行", "排反事象", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "サイコロの目の積が特定の倍数になる確率と終了条件付きゲーム",
            stumbling_points: ["12の倍数条件を6の目の出現回数や素因数で漏れなく場合分け。", "ちょうど3回で終了=2回目までは未達成+3回目で達成の数式化。", "条件付き確率の分母分子の混同。"],
            key_to_start: "6の目の出る回数で場合分け。ちょうどN回で終了=「N回目で達成」-「N-1回目で既に達成」の余事象的発想を持ちましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第5回_問題解説_page${i+10}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_問題解説_page${i+13}.png`)
        },
        {
          id: "r5q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["整数の性質", "n進法（2進法・3進法）", "1次不定方程式", "ユークリッドの互除法", "最大公約数", "2次関数の最大・最小"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "n進法の末尾0の個数と1次不定方程式の最大最小問題",
            stumbling_points: ["n進法で末尾に0が連続→n^kの倍数への翻訳。", "右辺が定数倍の一般解の拡張処理。", "一般解を代入した2次関数の最大値のパラメータm平方完成への帰着。"],
            key_to_start: "2進法で末尾に0が4個→2⁴の倍数（ただし2⁵の倍数でない）。一般解代入→1変数2次関数→平方完成で頂点→最も近い整数を選びましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第5回_問題解説_page${i+10}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第5回_問題解説_page${i+16}.png`)
        },
        {
          id: "r5q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "円と接線", "直径と円周角", "方べきの定理", "角の二等分線と比", "メネラウスの定理", "面積比"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "円の接線・直径の性質とメネラウスの定理等による線分比・面積比",
            stumbling_points: ["円の直径→円周角90°→直角三角形の発生に気づけない。", "角の二等分線と方べきの組み合わせで線分を連鎖的に求める複雑さ。", "メネラウスのキツネ形の正しい抽出。"],
            key_to_start: "直径→円周角90°をマーク→三平方を使えるか確認。面積比はメネラウスで線分比を求めてから変換しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第5回_問題解説_page${i+10}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第5回_問題解説_page${i+16}.png`)
        }
      ]
    }
  ]
};
