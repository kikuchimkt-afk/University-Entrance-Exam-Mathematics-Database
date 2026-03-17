// =============================================================================
// 河合塾 2025年 マーク式総合問題集 数学IIBC — メタデータ
// =============================================================================
// 新課程形式: 各回7問
// 第1問: 三角関数  第2問: 指数対数/図形と方程式  第3問: 微積分
// 第4問: 数列  第5問: 統計  第6問: ベクトル  第7問: 曲線/複素数平面

var BOOK_DATA_kawai_2025_IIBC = {
  id: "kawai_2025_IIBC",
  publisher: "河合塾",
  year: 2025,
  subject: "数学IIBC",
  title: "2025年 河合塾マーク式総合 数学IIBC",
  basePath: "data/kawai_2025_IIBC/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        { id: "r1q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["加法定理"], "(2)": ["三角関数の合成"], "(3)": ["軌跡", "扇形の面積"] }, aggregate_tags: ["三角関数", "図形と方程式"] },
          tips: { topic: "三角関数の加法定理・合成と図形の軌跡・面積", stumbling_points: ["合成後θの変域から新しい角の変域を正しく求められない。", "合成された式から点が描く軌跡が円周上のどの部分か把握できない。"], key_to_start: "加法定理と合成を正確に適用。軌跡や面積は必ず円を描き始点と終点の角度を図示しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r1q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["対数の性質", "数の大小比較"], "(2)": ["常用対数", "桁数", "一の位の数"] }, aggregate_tags: ["指数関数と対数関数"] },
          tips: { topic: "対数を用いた数の大小比較と常用対数による桁数判定", stumbling_points: ["対数の底を揃えて比較する変形で混乱。", "Nがn桁→10^(n-1)≦N<10^nの翻訳。巨大累乗の一の位の周期性。"], key_to_start: "大小比較は同じ底の対数で比較。桁数は常用対数。一の位は小さい数で実験→サイクルの規則性しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r1q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["導関数", "接線", "関数の増減", "グラフの共有点"], "[2]": ["定積分", "面積", "相加平均と相乗平均"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "微積分を用いた関数のグラフの性質と面積の最大・最小", stumbling_points: ["接点以外の交点で3次方程式の因数分解。", "面積式の変数が分母分子に分かれた形から相加相乗平均の利用。"], key_to_start: "x=αで接するなら(x-α)²を因数に持つ性質で割り算省略。和の形で逆数関係→相加相乗平均しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r1q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["等差数列", "等比数列", "群数列の項数"], "(2)": ["群数列の位置特定"], "(3)": ["群内の項の和"] }, aggregate_tags: ["数列"] },
          tips: { topic: "等差・等比数列の基本と群数列", stumbling_points: ["第k群の最初/最後の項がもとの数列の第何項か把握。", "群の項数の等比数列の和の公式適用。群内の等差数列の和の項数・初項・末項の混同。"], key_to_start: "第1群〜第(k-1)群の総項数を求める→第k群の最初の項のインデックス特定しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r1q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["確率分布", "期待値", "分散"], "(2)": ["二項分布", "確率変数の変換", "変換後の期待値と分散"] }, aggregate_tags: ["統計的な推測"] },
          tips: { topic: "確率分布表の作成と二項分布を用いた変量変換", stumbling_points: ["組み合わせCの計算ミスで確率の和が1にならない。", "Z=aW+bの分散でV(aX+b)=a²V(X)の2乗を忘れる。"], key_to_start: "確率分布表を正しく書き出し定義式通りに計算。反復試行→二項分布→公式活用しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r1q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(全体)": ["位置ベクトル", "内分点", "共線条件", "内積", "ベクトルの大きさ"] }, aggregate_tags: ["ベクトル"] },
          tips: { topic: "平面上の位置ベクトルと交点・線分の長さ", stumbling_points: ["共線条件をs,(1-s)で2通りのベクトル式で表現できない。", "係数比較(ベクトルの1次独立性)の立式忘れ。"], key_to_start: "交点は2つの直線上の点→2通りの式→係数比較。線分の長さは2乗して内積の式を展開しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r1q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["複素数の図形表示", "回転と拡大", "偏角の範囲"], "(2)": ["ド・モアブルの定理", "領域と条件"] }, aggregate_tags: ["平面上の曲線と複素数平面"] },
          tips: { topic: "複素数平面上の円と極形式・ド・モアブルの定理", stumbling_points: ["zz̄の方程式を平方完成して|z-α|=rの形に直せない。", "複素数の掛け算を回転と拡大として捉えられない。虚部正の条件→偏角の不等式。"], key_to_start: "(z-α)(z̄-ᾱ)=r²の形を作る。掛け算は極形式にして長さr倍・角θ回転と図形的に処理しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 第2回 =====================
    {
      id: "round2", title: "第2回",
      questions: [
        { id: "r2q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(全体)": ["直線の方程式", "点と直線の距離", "領域と不等式", "内心の座標"] }, aggregate_tags: ["図形と方程式"] },
          tips: { topic: "3直線で囲まれた三角形の内接円の中心（内心）", stumbling_points: ["点と直線の距離の絶対値を領域の上下関係で正しく外せない。", "内心=3辺からの距離が等しい点の立式。"], key_to_start: "内心=3直線から等距離。d₁=d₂=d₃の等式。絶対値は点が直線の上/下で符号判定しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r2q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["指数関数と対数関数の関係", "グラフの対称移動"], "(2)": ["指数方程式", "グラフの交点"], "(3)": ["相加平均と相乗平均", "指数の最小値"] }, aggregate_tags: ["指数関数・対数関数"] },
          tips: { topic: "指数関数のグラフの性質と方程式・最小値への応用", stumbling_points: ["底の変換公式による統一の操作。", "4^x+4^{-x}の和の最小値で相加相乗平均の利用。"], key_to_start: "グラフの対称性は逆関数を疑う。共通部分をtと置換→相加相乗平均しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r2q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["導関数", "接線", "3次関数のグラフ", "方程式の実数解の個数"], "[2]": ["不定積分", "定積分", "面積", "面積の最小値"] }, aggregate_tags: ["微分法・積分法"] },
          tips: { topic: "曲線外の点から引く接線の本数と定積分の面積最小値", stumbling_points: ["接点と通過点の区別がつかない。", "面積の定積分で被積分関数の符号(上下関係)が区間で変わる。"], key_to_start: "通る接線は接点(t,f(t))で接線方程式→通過点代入→tの方程式。概形を描いて上下関係を確認しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r2q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["等差数列", "部分分数分解", "数列の和"], "[2]": ["数学的帰納法", "漸化式", "対数を用いた数列の変換"] }, aggregate_tags: ["数列"] },
          tips: { topic: "等差数列の部分分数分解と非線形漸化式の対数による等比数列化", stumbling_points: ["1/(a_n·a_{n+1})の和で公差利用の部分分数分解。", "y_{n+1}=2y_n²の漸化式で対数→等比数列への帰着。"], key_to_start: "分母に積→部分分数分解で望遠鏡和。誘導に従い両辺対数→乗法を和に・累乗を係数に変換しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r2q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(前半)": ["確率分布", "期待値と分散の性質", "確率変数の1次変換"], "(後半)": ["反復試行", "二項分布", "正規分布による近似", "標準化"] }, aggregate_tags: ["統計的な推測"] },
          tips: { topic: "確率変数の和・定数倍の期待値・分散と二項分布の正規近似", stumbling_points: ["V(aX)=a²V(X)の2乗忘れ。", "300人中85人以上→B(300,1/4)→正規近似→標準化のステップ。"], key_to_start: "E(aX+b)=aE(X)+b, V(aX+b)=a²V(X)を暗記。nが大→B(n,p)→N→Zの変換ルートしましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r2q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(全体)": ["位置ベクトル", "ベクトルの大きさ", "内積", "点の存在範囲"] }, aggregate_tags: ["ベクトル"] },
          tips: { topic: "平面上のベクトルを用いた図形の計量と点の存在範囲", stumbling_points: ["大きさ√2の条件→両辺2乗して内積式展開。", "係数がすべて正で和<1が三角形内部の条件。"], key_to_start: "ベクトルの大きさ→2乗して内積展開。点の存在範囲は1次結合の係数の和と正負で位置特定しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r2q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["複素数が実数である条件", "共役複素数"], "(2)": ["極形式", "ド・モアブルの定理", "楕円の媒介変数表示", "楕円の焦点"] }, aggregate_tags: ["平面上の曲線と複素数平面"] },
          tips: { topic: "複素数が実数になる条件と極形式による曲線の媒介変数表示", stumbling_points: ["α=ᾱの共役式で立式できない。", "w=z+3/zの軌跡で極形式→実部虚部分離→sin²+cos²=1でθ消去→楕円。"], key_to_start: "実数条件はz=z̄。軌跡は極形式代入→実部虚部分離→パラメータ消去しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 第3回 =====================
    {
      id: "round3", title: "第3回",
      questions: [
        { id: "r3q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["2倍角の公式", "半角の公式", "三角関数の合成", "最大値と最小値"], "(2)": ["三角方程式", "解の個数"] }, aggregate_tags: ["三角関数"] },
          tips: { topic: "三角関数の加法定理・合成と方程式の解の個数", stumbling_points: ["2倍角・半角の逆適用の符号や係数ミス。", "単位円上でy=kの交点の数を数え間違える。"], key_to_start: "2倍角・半角で角を2θに統一→sin,cosの1次式→合成。解の個数は単位円を描いて視覚的に確認しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r3q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["含有量の計算"], "(2)": ["条件の不等式化"], "(3)": ["連立不等式と領域"], "(4)": ["線形計画法", "目的関数の最大・最小"] }, aggregate_tags: ["図形と方程式"] },
          tips: { topic: "連立不等式の表す領域と線形計画法", stumbling_points: ["文章題からx,yの係数と定数項の不等式の立式。", "目的関数の直線のy切片とkの大小関係の取り違え。"], key_to_start: "求める式=kとおき→領域内で直線を平行移動→各直線の傾きと比較→どの頂点で最小/最大か判定しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r3q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["導関数", "極値をもつ条件", "解の配置"], "[2]": ["定積分で表された関数", "2曲線間の面積", "1/6公式"] }, aggregate_tags: ["微分法", "積分法"] },
          tips: { topic: "3次関数の極値の条件と定積分で表された関数・面積の最小値", stumbling_points: ["極値条件をf'(x)=0の解の配置問題に帰着できない。", "面積でα,βの直接計算に固執し1/6公式を使えない。"], key_to_start: "f'(x)の放物線のグラフ→指定区間でx軸と交わる条件。面積は1/6公式を最初から狙って式変形しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r3q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["等比数列の和"], "(2)": ["群数列の規則性", "等差数列と等比数列の積の和"], "(3)": ["等差×等比の和の計算"] }, aggregate_tags: ["数列"] },
          tips: { topic: "行と列に異なる規則をもつ数列と等差×等比の形の和", stumbling_points: ["縦横で規則が違う表の一般項を文字式で表せない。", "等差×等比の和Sで公比rを掛けたrSを引く定石忘れ。"], key_to_start: "行と列の規則を式に→一般項確保。等差×等比は全体Tから3Tを1つずらして引き→等比数列の和にしましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r3q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["期待値", "分散", "確率変数の関係式と期待値"], "[2]": ["正規分布", "標準化", "母平均の推定", "信頼区間"] }, aggregate_tags: ["統計的な推測"] },
          tips: { topic: "確率変数の演算と正規分布・母平均の推定", stumbling_points: ["X+Y=7で従属関係なのにE(XY)=E(X)E(Y)と誤算。", "信頼区間の幅の公式やσ/√nの分散変化。"], key_to_start: "Y=7-X→E(XY)=E(7X-X²)でXだけに帰着。標準化→信頼区間の幅の公式を正確に暗記しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r3q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(全体)": ["空間ベクトル", "内積と三角形の面積", "平面の法線ベクトル", "垂線の足", "四面体の体積"] }, aggregate_tags: ["ベクトル"] },
          tips: { topic: "空間ベクトルにおける平面への垂線の足と四面体の体積", stumbling_points: ["法線ベクトルの内積計算や連立方程式の計算ミス。", "垂線の足で直線上+平面上の2条件を係数比較する手順。"], key_to_start: "法線は平面上の独立2ベクトルとの内積=0。垂線の足は平面上の表現と法線方向の表現2通りで係数比較しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r3q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["複素数が実数である条件", "共役複素数"], "(2)": ["極形式", "図形の回転", "楕円の媒介変数表示", "軌跡"] }, aggregate_tags: ["平面上の曲線と複素数平面"] },
          tips: { topic: "複素数の実数条件と極形式を用いた図形の変換（回転と楕円）", stumbling_points: ["z=x+yi代入で計算が泥沼化。", "w=z+3/zの軌跡で極形式→実部虚部分離→θ消去→楕円の発想。"], key_to_start: "実数条件はz=z̄で式変形。軌跡は極形式代入→実部虚部分離→三角関数の相互関係でθ消去→楕円しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    },
    // ===================== 第4回 =====================
    {
      id: "round4", title: "第4回",
      questions: [
        { id: "r4q1", name: "第1問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "(1)": ["加法定理"], "(2)": ["2倍角の公式", "三角方程式"] }, aggregate_tags: ["三角関数"] },
          tips: { topic: "三角関数の加法定理と2倍角の公式を用いた方程式の解法", stumbling_points: ["加法定理を逆に用いてcos(α-β)の形にまとめる変形。", "2θ-π/3の角の置き換え後の範囲の正確な算出。"], key_to_start: "基本公式を正確に適用→角を置換→単位円を描いて新変数の範囲と解を視覚的に確認しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r4q2", name: "第2問", score: 15, timeMinutes: 10,
          tags: { sub_questions: { "[1]": ["指数方程式", "対数の定義"], "[2]": ["指数関数の応用（文章題）", "不等式"] }, aggregate_tags: ["指数関数・対数関数"] },
          tips: { topic: "指数方程式の解法と指数関数を用いた文章題", stumbling_points: ["3^{2x+1}=3·(3^x)²の変形の指数法則ミス。", "文章題でn=0の初期状態を見落としてk,aが求められない。"], key_to_start: "共通の形をtで置換→見通し良く。文章題はn=0の値とn=2の値を関数に代入→定数決定しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r4q3", name: "第3問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["導関数", "極値", "方程式の実数解の個数"], "(2)": ["接線の方程式", "2次関数の決定", "定積分と面積", "1/6公式"] }, aggregate_tags: ["微分法・積分法"] },
          tips: { topic: "3次関数のグラフと方程式の実数解、放物線と直線の面積", stumbling_points: ["f(x)=kの解の個数をy=f(x)とy=kの共有点で捉えられない。", "g(2)=f(2)かつg'(2)=f'(2)の2条件の立式。面積の1/6公式活用。"], key_to_start: "kを分離して直線y=kを動かして視覚的に捉える。放物線と直線の面積はα,βで1/6公式しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r4q4", name: "第4問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["等差数列の和", "階差数列"], "[2]": ["数列の規則性", "群数列", "群の和"] }, aggregate_tags: ["数列"] },
          tips: { topic: "等差数列・階差数列と平方根の整数部分に基づく群数列", stumbling_points: ["b_{n+1}-b_n=a_nからΣの公式導出と適用。", "√nの整数部分k→k²≦n<(k+1)²の不等式。最後の群の項数が途中まで。"], key_to_start: "階差数列は定義通りに一般項。値がkとなる項数は(k+1)²-k²=2k+1個を不等式から丁寧に数えましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r4q5", name: "第5問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "[1]": ["確率分布", "期待値と分散", "確率変数の変換"], "[2]": ["二項分布", "正規分布への近似", "標準化", "母比率の区間推定"] }, aggregate_tags: ["統計的な推測"] },
          tips: { topic: "確率変数の期待値・分散と二項分布→正規近似→母比率推定", stumbling_points: ["Y=3-Xを使わずE(XY)を直接計算して手間取る。", "信頼区間の幅の公式の2倍を忘れがち。"], key_to_start: "X+Y=3→Y消去してXだけの式→E,V公式適用。標準化→信頼区間(幅)の公式を正確に暗記しましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r4q6", name: "第6問", score: 15, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["位置ベクトル", "内分点", "交点のベクトル表現", "1次独立"], "(2)": ["重心", "ベクトルの大きさ", "内積", "三角形の面積比"] }, aggregate_tags: ["ベクトル"] },
          tips: { topic: "平面上の交点の位置ベクトルと三角形の面積比", stumbling_points: ["交点Pの2通りのベクトル式から係数比較の定石手順。", "|AB|=√17を両辺2乗してOA·OBの値を求める。", "面積比の線分比の正しい読み取り。"], key_to_start: "交点は2経路で表して係数比較(1次独立)。面積比は基準の△OABから辺の比で段階的にパズルしましょう。" },
          problemImages: [], answerImages: [] },
        { id: "r4q7", name: "第7問", score: 10, timeMinutes: 12,
          tags: { sub_questions: { "(1)": ["円と直線の交点", "解と係数の関係", "2点間の距離"], "(2)": ["点と直線の距離", "弦の長さ", "三平方の定理"] }, aggregate_tags: ["図形と方程式"] },
          tips: { topic: "円と直線の交点間の距離（弦の長さ）の代数的・幾何的アプローチ", stumbling_points: ["（太郎）解の公式でルートが複雑化。", "（花子）円の半径・弦の半分・中心から弦への垂線の直角三角形に気づけない。"], key_to_start: "代数的はα,βで解と係数の関係。図形的は中心→弦への垂線dで三平方r²=d²+(l/2)²が最速しましょう。" },
          problemImages: [], answerImages: [] }
      ]
    }
  ]
};
