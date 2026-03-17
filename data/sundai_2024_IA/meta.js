// =============================================================================
// 駿台 2024年 共通テスト実践問題集 数学IA — メタデータ
// =============================================================================
// このファイルは BOOK_DATA_sundai_2024_IA としてグローバルに登録される。
// 画像パスは data/sundai_2024_IA/ からの相対パス。

var BOOK_DATA_sundai_2024_IA = {
  id: "sundai_2024_IA",
  publisher: "駿台",
  year: 2024,
  subject: "数学IA",
  title: "2024年 駿台実践問題集 数学IA",
  basePath: "data/sundai_2024_IA/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "集合と命題", "必要条件と十分条件", "有理数と無理数"],
              "[2]": ["図形と計量", "三角比の性質", "正弦定理", "余弦定理", "三角形の面積"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量"]
          },
          tips: {
            topic: "命題の真偽判定と三角比・正弦余弦定理の活用",
            stumbling_points: [
              "命題の反例を考える際、無理数の和や積が有理数になるケース（共役な無理数など）を思いつきにくい。",
              "「90°+θ」などの三角比の変換公式で符号ミスしやすい。",
              "回転する図形で対応する辺・角を見誤る。"
            ],
            key_to_start: "[1]は具体的な無理数を代入して反例を探す。[2]は回転前後の等しい辺と角を図に全て書き込みましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第1回_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回解答_page${i+2}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大値と最小値", "媒介変数の消去", "グラフの移動"],
              "[2]": ["データの分析", "分散", "共分散", "相関係数", "箱ひげ図"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "放物線運動の2次関数モデル化と、平均・分散・箱ひげ図の分析",
            stumbling_points: [
              "パラメータtで表されたx, yからtを消去してyをxの2次関数にする操作に気づけない。",
              "平均値と分散の定義式から未知数の連立方程式を立てる際に計算ミスが出やすい。",
              "箱ひげ図で四分位数が実際のデータ値か2つの平均かの判断に迷う。"
            ],
            key_to_start: "[1]はx=atをt=x/aに変形してyに代入し2次関数を作る。[2]は公式に数値を代入してP,Qの方程式を組み立てましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第1回_page${i+10}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回解答_page${i+5}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "乗法定理", "条件付き確率"],
              "(2)": ["場合の数と確率", "排反事象"],
              "(3)": ["場合の数と確率", "複雑なルールの確率", "事象の推移"]
            },
            aggregate_tags: ["場合の数と確率", "条件付き確率"]
          },
          tips: {
            topic: "ルールが変動するくじ引きの確率（乗法定理と条件付き確率）",
            stumbling_points: [
              "条件付き確率の分母と分子の事象を正しく設定できない。",
              "くじの引き方ルール変更に合わせたくじ本数の推移を追い違える。"
            ],
            key_to_start: "A・B・Cの順番ごとに「現在のくじ総数」と「あたりの本数」を樹形図で整理しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_page${i+20}.png`),
          answerImages: [8].map(p => `images/第1回解答_page${p}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "約数と倍数", "不等式の評価"],
              "(2)": ["整数の性質", "最大公約数と最小公倍数", "互いに素"],
              "(3)": ["整数の性質", "不定方程式"],
              "(4)": ["整数の性質", "必要条件と十分条件の判定"]
            },
            aggregate_tags: ["整数の性質", "最大公約数と最小公倍数"]
          },
          tips: {
            topic: "最大公約数・最小公倍数の性質を用いた自然数の決定",
            stumbling_points: [
              "A=ga, B=gb（a,bは互いに素）と設定する定石を思いつけない。",
              "a+bとabも互いに素になる性質の適用に戸惑う。"
            ],
            key_to_start: "「A=ga, B=gb（a,bは互いに素でa<b）」とおき、和と最小公倍数の条件式を素因数分解して比較しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第1回_page${i+24}.png`),
          answerImages: [9].map(p => `images/第1回解答_page${p}.png`)
        },
        {
          id: "r1q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "前半": ["図形の性質", "円の性質", "三平方の定理", "三角比の活用"],
              "後半": ["図形の性質", "メネラウスの定理", "方べきの定理の逆", "2円の位置関係"]
            },
            aggregate_tags: ["図形の性質", "円と直線", "三角形の定理"]
          },
          tips: {
            topic: "円と三角形の複合図形（メネラウスの定理・方べきの定理の活用）",
            stumbling_points: [
              "メネラウスの定理を適用すべき三角形と直線を見つけ出すのが難しい。",
              "方べきの定理の逆に気づけない。"
            ],
            key_to_start: "比を求めたい線分が含まれる三角形を色ペンでなぞり、メネラウスの定理を適用しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第1回_page${i+29}.png`),
          answerImages: [10, 11].map(p => `images/第1回解答_page${p}.png`)
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
              "[1]": ["数と式", "2次式の因数分解", "たすき掛け"],
              "[2]": ["数と式", "平方根の近似値", "分母の有理化"],
              "[3]": ["図形と計量", "余弦定理", "正弦定理", "三角形の成立条件", "外接円の半径"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "文字式の因数分解・平方根の評価・三角比と図形の成立条件",
            stumbling_points: [
              "複数の文字が含まれる2次式で「1つの文字について整理する」定石を忘れる。",
              "平方根の大きさを整数の平方で挟む処理を思いつきにくい。",
              "三角形が何通りできるかの判定で余弦定理の2次方程式の解の個数との関連付けができない。"
            ],
            key_to_start: "[1]は「aについて整理」し[3]は余弦定理で方程式を立て解の個数を確認しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第2回_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回解答_page${i+2}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "グラフの平行移動", "頂点の座標", "グラフの対称性"],
              "[2]": ["2次関数", "文章題", "放物線の軌跡", "最大値", "x軸との交点"],
              "[3]": ["データの分析", "箱ひげ図とヒストグラム", "四分位数", "散布図", "分散と平均値の性質"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "放物線の移動と応用、およびデータの代表値・グラフの読み取り",
            stumbling_points: [
              "文字定数を含む式の平方完成やx軸との交点計算に戸惑う。",
              "ヒストグラムから箱ひげ図を選ぶ際に四分位数の位置を正確に割り出さない。"
            ],
            key_to_start: "[2]は平方完成して頂点を求めy=0で到達距離。[3]はデータ総数から四分位数の位置をメモしましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第2回_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回解答_page${i+5}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "反復試行の確率", "条件付き確率"],
              "(2)": ["場合の数と確率", "独立な試行の確率", "事象の推移"],
              "(3)": ["場合の数と確率", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "状態が推移する反復試行と条件付き確率",
            stumbling_points: [
              "5枚全体の状態推移を正面から計算しようとしてパニックになる。",
              "1枚の硬貨の独立した動きに注目する視点切り替えが難しい。"
            ],
            key_to_start: "全体ではなく硬貨1枚の確率に注目し、5枚分かけ合わせましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_page${i+19}.png`),
          answerImages: [8].map(p => `images/第2回解答_page${p}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "互いに素"],
              "(2)": ["整数の性質", "素数の性質", "倍数の個数"],
              "(3)": ["整数の性質", "素因数分解", "集合と要素の個数", "互いに素な整数の個数"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "互いに素な自然数の個数（オイラーの関数への誘導）",
            stumbling_points: [
              "p²と互いに素でないものが「pの倍数」であることに気づけない。",
              "pqと互いに素でないものを数える際のベン図の考え方を忘れる。"
            ],
            key_to_start: "「全体から互いに素でないもの（素因数の倍数）を引く」余事象の考え方を徹底しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_page${i+23}.png`),
          answerImages: [9, 10].map(p => `images/第2回解答_page${p}.png`)
        },
        {
          id: "r2q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "前半": ["図形の性質", "三平方の定理", "円の接線", "接弦定理", "相似な三角形"],
              "後半": ["図形の性質", "角度の計算", "メネラウスの定理"]
            },
            aggregate_tags: ["図形の性質", "円と三角形"]
          },
          tips: {
            topic: "直角三角形と円の接線・相似・メネラウスの定理の複合",
            stumbling_points: [
              "接弦定理から相似な三角形を見つけられず方程式が立てられない。",
              "メネラウスの定理を適用すべき三角形と直線を見失う。"
            ],
            key_to_start: "接線→接弦定理→等しい角を図に書き込み→相似な三角形を見つけましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_page${i+25}.png`),
          answerImages: [10].map(p => `images/第2回解答_page${p}.png`)
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
              "[1]": ["数と式", "式の値", "因数分解", "集合と命題", "必要条件と十分条件"],
              "[2]": ["図形と計量", "三角比の定義", "正弦定理", "余弦定理"],
              "[3]": ["図形と計量", "正弦定理", "余弦定理", "三角形の形状決定"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量"]
          },
          tips: {
            topic: "多変数の因数分解・命題、および三角比を用いた図形の形状判定",
            stumbling_points: [
              "複数の文字と根号を含む式の因数分解で手順に気づけない。",
              "鏡の反射の問題で直角三角形に分割して三角比を適用する操作に戸惑う。",
              "三角形の形状決定で正弦定理・余弦定理での式変換が煩雑になる。"
            ],
            key_to_start: "[1]はまず因数分解して代入計算を楽にする。[3]は角の条件を辺a,b,cの条件式に書き換えましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第3回_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回解答_page${i+2}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["データの分析", "箱ひげ図", "四分位範囲", "外れ値", "散布図", "最小二乗法"],
              "[2]": ["2次関数", "最大値と最小値", "文章題"],
              "[3]": ["2次関数", "グラフの移動", "定義域が動く場合の最大・最小"]
            },
            aggregate_tags: ["データの分析", "2次関数"]
          },
          tips: {
            topic: "データの分析（外れ値と最小二乗法の導入）と2次関数の最大・最小",
            stumbling_points: [
              "外れ値の定義式に四分位数を正確に代入する計算でミスしやすい。",
              "回帰直線の最小二乗法でmの2次関数として平方完成する視点が持ちにくい。",
              "定義域が動く最大値問題で放物線の軸と区間中央の位置関係の場合分けができない。"
            ],
            key_to_start: "[1]後半は定数として置き換えてmの2次関数にする。[3]は区間中央と軸の大小関係に注目しましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第3回_page${i+10}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回解答_page${i+5}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "確率の乗法定理", "条件付き確率"],
              "(2)": ["場合の数と確率", "排反事象の確率", "事象の推移"],
              "(3)": ["場合の数と確率", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "特殊なルール（隣に座らない）の座席案内に関する確率",
            stumbling_points: [
              "空席の条件が1人座るごとに変動する推移を正確に追跡しきれない。",
              "座席の対称性を利用して関係式を見つける発想が出にくい。"
            ],
            key_to_start: "座席A〜Hの枠を紙に書き、1人ずつ順番に候補と確率を樹形図で書き出しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_page${i+20}.png`),
          answerImages: [8].map(p => `images/第3回解答_page${p}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "素因数分解", "最大公約数"],
              "(2)": ["整数の性質", "互いに素な自然数の個数", "1次不定方程式"],
              "(3)": ["整数の性質", "倍数の個数", "集合の要素の個数"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "互いに素な自然数の個数（オイラー関数の誘導）と1次不定方程式",
            stumbling_points: [
              "f(pq)の計算でpの倍数とqの倍数の重複をベン図で引く処理を忘れる。",
              "1次不定方程式で最大公約数で割って互いに素にする手順にスムーズに移行できない。"
            ],
            key_to_start: "全体から3と5の倍数を引くベン図を描いて重複部分を視覚的に整理しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_page${i+24}.png`),
          answerImages: [9].map(p => `images/第3回解答_page${p}.png`)
        },
        {
          id: "r3q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "相似な三角形", "トレミーの定理"],
              "(2)": ["図形の性質", "円に内接する四角形", "必要十分条件"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "トレミーの定理の証明と円に内接する条件",
            stumbling_points: [
              "作図された点Eを用いて相似な三角形を見抜くのが難しい。",
              "トレミーの定理とその逆の同値性を論理的に判定する必要がある。"
            ],
            key_to_start: "角の追跡が命。等しい角を色ペンで書き込み相似な三角形のペアを見つけましょう。"
          },
          problemImages: [28].map(p => `images/第3回_page${p}.png`),
          answerImages: [9].map(p => `images/第3回解答_page${p}.png`)
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
              "[1]": ["数と式", "絶対値を含む方程式・不等式", "グラフを利用した実数解の条件"],
              "[2]": ["図形と計量", "正弦定理", "余弦定理", "三角比の測量への応用"],
              "[3]": ["図形と計量", "正弦定理", "余弦定理", "三角形の形状決定"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "絶対値を含む不等式と三角比の図形への応用（測量・形状決定）",
            stumbling_points: [
              "絶対値の場合分けの境界点で符号を間違えやすい。",
              "三角形の形状決定で正弦定理・余弦定理を用いた式変換の因数分解が煩雑。"
            ],
            key_to_start: "[1]は場合分けしてグラフを描く。[3]は角の条件を辺の長さの条件式に直しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第4回_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回解答_page${i+2}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図", "分散と共分散の性質"],
              "[2]": ["2次関数", "2次方程式の実数解の条件", "判別式", "動点と図形の面積の最大・最小"]
            },
            aggregate_tags: ["データの分析", "2次関数"]
          },
          tips: {
            topic: "ヒストグラム・箱ひげ図の読み取りと分散の性質、動点による面積変化",
            stumbling_points: [
              "z=x-yの分散を求める式の展開が不慣れ。",
              "動点問題で時間tによる場合分けに気づかない。"
            ],
            key_to_start: "[1]は(x-y)の分散の定義式を展開。[2]は動点の位置で場合分けし面積をtの式で表しましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第4回_page${i+10}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回解答_page${i+5}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["場合の数と確率", "順列と組合せ", "同じものを含む順列"],
              "[2]": ["場合の数と確率", "反復試行の確率", "条件付き確率", "原因の確率"]
            },
            aggregate_tags: ["場合の数と確率", "条件付き確率"]
          },
          tips: {
            topic: "順列・組合せの基本判定と、試行が分岐する条件付き確率",
            stumbling_points: [
              "条件付き確率の分母となる全確率の計算でルートの見落としが起きやすい。"
            ],
            key_to_start: "コインの表裏→箱の選択→球取り出しの全経路を樹形図で書き出しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_page${i+20}.png`),
          answerImages: [8].map(p => `images/第4回解答_page${p}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["整数の性質", "倍数の判定法", "互いに素", "必要条件と十分条件"],
              "[2]": ["整数の性質", "1次不定方程式", "ユークリッドの互除法の利用"]
            },
            aggregate_tags: ["整数の性質", "1次不定方程式"]
          },
          tips: {
            topic: "命題の真偽判定（反例）と係数の大きい1次不定方程式",
            stumbling_points: [
              "係数が大きい1次不定方程式で特殊解を当てようとして時間を浪費する。"
            ],
            key_to_start: "大きな係数を小さい係数で割った余りに着目し式を簡単にする（互除法の活用）のが突破口です。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第4回_page${i+24}.png`),
          answerImages: [9, 10].map(p => `images/第4回解答_page${p}.png`)
        },
        {
          id: "r4q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["図形の性質", "三角形の成立条件", "2円の位置関係", "空間図形"],
              "[2]": ["図形の性質", "内接円と接線の長さ", "メネラウスの定理", "面積比", "円周角の定理"]
            },
            aggregate_tags: ["図形の性質", "内接円", "メネラウスの定理"]
          },
          tips: {
            topic: "図形の成立条件・空間図形と、内接円・メネラウスの定理での線分比・面積比",
            stumbling_points: [
              "内接円の接点までの長さの連立方程式(x+y=c等)を立てる定石を忘れる。",
              "複雑な図形でメネラウスの三角形と直線の組み合わせを見つけられない。"
            ],
            key_to_start: "[2]前半は接点距離の連立方程式を解く。後半は比を求めたい線分を含む三角形でメネラウスを適用しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_page${i+29}.png`),
          answerImages: [11, 12].map(p => `images/第4回解答_page${p}.png`)
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
              "[1]": ["数と式", "分母の有理化", "絶対値を含む不等式"],
              "[2]": ["集合と命題", "集合の演算", "要素の個数", "ド・モルガンの法則", "必要条件と十分条件"],
              "[3]": ["図形と計量", "2次関数", "余弦定理", "正弦定理", "三角形の面積の最大値"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量", "2次関数"]
          },
          tips: {
            topic: "絶対値の不等式・集合の演算と図形の計量（面積の最大化）",
            stumbling_points: [
              "絶対値のxだけでなく文字定数aによっても場合分けが発生して混乱する。",
              "補集合と和集合が絡む要素数で数え落としや重複カウントが起きる。",
              "面積を変数xの2次関数に帰着させる発想が持てない。"
            ],
            key_to_start: "[2]はベン図を描く。[3]は面積公式に正弦定理・余弦定理で求めた値を代入しxの2次関数にしましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第5回_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回解答_page${i+2}.png`)
        },
        {
          id: "r5q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["データの分析", "箱ひげ図とヒストグラム", "散布図", "分散と共分散", "変量の変換"],
              "[2]": ["2次関数", "2次方程式の解の配置", "判別式", "軸と端点"]
            },
            aggregate_tags: ["データの分析", "2次関数"]
          },
          tips: {
            topic: "分散の定義式を用いた計算と、2次方程式の解の配置",
            stumbling_points: [
              "z=x-yの分散を元の分散や共分散と結びつける代数処理が不慣れ。",
              "解の配置問題で判別式だけ計算し軸位置や端点の符号確認を忘れる。"
            ],
            key_to_start: "[1]は定義式を展開して整理。[2]は判別式・軸・端点の3条件をセットで立式しましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第5回_page${i+10}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回解答_page${i+5}.png`)
        },
        {
          id: "r5q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "組合せ", "条件を満たす組の列挙"],
              "(2)": ["場合の数と確率", "組合せ"],
              "(3)": ["場合の数と確率", "反復試行の確率", "排反事象", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "和が一定になる数の組合せと勝敗反復試行の確率",
            stumbling_points: [
              "3つの数の和の組合せで数え落としが発生する。",
              "Aが勝者となる確率でB,Cの条件も同時に考慮するのを忘れる。"
            ],
            key_to_start: "x≤y≤zの大小関係を設定し小さい数から順にシステマティックに探しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_page${i+20}.png`),
          answerImages: [8].map(p => `images/第5回解答_page${p}.png`)
        },
        {
          id: "r5q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["整数の性質", "3変数の1次不定方程式", "絶対値の最小化"],
              "[2]": ["整数の性質", "n進法", "16進法の変換"]
            },
            aggregate_tags: ["整数の性質", "1次不定方程式", "n進法"]
          },
          tips: {
            topic: "3変数の不定方程式の絞り込みと、16進法への変換",
            stumbling_points: [
              "3変数の不定方程式でどの文字から手をつけるかわからない。",
              "16進法のA〜F表記と各桁の重みを混同する。"
            ],
            key_to_start: "[1]は係数最大の変数からアタリをつけて2変数に帰着。[2]は16²=256等を基準に上位桁から決定しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_page${i+24}.png`),
          answerImages: [9, 10].map(p => `images/第5回解答_page${p}.png`)
        },
        {
          id: "r5q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "前半": ["図形の性質", "三角形の五心", "三角形の形状判定"],
              "後半": ["図形の性質", "方べきの定理", "メネラウスの定理", "チェバの定理の逆", "面積比"]
            },
            aggregate_tags: ["図形の性質", "三角形の五心", "面積比"]
          },
          tips: {
            topic: "三角形の五心の位置関係と、方べき・メネラウス・チェバの定理の複合",
            stumbling_points: [
              "鈍角三角形における外心や垂心が三角形の外部にある性質を忘れる。",
              "方べきの定理の適用可能な割線や接線のペアを抽出できない。",
              "3直線が1点で交わることの証明にチェバの定理の逆を使う発想が出ない。"
            ],
            key_to_start: "最大辺の対角が鋭角か鈍角か判定し図を正確に描く。方べきの定理が使えないか常に疑いましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_page${i+25}.png`),
          answerImages: [11, 12].map(p => `images/第5回解答_page${p}.png`)
        }
      ]
    }
  ]
};
