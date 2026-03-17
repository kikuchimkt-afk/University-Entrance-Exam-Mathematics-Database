// =============================================================================
// Z会 2023年用 共通テスト実戦模試 数学IA — メタデータ
// =============================================================================
// 旧課程形式: 各回5問（第3問=確率, 第4問=整数(選択), 第5問=図形(選択)）
// PDFは問題+解答一体型（模試第X回_問題解答.pdf）

var BOOK_DATA_zkai_2023_IA = {
  id: "zkai_2023_IA",
  publisher: "Z会",
  year: 2023,
  subject: "数学IA",
  title: "2023年 Z会実戦模試 数学IA",
  basePath: "data/zkai_2023_IA/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "1次関数", "絶対値を含む関数", "最大値・最小値"],
              "[2]": ["図形と計量", "余弦定理", "図形の決定", "三角形の成立条件"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "絶対値を含む関数のグラフと四角形の計量",
            stumbling_points: ["絶対値の場合分けが正確にできずグラフを誤って描く。", "最大となるxが2つ存在する条件をグラフの形状に結びつけられない。"],
            key_to_start: "絶対値の関数はまず定数aのままグラフの概形を視覚化。図形は余弦定理を比較して角の大小関係を把握しましょう。"
          },
          problemImages: Array.from({length: 5}, (_, i) => `images/模試第1回_問題解答_page${i+1}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/模試第1回_問題解答_page${i+14}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "文章題", "最大・最小の応用"],
              "[2]": ["データの分析", "散布図", "相関係数", "データの読み取り"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "関数の最大・最小の日常応用と散布図の読み取り",
            stumbling_points: ["長文に圧倒され売上=価格×販売数の基本関係式を立式できない。", "散布図の客観的事実と推測の区別がつかない。"],
            key_to_start: "条件を数式に翻訳→2次関数の平方完成→最大値。データは確実に言えることだけを消去法で判定しましょう。"
          },
          problemImages: Array.from({length: 6}, (_, i) => `images/模試第1回_問題解答_page${i+6}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/模試第1回_問題解答_page${i+20}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "確率の基本"],
              "(2)": ["場合の数と確率", "反復試行", "余事象"],
              "(3)": ["場合の数と確率", "独立な試行", "条件の複雑な確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "復元抽出と非復元抽出の確率・余事象の利用",
            stumbling_points: ["復元/非復元で分母の球の数が変動することに気づかない。", "少なくとも〜の表現から余事象に切り替えられない。"],
            key_to_start: "各操作で箱の中の球の個数を丁寧にメモ。「少なくとも」「〜でも」→余事象を疑いましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第1回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第1回_問題解答_page${i+22}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["整数の性質", "ユークリッドの互除法", "最大公約数", "互いに素"],
              "(2)": ["整数の性質", "不定方程式", "条件を満たす自然数の組"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "長方形の正方形分割とユークリッドの互除法の図形的意味",
            stumbling_points: ["正方形切り取り操作がユークリッドの互除法そのものであることに気づけない。", "互いに素の条件を使った解の絞り込み手順が分からない。"],
            key_to_start: "具体的数値で切り取り操作→辺の長さの最大公約数=最小正方形の一辺。互いに素の条件を明記して絞り込みましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第1回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第1回_問題解答_page${i+26}.png`)
        },
        {
          id: "r1q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "円に内接する四角形", "角度追跡"],
              "(2)": ["図形の性質", "直角三角形", "三角形の相似", "中点連結定理"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "円と三角形の性質を用いた図形の証明と角度の追跡",
            stumbling_points: ["対角の和180°→円に内接を逆に見抜けない。", "着目すべき三角形や円を見失い角度計算で混乱。"],
            key_to_start: "正確な図を大きく描く。正三角形の内角60°や円内接四角形の性質で分かるところから角度を書き込みましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第1回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第1回_問題解答_page${i+28}.png`)
        }
      ]
    },
    // ===================== 第2回 =====================
    {
      id: "round2", title: "第2回",
      questions: [
        {
          id: "r2q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "2次方程式", "解の公式", "平方根の大小比較"], "[2]": ["図形と計量", "三角比の応用", "仰角・俯角"], "[3]": ["図形と計量", "余弦定理", "中線定理"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "2次方程式の解の性質と三角比を用いた図形の計量", stumbling_points: ["複雑な平方根の大小比較で近似値評価の誤り。", "仰角や俯角の定義を図に落とし込めない。"], key_to_start: "解の大小比較は代入でy(正負)を視覚化。図形は必ず状況図を大きく描き直角三角形を切り出しましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/模試第2回_問題解答_page${i+1}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/模試第2回_問題解答_page${i+14}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "方程式の実数解の個数", "グラフとx軸の共有点"], "[2]": ["データの分析", "散布図", "相関係数", "箱ひげ図"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "2次関数のグラフの概形と散布図・相関係数の性質", stumbling_points: ["複雑な因数分解にすべて展開して判別式で自滅。", "変量定数倍時の相関係数不変の性質を知らない。"], key_to_start: "[1]は特定のx値を代入してyの符号→グラフの交わり方を視覚的に。変量の定数倍で相関係数は変わらない性質を利用しましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/模試第2回_問題解答_page${i+7}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/模試第2回_問題解答_page${i+20}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "(1)": ["場合の数と確率", "事象の確率"], "(2)": ["場合の数と確率", "独立な試行", "背反事象"], "(3)": ["場合の数と確率", "文字式を含む確率", "関数の最大・最小"], "(4)": ["場合の数と確率", "期待値の比較"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "日常事象の確率モデリングと判定値の最大化", stumbling_points: ["複合事象の場合分けと掛け算・足し算法則の混同。", "確率にkが含まれた途端手が止まり関数として捉えられない。"], key_to_start: "3人の判断ルールを表に整理→各パターンの確率を立式。後半はkの関数としてグラフ化→比較しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第2回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/模試第2回_問題解答_page${i+23}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "(1)": ["整数の性質", "倍数・約数の条件", "ユークリッドの互除法の応用"], "(2)": ["整数の性質", "式の変形", "互いに素"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "文字式を含む整数の倍数・約数条件と互除法の考え方", stumbling_points: ["AがBの倍数→AをBで割って余りがBの倍数への次数下げに思い至らない。", "互いに素の条件確認を怠り不適な解を含める。"], key_to_start: "分子を分母の式で割り算→n+18=1×(n+2)+16→16がn+2の倍数に帰着させましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第2回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第2回_問題解答_page${i+26}.png`)
        },
        {
          id: "r2q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "(1)": ["図形の性質", "正多角形と円", "正弦定理・余弦定理"], "(2)": ["図形の性質", "正十角形", "方べきの定理", "接弦定理"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "円に内接する正多角形の辺の長さと平面幾何の定理", stumbling_points: ["正多角形の内角を暗記に頼り自ら二等辺三角形で計算できない。", "等角から接弦定理の逆に気づけず方べきの糸口を見失う。"], key_to_start: "中心と頂点を結ぶ二等辺三角形で中心角を求める→角度をすべて書き込み→相似や接線を見つけましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第2回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第2回_問題解答_page${i+29}.png`)
        }
      ]
    },
    // ===================== 第3回 =====================
    {
      id: "round3", title: "第3回",
      questions: [
        {
          id: "r3q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "絶対値", "平方根", "1次不等式"], "[2]": ["図形と計量", "三角比", "余弦定理"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "絶対値と根号を含む不等式、余弦定理の証明", stumbling_points: ["√A²=|A|の性質を忘れてAのまま外すミス。", "鈍角三角形でcos(180°-B)=-cosBの符号処理。"], key_to_start: "絶対値や根号の中身の正負で場合分け。証明は頂点から垂線→直角三角形→三平方の定理で関係式を導きましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/模試第3回_問題解答_page${i+1}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/模試第3回_問題解答_page${i+12}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "最大・最小", "2次不等式"], "[2]": ["データの分析", "箱ひげ図", "散布図", "相関係数"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "陸上トラック面積の最大化と熱中症データの分析", stumbling_points: ["変数の定義域を図形制約から正しく絞り込めない。", "散布図の特定データ点を異なるグラフ間で対応させにくい。"], key_to_start: "条件から文字消去→1変数2次関数→定義域内で平方完成。箱ひげ図の四分位数は正確に読み取りましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/模試第3回_問題解答_page${i+6}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/模試第3回_問題解答_page${i+17}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["場合の数と確率", "条件付き確率", "独立な試行"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "大学入試の複数日程における合否確率と条件付き確率", stumbling_points: ["各日程の合格可能性の定義に前の日程不合格の前提が含まれることの読み落とし。", "条件付き確率の分母分子の混同。"], key_to_start: "パーセンテージを分数に変換→各日程の合格/不合格確率を表か樹形図で視覚的に整理しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第3回_問題解答_page${i+8}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/模試第3回_問題解答_page${i+19}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["整数の性質", "倍数の判定法", "素数"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "各位の数を用いた倍数判定法の証明と素数の性質", stumbling_points: ["文字式から特定の文字を代入・消去して倍数の形にくくり直す変形の発想。", "互いに素や素数の性質で条件を論理的に絞り込む過程。"], key_to_start: "pの倍数=p×(整数)の形で数式化→等式から不要文字を消去→因数分解・くくり出しに持ち込みましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第3回_問題解答_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第3回_問題解答_page${i+22}.png`)
        },
        {
          id: "r3q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["図形の性質", "内接円の半径", "傍接円の半径", "三角形の面積"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "三角形の面積を利用した内接円・傍接円の半径の計算", stumbling_points: ["傍接円で円外の点から引いた接線の等長性質での図形分割。", "具体から文字式への一般化で解釈に迷う。"], key_to_start: "傍心と各頂点を結んで三角形に分割→面積の和として方程式を立てる基本操作を徹底しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第3回_問題解答_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第3回_問題解答_page${i+24}.png`)
        }
      ]
    },
    // ===================== 第4回 =====================
    {
      id: "round4", title: "第4回",
      questions: [
        {
          id: "r4q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["数と式", "整数部分と小数部分", "2次方程式"], "[2]": ["図形と計量", "三角比", "空間図形への応用"], "[3]": ["図形と計量", "三角比", "図形の性質"] }, aggregate_tags: ["数と式", "図形と計量"] },
          tips: { topic: "実数の小数部分と三角比を利用した測量・図形の計量", stumbling_points: ["負の無理数の整数部分の特定ミス（-5.5→整数部分は-6）。", "見慣れない角度(36°,72°)で垂線を下ろして直角三角形を作る発想。"], key_to_start: "小数部分=(元の数)-(整数部分)の定義通りに式を立てる。図形は等しい長さ・角度を全て書き込み→二等辺三角形の頂角から垂線しましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/模試第4回_問題解答_page${i+1}.png`),
          answerImages: Array.from({length: 7}, (_, i) => `images/模試第4回_問題解答_page${i+16}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "グラフの頂点", "象限"], "[2]": ["データの分析", "散布図", "相関関係", "四分位数"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "文字係数の2次関数の象限判定と散布図の相関分析", stumbling_points: ["頂点座標の符号や凸の向き・y切片の連立不等式で混乱。", "複数散布図の相関の強さや条件を満たす点数の目分量の誤判断。"], key_to_start: "文字のまま平方完成→頂点座標→各象限の符号条件に当てはめる。散布図はy=xや四分位数のラインをグラフに引いて数え上げましょう。" },
          problemImages: Array.from({length: 6}, (_, i) => `images/模試第4回_問題解答_page${i+7}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/模試第4回_問題解答_page${i+23}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["場合の数と確率", "推移確率", "条件付き確率"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "ウェブページ移動の状態遷移と条件付き確率", stumbling_points: ["移動繰り返しで途中経路のパターン網羅不足。", "利用を終える選択肢追加で確率分布変化に戸惑う。"], key_to_start: "A,B,終了の状態遷移図や樹形図を必ず描いて視覚化→確率の積と和を計算しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第4回_問題解答_page${i+10}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第4回_問題解答_page${i+26}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["整数の性質", "ユークリッドの互除法", "1次不定方程式"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "ユークリッドの互除法を用いた1次不定方程式（2変数・3変数）", stumbling_points: ["互除法の逆たどりで符号ミスや展開ミス。", "3変数不定方程式で1変数を固定して2変数に帰着する論理展開。"], key_to_start: "余り=…の式を順に代入→くくり出しを丁寧に。3変数は1つをnと置いて残り2変数の問題に処理しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第4回_問題解答_page${i+10}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/模試第4回_問題解答_page${i+30}.png`)
        },
        {
          id: "r4q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["図形の性質", "図形の移動", "線分の長さの和の最小値"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "三角形の回転移動を利用した線分の和の最小値（フェルマー点）", stumbling_points: ["回転移動で折れ線を1本の直線に引き伸ばす発想。", "60°回転で正三角形が作られる幾何学的意味の把握。"], key_to_start: "折れ線最小=対称移動or回転移動で直線の形に広げる。移動後の合同な図形や正三角形の角に注目→一直線条件を探しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第4回_問題解答_page${i+10}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第4回_問題解答_page${i+35}.png`)
        }
      ]
    },
    // ===================== 第5回 =====================
    {
      id: "round5", title: "第5回",
      questions: [
        {
          id: "r5q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["集合と命題", "絶対値を含む不等式", "部分集合"], "[2]": ["図形と計量", "内接円の半径", "余弦定理", "三角形の面積"] }, aggregate_tags: ["集合と命題", "図形と計量"] },
          tips: { topic: "集合の要素の決定と三角形の内接円の半径", stumbling_points: ["絶対値不等式で条件を満たす整数のみの拾い上げ忘れ。", "内接円の半径の2つのアプローチが結びつかない。"], key_to_start: "集合は要素を具体的に書き並べて視覚化。内接円はS=½r(a+b+c)か接点距離等しい性質で方程式を立てましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/模試第5回_問題解答_page${i+1}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/模試第5回_問題解答_page${i+14}.png`)
        },
        {
          id: "r5q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: { sub_questions: { "[1]": ["2次関数", "動点の問題", "面積の最大・最小"], "[2]": ["データの分析", "散布図", "相関係数", "変量の変換"] }, aggregate_tags: ["2次関数", "データの分析"] },
          tips: { topic: "台形上の動点の面積と変量変換のデータ分析", stumbling_points: ["動点の速さの比が辺の長さの比になる気づき。", "変量変換で共分散・標準偏差・相関係数の変化を暗記で間違える。"], key_to_start: "時間tで各線分をtの式に→面積をtの2次関数に。変量変換はX=ax+bの公式s_X=|a|s_xを確実に適用しましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/模試第5回_問題解答_page${i+6}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/模試第5回_問題解答_page${i+19}.png`)
        },
        {
          id: "r5q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["場合の数と確率", "条件付き確率", "反復試行"] }, aggregate_tags: ["場合の数と確率"] },
          tips: { topic: "複数ステージ対戦ゲームの優勝確率と条件付き確率", stumbling_points: ["先取ルールで途中パターン(ストレート/1勝1敗からの勝利)の漏れ重複。", "事後条件から時間を遡って確率を求める過程。"], key_to_start: "勝者決定までの全パターンを樹形図で網羅→各確率を計算→条件付き確率は定義式に素直に当てはめましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第5回_問題解答_page${i+8}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/模試第5回_問題解答_page${i+21}.png`)
        },
        {
          id: "r5q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["整数の性質", "n進法", "数の表現"] }, aggregate_tags: ["整数の性質"] },
          tips: { topic: "天秤ばかりの計量と2進法・3進法的な数の表現", stumbling_points: ["片皿(1,2,4,8…)と両皿(1,3,9,27…)の分銅の規則性の違い。", "小さい数の実験から最小個数や最大質量の一般化（等比数列の和）。"], key_to_start: "M=1,2,3,4と小さな値で分銅の組み合わせを書き出し→2の累乗(片皿)や3の累乗(両皿)の規則性を見抜きましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第5回_問題解答_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第5回_問題解答_page${i+24}.png`)
        },
        {
          id: "r5q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: { sub_questions: { "全体": ["図形の性質", "メネラウスの定理", "チェバの定理", "面積比"] }, aggregate_tags: ["図形の性質"] },
          tips: { topic: "メネラウス・チェバの定理の証明構造の理解と四角形への拡張", stumbling_points: ["定理の丸暗記で「垂線の長さの比=面積比」の本質的構造を活用できない。", "四角形など拡張された命題で対応する辺や面積を見失う。"], key_to_start: "見慣れない図形→定理の証明手法（垂線の比→面積比に置換して乗算）をそのまま模倣するアプローチを取りましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/模試第5回_問題解答_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/模試第5回_問題解答_page${i+28}.png`)
        }
      ]
    }
  ]
};
