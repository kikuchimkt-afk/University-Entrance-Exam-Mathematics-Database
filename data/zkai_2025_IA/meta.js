// =============================================================================
// Z会 2025年 共通テスト実戦模試 数学IA — メタデータ
// =============================================================================
// 新課程形式: 各回4問（第3問=図形の性質, 第4問=場合の数と確率）

var BOOK_DATA_zkai_2025_IA = {
  id: "zkai_2025_IA",
  publisher: "Z会",
  year: 2025,
  subject: "数学IA",
  title: "2025年 Z会実戦模試 数学IA",
  basePath: "data/zkai_2025_IA/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "絶対値を含む関数", "グラフの利用", "関数の最小値"],
              "[2]": ["図形と計量", "余弦定理", "三角形の面積", "内接円の半径", "空間図形"]
            },
            aggregate_tags: ["数と式", "図形と計量", "空間図形"]
          },
          tips: {
            topic: "絶対値のグラフと空間図形の計量（四面体の体積と内接球）",
            stumbling_points: ["絶対値が複数ある関数の最小値で場合分けが煩雑になる。", "四面体の体積を直方体から切り落とす構想を利用する際の連立方程式に気づけない。", "四面体の内接球の半径を体積分割で求める手法に気づけない。"],
            key_to_start: "[1]は折れ線グラフを描いて視覚的に最小値を探す。[2]は直方体に埋め込んで考えましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第1回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解答_page${i+2}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大値と最小値", "図形の面積", "定義域の確認"],
              "[2]": ["データの分析", "散布図", "相関係数", "共分散", "データの傾向の読み取り"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "2次関数の最大・最小と、データの分析（散布図と相関係数）",
            stumbling_points: ["辺の長さが正という隠れた条件から定義域を漏らす。", "複数集団のデータを合わせた相関係数が弱くなる現象を直感的に理解できない。"],
            key_to_start: "[1]は隠れた条件から定義域を明記してグラフを描く。[2]は近似直線から縦横比を読み取りましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第1回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解答_page${i+5}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "三角形の五心", "内心の定義"],
              "(2)": ["図形の性質", "円周角の定理", "共円条件"],
              "(3)": ["図形の性質", "三角形の五心", "平行四辺形の性質", "図形の相似"]
            },
            aggregate_tags: ["図形の性質", "三角形の五心", "円の性質"]
          },
          tips: {
            topic: "三角形の垂心・内心・外心・重心の性質と相互関係",
            stumbling_points: ["垂心から共円条件を見抜き円周角の定理に繋げるのが難しい。", "平行四辺形の性質から五心がどうシフトするかを論理的に追えない。"],
            key_to_start: "90度の四角形→共円→円周角の定理。外心等の定義に立ち返りましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題_page${i+16}.png`),
          answerImages: [8, 9].map(p => `images/第1回_解答_page${p}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "復元抽出と非復元抽出", "余事象", "期待値"],
              "(2)": ["場合の数と確率", "文字を用いた確率の比較", "不等式の証明"]
            },
            aggregate_tags: ["場合の数と確率", "期待値"]
          },
          tips: {
            topic: "復元・非復元抽出の確率と期待値、文字式の確率比較",
            stumbling_points: ["非復元抽出で2回目の確率が1回目に依存するのを扱えない。", "文字kを用いた立式と差をとって大小比較する処理が不慣れ。"],
            key_to_start: "前半は樹形図で当たり・はずれの遷移を丁寧に計算。後半は前半の式をkに置き換えて差の正負を判定しましょう。"
          },
          problemImages: [20].map(p => `images/第1回_問題_page${p}.png`),
          answerImages: [10].map(p => `images/第1回_解答_page${p}.png`)
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
              "[1]": ["数と式", "1次不等式", "文字係数の不等式", "集合の包含関係"],
              "[2]": ["図形と計量", "余弦定理", "四角形の対角線", "三角形の成立条件", "角の大小比較"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量"]
          },
          tips: {
            topic: "文字係数の1次不等式・集合の演算と四角形の形状決定",
            stumbling_points: ["係数の正負で不等号の向きが反転するのを忘れる。", "四角形の位置関係をcosの大小から判定する発想が出にくい。"],
            key_to_start: "[1]は文字で割る前に正負を確認。[2]は余弦定理でcosを計算し減少関数の性質で角の大小を判定しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第2回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解答_page${i+2}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大値と最小値", "文章題", "定義域の設定"],
              "[2]": ["データの分析", "散布図", "相関係数", "データの分割", "1次関数の近似"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "陸上トラックの面積最大化と散布図の群分け・相関",
            stumbling_points: ["複数の現実的制約をすべて数式化して共通範囲をとる操作が漏れやすい。", "層別解析の視点が持てない。"],
            key_to_start: "[1]は制約を不等式に翻訳して定義域を確定。[2]は2本の直線に分けて考えましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第2回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解答_page${i+5}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "三角形の五心", "内心の定義"],
              "(2)": ["図形の性質", "円に内接する四角形", "円周角の定理", "垂心"],
              "(3)": ["図形の性質", "三角形の五心の相互関係", "相似と平行四辺形"]
            },
            aggregate_tags: ["図形の性質", "三角形の五心", "円の性質"]
          },
          tips: {
            topic: "三角形の垂心・内心の性質と中点連結定理による五心の変換",
            stumbling_points: ["共円から円周角の定理で角の等式を導く流れに乗れない。", "五心の役割シフトを論理的に追えない。"],
            key_to_start: "直角→円を描く→円周角の定理で等しい角を書き込む。五心の定義に立ち返りましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第2回_問題_page${i+19}.png`),
          answerImages: [8, 9].map(p => `images/第2回_解答_page${p}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "反復試行の確率", "条件付き確率", "期待値"],
              "(2)": ["場合の数と確率", "期待値の工夫された計算", "条件付き期待値"]
            },
            aggregate_tags: ["場合の数と確率", "期待値", "条件付き確率"]
          },
          tips: {
            topic: "ルーレットゲームの確率と条件付き期待値",
            stumbling_points: ["後攻の分母が先攻の得点で変動し計算が複雑になる。", "誘導の工夫に気づけず全パターンを正面から計算しようとしてしまう。"],
            key_to_start: "条件付き期待値をXを用いて表し最後に足し合わせる工夫を活用しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題_page${i+23}.png`),
          answerImages: [10, 11, 12].map(p => `images/第2回_解答_page${p}.png`)
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
              "[1]": ["数と式", "分母の有理化", "式の値", "1次不等式", "絶対値を含む不等式", "集合と命題", "必要条件と十分条件"],
              "[2]": ["図形と計量", "余弦定理", "三角形の面積", "三角形の成立条件", "最大値と最小値"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量"]
          },
          tips: {
            topic: "絶対値不等式の場合分け・集合の演算と図形の計量の最大・最小",
            stumbling_points: ["文字定数の正負で不等号の向きが変わる。", "集合の要素数でベン図を描かずに処理して数え落とす。", "角θの変化に伴う面積の最大最小をcos,sinの関数で立式する手順に戸惑う。"],
            key_to_start: "[1]は不等式は場合分け+ベン図。[2]は余弦定理でθの式にして増減を判断しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第3回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_解答_page${i+2}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "グラフの移動", "頂点の座標", "2次方程式の実数解の個数"],
              "[2]": ["データの分析", "箱ひげ図", "四分位範囲", "外れ値", "分散", "仮説検定の考え方"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "2次関数のシミュレーションと外れ値・仮説検定",
            stumbling_points: ["頂点のy座標の軌跡をbの2次関数として捉え直す視点が持てない。", "外れ値除外後のデータ数変化に伴う四分位数の再計算でミスする。", "仮説検定で確率分布から結論を出す流れに不慣れ。"],
            key_to_start: "[1]は頂点y座標をbの関数として平方完成。[2]はデータ数変化に注意して四分位数を求め直しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第3回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第3回_解答_page${i+5}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "三角形の五心", "内心の定義"],
              "(2)": ["図形の性質", "円に内接する四角形", "円周角の定理", "垂心"],
              "(3)": ["図形の性質", "三角形の五心", "重心", "外心", "中点連結定理", "オイラー線の性質"]
            },
            aggregate_tags: ["図形の性質", "三角形の五心", "円の性質"]
          },
          tips: {
            topic: "三角形の五心の性質と相互関係",
            stumbling_points: ["垂心から共円を見抜けない。", "共円→円周角→内心証明の流れが難しい。", "大きな三角形での五心の変換ロジックに戸惑う。"],
            key_to_start: "垂線→直角→共円→円周角の定理。五心の定義に忠実に図を確認しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第3回_問題_page${i+17}.png`),
          answerImages: [9, 10].map(p => `images/第3回_解答_page${p}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "順列", "条件を満たす組の列挙", "期待値"],
              "(2)": ["場合の数と確率", "確率の漸化式的思考", "事象の推移", "期待値の計算の工夫"],
              "(3)": ["場合の数と確率", "期待値の比較"]
            },
            aggregate_tags: ["場合の数と確率", "期待値"]
          },
          tips: {
            topic: "完全順列の応用と期待値の漸化式的計算",
            stumbling_points: ["条件を満たす並べ方の数え上げで数え落とし・重複が発生する。", "N→N+1枚の漸化式的論理構成に戸惑う。", "共通因数でくくって期待値の形を作り出す技巧に気づけない。"],
            key_to_start: "まず樹形図で具体的に書き出す。表を丁寧に埋めて式変形を進めましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回_問題_page${i+21}.png`),
          answerImages: [11, 12].map(p => `images/第3回_解答_page${p}.png`)
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
              "[1]": ["数と式", "1次関数", "絶対値を含む方程式・不等式", "関数の最大・最小"],
              "[2]": ["図形と計量", "三角比の表", "測量への応用", "余弦定理", "図形の成立条件"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "絶対値を含む関数の最大・最小と三角比を用いた測量",
            stumbling_points: ["場合分けで文字aを含む傾きの判断に戸惑う。", "三角比の表から角の範囲を絞り込む際の増減判断を間違える。"],
            key_to_start: "[1]は場合分け+グラフ。[2]は余弦定理で方程式を立てて辺の範囲を絞り込みましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第4回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_解答_page${i+2}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["データの分析", "ヒストグラム", "散布図と相関", "分散と標準偏差", "変量の変換"],
              "[2]": ["2次関数", "2次方程式の実数解の個数", "グラフとx軸の共有点", "解の配置"]
            },
            aggregate_tags: ["データの分析", "2次関数"]
          },
          tips: {
            topic: "データの変換（標準化）と相関、2次方程式の解の配置",
            stumbling_points: ["変量変換で平均・分散・相関係数の変化公式を直感的に理解できない。", "解の配置で判別式だけで済ませ軸と端点の確認を忘れる。"],
            key_to_start: "[1]は標準化の基本性質を活用。[2]は判別式・軸・端点の3点セットで立式しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第4回_問題_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第4回_解答_page${i+5}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "円に内接する四角形", "円周角の定理", "シムソンの定理"],
              "(2)": ["図形の性質", "円周角の定理", "相似と面積比", "メネラウスの定理の逆"]
            },
            aggregate_tags: ["図形の性質", "円の性質", "三角形の面積比"]
          },
          tips: {
            topic: "円に内接する四角形とシムソンの定理の拡張",
            stumbling_points: ["直角→共円に気づけない。", "角の追跡で迷子になる。", "面積比→辺の比→メネラウスの逆の論理構成に戸惑う。"],
            key_to_start: "直角→円を描き入れる→角を色ペンで書き込んで追跡しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題_page${i+17}.png`),
          answerImages: [9, 10].map(p => `images/第4回_解答_page${p}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "独立な試行", "条件付き確率"],
              "(2)": ["場合の数と確率", "排反事象", "条件付き確率"],
              "(3)": ["場合の数と確率", "事象の対応"]
            },
            aggregate_tags: ["場合の数と確率", "条件付き確率"]
          },
          tips: {
            topic: "コインの配置と条件付き確率、事象の読み替え",
            stumbling_points: ["対称性を持つ事象の数え上げが正確にできない。", "事象の対応に気づかず一から計算し直してしまう。"],
            key_to_start: "全パターン(2⁴=16通り)を意識して条件を満たすものを書き出す。後半は表/裏→10円/5円の読み替えで前半の結果を流用しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第4回_問題_page${i+20}.png`),
          answerImages: [11].map(p => `images/第4回_解答_page${p}.png`)
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
              "[1]": ["数と式", "無理数の整数部分・小数部分", "対称式の値", "2次方程式の解"],
              "[2]": ["図形と計量", "三角比の応用", "仰角と俯角", "三角比の表の利用"],
              "[3]": ["図形と計量", "正多角形", "円周角の定理", "余弦定理", "三角比の式の値"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "無理数の小数部分、測量への応用、正多角形の三角比",
            stumbling_points: ["負の無理数の整数部分の定義適用を間違える。", "tan関数の増減と不等号の処理ミス。", "正五角形での円周角から余弦定理への一連の流れに気づきにくい。"],
            key_to_start: "[1]は数直線上で超えない最大の整数を意識。[3]は等しい弦→等しい円周角でθを表しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第5回_問題_page${i+2}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解答_page${i+2}.png`)
        },
        {
          id: "r5q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "動点と図形の面積", "面積の最大・最小", "2次関数のグラフ"],
              "[2]": ["データの分析", "箱ひげ図と四分位数", "外れ値", "ヒストグラムの階級の幅", "データの変換"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "動点による面積変化と変則的階級幅のデータ分析",
            stumbling_points: ["同時到着条件から移動速度を求められない。", "tの変域の場合分けが不正確。", "等比数列的な階級幅の特殊ルール理解に戸惑う。"],
            key_to_start: "[1]は道のり=速さ×時間の基本に立ち返る。[2]はレベル値を新しいデータセットとして四分位数を求めましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第5回_問題_page${i+10}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第5回_解答_page${i+5}.png`)
        },
        {
          id: "r5q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "メネラウスの定理", "チェバの定理"],
              "(2)": ["図形の性質", "面積比と線分比", "メネラウスの定理の拡張"],
              "(3)": ["図形の性質", "四角形に対する定理の拡張", "面積比の利用"]
            },
            aggregate_tags: ["図形の性質", "面積比と線分比"]
          },
          tips: {
            topic: "メネラウス・チェバの定理の証明誘導と四角形への拡張",
            stumbling_points: ["平行線による相似三角形を見つけて線分比を変換する操作についていけない。", "面積比を使った証明アプローチに気づけない。", "四角形への拡張で面積比から式が1になるか検証するプロセスが難しい。"],
            key_to_start: "面積比=底辺比( S₁:S₂=a:b )の性質を活用。誘導のヒントに素直に従いましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題_page${i+18}.png`),
          answerImages: [9, 10].map(p => `images/第5回_解答_page${p}.png`)
        },
        {
          id: "r5q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "最短経路の数", "同じものを含む順列"],
              "(2)": ["場合の数と確率", "特定の点を通る最短経路", "確率の計算"],
              "(3)": ["場合の数と確率", "対称性を利用した確率の比較"],
              "(4)": ["場合の数と確率", "通行止めがある場合の最短経路"]
            },
            aggregate_tags: ["場合の数と確率", "最短経路"]
          },
          tips: {
            topic: "グリッド上の最短経路と確率、障害物がある場合の最適化",
            stumbling_points: ["経路の分割(A→点)×(点→B)の数え上げができない。", "対称性に気づかず愚直計算で時間を浪費する。", "通行止め区間を通る経路数の計算（余事象）をミスする。"],
            key_to_start: "₍m+n₎Cₘの公式を確実に。通行止めは余事象で全体から引きましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題_page${i+22}.png`),
          answerImages: [11, 12].map(p => `images/第5回_解答_page${p}.png`)
        }
      ]
    }
  ]
};
