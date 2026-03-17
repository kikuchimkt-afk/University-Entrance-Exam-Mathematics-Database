// =============================================================================
// Z会 2024年 共通テスト実戦模試 数学IA — メタデータ
// =============================================================================
// 旧課程形式: 各回5問（第3問=確率, 第4問=整数(選択), 第5問=図形(選択)）

var BOOK_DATA_zkai_2024_IA = {
  id: "zkai_2024_IA",
  publisher: "Z会",
  year: 2024,
  subject: "数学IA",
  title: "2024年 Z会実戦模試 数学IA",
  basePath: "data/zkai_2024_IA/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "対称式", "因数分解", "式の値"],
              "[2]": ["図形と計量", "三角比", "正多角形の面積", "2重根号"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "3文字の対称式と正多角形の面積を用いた円周率の評価",
            stumbling_points: ["複数の条件式をどう組み合わせて基本対称式を作るか思いつきにくい。", "円に内接・外接する正n角形の面積を一般化する立式や2重根号の処理に戸惑う。"],
            key_to_start: "代数は3つの式を辺々足す・引いて共通因数を発見。図形は中心と隣り合う2頂点の二等辺三角形を抜き出して面積公式を適用しましょう。"
          },
          problemImages: Array.from({length: 6}, (_, i) => `images/第1回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解答_page${i+2}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["データの分析", "散布図", "相関係数", "時系列グラフ"],
              "[2]": ["2次関数", "最大値", "2次方程式の応用", "文章題"]
            },
            aggregate_tags: ["データの分析", "2次関数"]
          },
          tips: {
            topic: "複数データの読み取りと放物線運動の2次関数",
            stumbling_points: ["複数グラフでの軸の照合で混乱する。", "文字定数aを含む平方完成や交点計算で手が止まる。"],
            key_to_start: "データは各グラフの縦横軸ラベルを指差し確認。2次関数は文字入りでも平方完成→頂点座標をaで表すところから始めましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第1回_問題_page${i+8}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解答_page${i+5}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "反復試行"],
              "(2)": ["場合の数と確率", "文字式の計算", "推移確率"],
              "(3)": ["場合の数と確率", "条件付き確率", "全確率の定理"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "ポリアの壺における確率の推移",
            stumbling_points: ["操作ごとに球の総数と各色個数が変化するので分母分子を追い切れない。", "文字a,bが混入した計算式で事象の分割構造を理解しにくい。"],
            key_to_start: "まず具体的数字で樹形図を描いて操作の流れを完全把握→文字に置き換えて丁寧に立式しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題_page${i+15}.png`),
          answerImages: [8, 9].map(p => `images/第1回_解答_page${p}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "1次不定方程式", "ユークリッドの互除法"],
              "(2)": ["整数の性質", "倍数・約数", "剰余類", "合同式"],
              "(3)": ["整数の性質", "1次不定方程式の一般解"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "係数が大きい1次不定方程式と余りによる条件の絞り込み",
            stumbling_points: ["互除法の逆算で特殊解を見つける計算ミス。", "余りに着目して文字を置き換える発想に慣れていない。"],
            key_to_start: "互除法の逆算と合同式（余り）での文字削減を使い分けましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題_page${i+19}.png`),
          answerImages: [10].map(p => `images/第1回_解答_page${p}.png`)
        },
        {
          id: "r1q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "接弦定理", "平行線の証明"],
              "(2)": ["図形の性質", "相似", "チェバの定理", "メネラウスの定理", "面積比"]
            },
            aggregate_tags: ["図形の性質", "平面図形"]
          },
          tips: {
            topic: "接する2円と交わる直線の性質、チェバ・メネラウスの定理",
            stumbling_points: ["接弦定理で2つの円が絡むため錯角・同位角の発見に時間がかかる。", "複雑な図からチェバ・メネラウスの三角形と直線のセットを見つけ出せない。"],
            key_to_start: "分かった角度・平行マークを図に大きく書き込む。比を求める段階では基本図形だけ余白に抜き出して描き直しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題_page${i+22}.png`),
          answerImages: [11].map(p => `images/第1回_解答_page${p}.png`)
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
              "[1]": ["数と式", "2次関数", "1次関数", "方程式と不等式", "最大値"],
              "[2]": ["図形と計量", "三角比", "余弦定理", "円周角の定理"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "文字係数を含む関数の最大値と図形の計量・証明",
            stumbling_points: ["文字aの値で傾きが変わる場合分けで不等式処理に戸惑う。", "余弦定理の式を因数分解してAP=BPの結論に結びつける式変形が難しい。"],
            key_to_start: "[1]は因数分解→xの係数の符号でグラフの形を把握。[2]は余弦定理を書き出して地道に式変形しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第2回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解答_page${i+2}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "1次関数", "不等式", "最大値"],
              "[2]": ["データの分析", "散布図", "相関関係", "四分位数", "中央値"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "売上予測の関数活用とデータの分析",
            stumbling_points: ["販売価格と販売数の1次関数→売上総額の2次関数の構成でつまずく。", "散布図のy=xとの大小比較・相関係数の推測に慣れていない。"],
            key_to_start: "[1]は2点から直線の式を求めて関係式を立てる。[2]は図にy=x等の補助線を書き込んで選択肢を検証しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第2回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解答_page${i+5}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "条件付き確率"],
              "(2)": ["場合の数と確率", "反復試行", "独立な試行", "条件付き確率"],
              "(3)": ["場合の数と確率", "事象の対応"]
            },
            aggregate_tags: ["場合の数と確率", "条件付き確率"]
          },
          tips: {
            topic: "硬貨投げに関する確率と条件付き確率",
            stumbling_points: ["同様に確からしいことの確認を怠り全事象の数を間違える。", "積事象のパターン数を正しく数え上げられない。"],
            key_to_start: "硬貨を区別して樹形図で全パターンを把握。条件付き確率は分母の「条件が起こった世界」の中で分子を数えましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題_page${i+17}.png`),
          answerImages: [8, 9].map(p => `images/第2回_解答_page${p}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "規則性の発見"],
              "(2)": ["整数の性質", "数列的な考え方", "漸化式"],
              "(3)": ["整数の性質", "規則性の証明"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "カード操作のアルゴリズムと規則性の発見",
            stumbling_points: ["操作手順の読み違えで誤った結果を導いてしまう。", "文字を用いた一般化で操作後のカード枚数や先頭番号の変化を追えない。"],
            key_to_start: "n=2,3,4で手作業シミュレーション→規則性を掴む。文字式は具体数で検算しながら進めましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題_page${i+21}.png`),
          answerImages: [10, 11].map(p => `images/第2回_解答_page${p}.png`)
        },
        {
          id: "r2q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "三角形の面積", "内接円の半径", "傍接円"],
              "(2)": ["図形の性質", "傍接円の半径の大小関係"]
            },
            aggregate_tags: ["図形の性質", "図形と計量"]
          },
          tips: {
            topic: "三角形の計量と内接円・傍接円の半径",
            stumbling_points: ["余弦定理→面積→内接円の基本定石がスムーズに出ない。", "傍接円で面積分割による半径の求め方を初見で思いつくのが困難。"],
            key_to_start: "内接円はS=½r(a+b+c)。傍接円も同じ発想で中心と頂点を結んで三角形分割→面積の和差で方程式を立てましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題_page${i+25}.png`),
          answerImages: [12].map(p => `images/第2回_解答_page${p}.png`)
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
              "[1]": ["数と式", "ガウス記号", "1次不等式"],
              "[2]": ["図形と計量", "余弦定理", "正弦定理", "三角形の面積", "内接円・外接円"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "ガウス記号を含む不等式と三角形の計量",
            stumbling_points: ["ガウス記号の入れ子構造でパニックに陥る。", "外接円Rと内接円rを結びつける等式の構成が出にくい。"],
            key_to_start: "[1]はガウス記号の中身をカタマリと見て外側から不等式に直す。[2]は面積Sを媒介にRとrをつなぐ式を立てましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第3回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_解答_page${i+2}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "グラフの移動", "平方完成", "象限"],
              "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図と相関係数"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "文字係数の2次関数のグラフとデータの分析",
            stumbling_points: ["頂点座標を文字で表した後の象限判定で符号処理ミスする。", "четвертьных数が含まれる階級の数え上げを面倒がって直感で選んで間違える。"],
            key_to_start: "[1]は平方完成→頂点座標を明記→凸の向き・y切片。[2]はデータ数を確認して四分位数の位置を具体的に計算しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第3回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第3回_解答_page${i+5}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "推移確率", "事象の独立・従属"],
              "(2)": ["場合の数と確率", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "状態が推移する確率（ウェブサイトの移動）",
            stumbling_points: ["状態遷移を頭だけで処理して事象の漏れ・重複が発生する。", "終了という分岐パターンの数え落とし。"],
            key_to_start: "A,B,終了の状態遷移を樹形図に描き、矢印に確率を書き込んでルートを整理しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_問題_page${i+17}.png`),
          answerImages: [9, 10].map(p => `images/第3回_解答_page${p}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "約数の個数", "素因数分解"],
              "(2)": ["整数の性質", "約数の個数"],
              "(3)": ["整数の性質", "条件を満たす自然数の個数"],
              "(4)": ["整数の性質", "最大値の探索"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "約数の個数と素因数分解の逆算",
            stumbling_points: ["約数個数から素因数分解を逆算する際「1種類の素数のみ」のパターンを見落とす。", "最大値探索で素数への代入で数え落とし。"],
            key_to_start: "約数6個なら6=5+1 or (2+1)(1+1)→N=p⁵ or p²qと必ず書き出しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_問題_page${i+21}.png`),
          answerImages: [11, 12].map(p => `images/第3回_解答_page${p}.png`)
        },
        {
          id: "r3q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "回転移動", "最小値問題"],
              "(2)": ["図形の性質", "合同な図形"],
              "(3)": ["図形の性質", "多角形", "最小値問題"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "図形の回転移動と折れ線の最小値（フェルマー点）",
            stumbling_points: ["60度回転→正三角形→直線上に配置の高度な発想が初見で理解しづらい。", "四角形への拡張でどこを中心に何度回転させるか見失う。"],
            key_to_start: "「折れ線の最小値=移動させて一直線に伸ばす」の鉄則。誘導に従い60度回転→合同図形→正三角形を見つけましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_問題_page${i+25}.png`),
          answerImages: [12].map(p => `images/第3回_解答_page${p}.png`)
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
              "[1]": ["数と式", "1次不等式", "集合と命題", "必要条件と十分条件"],
              "[2]": ["図形と計量", "余弦定理", "図形の対称性", "とり得る値の範囲"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量"]
          },
          tips: {
            topic: "集合・論理と四角形の計量",
            stumbling_points: ["文字不等式の解の集合から必要・十分条件を判定する思考で混乱。", "対称点の性質で直角三角形を見出すことや角度の大小から辺の範囲を絞り込む操作が直感的にわからない。"],
            key_to_start: "[1]は不等式→数直線で可視化→包含関係の確認。[2]は余弦定理の値の大小と角度の単調減少の対応を意識しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第4回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_解答_page${i+2}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大値", "1次不等式", "2次不等式", "変域の決定"],
              "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図", "相関係数と共分散"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "図形面積の最大化（2次関数）と野球のデータ分析",
            stumbling_points: ["辺の長さが正の隠れた条件から定義域を設定し忘れる。", "変量を100倍したときの相関係数への影響を公式丸暗記で間違える。"],
            key_to_start: "[1]は面積・周の長さを文字式→1文字消去→2次関数。各辺>0から変域をチェック。[2]は変量変換は定義式に立ち返りましょう。"
          },
          problemImages: Array.from({length: 9}, (_, i) => `images/第4回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第4回_解答_page${i+5}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "復元抽出と非復元抽出", "余事象"],
              "(2)": ["場合の数と確率", "文字式の確率", "確率の大小比較"],
              "(3)": ["場合の数と確率", "具体的な値の大小比較"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "くじ引きの確率と条件による大小比較",
            stumbling_points: ["復元/非復元で2回目以降の分母分子変化を正確に捉えられない。", "文字kの確率比較で差をとって通分する厳密処理を怠りがち。"],
            key_to_start: "具体数で戻す・戻さないの確率を書き出す。大小比較は(一方)-(他方)の符号で判断しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第4回_問題_page${i+18}.png`),
          answerImages: [9, 10].map(p => `images/第4回_解答_page${p}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "余り", "背理法"],
              "(2)": ["整数の性質", "合同式と余り", "フェルマーの小定理の証明"],
              "(3)": ["整数の性質", "累乗の余り", "必要条件と十分条件"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "互いに素な整数と余りの性質（フェルマーの小定理）",
            stumbling_points: ["背理法で差が倍数になるという同値変形の論理が飛躍的。", "巨大な累乗の余りに定理をどう適用するか見失う。"],
            key_to_start: "背理法は結論の否定→数式で矛盾を探す。累乗の余りは周期(p-1)で指数を割りましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第4回_問題_page${i+23}.png`),
          answerImages: [11, 12].map(p => `images/第4回_解答_page${p}.png`)
        },
        {
          id: "r4q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "円に内接する四角形", "円周角の定理"],
              "(2)": ["図形の性質", "三角形の面積比", "線分比"],
              "(3)": ["図形の性質", "メネラウスの定理の逆"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "円に内接する四角形とシムソンの定理・清宮の定理",
            stumbling_points: ["4点が同一円周上にある条件を複数見つけ出して角度を連鎖させる過程が困難。", "線分比の積を面積比に変換する高度な証明手法の発想が出ない。"],
            key_to_start: "直角の垂線→共通の斜辺に対する円周角→同一円周上の4点を補助円で囲む。線分比は面積比に置き換えましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題_page${i+28}.png`),
          answerImages: [12].map(p => `images/第4回_解答_page${p}.png`)
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
              "[1]": ["数と式", "整数部分と小数部分", "2次方程式の解"],
              "[2]": ["図形と計量", "三角比", "仰角・俯角", "高さの測量"],
              "[3]": ["図形と計量", "三角比", "二等辺三角形"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "小数部分の扱いと三角比を用いた測量・計量",
            stumbling_points: ["負の数の整数部分を直感的に間違える。", "仰角を正しく図に落とし込めずtan,cosの適用先を迷う。"],
            key_to_start: "[1]は数直線で整数を特定。[2]は水平線と視線の角を明記して直角三角形の辺の比を立式しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第5回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解答_page${i+2}.png`)
        },
        {
          id: "r5q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["データの分析", "箱ひげ図", "散布図", "相関係数"],
              "[2]": ["図形と計量", "空間図形", "動点", "面積と周の長さ"]
            },
            aggregate_tags: ["データの分析", "空間図形"]
          },
          tips: {
            topic: "データの相関関係と空間図形上の動点問題",
            stumbling_points: ["複数散布図から複合的に読み取る際スケールや外れ値に惑わされる。", "空間の動点の位置をtで表して三平方で線分の長さをtの式にする計算でミス多発。"],
            key_to_start: "[1]は相関の正負・強弱を大まかに捉える。[2]は動点が乗る平面を抜き出して2次元で処理しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第5回_問題_page${i+10}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解答_page${i+5}.png`)
        },
        {
          id: "r5q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "最短経路"],
              "(2)": ["場合の数と確率", "特定の点を通る確率"],
              "(3)": ["場合の数と確率", "対称性と確率の大小"],
              "(4)": ["場合の数と確率", "確率の比較"],
              "(5)": ["場合の数と確率", "経路の制限"]
            },
            aggregate_tags: ["場合の数と確率", "最短経路"]
          },
          tips: {
            topic: "格子状の道の最短経路と確率",
            stumbling_points: ["A→点×点→ゴールの掛け合わせを忘れる。", "通行止めの余事象的アプローチが出にくい。"],
            key_to_start: "経路数はₘ₊ₙCₘ。特定点はそこで分割して前後を掛ける。通行止めは全体から引きましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題_page${i+18}.png`),
          answerImages: [8, 9].map(p => `images/第5回_解答_page${p}.png`)
        },
        {
          id: "r5q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "倍数・約数", "ユークリッドの互除法的な考え方"],
              "(2)": ["整数の性質", "倍数・約数", "式の変形と互いに素"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "文字式の倍数条件と約数の個数",
            stumbling_points: ["n+18=(n+2)+16と変形して16がn+2の倍数という条件に帰着させる発想が出にくい。", "互いに素の条件の反例を自分で見つける検証作業が苦手。"],
            key_to_start: "割り算を実行して商+(定数)/(1次式)の形→定数が分母の倍数になる条件を考えましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題_page${i+23}.png`),
          answerImages: [10].map(p => `images/第5回_解答_page${p}.png`)
        },
        {
          id: "r5q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "メネラウスの定理", "チェバの定理", "三角形の面積比"],
              "(2)": ["図形の性質", "定理の拡張", "真偽判定"],
              "(3)": ["図形の性質", "四角形への定理の拡張", "面積比を用いた証明"],
              "(4)": ["図形の性質", "定理の適用", "線分比の計算"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "メネラウス・チェバの定理の原理と四角形への拡張",
            stumbling_points: ["相似三角形の面積比への置き換え証明テクニックが不慣れ。", "四角形拡張の命題真偽判定で面積比を用いた検証アプローチを自力構築できない。"],
            key_to_start: "頂点→分点→頂点の一筆書きイメージ。証明は垂線→相似比か面積比の2パターンで攻めましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第5回_問題_page${i+28}.png`),
          answerImages: [11].map(p => `images/第5回_解答_page${p}.png`)
        }
      ]
    }
  ]
};
