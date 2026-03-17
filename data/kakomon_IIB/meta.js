// =============================================================================
// 共通テスト 数学IIB/IIBC 過去問 — メタデータ
// =============================================================================
// 2021-2023: 旧課程 数学IIB（各回5問, 選択3〜5）
// 2024: 新課程 数学IIBC（本試験TXTでは5問構成で記載）
// 2021年第1日程: TXTが空のため手動でタグ推定

var BOOK_DATA_kakomon_IIB = {
  id: "kakomon_IIB",
  publisher: "過去問",
  year: 2024,
  subject: "数学IIB",
  title: "共通テスト 数学IIB/IIBC 過去問",
  basePath: "data/kakomon_IIB/",
  rounds: [
    // ===================== 2021年 第1日程 =====================
    {
      id: "2021_1st", title: "2021年 第1日程",
      questions: [
        { id: "2021_1st_q1", name: "第1問", score: 30, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["三角関数", "加法定理", "三角関数の合成"], "[2]": ["指数関数と対数関数", "指数の大小比較"] }, aggregate_tags: ["三角関数", "指数関数と対数関数"] },
          tips: { topic: "三角関数の加法定理・合成と指数の大小比較", stumbling_points: ["三角関数の合成時のθの変域処理。", "指数の大小比較で底や指数の条件を正確に把握。"], key_to_start: "加法定理と合成の公式を正確に適用。指数の大小は底を揃えて比較しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_1st_q2", name: "第2問", score: 30, timeMinutes: 15,
          tags: { sub_questions: { "(全体)": ["微分法", "積分法", "3次関数のグラフ", "定積分と面積"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "微分法と積分法の総合問題", stumbling_points: ["3次関数の増減表作成と極値の判定。", "面積計算の積分区間と上下関係。"], key_to_start: "導関数→増減表→グラフ概形→面積は上-下で立式しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_1st_q3", name: "第3問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(全体)": ["確率分布", "期待値", "分散", "正規分布"] }, aggregate_tags: ["統計的な推測"] },
          tips: { topic: "確率分布と正規分布の基本", stumbling_points: ["確率分布表の作成と期待値・分散の計算。", "正規分布表の読み取り。"], key_to_start: "確率分布表を正しく作成→期待値・分散を定義通り計算しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_1st_q4", name: "第4問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(全体)": ["数列", "漸化式", "等比数列の和"] }, aggregate_tags: ["数列"] },
          tips: { topic: "数列の漸化式と等比数列の和", stumbling_points: ["漸化式の立式と一般項の導出。", "等比数列の和の公式適用。"], key_to_start: "漸化式の形を見極め→等比数列or特性方程式で帰着しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_1st_q5", name: "第5問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(全体)": ["空間ベクトル", "内積", "垂直条件"] }, aggregate_tags: ["ベクトル"] },
          tips: { topic: "空間ベクトルと内積・垂直条件", stumbling_points: ["垂直条件→内積=0の立式。", "空間座標でのベクトル成分計算。"], key_to_start: "垂直→内積=0を即座に立式。成分計算を丁寧にしましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 2021年 第2日程 =====================
    {
      id: "2021_2nd", title: "2021年 第2日程",
      questions: [
        { id: "2021_2nd_q1", name: "第1問", score: 30, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["対数関数", "常用対数", "桁数", "最高位の数字"], "[2]": ["三角関数", "加法定理", "三角関数の合成", "図形の対称性"] }, aggregate_tags: ["対数関数", "三角関数"] },
          tips: { topic: "常用対数による桁数判定と三角関数の図形的性質", stumbling_points: ["最高位の数字は常用対数の小数部分から決定。", "単位円上の正三角形の対称性から加法定理・合成へ。"], key_to_start: "桁数=整数部分、最高位=小数部分。三角関数は図形の対称性から角度関係を見つけましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_2nd_q2", name: "第2問", score: 30, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["積分法", "定積分で表された関数", "極値", "グラフの平行移動"], "[2]": ["微分法", "積分法", "3次関数のグラフ", "接線", "定積分と面積"] }, aggregate_tags: ["微分法", "積分法", "定積分"] },
          tips: { topic: "定積分で表された関数の増減と絶対値含む面積", stumbling_points: ["G(x)=∫f(t)dtの平行移動の意味。", "絶対値含む関数のグラフと積分区間分割。"], key_to_start: "定積分は両辺をxで微分→導関数→増減表。面積はグラフの上下関係と交点を正確にしましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_2nd_q3", name: "第3問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["期待値と分散", "二項分布", "正規分布近似"], "(2)": ["母平均の推定", "信頼区間"], "(3)": ["標本の大きさと信頼区間の幅"] }, aggregate_tags: ["統計的な推測", "二項分布", "母平均の推定"] },
          tips: { topic: "二項分布の正規分布近似と母平均の信頼区間", stumbling_points: ["二項分布B(n,p)の平均np・分散npq。", "信頼区間の幅の公式で√nの逆算。"], key_to_start: "B(n,p)→N(np,npq)近似→標準化。信頼区間は2×1.96×σ/√nしましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_2nd_q4", name: "第4問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["数列の和と一般項", "等比数列の和"], "[2]": ["漸化式", "図形の敷き詰め", "連立漸化式"] }, aggregate_tags: ["数列", "漸化式"] },
          tips: { topic: "和と一般項の関係と図形敷き詰めの漸化式", stumbling_points: ["a_n=S_n-S_{n-1}でn=1の確認。", "タイルの右端の置き方分類→連立漸化式。"], key_to_start: "a_n=S_n-S_{n-1}(n≧2)を確実に。敷き詰めは誘導と破線に注目しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2021_2nd_q5", name: "第5問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["空間ベクトル", "内分点", "垂直条件", "内積"], "(2)": ["位置ベクトル", "垂直条件の連立", "点の存在範囲"] }, aggregate_tags: ["ベクトル", "空間ベクトル"] },
          tips: { topic: "空間図形のベクトル垂直条件と点の位置特定", stumbling_points: ["垂線の足のベクトル立式→内積=0で逆算。", "平面上の点のs,tの連立方程式処理。"], key_to_start: "垂線→内積=0。平面上の点はs,tで表して2つの垂直条件を連立しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 2022年 本試験 =====================
    {
      id: "2022_main", title: "2022年 本試験",
      questions: [
        { id: "2022m_q1", name: "第1問", score: 30, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["図形と方程式", "円と直線", "軌跡と領域", "接線"], "[2]": ["対数関数", "底の変換公式", "対数の大小比較", "不等式"] }, aggregate_tags: ["図形と方程式", "指数関数と対数関数"] },
          tips: { topic: "円と直線の位置関係・領域と対数の大小比較", stumbling_points: ["円と直線が接する条件で点と直線の距離=半径。", "底の変換→底の大小で不等号の向き変化。"], key_to_start: "[1]は中心と直線の距離=半径。[2]は底の変換で統一→誘導に従い文字置換しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022m_q2", name: "第2問", score: 30, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["微分法", "3次関数のグラフ", "極値", "方程式の実数解の個数"], "[2]": ["2曲線の交点", "定積分と面積"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "3次関数のグラフと実数解の個数、2曲線間の面積", stumbling_points: ["極大値と極小値の符号で実数解の個数分類。", "S=Tの条件→∫(g-h)dx=0の簡略化。"], key_to_start: "導関数→増減表→極値の符号で解の個数。隣り合う面積が等しい→通して積分=0しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022m_q3", name: "第3問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)-(2)": ["二項分布", "正規分布近似", "標本比率"], "(3)": ["確率密度関数", "連続型確率変数", "期待値"] }, aggregate_tags: ["統計的な推測", "確率分布", "正規分布"] },
          tips: { topic: "二項分布の正規分布近似と確率密度関数", stumbling_points: ["標本比率の平均と分散→標準化→正規分布表。", "確率密度関数の全面積=1の条件から連立方程式。"], key_to_start: "前半はB→N→標準化の王道。後半は∫f(x)dx=1を台形面積で捉えましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022m_q4", name: "第4問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["漸化式の立式", "ダイヤグラム"], "(2)": ["階差数列", "数列の一般項", "指数の方程式・不等式"] }, aggregate_tags: ["数列", "漸化式", "階差数列"] },
          tips: { topic: "歩行者と自転車のモデル化と漸化式・階差数列", stumbling_points: ["状況設定から次の項への変化を式に翻訳。", "階差数列でΣ計算とn=1の確認。"], key_to_start: "時間-位置グラフ(ダイヤグラム)を描いて整理→直線の傾き(速さ)で漸化式しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022m_q5", name: "第5問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["平面ベクトル", "内分点", "垂直と内積"], "(2)": ["領域と位置ベクトル", "点の位置判定"], "(3)": ["図形の対称性", "ベクトルの大きさ"] }, aggregate_tags: ["ベクトル", "平面ベクトル"] },
          tips: { topic: "円上の点の位置ベクトルと内積・垂直条件", stumbling_points: ["垂直条件→内積=0でパラメータt,kを求める。", "直線で分割された領域でのベクトル係数の符号判定。"], key_to_start: "垂直→内積=0。対称性はCR=-CQなどベクトル演算で計算短縮しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 2022年 追試験 =====================
    {
      id: "2022_extra", title: "2022年 追試験",
      questions: [
        { id: "2022e_q1", name: "第1問", score: 30, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["図形と方程式", "直線と円", "定点を通る直線", "領域"], "[2]": ["三角関数", "三角関数の相互関係", "加法定理", "関数の値域"] }, aggregate_tags: ["図形と方程式", "三角関数"] },
          tips: { topic: "定点を通る直線束と円の領域、三角関数の分数式の値域", stumbling_points: ["kの恒等式から定点を求める手法。", "加法定理で展開→tanθの1次式に帰着。"], key_to_start: "[1]は直線をkで整理→定点。[2]は展開してcosθで割り→tanθの式にしましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022e_q2", name: "第2問", score: 30, timeMinutes: 15,
          tags: { sub_questions: { "(1)": ["微分法", "極値", "積分法", "定積分と面積"], "(2)": ["3次関数のグラフ", "グラフの平行移動", "係数比較"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "3次関数のグラフの平行移動と2曲線間の面積", stumbling_points: ["x→x-pに置換して展開→係数比較。", "文字定数含む2曲線の交点と上下関係。"], key_to_start: "平行移動はx→x-pで展開→係数比較。平方完成した1次係数が同じなら一致しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022e_q3", name: "第3問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)-(2)": ["二項分布", "確率分布", "期待値", "分散"], "(3)": ["確率の総和"], "(4)": ["標本平均", "正規分布近似", "標準化"] }, aggregate_tags: ["統計的な推測", "確率分布"] },
          tips: { topic: "階乗含む確率分布と標本平均の正規分布近似", stumbling_points: ["新しい確率分布で∑P=1からαを決定。", "標本平均の標準偏差=σ/√nの適用忘れ。"], key_to_start: "見たことない分布でも∑P=1とE(X)=Σ(x·P)の基本定義で表を作成しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022e_q4", name: "第4問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["階差数列", "数列の和", "シグマ計算"], "(2)-(3)": ["数列の差", "偶奇の場合分け", "和の比較"], "(4)": ["初項の変更", "条件式の適用"] }, aggregate_tags: ["数列", "階差数列"] },
          tips: { topic: "階差数列と(-1)^nを含む数列の差の評価", stumbling_points: ["階差の公式でn≧2条件とΣ上限n-1。", "(-1)^nの奇偶場合分けの正確な評価。"], key_to_start: "a_nとb_nの差の数列の階差→多項式を相殺してシンプルにしましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2022e_q5", name: "第5問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["空間座標", "成分計算", "内積"], "(2)": ["空間ベクトル", "ひし形の性質", "垂直条件"], "(3)": ["平面と直線の交点", "内積の符号"] }, aggregate_tags: ["ベクトル", "空間ベクトル"] },
          tips: { topic: "空間内のひし形の性質とベクトル・点と平面の位置関係", stumbling_points: ["ひし形の4辺等しい+対角線垂直→内積で翻訳。", "法線ベクトルとの内積の符号で面のどちら側か判定。"], key_to_start: "ひし形→隣辺の長さ等しい+対角線の内積=0。位置判定は法線との内積符号しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 2023年 本試験 =====================
    {
      id: "2023_main", title: "2023年 本試験",
      questions: [
        { id: "2023m_q1", name: "第1問", score: 30, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["三角関数", "三角方程式・不等式", "加法定理", "和と積の公式"], "[2]": ["指数関数と対数関数", "対数の性質", "背理法", "無理数の証明"] }, aggregate_tags: ["三角関数", "指数関数と対数関数"] },
          tips: { topic: "三角関数の不等式の解法と対数が無理数であることの証明", stumbling_points: ["sin4x-sin3x>0を積の形に変形する発想。", "log₂3が有理数と仮定→p/q→2^p=3^qで矛盾の背理法。"], key_to_start: "和差を積に変形→因数の符号の組合せでxの範囲。有理数仮定→指数に書き換え→比較しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023m_q2", name: "第2問", score: 30, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["微分法", "3次関数の最大値", "図形への応用"], "[2]": ["積分法", "定積分と面積", "関数のモデリング"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "箱の容積の最大化(微分)と積算温度(定積分)による桜の開花予想", stumbling_points: ["展開図から辺の長さをxで表す→定義域。", "折れ線グラフのモデリング→積分→面積計算で開花日逆算。"], key_to_start: "辺の長さ→体積V(x)の3次関数→微分→増減表→極値。面積は台形計算で簡略化しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023m_q3", name: "第3問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)-(2)": ["確率分布", "期待値", "分散", "確率変数の変換"], "(3)": ["正規分布近似", "標本平均", "信頼区間"] }, aggregate_tags: ["統計的な推測", "確率分布", "正規分布"] },
          tips: { topic: "カードの最小値・最大値の確率分布と母平均の推定", stumbling_points: ["4×4=16通りの全パターン数え上げ。", "Z=5-Xの変量変換でE(Y),σ(Y)のショートカット。"], key_to_start: "16通り書き出し→確率分布表完成が最優先。標本平均→正規近似→信頼区間しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023m_q4", name: "第4問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["数列", "漸化式の立式"], "(2)-(3)": ["等比数列の和", "複利計算", "指数不等式"] }, aggregate_tags: ["数列", "漸化式", "等比数列の和"] },
          tips: { topic: "預金(複利計算)のモデリングと等比数列の和", stumbling_points: ["利息のつき方のタイミング→1.01の掛け回数。", "n年目までの総額=等比数列の和→指定額以上の不等式。"], key_to_start: "誘導に従い1年目,2年目…と推移を書き出し→前年×1.01+入金の漸化式を可視化しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023m_q5", name: "第5問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)-(2)": ["空間ベクトル", "内積", "垂直条件"], "(3)": ["ベクトルの図形的意味", "正射影ベクトル", "内分・外分"] }, aggregate_tags: ["ベクトル", "空間ベクトル"] },
          tips: { topic: "空間図形のベクトルの垂直条件と内積の図形的意味", stumbling_points: ["垂直条件→内積=0でパラメータ求め。", "k(AP·AB)=AP·ACから正射影を読み解く抽象的思考。"], key_to_start: "垂直・直角→内積=0。後半は両辺を長さで割ってcos(正射影)の形にしましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 2023年 追試験 =====================
    {
      id: "2023_extra", title: "2023年 追試験",
      questions: [
        { id: "2023e_q1", name: "第1問", score: 30, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["複素数と方程式", "高次方程式", "剰余の定理", "共役な複素数"], "[2]": ["指数関数と対数関数", "常用対数", "直線の方程式", "対数のモデル"] }, aggregate_tags: ["複素数と方程式", "指数関数と対数関数"] },
          tips: { topic: "複素数を解にもつ高次方程式と常用対数によるデータモデル", stumbling_points: ["虚数解1+√2iの共役1-√2iも解→2次方程式S(x)=0。", "y=k(x-22)+p₁の対数定義から小数部分で最高位特定。"], key_to_start: "虚数解→共役も解→2次式で割る。対数はlog₁₀の小数部分を挟み撃ちで評価しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023e_q2", name: "第2問", score: 30, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["微分法", "3次関数の最大値", "図形への応用"], "[2]": ["積分法", "定積分と恒等式", "定積分と数列の和"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "直方体の容積最大化と定積分によるΣk²の計算", stumbling_points: ["折り代やふたの考慮→辺の長さの定義域。", "∫f(x)dx=t²の恒等式→係数比較→n回足し合わせ→Σk²。"], key_to_start: "[1]は展開図→微分→増減表。[2]はtの恒等式→左辺計算→係数比較しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023e_q3", name: "第3問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)-(2)": ["確率分布", "期待値", "分散", "確率変数の変換"], "(3)": ["標本平均", "正規分布近似", "信頼区間", "母平均の推定"] }, aggregate_tags: ["統計的な推測", "確率分布"] },
          tips: { topic: "カードの最大・最小の確率分布と母平均の推定", stumbling_points: ["X,Yの確率分布の数え落とし。", "E(aX+b)=aE(X)+b, σ(aX+b)=|a|σ(X)の公式活用。"], key_to_start: "4×4=16通り全パターン→確率分布表完成→信頼区間は公式代入しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023e_q4", name: "第4問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["等差数列", "一般項", "数列の和と増減"], "(2)": ["漸化式", "分数漸化式", "等比数列への帰着"] }, aggregate_tags: ["数列", "等差数列", "漸化式"] },
          tips: { topic: "等差数列の和の増減と分数漸化式の処理", stumbling_points: ["a_n<0の最小nから和S_nの最大タイミング把握。", "分数漸化式でd_n=1/(c_n-20)を代入→繁分数処理。"], key_to_start: "一般項の符号切り替わり→和の増減。分数漸化式はd_nの定義からc_n変形→代入→整理しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2023e_q5", name: "第5問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["空間座標", "ベクトル方程式", "外分点"], "(2)": ["空間ベクトル", "内積", "なす角", "2次方程式"], "(3)": ["直線と平面の交点", "位置ベクトルの実数倍"] }, aggregate_tags: ["ベクトル", "空間ベクトル"] },
          tips: { topic: "空間座標の直線のベクトル方程式と内積による図形量", stumbling_points: ["外分比の読み取り→AC=5ABの距離比。", "∠CPD=120°→内積方程式→2乗→tの2次方程式。", "xy平面との交点→z成分=0。"], key_to_start: "xy平面上→z成分=0。角度条件→内積の定義式で方程式化しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 2024年 本試験 (新課程IIBC) =====================
    {
      id: "2024_main", title: "2024年 本試験",
      questions: [
        { id: "2024m_q1", name: "第1問", score: 30, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["対数関数", "対数のグラフ", "対数不等式", "領域"], "[2]": ["複素数と方程式", "高次方程式", "剰余の定理", "恒等式"] }, aggregate_tags: ["指数関数と対数関数", "複素数と方程式"] },
          tips: { topic: "対数関数のグラフと領域、剰余の定理", stumbling_points: ["0<log_x y<1で底xの場合分け忘れ。", "2次式S(x)で割った余りをmx+nとおき→代入→係数比較。"], key_to_start: "対数不等式は底の場合分け→真数の大小。整式は割られる式=割る式×商+余りの恒等式しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2024m_q2", name: "第2問", score: 30, timeMinutes: 15,
          tags: { sub_questions: { "[1]": ["微分法", "3次関数のグラフ", "最大値・最小値", "体積の最大化"], "[2]": ["積分法", "定積分と面積", "1次・2次関数のモデリング"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "3次関数の極値とモデル計算", stumbling_points: ["文字定数含む3次関数の極値条件と増減表。", "折れ線+2次関数の接続の区間別積分。"], key_to_start: "導関数→増減表→グラフ概形。面積は区間ごとに分けて丁寧に積分しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2024m_q3", name: "第3問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["正規分布近似", "母平均の推定", "信頼区間"], "(2)": ["確率分布", "期待値", "確率変数の漸化式"] }, aggregate_tags: ["統計的な推測", "確率分布", "母平均の推定"] },
          tips: { topic: "標本平均を用いた母平均の推定と事象の連続の期待値", stumbling_points: ["標本のS(標準偏差)でσを代用して信頼区間。", "3週連続晴れの条件を整理→漸化式的に期待値読み解き。"], key_to_start: "信頼区間は標本平均±1.96×σ/√n。期待値はk=4,5の具体例で規則性発見しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2024m_q4", name: "第4問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)-(2)": ["等差数列", "漸化式", "等比数列への帰着"], "(3)": ["漸化式の条件", "数学的帰納法", "命題の真偽"] }, aggregate_tags: ["数列", "漸化式"] },
          tips: { topic: "漸化式の解法と特定条件を満たす証明", stumbling_points: ["2b_{n+1}-b_n+3=0の特性方程式で等比数列化。", "c_n≠-3の証明で帰納法や対偶の論理。"], key_to_start: "特性方程式で等比数列に帰着。証明はn=1,2,3を代入して挙動確認しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "2024m_q5", name: "第5問", score: 20, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["空間座標", "ベクトルの成分計算", "内積"], "(2)": ["直線のベクトル方程式", "垂直条件", "最小値"], "(3)": ["空間の2直線の距離", "共通垂線"] }, aggregate_tags: ["ベクトル", "空間ベクトル", "共通垂線"] },
          tips: { topic: "空間内の直線のベクトル方程式と2直線間の最短距離", stumbling_points: ["OP=OA+sABのパラメータ立式。", "PQ最小→両直線と垂直(共通垂線)の内積計算。"], key_to_start: "直線は通る点+実数倍の方向ベクトル。距離最小→垂直条件を連立しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    }
  ]
};
