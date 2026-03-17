// =============================================================================
// 駿台 2025年 駿台実戦問題集 数学IIBC — メタデータ
// =============================================================================
// 新課程形式: 各回7問
// 第1〜3問: 数学II（三角関数/指数対数/図形と方程式 + 微積分）
// 第4問: 数学B 数列  第5問: 数学B 統計
// 第6問: 数学C ベクトル  第7問: 数学C 曲線/複素数平面

var BOOK_DATA_sundai_2025_IIBC = {
  id: "sundai_2025_IIBC",
  publisher: "駿台",
  year: 2025,
  subject: "数学IIBC",
  title: "2025年 駿台実戦問題集 数学IIBC",
  basePath: "data/sundai_2025_IIBC/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["三角関数の値", "余角・補角の公式"], "(2)": ["三角関数のグラフ", "グラフの平行移動"], "(3)": ["三角関数の最大値・最小値", "定義域の決定"], "(4)": ["三角関数の最大値・最小値", "2倍角の公式"] }, aggregate_tags: ["三角関数", "グラフ", "最大値と最小値"] },
          tips: { topic: "三角関数のグラフと最大・最小", stumbling_points: ["位相のズレを正確に読み取れずグラフの概形を誤る。", "定義域の上端が文字の場合に単位円上の動径の範囲を追えない。"], key_to_start: "y=sinxの基本波形の平行移動を把握。最大最小は単位円を描いて定義域の角度範囲を視覚化しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題_page${i+1}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解説_page${i+1}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["指数関数のグラフ", "定点通過", "指数方程式", "対数"], "(2)": ["対数関数のグラフ", "線分の内分点", "軌跡の方程式"] }, aggregate_tags: ["指数関数", "対数関数", "軌跡"] },
          tips: { topic: "指数・対数関数のグラフの性質と軌跡", stumbling_points: ["指数方程式から対数で表す変形ミスや底の条件忘れ。", "軌跡で動点座標を文字でおいた後の媒介変数消去で行き詰まる。"], key_to_start: "(1)は式が簡単になる値を代入→定点。(2)は媒介変数でおく→条件に従い新点座標→消去して関係式の王道手順しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題_page${i+5}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解説_page${i+4}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["3次関数の微分", "増減表", "接線", "面積", "定積分"], "(2)": ["極値をもつ条件", "極大値の計算", "極大値の軌跡"] }, aggregate_tags: ["微分法", "積分法", "接線", "面積", "極値"] },
          tips: { topic: "3次関数の微分・積分と極値の軌跡", stumbling_points: ["接点が重解→被積分関数の因数分解ができず計算ミス連発。", "極値条件でf'(x)=0の解の存在だけでなく符号変化が必要なことを忘れる。"], key_to_start: "f'(x)を因数分解→f'(x)=0の解→増減表。面積は接点の重解を活かして∫(x-α)²(x-β)dxの形に持ちましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題_page${i+8}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解説_page${i+7}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["漸化式の変形", "逆数への置き換え", "階差数列", "部分分数分解"], "(2)": ["漸化式の変形", "階差数列", "(等差)×(等比)型の和"] }, aggregate_tags: ["数列", "漸化式", "階差数列"] },
          tips: { topic: "誘導付き漸化式の解法と特殊な数列の和", stumbling_points: ["置き換え後の新漸化式でn≥2の適用や初期値の計算ミス。", "(等差)×(等比)型で公比を掛けてずらして引く処理の引き算ミス。"], key_to_start: "指示通りに両辺を割る・置き換える操作→基本の漸化式に帰着→落ち着いて実行しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題_page${i+12}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解説_page${i+10}.png`)
        },
        {
          id: "r1q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["二項分布", "期待値と標準偏差", "正規分布への近似", "標準化"], "(2)": ["条件付きの割合と期待値", "二項分布の正規近似"], "(3)": ["標本平均の分布", "母平均の信頼区間"] }, aggregate_tags: ["統計的な推測", "二項分布", "正規分布", "推定"] },
          tips: { topic: "二項分布の正規近似と母平均の信頼区間", stumbling_points: ["標準化Z=(X-m)/σの式や期待値・標準偏差の計算ミス。", "長い設定から抽出集団の割合を正しく立式できない。"], key_to_start: "確率変数がB(n,p)に従うか正確に読み取り→np, √(npq)→標準化の基本フローを機械的に実行しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題_page${i+16}.png`),
          answerImages: Array.from({length: 2}, (_, i) => `images/第1回_解説_page${i+13}.png`)
        },
        {
          id: "r1q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["空間ベクトルの成分計算", "内積", "三角形の面積"], "(2)": ["共面条件", "内積による係数決定"], "(3)": ["四角形の形状決定", "台形の面積"], "(4)": ["直線と平面の垂直条件", "法線ベクトル", "四角錐の体積"] }, aggregate_tags: ["空間ベクトル", "内積", "面積", "体積"] },
          tips: { topic: "空間ベクトルの図形への応用と体積", stumbling_points: ["四角形の形状判定でベクトルの平行に気づいても長さの比の確認忘れ。", "垂線の足設定で平面上の2ベクトルとの内積=0の連立を解ききれない。"], key_to_start: "AD=pAB+qAC(共面), OH·AB=0かつOH·AC=0(垂直)の2大原則を数式に翻訳しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題_page${i+20}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第1回_解説_page${i+15}.png`)
        },
        {
          id: "r1q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["楕円の定義", "焦点", "長軸と短軸"], "[2](1)": ["複素数の極形式", "ド・モアブルの定理", "1のn乗根"], "[2](2)": ["複素数の和の極形式", "nの乗が実数となる条件"] }, aggregate_tags: ["平面上の曲線", "楕円", "複素数平面", "極形式"] },
          tips: { topic: "楕円の定義と複素数平面上の正六角形", stumbling_points: ["楕円の焦点距離と長軸・短軸の関係式の組み立て。", "nの乗が実数→偏角がπの整数倍の数式化。"], key_to_start: "[1]は2焦点距離の和=長軸。[2]は正多角形の各頂点を極形式で書き出し計算規則に従いましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題_page${i+24}.png`),
          answerImages: Array.from({length: 2}, (_, i) => `images/第1回_解説_page${i+18}.png`)
        }
      ]
    },
    // ===================== 第2回 =====================
    {
      id: "round2", title: "第2回",
      questions: [
        { id: "r2q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["2倍角の公式", "三角関数の合成", "加法定理"], "(2)": ["三角方程式", "解の個数", "最大値・最小値"] }, aggregate_tags: ["三角関数", "三角方程式", "加法定理"] },
          tips: { topic: "三角方程式の解法と加法定理・合成", stumbling_points: ["どの公式を適用すべきか迷い手が止まる。", "合成後の角度の範囲を把握できず解を過不足なく拾えない。"], key_to_start: "左辺は2倍角、右辺は合成と見抜く。共通の引数を作り出す変形を目標にしましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題_page${i+1}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解説_page${i+1}.png`) },
        { id: "r2q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["対数方程式", "指数・対数の変換"], "(2)": ["常用対数", "指数関数の応用", "半減期"] }, aggregate_tags: ["指数関数", "対数関数", "常用対数"] },
          tips: { topic: "指数・対数方程式と常用対数の応用", stumbling_points: ["連比の扱い方が分からず計算が破綻。", "半減期の文章量に圧倒される。"], key_to_start: "連比を=aとおき指数形に直して連立。半減期は両辺常用対数をとりましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題_page${i+4}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解説_page${i+4}.png`) },
        { id: "r2q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["接線と面積", "定積分と1/6公式", "面積の増減と極値"], "(2)": ["2つの放物線で囲まれた面積", "交点の条件"] }, aggregate_tags: ["微分法", "積分法", "面積", "極値"] },
          tips: { topic: "放物線と直線・放物線で囲まれた面積と極値", stumbling_points: ["文字含む交点で展開計算→膨大な計算ミス。", "面積関数の微分で極値条件の判定ミス。"], key_to_start: "交点が積分区間の両端→-1/6(β-α)³の公式を必ず活用しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題_page${i+7}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解説_page${i+7}.png`) },
        { id: "r2q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["漸化式の立式", "特性方程式"], "(2)": ["等差数列の和", "和Snと一般項anの関係式"] }, aggregate_tags: ["数列", "漸化式"] },
          tips: { topic: "文章題からの漸化式の立式と和の関係式", stumbling_points: ["処理されて残る量と新たに発生する量の時系列を混同。", "Snが含まれる条件式からdnの漸化式を導出できない。"], key_to_start: "和SnはS_{n+1}-S_n=a_{n+1}で和の記号を消去するのが鉄則です。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題_page${i+11}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解説_page${i+10}.png`) },
        { id: "r2q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["二項分布", "正規分布への近似", "標準化"], "(2)": ["標本比率", "母比率の信頼区間"] }, aggregate_tags: ["統計的な推測", "二項分布", "正規分布", "推定"] },
          tips: { topic: "二項分布の正規近似と母比率の推定", stumbling_points: ["npqの分散公式や標準化の式を忘れる。", "信頼区間の幅の公式からサンプルサイズnを求める計算。"], key_to_start: "B(n,p)→平均・分散→正規分布→標準化→確率表の機械的手順を暗記しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題_page${i+14}.png`),
          answerImages: Array.from({length: 2}, (_, i) => `images/第2回_解説_page${i+13}.png`) },
        { id: "r2q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["空間ベクトルの位置ベクトル", "重心", "直線の交点", "共面条件"], "(2)": ["直線と平面の垂直", "内積計算"] }, aggregate_tags: ["空間ベクトル", "位置ベクトル", "内積"] },
          tips: { topic: "空間ベクトルの直線の交点と垂直条件", stumbling_points: ["2直線のベクトル方程式を別パラメータで連立→係数比較の手順が不完全。", "平面に垂直→平面上の2ベクトルとの内積=0の翻訳ができない。"], key_to_start: "交点は2通りに表して係数比較。垂直は内積=0。この2大原則を愚直に数式化しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第2回_問題_page${i+17}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第2回_解説_page${i+15}.png`) },
        { id: "r2q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["楕円と直線の接条件", "判別式", "中点の軌跡"], "[2]": ["複素数の極形式", "ド・モアブルの定理", "一直線条件", "直角条件"] }, aggregate_tags: ["平面上の曲線", "複素数平面", "極形式", "軌跡"] },
          tips: { topic: "楕円と直線の関係・複素数の極形式と図形", stumbling_points: ["中点軌跡で解と係数の関係を使うパラメータ消去の道筋。", "一直線/直角の幾何条件を偏角やargの代数条件に翻訳できない。"], key_to_start: "[1]は解と係数の関係→中点座標→パラメータ消去。[2]は直角→商が純虚数に翻訳しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題_page${i+20}.png`),
          answerImages: Array.from({length: 2}, (_, i) => `images/第2回_解説_page${i+18}.png`) }
      ]
    },
    // ===================== 第3回 =====================
    {
      id: "round3", title: "第3回",
      questions: [
        { id: "r3q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["三角関数の相互関係", "2倍角の公式"], "(2)": ["三角関数のグラフ", "周期", "平行移動"], "(3)": ["三角関数の最大値・最小値", "三角方程式"] }, aggregate_tags: ["三角関数", "グラフ", "最大値と最小値"] },
          tips: { topic: "三角関数のグラフと最大・最小", stumbling_points: ["sin⁴x+cos⁴xの変形で2倍角に持ち込めない。", "文字の定義域でcos4xの値の対応把握。"], key_to_start: "sin²x+cos²x=1で次数を下げ→2倍角で角を揃えましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回_問題_page${i+1}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_解説_page${i+1}.png`) },
        { id: "r3q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["円の方程式", "直径の円周角", "接線"], "(2)": ["連立不等式", "領域", "線形計画法"] }, aggregate_tags: ["図形と方程式", "円", "接線", "領域"] },
          tips: { topic: "領域と最大・最小（線形計画法）", stumbling_points: ["3点を通る円で∠AOB=90°に気づかず計算が煩雑。", "直線が円に接する場合と端点の場合分け。"], key_to_start: "y-ax=kとおき→傾きa・切片kの直線→領域と共有点の限界の切片を視覚的に探しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_問題_page${i+4}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_解説_page${i+4}.png`) },
        { id: "r3q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["3次関数の最大値・最小値", "文章題"], "[2](1)": ["3次関数のグラフ", "極値"], "[2](2)": ["接線", "2直線のなす角", "正接の加法定理"], "[2](3)": ["2曲線で囲まれた面積", "定積分"] }, aggregate_tags: ["微分法", "積分法", "面積", "極値"] },
          tips: { topic: "3次関数の最大値と2曲線で囲まれた面積", stumbling_points: ["箱寸法の体積関数で変数の定義域を求め忘れ。", "2直線のなす角でtanの加法定理の発想がない。"], key_to_start: "文章題は変数のとりうる範囲→増減表→最大値。なす角は直線の傾き=tanを利用しましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/第3回_問題_page${i+8}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_解説_page${i+7}.png`) },
        { id: "r3q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["等差数列", "等比数列", "規則性"], "(2)": ["連立漸化式", "偶数項・奇数項からなる数列"] }, aggregate_tags: ["数列", "漸化式", "規則性"] },
          tips: { topic: "操作に基づく数列の漸化式立式", stumbling_points: ["折り方の操作規則からa_n,b_n,c_nの関係式を正しく翻訳できない。", "添え字2mの部分列漸化式の番号ズレ。"], key_to_start: "紙を折る様子をイメージor図示して→n回目とn+1回目の変化を具体的に追って漸化式を立てましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_問題_page${i+13}.png`),
          answerImages: Array.from({length: 2}, (_, i) => `images/第3回_解説_page${i+10}.png`) },
        { id: "r3q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["二項分布", "正規分布への近似", "標準化"], "(2)": ["母平均の推定", "信頼区間"], "(3)": ["仮説検定", "帰無仮説と対立仮説", "有意水準と棄却域"] }, aggregate_tags: ["統計的な推測", "正規分布", "推定", "仮説検定"] },
          tips: { topic: "正規分布への近似と推定・検定", stumbling_points: ["母標準偏差が異なる2ケースの信頼区間の計算ミス。", "帰無仮説の立て方と棄却域判定の論理展開。"], key_to_start: "近似→標準化→確率表or棄却域比較の手順を確実にトレースしましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回_問題_page${i+17}.png`),
          answerImages: Array.from({length: 2}, (_, i) => `images/第3回_解説_page${i+12}.png`) },
        { id: "r3q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["位置ベクトル", "直線の交点", "面積比"], "(2)": ["直線と線分の交点条件", "平行四辺形の面積", "最大値・最小値"] }, aggregate_tags: ["平面ベクトル", "交点", "面積", "最大値と最小値"] },
          tips: { topic: "平面ベクトルにおける交点と面積の最大化", stumbling_points: ["2直線ベクトル方程式の係数比較手順が不完全。", "S₂=xySの最大値を条件式で2次関数に帰着する計算ミス。"], key_to_start: "交点は2通りに表して係数比較が鉄則。面積最大化は1変数消去→2次関数or相加相乗しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回_問題_page${i+20}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_解説_page${i+14}.png`) },
        { id: "r3q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["2次曲線", "楕円", "双曲線", "焦点", "標準形への変形"], "[2]": ["複素数平面", "極形式", "正三角形", "回転", "重心"] }, aggregate_tags: ["平面上の曲線", "2次曲線", "複素数平面", "極形式"] },
          tips: { topic: "2次曲線の分類と複素数平面上の正三角形", stumbling_points: ["一般形→平方完成→標準形で係数の正負による曲線種類の判別ミス。", "正三角形条件を中心からの回転（極形式の掛け算）で立式できない。"], key_to_start: "[1]は平方完成→(x²/p)±(y²/q)=1→係数符号で楕円/双曲線。[2]は±π/3の回転で立式しましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/第3回_問題_page${i+24}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回_解説_page${i+17}.png`) }
      ]
    },
    // ===================== 第4回 =====================
    {
      id: "round4", title: "第4回",
      questions: [
        { id: "r4q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["対称点の座標", "三角関数の合成", "折れ線の長さの最小値"], "(2)": ["直線の交点", "三角形の重心"], "(3)": ["軌跡と方程式", "媒介変数の消去"] }, aggregate_tags: ["図形と方程式", "軌跡と方程式", "三角関数"] },
          tips: { topic: "折れ線の長さの最小値と点・直線の軌跡", stumbling_points: ["AP+BP最小→対称点→3点一直線の定石が思いつかない。", "対称点の座標計算で連立方程式の立式ミス。"], key_to_start: "折れ線最小値は反射する直線に関して対称点→一直線。対称点は垂直+中点が直線上の2条件で連立しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題_page${i+1}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_解説_page${i+1}.png`) },
        { id: "r4q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["対数不等式", "底の変換公式"], "(2)": ["対数関数のグラフ", "拡大・縮小"], "(3)": ["対数関数の大小比較", "グラフの上下関係"] }, aggregate_tags: ["指数関数と対数関数", "対数不等式", "グラフ"] },
          tips: { topic: "対数関数のグラフとその拡大・縮小・大小比較", stumbling_points: ["真数条件や底<1の不等号反転忘れ。", "log₄xやlog₂x²とlog₂xの拡大縮小関係が読み取れない。"], key_to_start: "底の変換公式で全対数の底を2に統一。y=alog₂x+bの形に整理→基本グラフと比較しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第4回_問題_page${i+5}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_解説_page${i+4}.png`) },
        { id: "r4q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1](1)": ["接線", "放物線の接線"], "[1](2)": ["2曲線で囲まれた面積", "3次関数の最大値・最小値"], "[2]": ["定積分で表された関数", "導関数とグラフの概形"] }, aggregate_tags: ["微分法", "積分法", "接線", "面積", "定積分で表された関数"] },
          tips: { topic: "接線と面積の最大・最小、定積分表示関数のグラフ", stumbling_points: ["1/6公式を使わず展開計算でミス。", "g(x)=∫₀ˣf(t)dt→g'(x)=f(x)を正しく認識できない。"], key_to_start: "面積は1/6公式を積極活用。g'(x)=f(x)なのでf(x)の符号変化→g(x)の増減に結び付けましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/第4回_問題_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第4回_解説_page${i+7}.png`) },
        { id: "r4q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["規則性の発見", "群数列", "自然数の配置"], "(2)": ["漸化式の立式", "偶奇による場合分け"], "(3)": ["群数列的な位置の特定", "条件を満たす項の探索"] }, aggregate_tags: ["数列", "漸化式", "規則性", "群数列"] },
          tips: { topic: "図に基づく数列の規則性の発見と立式", stumbling_points: ["複雑な記入規則のトレースでa_nやb_nの法則性を見失う。", "nが奇数/偶数でb_nとa_nの位置関係が反転することに気づかない。"], key_to_start: "まずn=1,2,3,4,5まで具体的な数と位置を書き出す。偶数回・奇数回でのパターンを具体例から把握しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題_page${i+13}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_解説_page${i+11}.png`) },
        { id: "r4q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["二項分布", "正規分布への近似", "標準化"], "(2)": ["母比率の推定", "信頼区間の幅"], "(3)": ["仮説検定", "片側検定と棄却域"] }, aggregate_tags: ["統計的な推測", "二項分布", "母比率の推定", "仮説検定"] },
          tips: { topic: "二項分布の正規近似・母比率の推定・仮説検定", stumbling_points: ["信頼区間の幅の公式で標本の大きさやR変化時の幅変化倍率の判断。", "帰無仮説p=0.2の設定と片側/両側の見誤り。"], key_to_start: "B(n,p)→正規分布近似→標準化→確率計算の機械的流れ。信頼区間の幅の公式と検定手順は暗記しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題_page${i+17}.png`),
          answerImages: Array.from({length: 2}, (_, i) => `images/第4回_解説_page${i+14}.png`) },
        { id: "r4q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["平面ベクトル", "直線の交点", "分点公式"], "[2]": ["空間ベクトル", "共面条件", "直線と平面の交点", "内積と垂直条件"] }, aggregate_tags: ["平面ベクトル", "空間ベクトル", "交点", "共面条件"] },
          tips: { topic: "ベクトルを用いた交点の決定と図形の性質", stumbling_points: ["直線OSと平面APQの交点Rで2条件の数式化と連立。", "長方形を示すために内積AP·AR=0の計算ミス。"], key_to_start: "Rは直線OS上かつ平面APQ上→AR=xAP+yAQと表して基準ベクトルに揃えて係数比較しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題_page${i+21}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_解説_page${i+16}.png`) },
        { id: "r4q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["双曲線", "漸近線", "直線の交点"], "[2](1)(2)": ["複素数平面", "極形式", "ド・モアブルの定理"], "[2](3)": ["複素数列", "図形の対称性", "多角形の面積"] }, aggregate_tags: ["平面上の曲線", "双曲線", "複素数平面", "極形式"] },
          tips: { topic: "双曲線の漸近線と複素数平面上の図形", stumbling_points: ["漸近線に平行な直線と交点の文字式連立が煩雑。", "(z̄)ⁿの実軸対称を図形的に利用できず面積計算が複雑化。"], key_to_start: "[1]は文字式の連立方程式を代入法で処理。[2]は極形式+ド・モアブル定理+実軸対称性で面積を効率分割しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題_page${i+25}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第4回_解説_page${i+19}.png`) }
      ]
    },
    // ===================== 第5回 =====================
    {
      id: "round5", title: "第5回",
      questions: [
        { id: "r5q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["2点間の距離"], "(2)": ["直線の方程式", "垂直な直線"], "(3)": ["点と直線の距離", "三角形の面積"], "(4)": ["円の方程式", "3点を通る円", "束の考え方"] }, aggregate_tags: ["図形と方程式", "直線", "円", "距離と面積"] },
          tips: { topic: "直線と円の基本、束を用いた円の方程式", stumbling_points: ["垂直な直線で傾きの積=-1の利用忘れ。", "3点円の直接代入に固執し束（f+kg=0）を活用できない。"], key_to_start: "2つの図形の交点を通る図形はf+kg=0。x²+y²-25+k(x-2y-5)=0としてk決定しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_問題_page${i+1}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解説_page${i+1}.png`) },
        { id: "r5q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["高次方程式", "因数分解", "解の公式"], "(2)": ["複素数の計算", "共役複素数と方程式の解", "係数決定"], "(3)": ["因数定理", "重解の条件", "判別式"] }, aggregate_tags: ["複素数と方程式", "高次方程式", "因数定理"] },
          tips: { topic: "高次方程式の解と係数、重解の条件", stumbling_points: ["実数係数で虚数解2+i→共役2-iも解の性質に気づかない。", "x=2が重解のケースの見落とし。"], key_to_start: "虚数解→共役も解→(x-α)(x-ᾱ)=0の2次式で因数分解に活用しましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第5回_問題_page${i+5}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解説_page${i+4}.png`) },
        { id: "r5q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1](1)": ["共通接線", "重解条件", "判別式"], "[1](2)": ["接線の方程式"], "[1](3)": ["共通接線の方程式"], "[2]": ["定積分で表された関数", "関数の最小値", "増減表"] }, aggregate_tags: ["微分法", "積分法", "共通接線", "面積", "関数の最小値"] },
          tips: { topic: "2つの放物線の共通接線と定積分関数の最小値", stumbling_points: ["共通接線で2接点s,tの連立→文字消去や2次方程式の処理。", "g'(x)=f(x)→増減表→bの値の決定。"], key_to_start: "共通接線はy=mx+n→判別式=0を2つ作るか、接点で接線を立て係数比較しましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題_page${i+8}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第5回_解説_page${i+7}.png`) },
        { id: "r5q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["数列の規則性", "階差数列", "一般項の推測"], "(2)": ["漸化式の立式と解法", "等比数列への帰着"], "(3)": ["数列の項の大小関係", "条件を満たす項の探索"] }, aggregate_tags: ["数列", "漸化式", "規則性"] },
          tips: { topic: "複雑な規則に基づく漸化式と一般項の導出", stumbling_points: ["規則Aに基づくp_n,q_n,r_nの計算で初期値の計算ミス。", "b_n=a_n-nを用いた変形で代入整理ができない。"], key_to_start: "まずn=1,2の具体的数値を丁寧に追う。変形はa_{n+1}=b_{n+1}+(n+1)とa_n=b_n+nを代入して整理しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_問題_page${i+13}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解説_page${i+11}.png`) },
        { id: "r5q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["二項分布", "標本比率", "正規分布への近似", "標準化"], "(2)": ["母平均の推定", "信頼区間"], "(3)": ["連続型確率変数", "確率密度関数", "期待値", "定積分"] }, aggregate_tags: ["統計的な推測", "標本比率", "正規分布", "確率密度関数"] },
          tips: { topic: "標本比率の正規近似と確率密度関数", stumbling_points: ["標本比率Rの平均pと分散p(1-p)/nの公式。", "確率密度関数で全確率=1と期待値の定義の2条件から連立する発想。"], key_to_start: "R の平均・分散は暗記必須。確率密度関数はf(y)とx軸で囲まれた面積=1を利用して方程式を立てましょう。" },
          problemImages: Array.from({length: 3}, (_, i) => `images/第5回_問題_page${i+17}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解説_page${i+14}.png`) },
        { id: "r5q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["内積の計算", "ベクトルの大きさ", "なす角"], "(2)": ["空間ベクトル", "内分点・外分点", "共面条件", "直線と平面の交点"], "(3)": ["垂直条件", "垂線の足", "正四面体"] }, aggregate_tags: ["平面ベクトル", "空間ベクトル", "内積", "図形の性質"] },
          tips: { topic: "図形の折り曲げと空間ベクトル", stumbling_points: ["折り曲げ前のベクトル関係式を折り曲げ後の空間でどう活用するか。", "垂線の足で平面上2ベクトルとの垂直の2条件の計算。"], key_to_start: "折っても各辺の長さと折った面内の角度(内積)は不変。基本ベクトルの大きさと内積を全て出してから計算しましょう。" },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_問題_page${i+20}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解説_page${i+17}.png`) },
        { id: "r5q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["極方程式", "2次曲線", "焦点と準線", "放物線"], "[2](1)": ["複素数平面", "円の方程式", "偏角"], "[2](2)": ["円と直線の交点", "ド・モアブルの定理"] }, aggregate_tags: ["平面上の曲線", "極方程式", "複素数平面", "円"] },
          tips: { topic: "極方程式による放物線の表現と複素数平面上の円", stumbling_points: ["極方程式r=2-rcosθを直交座標に直す計算の複雑化。", "|z-2|=2上の条件処理で絶対値計算が泥沼化。"], key_to_start: "[1]はr=原点距離、rcosθ=x座標→焦点距離=準線距離で放物線。[2]は円の直径に対する円周角で計算をショートカットしましょう。" },
          problemImages: Array.from({length: 5}, (_, i) => `images/第5回_問題_page${i+24}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_解説_page${i+20}.png`) }
      ]
    }
  ]
};
