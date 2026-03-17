// =============================================================================
// 駿台 2025年 共通テスト実戦問題集 数学IA — メタデータ
// =============================================================================
// このファイルは BOOK_DATA_sundai_2025_IA としてグローバルに登録される。
// 画像パスは data/sundai_2025_IA/ からの相対パス。

var BOOK_DATA_sundai_2025_IA = {
  id: "sundai_2025_IA",
  publisher: "駿台",
  year: 2025,
  subject: "数学IA",
  title: "2025年 駿台実戦問題集 数学IA",
  basePath: "data/sundai_2025_IA/",
  rounds: [
    {
      id: "round1",
      title: "第1回",
      questions: [
        {
          id: "r1q1",
          name: "第1問",
          score: 30,
          timeMinutes: 21,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "実数", "整数部分と小数部分", "2次方程式"],
              "[2]": ["図形と計量", "三角比", "仰角と俯角", "空間図形の計量"],
              "[3]": ["図形と計量", "余弦定理", "三角形の面積", "角の二等分線"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "実数の小数部分の処理と、平面・空間図形への三角比の応用",
            stumbling_points: [
              "小数部分αの定義域（0≦α<1）を忘れてしまい、不適な解を排除できない。",
              "仰角や俯角の定義を正確に捉えられず、正しい図に落とし込めない。",
              "複数の三角形が組み合わさった図形で「どの三角形に着目すべきか」を見失う。"
            ],
            key_to_start: "問題文の条件を忠実に数式や図に翻訳すること。[1]では「x = n + α (0≦α<1)」と定義通りにおき、[2][3]では直角三角形から三角比の定義式を立てましょう。"
          },
          problemImages: [2,3,4,5,6,7,8,9].map(p => `images/第1回_問題_page${p}.png`),
          answerImages: [2,3,4,5].map(p => `images/第1回_解答_page${p}.png`)
        },
        {
          id: "r1q2",
          name: "第2問",
          score: 30,
          timeMinutes: 21,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "1次関数の立式", "2次関数の最大・最小", "2次不等式"],
              "[2]": ["データの分析", "四分位数", "箱ひげ図", "ヒストグラム", "散布図", "相関係数"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "文章題からの2次関数の立式と、各種統計グラフの正確な読み取り",
            stumbling_points: [
              "1次関数の傾きや切片の計算ミスで後続の2次関数が全てズレてしまう。",
              "四分位数の「位置」の定義が曖昧でグラフの対応付けが勘頼みになる。",
              "分散や共分散から相関係数を求める公式が頭に入っておらず立式できない。"
            ],
            key_to_start: "表やグラフの「定義」に忠実に立ち返ること。"
          },
          problemImages: Array.from({length: 17}, (_, i) => `images/第1回_問題_page${i+10}.png`),
          answerImages: [6,7].map(p => `images/第1回_解答_page${p}.png`)
        },
        {
          id: "r1q3",
          name: "第3問",
          score: 20,
          timeMinutes: 14,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "円に内接する四角形", "円周角の定理", "垂心", "内心"],
              "(2)": ["図形の性質", "方べきの定理", "三角形の相似"]
            },
            aggregate_tags: ["図形の性質", "平面図形"]
          },
          tips: {
            topic: "垂心を題材とした円に内接する四角形の発見と方べきの定理の活用",
            stumbling_points: [
              "直角を見つけても「対角の和が180°」の四角形に気づけない。",
              "円が複数ある場合に方べきの定理の対応を間違える。"
            ],
            key_to_start: "直角を見つけたら即座に「向かい合う角の和が180°の四角形」を探しましょう。"
          },
          problemImages: [],
          answerImages: [8].map(p => `images/第1回_解答_page${p}.png`)
        },
        {
          id: "r1q4",
          name: "第4問",
          score: 20,
          timeMinutes: 14,
          tags: {
            sub_questions: {
              "(i)-(v)": ["場合の数と確率", "条件付き確率", "排反事象", "期待値"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "複雑なルールのゲームにおける状態の推移と条件付き確率・期待値の計算",
            stumbling_points: [
              "場に残っているカードの状況を把握しきれない。",
              "事象が排反であるかの確認を怠り混乱する。"
            ],
            key_to_start: "「今、場に何枚カードがあるか」を自分と相手のターンごとに図に書き出しましょう。"
          },
          problemImages: [],
          answerImages: [9].map(p => `images/第1回_解答_page${p}.png`)
        }
      ]
    },
    {
      id: "round2",
      title: "第2回",
      questions: [
        {
          id: "r2q1", name: "第1問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["集合と命題", "有理数と無理数", "必要条件と十分条件", "背理法"], "[2]": ["図形と計量", "余弦定理", "三角形の面積", "三角比の拡張"] }, aggregate_tags: ["集合と命題", "図形と計量"] },
          tips: { topic: "有理数・無理数に関する命題の真偽判定と三角比を用いた図形の計量", stumbling_points: ["共役な無理数の反例を思いつけない。", "鈍角に対する三角比の変換公式がすぐ出ない。"], key_to_start: "具体的な数値を代入して反例を積極的に探す習慣をつけましょう。" },
          problemImages: Array.from({length: 9}, (_, i) => `images/第2回_問題_page${i+2}.png`),
          answerImages: [2,3].map(p => `images/第2回_解答_page${p}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["データの分析", "箱ひげ図", "ヒストグラム", "散布図", "相関関係"], "[2]": ["2次関数", "2次関数の決定", "2次関数の最大・最小", "グラフの平行移動"] }, aggregate_tags: ["データの分析", "2次関数"] },
          tips: { topic: "複数の統計グラフの相互変換と2次関数の式の決定", stumbling_points: ["四分位数の位置の把握が曖昧。", "無理数の交点から因数分解形への発想が抜ける。"], key_to_start: "箱ひげ図から最大・最小値や四分位数を具体的な不等式でメモしましょう。" },
          problemImages: Array.from({length: 10}, (_, i) => `images/第2回_問題_page${i+10}.png`),
          answerImages: [4,5,6].map(p => `images/第2回_解答_page${p}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "(1)": ["図形の性質", "円の接線", "三角形の合同"], "(2)": ["図形の性質", "共通内接線", "角の二等分線"], "(3)": ["図形の性質", "三角形の相似", "メネラウスの定理", "面積比"] }, aggregate_tags: ["図形の性質", "平面図形"] },
          tips: { topic: "複数の円の共通接線の性質と相似・メネラウスの定理の活用", stumbling_points: ["接線の等長性質をうまく適用できない。", "メネラウスの一筆書きルートを間違える。"], key_to_start: "円の中心から接点へ半径を下ろして直角マークを入れること。" },
          problemImages: Array.from({length: 8}, (_, i) => `images/第2回_問題_page${i+20}.png`),
          answerImages: [7,8].map(p => `images/第2回_解答_page${p}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "(1)": ["場合の数と確率", "順列", "排反事象", "期待値"], "(2)": ["場合の数と確率", "条件付き確率", "事象の整理"], "(3)": ["場合の数と確率", "条件付き確率"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "ビンゴゲーム風のパネル穴あけの確率と条件付き確率", stumbling_points: ["ラインの重複カウントや漏れ。", "条件付き確率の分母・分子の整理がつかない。"], key_to_start: "3×3のマス目を図示しビンゴラインを視覚化しましょう。" },
          problemImages: [],
          answerImages: [9,10].map(p => `images/第2回_解答_page${p}.png`)
        }
      ]
    },
    {
      id: "round3",
      title: "第3回",
      questions: [
        {
          id: "r3q1", name: "第1問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["数と式", "絶対値を含む関数", "グラフの概形"], "[2]": ["集合と命題", "必要条件と十分条件", "集合の包含関係"], "[3]": ["2次関数", "グラフの平行移動", "2次方程式の応用"] }, aggregate_tags: ["数と式", "集合と命題", "2次関数"] },
          tips: { topic: "絶対値関数のグラフ、命題の包含関係、2次関数の移動と応用", stumbling_points: ["場合分けミス。", "包含関係を感覚で判定して間違える。"], key_to_start: "絶対値の中身が0になる点で場合分けし、包含関係は具体例を表に書き出しましょう。" },
          problemImages: Array.from({length: 8}, (_, i) => `images/第3回_問題_page${i+2}.png`),
          answerImages: [2,3].map(p => `images/第3回_解答_page${p}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["図形と計量", "余弦定理", "正弦定理", "外接円の半径", "三角形の成立条件"], "[2]": ["データの分析", "箱ひげ図", "散布図と相関関係", "偏相関係数", "仮説検定"] }, aggregate_tags: ["図形と計量", "データの分析"] },
          tips: { topic: "余弦定理を用いた辺と角の決定、偏相関係数や仮説検定を含むデータの分析", stumbling_points: ["三角形の成立条件の吟味で迷う。", "仮説検定の棄却基準の解釈を逆にする。"], key_to_start: "余弦定理をxの2次方程式として立式し、仮説検定は「5%未満→仮説棄却」を意識しましょう。" },
          problemImages: Array.from({length: 10}, (_, i) => `images/第3回_問題_page${i+10}.png`),
          answerImages: [4,5].map(p => `images/第3回_解答_page${p}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "全体": ["図形の性質", "方べきの定理", "三角形の重心", "メネラウスの定理", "面積比"] }, aggregate_tags: ["図形の性質", "平面図形"] },
          tips: { topic: "円と直線が交わる図形における方べきの定理やメネラウスの定理の複合活用", stumbling_points: ["方べきの定理の適用に気づけない。", "重心の条件を見抜けない。"], key_to_start: "長さの積が与えられたら即座に方べきの定理を疑いましょう。" },
          problemImages: [20,21].map(p => `images/第3回_問題_page${p}.png`),
          answerImages: [6].map(p => `images/第3回_解答_page${p}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "(1)-(3)": ["場合の数と確率", "重複順列", "組み合わせ", "包除原理"], "(4)-(5)": ["場合の数と確率", "期待値", "条件付き確率"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "重複順列の数え上げ（包除原理）と期待値・条件付き確率", stumbling_points: ["1種類のみの場合を引き忘れる。", "条件付き確率の分母分子の整理で混乱。"], key_to_start: "「ちょうどN種類」→「最大N種類」−「N-1種類以下」の包除原理を徹底しましょう。" },
          problemImages: [22,23].map(p => `images/第3回_問題_page${p}.png`),
          answerImages: [7,8].map(p => `images/第3回_解答_page${p}.png`)
        }
      ]
    },
    {
      id: "round4",
      title: "第4回",
      questions: [
        {
          id: "r4q1", name: "第1問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["数と式", "絶対値を含む方程式・不等式", "1次不等式"], "[2]": ["図形と計量", "円に内接する四角形", "三角比の大小比較"], "[3]": ["図形と計量", "余弦定理", "正弦定理", "正多角形"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "絶対値を含む不等式と円や正多角形に絡む三角比の計量", stumbling_points: ["場合分けの境界ミス。", "対角の和180°を忘れる。"], key_to_start: "絶対値は中身の符号で場合分け。円に内接する四角形は対角和180°を即座に書き込みましょう。" },
          problemImages: Array.from({length: 9}, (_, i) => `images/第4回_問題_page${i+2}.png`),
          answerImages: [2,3].map(p => `images/第4回_解答_page${p}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["集合と命題", "新しい記号の定義", "2次不等式", "必要条件と十分条件"], "[2]": ["2次関数", "動点と面積", "場合分け", "2次関数の最大・最小"] }, aggregate_tags: ["集合と命題", "2次関数"] },
          tips: { topic: "新しい記号を含む不等式と動点に伴う面積の変化", stumbling_points: ["記号定義のxへの翻訳ミス。", "動点の座標を時間tで正しく表せない。"], key_to_start: "定義に実際の式を代入し、動点問題は頂点通過時刻で区間を分けて図を描きましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/第4回_問題_page${i+11}.png`),
          answerImages: [4,5,6].map(p => `images/第4回_解答_page${p}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "[1]": ["図形の性質", "三角形の成立条件", "2円の位置関係", "空間図形", "正多面体"], "[2]": ["図形の性質", "内接円と接線の長さ", "メネラウスの定理", "面積比", "方べきの定理"] }, aggregate_tags: ["図形の性質", "平面図形", "空間図形"] },
          tips: { topic: "正多面体・空間図形の真偽判定と内接円やメネラウスの定理の平面図形計量", stumbling_points: ["三角形の成立条件の確認忘れ。", "メネラウスのルートの間違い。"], key_to_start: "反例を計算で確認し、内接円は各頂点から接点までの距離を未知数にしましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/第4回_問題_page${i+17}.png`),
          answerImages: [7,8,9].map(p => `images/第4回_解答_page${p}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "(1)-(3)": ["場合の数と確率", "反復試行の確率", "独立試行", "条件付き確率", "期待値"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "硬貨の反復試行における条件付き確率・期待値", stumbling_points: ["全体の推移を追って計算がパンクする。", "分母の組み合わせ数を間違える。"], key_to_start: "硬貨1枚あたりの確率を単独で出し、反復試行の考え方で拡張しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第4回_問題_page${i+23}.png`),
          answerImages: [10,11].map(p => `images/第4回_解答_page${p}.png`)
        }
      ]
    },
    {
      id: "round5",
      title: "第5回",
      questions: [
        {
          id: "r5q1", name: "第1問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["数と式", "因数分解", "複数の文字を含む式"], "[2]": ["数と式", "無理数の評価", "図形への応用"], "[3]": ["図形と計量", "正多角形", "円周角の定理", "余弦定理", "黄金比", "白銀比"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "複雑な因数分解、無理数の評価と図形（黄金比・白銀比）の計量", stumbling_points: ["どの文字で整理すべきか迷う。", "正五角形の角度を自力で導出できない。"], key_to_start: "次数の低い文字で整理し、正五角形は円に内接する性質を利用しましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題_page${i+2}.png`),
          answerImages: [2,3].map(p => `images/第5回_解答_page${p}.png`)
        },
        {
          id: "r5q2", name: "第2問", score: 30, timeMinutes: 21,
          tags: { sub_questions: { "[1]": ["2次関数", "1次関数の立式", "2次関数の最大・最小", "利益の計算"], "[2]": ["データの分析", "箱ひげ図", "ヒストグラム", "散布図", "相関関係", "偏相関係数", "仮説検定"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "2次関数の最大化と統計データの多様な分析・仮説検定", stumbling_points: ["利益の立式で経費計算を忘れる。", "仮説検定の論理を逆に解釈する。"], key_to_start: "「売上数」「売上金額」「利益」を価格xで一つずつ丁寧に立式しましょう。" },
          problemImages: Array.from({length: 13}, (_, i) => `images/第5回_問題_page${i+7}.png`),
          answerImages: [4,5,6].map(p => `images/第5回_解答_page${p}.png`)
        },
        {
          id: "r5q3", name: "第3問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "(1)": ["図形の性質", "円に内接する四角形", "円周角の定理", "三角形の合同"], "(2)": ["図形の性質", "三角形の相似", "線分比"], "(3)": ["図形と計量", "図形の性質", "内接円", "方べきの定理", "面積比"] }, aggregate_tags: ["図形の性質", "図形と計量"] },
          tips: { topic: "円と三角形が絡む複合図形における相似・円の性質・面積比の活用", stumbling_points: ["同一円周上の4点を見落とす。", "内接円の半径の求め方がわからない。"], key_to_start: "直角を見たら「直径に対する円周角」を疑い、同一円周上の4点を見つけましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_問題_page${i+20}.png`),
          answerImages: [7,8,9,10].map(p => `images/第5回_解答_page${p}.png`)
        },
        {
          id: "r5q4", name: "第4問", score: 20, timeMinutes: 14,
          tags: { sub_questions: { "(1)": ["場合の数と確率", "条件付き確率", "反復試行"], "(2)": ["場合の数と確率", "条件付き確率", "排反事象", "状態の推移"], "(3)": ["場合の数と確率", "期待値"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "球の移動と取り出しの確率と期待値", stumbling_points: ["移動後の箱の中身のパターンを網羅できない。", "確率の合計が1にならない状態で計算を進めてしまう。"], key_to_start: "「今、箱に何色の球が何個あるか」を逐一メモし、条件付き確率の土台にしましょう。" },
          problemImages: [24].map(p => `images/第5回_問題_page${p}.png`),
          answerImages: [11].map(p => `images/第5回_解答_page${p}.png`)
        }
      ]
    }
  ]
};
