// =============================================================================
// 河合塾 2025年 マーク式総合問題集 数学IA — メタデータ
// =============================================================================
// 新課程形式: 各回4問（第3問=図形の性質, 第4問=場合の数と確率）
// 注意: PDFは漢数字命名（第一回, 第二回…）なので画像ファイル名もそれに対応

var BOOK_DATA_kawai_2025_IA = {
  id: "kawai_2025_IA",
  publisher: "河合塾",
  year: 2025,
  subject: "数学IA",
  title: "2025年 河合塾マーク式総合問題集 数学IA",
  basePath: "data/kawai_2025_IA/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "無理数の計算", "循環小数", "式の値の評価"],
              "[2]": ["図形と計量", "線対称", "余弦定理", "三角形の面積"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "無理数の計算と値の評価、図形の対称性と計量",
            stumbling_points: ["循環小数を分数に直す手順を忘れて行き詰まる。", "対称移動でできる三角形の内角や辺の相等関係を正確に把握できない。"],
            key_to_start: "無理数の評価は中身の平方数で挟み込む。図形は対称移動で合同な三角形を書き込んで視覚化しましょう。"
          },
          problemImages: Array.from({length: 6}, (_, i) => `images/第一回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第一回_解答_page${i+2}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大・最小", "文章題"],
              "[2]": ["データの分析", "四分位数", "外れ値", "散布図", "仮説検定"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "総菜販売の利益最大化と、データの散布図・仮説検定",
            stumbling_points: ["利益=売上-費用の立式を間違える。", "偶数データでの四分位数の取り方（平均）でミスする。", "仮説検定の棄却判断基準を正しく適用できない。"],
            key_to_start: "2次関数は「売上-費用」の式を立てて平方完成。データは小さい順の順位から四分位数を正確に求めましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第一回_問題_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第一回_解答_page${i+6}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "三平方の定理", "角の二等分線", "方べきの定理", "メネラウスの定理"]
            },
            aggregate_tags: ["図形の性質", "平面図形"]
          },
          tips: {
            topic: "円と直線、三角形の性質の総合問題",
            stumbling_points: ["円の接線から合同な直角三角形や角の二等分線に気付けない。", "方べき・メネラウスの定理を適用する組み合わせを見つけ出せない。"],
            key_to_start: "接点と中心を結んで直角三角形を作り、三平方の定理を適用。比はメネラウスのキツネの形を描き出しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第一回_問題_page${i+15}.png`),
          answerImages: [10].map(p => `images/第一回_解答_page${p}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "条件付き確率", "期待値", "推移図"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "状態の推移と期待値、条件付き確率",
            stumbling_points: ["規則に従った球数の推移を正確に追いきれない。", "条件付き確率の分母・分子を混同する。"],
            key_to_start: "ルールを整理し、数ステップ先までの推移図(樹形図)を丁寧に描き出しましょう。"
          },
          problemImages: [17].map(p => `images/第一回_問題_page${p}.png`),
          answerImages: [10].map(p => `images/第一回_解答_page${p}.png`)
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
              "[1]": ["数と式", "対称式", "式の値", "整数部分・小数部分"],
              "[2]": ["図形と計量", "余弦定理", "三角形の面積", "内接円の半径", "円の接線"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "式の値と平方根の評価、三角形の計量と内接円",
            stumbling_points: ["2次方程式の解の吟味を忘れる。", "絶対値を含む無理数計算・小数部分の手順でつまずく。", "内接円の接線の長さの方程式化ができない。"],
            key_to_start: "式の値は乗法公式の変形。図形は余弦定理→面積→内接円の公式フローで立式しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第二回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第二回_解答_page${i+2}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "直線の式", "最大・最小", "文章題"],
              "[2]": ["データの分析", "散布図", "箱ひげ図", "四分位範囲", "外れ値", "相関係数", "分散の公式"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "売り上げデータの2次関数最大値と統計分析",
            stumbling_points: ["利益関数の立式で条件の読み落としをする。", "文字含む2次関数の軸と定義域の場合分けができない。", "分散の公式を覚えていない。"],
            key_to_start: "条件から価格と個数の関係式→利益式を立てて平方完成。分散=2乗の平均-平均の2乗の公式を使いましょう。"
          },
          problemImages: Array.from({length: 9}, (_, i) => `images/第二回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第二回_解答_page${i+6}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "外心", "円周角の定理", "合同な三角形", "方べきの定理", "三平方の定理"]
            },
            aggregate_tags: ["図形の性質", "平面図形"]
          },
          tips: {
            topic: "外心の性質と円周角の定理、方べきの定理",
            stumbling_points: ["外心の性質（等距離→二等辺三角形、垂直二等分線）を引き出せない。", "複数の円で角度を比較する際に混乱する。"],
            key_to_start: "外心→外接円を描き、中心と頂点を結んで二等辺三角形を作りましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第二回_問題_page${i+18}.png`),
          answerImages: [11, 12].map(p => `images/第二回_解答_page${p}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "順列", "条件を満たす並べ方", "数え上げ"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "規則に従う数字の配置（増加表）の数え上げ",
            stumbling_points: ["数字が増えたときの数え上げの分類基準を見失う。", "前の設問の結果を漸化式的に次に利用する発想に気づけない。"],
            key_to_start: "小さなケースで書き出して法則性を掴む。前の小問の構造を次に適用しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第二回_問題_page${i+21}.png`),
          answerImages: [12, 13].map(p => `images/第二回_解答_page${p}.png`)
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
              "[1]": ["数と式", "高次方程式", "複二次式", "集合と命題", "必要条件と十分条件"],
              "[2]": ["図形と計量", "正多角形の面積", "三角比", "三角比の表"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量"]
          },
          tips: {
            topic: "複二次式の実数解と必要・十分条件、正多角形の計量",
            stumbling_points: ["t=x²の置き換え後にt≥0の条件を忘れて解の個数を間違える。", "命題の反例が思いつかず必要・十分を逆にする。", "正五角形の中心角・内角と三角比の表の利用を誤る。"],
            key_to_start: "方程式はt=x²で2次に帰着。正五角形は合同な二等辺三角形に分割して直角三角形を作りましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第三回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第三回_解答_page${i+2}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大・最小", "文章題", "図形の面積", "場合分け"],
              "[2]": ["データの分析", "箱ひげ図", "ヒストグラム", "散布図", "相関係数"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "図形の面積を最大化する2次関数と統計データのグラフ読み取り",
            stumbling_points: ["長方形が三角形からはみ出す場合の面積の引き算処理を正しく立式できない。", "累積度数で四分位数の位置を特定する作業で混乱する。"],
            key_to_start: "図形の対称性に着目して面積をxの式で表す。累積度数で四分位数の属する階級を確認しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第三回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第三回_解答_page${i+6}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "三平方の定理", "方べきの定理", "円に内接する四角形", "三角形の重心", "平行線の条件"]
            },
            aggregate_tags: ["図形の性質", "平面図形"]
          },
          tips: {
            topic: "円と三角形の総合問題（方べき・重心・円周角）",
            stumbling_points: ["複数の円から方べき・メネラウスを適用する円や直線を抽出できない。", "重心や外心の定義を忘れて位置関係の判定でつまずく。"],
            key_to_start: "二等辺三角形→頂角から底辺への垂線→直角三角形→三平方。円と直線は方べきの定理を疑いましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第三回_問題_page${i+17}.png`),
          answerImages: [11, 12].map(p => `images/第三回_解答_page${p}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "反復試行", "期待値", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "終了条件のある反復試行の確率と期待値・条件付き確率",
            stumbling_points: ["終了条件の処理でパターンの漏れや無効パターンの混入が起きる。", "条件付き確率の分母の全事象を漏れなく足し合わせられない。"],
            key_to_start: "少ない回数で終了するパターンから順に文字列で書き出して確率を計算・足し合わせましょう。"
          },
          problemImages: [21].map(p => `images/第三回_問題_page${p}.png`),
          answerImages: [13].map(p => `images/第三回_解答_page${p}.png`)
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
              "[1]": ["数と式", "連立方程式", "対称式", "式の値"],
              "[2]": ["図形と計量", "余弦定理", "正弦定理", "円に内接する四角形", "面積比"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "連立方程式と対称式の値、円に内接する四角形と三角形の計量",
            stumbling_points: ["5乗の和を2乗と3乗の組み合わせで求める変形方法を思いつけない。", "面積比+余弦定理の連立方程式が煩雑で手が止まる。"],
            key_to_start: "基本対称式(x+y, xy)の値→次数上げの定石。円に内接する四角形は対角の和=180°（cosの符号反転）を利用しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第四回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第四回_解答_page${i+2}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大・最小", "文章題", "不等式"],
              "[2]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図", "標準偏差", "共分散"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "建ぺい率による面積最小化と気象データの分析",
            stumbling_points: ["新しい定義を数式に落とし込めない。", "累積度数カウントで中央値・四分位数の所属階級を読み誤る。"],
            key_to_start: "定義域を最初に確認して平方完成。データ総数から順位を割り出して表で整理しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第四回_問題_page${i+10}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第四回_解答_page${i+6}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["図形の性質", "回転移動", "折れ線の長さの最小値", "円に内接する四角形", "方べきの定理", "メネラウスの定理"]
            },
            aggregate_tags: ["図形の性質", "平面図形"]
          },
          tips: {
            topic: "回転移動による線分の和の最小値と円の性質",
            stumbling_points: ["60°の回転移動→一直線への帰着（フェルマー点）に慣れていない。", "相似・方べき・メネラウスの適用すべき組み合わせを見落とす。"],
            key_to_start: "誘導に素直に乗り、回転移動で合同な三角形を図に書き込む。平行線→相似の発見が突破口です。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第四回_問題_page${i+18}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第四回_解答_page${i+11}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "全体": ["場合の数と確率", "最短経路", "同じものを含む順列", "反復試行", "期待値", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "街路図上の移動と「Stay」を含む確率",
            stumbling_points: ["遠回り経路の矢印の順列を漏れなく数え上げられない。", "端の点でのStayが発生するタイミングの条件を見落とす。"],
            key_to_start: "移動を矢印の順列に置き換え必要回数を特定。Stayは排反な経路に分けて計算しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第四回_問題_page${i+22}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第四回_解答_page${i+16}.png`)
        }
      ]
    }
  ]
};
