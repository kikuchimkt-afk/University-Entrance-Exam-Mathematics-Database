// =============================================================================
// 駿台 2023年 共通テスト実践問題集 数学IA — メタデータ
// =============================================================================
// 旧課程形式: 各回5問（第3問=確率, 第4問=整数(選択), 第5問=図形(選択)）
// 注意: PDFは問題+解答一体型（第X回_問題解答.pdf）
// 注意: 第3回のファイル名にスペースあり（第3回 _問題解答）

var BOOK_DATA_sundai_2023_IA = {
  id: "sundai_2023_IA",
  publisher: "駿台",
  year: 2023,
  subject: "数学IA",
  title: "2023年 駿台実践問題集 数学IA",
  basePath: "data/sundai_2023_IA/",
  rounds: [
    // ===================== 第1回 =====================
    {
      id: "round1", title: "第1回",
      questions: [
        {
          id: "r1q1", name: "第1問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["数と式", "絶対値を含む1次不等式"],
              "[2]": ["図形と計量", "正弦定理・余弦定理", "空間図形への応用"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "絶対値を含む不等式と平面→空間図形への展開（三角比）",
            stumbling_points: ["絶対値の場合分けと「すべての実数で成り立つ」→「関数の最小値>a」の読み換えで戸惑う。", "平面図形を折り曲げた四面体で空間的な直角三角形を見つけ出すのが難しい。"],
            key_to_start: "[1]は絶対値の中身の正負で場合分け→関数グラフで視覚化。[2]は折る前に線分長をすべて算出してから空間での直角三角形に適用しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第1回_問題解答_page${i+2}.png`),
          answerImages: Array.from({length: 10}, (_, i) => `images/第1回_問題解答_page${i+18}.png`)
        },
        {
          id: "r1q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "グラフとx軸の共有点", "集合と命題", "必要条件と十分条件"],
              "[2]": ["データの分析", "箱ひげ図と四分位範囲", "分散の合成", "散布図とヒストグラム"]
            },
            aggregate_tags: ["2次関数", "集合と命題", "データの分析"]
          },
          tips: {
            topic: "2次関数の解の配置（文字係数）と合成された分散のデータ分析",
            stumbling_points: ["x²の係数aの正負で凸の向きが変わる場合分けで混乱する。", "2集団の合成分散で「2乗の和」を逆算する式変形が思いつきにくい。"],
            key_to_start: "[1]は文字aの符号でグラフ分類→端点のy座標の符号から解の範囲を特定。[2]は「データの2乗の和」を経由して合成する定石を使いましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第1回_問題解答_page${i+10}.png`),
          answerImages: Array.from({length: 8}, (_, i) => `images/第1回_問題解答_page${i+28}.png`)
        },
        {
          id: "r1q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["場合の数と確率", "同じものを含む順列", "条件を満たす数の数え上げ"],
              "[2]": ["場合の数と確率", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "同じものを含む順列と条件付き確率の計算",
            stumbling_points: ["最高位に0が来ない＋偶数条件の同時処理で数え漏れ・重複が発生。", "積集合と条件付き確率の定義を混同して分母を全体にしてしまう。"],
            key_to_start: "カードの区別スタンスを統一。条件付き確率は分母の条件事象の数を先に確実に求めましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第1回_問題解答_page${i+14}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第1回_問題解答_page${i+22}.png`)
        },
        {
          id: "r1q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["整数の性質", "1次不定方程式", "ユークリッドの互除法の応用"],
              "[2]": ["整数の性質", "最大公約数", "正の整数解が存在する条件"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "1次不定方程式の特殊解と正の整数解の条件",
            stumbling_points: ["係数・右辺が大きい不定方程式で特殊解を見つける計算でつまずく。", "一般解からx>0,y>0の連立不等式で範囲を絞り込む処理が不慣れ。"],
            key_to_start: "互除法で=1の形に帰着→右辺倍して特殊解。一般解からx>0,y>0で即座にkの範囲を出しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題解答_page${i+15}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第1回_問題解答_page${i+26}.png`)
        },
        {
          id: "r1q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["図形の性質", "円と直線", "方べきの定理"],
              "[2]": ["図形の性質", "メネラウスの定理", "接弦定理"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "複数の円における方べきの定理とメネラウスの定理の活用",
            stumbling_points: ["2つの円が重なる構図でどの直線を割線にして方べきを適用するか見落とす。", "交点位置を数式の大小関係から判定するアプローチに気づきにくい。"],
            key_to_start: "円と交わる直線で方べきの式を書き出す。線分比はメネラウスのキツネの形をなぞって立式しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第1回_問題解答_page${i+15}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/第1回_問題解答_page${i+30}.png`)
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
              "[1]": ["数と式", "分母の有理化", "絶対値を含む1次不等式", "場合分け"],
              "[2]": ["図形と計量", "三角比", "正弦定理・余弦定理", "空間図形（測量問題）"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "文字を含む絶対値不等式と三角比を用いた測量問題",
            stumbling_points: ["xの係数(a-1)の正負で不等号の向きが変わることに気づかない。", "測量問題で高低差・水平距離・斜度を立体図形に正しく落とし込めない。"],
            key_to_start: "[1]は絶対値を外して文字式の符号で丁寧に場合分け。[2]は側面図・平面図に分割して個別にsincos式を立てましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第2回_問題解答_page${i+2}.png`),
          answerImages: Array.from({length: 8}, (_, i) => `images/第2回_問題解答_page${i+20}.png`)
        },
        {
          id: "r2q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "グラフの概形", "係数の符号とグラフの位置"],
              "[2]": ["2次関数", "平方完成", "最大値", "グラフの平行移動"],
              "[3]": ["データの分析", "散布図と相関", "箱ひげ図", "変量の変換", "共分散と相関係数"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "2次関数のグラフ表現と変量変換を含むデータの分析",
            stumbling_points: ["係数条件から頂点の位置や軸の正負の判定で手間取る。", "変量の変換公式（定数加算で分散不変、定数倍で標準偏差は絶対値倍）を混同する。"],
            key_to_start: "[1][2]は平方完成→頂点座標を文字で表現→条件と照合。[3]は変量変換の基本法則を真っ先に思い出しましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第2回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 9}, (_, i) => `images/第2回_問題解答_page${i+28}.png`)
        },
        {
          id: "r2q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["場合の数と確率", "順列", "隣り合わない並び方"],
              "[2]": ["場合の数と確率", "条件付きの配置"],
              "[3]": ["場合の数と確率", "円卓の配置", "反復試行の確率", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "座席配置（順列）の数え上げと反復試行・条件付き確率",
            stumbling_points: ["座席固定で円順列ではなく通常の順列になる判断に迷う。", "条件付き確率の分母を全体事象のままにしてしまう計算ミス。"],
            key_to_start: "固定されている人を基準に枠の順列で計算。条件付き確率は余事象も活用して分母を先に正確に求めましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解答_page${i+15}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解答_page${i+24}.png`)
        },
        {
          id: "r2q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "問題1": ["整数の性質", "最大公約数と最小公倍数", "約数の個数", "互いに素"],
              "問題2": ["整数の性質", "条件を満たす自然数の組", "必要条件・十分条件"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "最大公約数・最小公倍数の性質と互いに素な自然数の活用",
            stumbling_points: ["A=ga,B=gbと置く定石が引き出せない。", "互いに素ならa+bとabも互いに素という性質に気づけない。"],
            key_to_start: "最大公約数g→A=ga,B=gb（互いに素）と立式。g(a+b)とgabの式を連立して素因数分解で特定しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解答_page${i+15}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解答_page${i+32}.png`)
        },
        {
          id: "r2q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["図形の性質", "三角形の成立条件", "角の二等分線の性質", "方べきの定理", "メネラウスの定理"],
              "[2]": ["図形の性質", "内心の性質", "対称移動", "外心の性質と円周角"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "方べき・メネラウスの定理の複合と内心・外心の性質の証明",
            stumbling_points: ["円と三角形が重なる図から方べきの割線やメネラウスのキツネ形を抽出しにくい。", "内心の対称移動点が別の三角形の外心として機能する構図転換に気づけない。"],
            key_to_start: "[1]は円と直線→方べき。線分比→メネラウス。[2]は対称移動=垂直二等分線=等距離→外心の定義に当てはめましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解答_page${i+15}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第2回_問題解答_page${i+36}.png`)
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
              "[1]": ["数と式", "1次不等式", "2次不等式", "絶対値を含む不等式", "集合と命題", "必要条件・十分条件"],
              "[2]": ["図形と計量", "余弦定理", "中線定理", "スチュアートの定理"]
            },
            aggregate_tags: ["数と式", "集合と命題", "図形と計量"]
          },
          tips: {
            topic: "不等式の解と命題の真偽判定、余弦定理を用いた図形定理の証明",
            stumbling_points: ["ルートを含む不等式の近似値評価で整数を間違える。", "文字が多い三角形で余弦定理の適用対象を見失う。"],
            key_to_start: "[1]は各不等式→数直線で図示→集合の包含関係から真偽判定。[2]は着目する三角形と角度を明確にしてから定理の式を書き出しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第3回 _問題解答_page${i+2}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/第3回 _問題解答_page${i+18}.png`)
        },
        {
          id: "r3q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "文章題", "2次関数の最大値", "連立方程式"],
              "[2]": ["データの分析", "平均値", "分散と標準偏差", "共分散と相関係数", "散布図の読み取り", "箱ひげ図"]
            },
            aggregate_tags: ["2次関数", "データの分析"]
          },
          tips: {
            topic: "利益最大化の価格設定（2次関数文章題）と合成変量のデータ分析",
            stumbling_points: ["価格変化に伴う客数の増減を文字式で表し2次関数を立式する過程で情報整理が追いつかない。", "新変量z=x+yの特徴を散布図・箱ひげ図から正確に読み取れない。"],
            key_to_start: "[1]は価格変化量を基準→客数の式→利益を平方完成。[2]は和の平均＝各平均の和を利用しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第3回 _問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 8}, (_, i) => `images/第3回 _問題解答_page${i+24}.png`)
        },
        {
          id: "r3q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["場合の数と確率", "袋と球", "乗法定理"],
              "(2)": ["場合の数と確率", "条件付き確率"],
              "(3)": ["場合の数と確率", "条件付き確率", "事象の分割"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "袋から球を取り出す操作における条件付き確率",
            stumbling_points: ["赤球取出→残りが赤球の事象と袋選択の等価性に気づきにくい。", "袋の数増加で全確率の分母を漏れなく計算する過程でミスする。"],
            key_to_start: "P_A(B)=P(A∩B)/P(A)を忠実に守り、各袋ケースごとに分割→和の法則で分母P(A)を計算しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回 _問題解答_page${i+14}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第3回 _問題解答_page${i+21}.png`)
        },
        {
          id: "r3q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["整数の性質", "素因数分解", "最大公約数", "最小公倍数", "約数の個数"],
              "[2]": ["整数の性質", "1次不定方程式", "ユークリッドの互除法", "n進法"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "最大公約数・最小公倍数を利用した数の決定と1次不定方程式",
            stumbling_points: ["a=6c,b=6d（互いに素）と設定してcd値を絞り込む定石を忘れる。", "係数が大きい不定方程式の特殊解発見で手間取る。"],
            key_to_start: "[1]はa=gc,b=gd→ab=g²cd=6552から素因数分解で絞り込む。[2]は大きい方を小さい方で割って式を整理しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第3回 _問題解答_page${i+14}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第3回 _問題解答_page${i+28}.png`)
        },
        {
          id: "r3q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "円周角の定理", "三角形の相似"],
              "(2)": ["図形の性質", "方べきの定理", "接弦定理の逆"],
              "(3)": ["図形の性質", "余弦定理", "メネラウスの定理", "三角形の面積"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "円と三角形の相似、方べき、メネラウスの定理の統合",
            stumbling_points: ["円周角→三角形の相似、角の等しさ→接弦定理の逆への論理の飛躍についていけない。", "どの三角形と直線にメネラウスを適用するかの見極めが難しい。"],
            key_to_start: "条件と円周角で等しい角度をすべて図に書き込み相似を浮き彫りにする。線分比はキツネの形をなぞってメネラウスを適用しましょう。"
          },
          problemImages: Array.from({length: 3}, (_, i) => `images/第3回 _問題解答_page${i+14}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第3回 _問題解答_page${i+30}.png`)
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
              "[1]": ["数と式", "絶対値を含む式", "場合分け", "不等式の解"],
              "[2]": ["図形と計量", "正弦定理・余弦定理", "三角形の形状決定"],
              "[3]": ["図形と計量", "円に内接する四角形", "面積"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "絶対値を含む関数の処理と図形の計量（三角形の形状・円に内接する四角形）",
            stumbling_points: ["文字aを含む絶対値の場合分けが煩雑。", "sincos式を正弦・余弦定理で辺の関係式に変換する方針が浮かばない。"],
            key_to_start: "[1]は境界値(a=-1,3)で数直線→3区間の場合分け。[2]はsinA=a/2R, cosA=(b²+c²-a²)/2bcを代入して因数分解しましょう。"
          },
          problemImages: Array.from({length: 8}, (_, i) => `images/第4回_問題解答_page${i+2}.png`),
          answerImages: Array.from({length: 8}, (_, i) => `images/第4回_問題解答_page${i+22}.png`)
        },
        {
          id: "r4q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["集合と命題", "2次不等式", "集合の要素の個数", "包含関係"],
              "[2]": ["2次関数", "グラフの平行移動", "最大値・最小値", "対称性"],
              "[3]": ["データの分析", "箱ひげ図と四分位数", "外れ値", "散布図と相関係数", "最小二乗法"]
            },
            aggregate_tags: ["集合と命題", "2次関数", "データの分析"]
          },
          tips: {
            topic: "集合の要素整理、2次関数グラフの移動、データの分析（外れ値・回帰直線）",
            stumbling_points: ["外れ値の定義を正確に計算して生データから除外する処理でミス。", "残差平方和のmの2次関数としての平方完成が文字式が長く挫折しやすい。"],
            key_to_start: "[1]はベン図で視覚整理。[3]は2乗の和等を定数A,B,Cと見てf(m)=Am²-2Bm+Cの平方完成に落とし込みましょう。"
          },
          problemImages: Array.from({length: 10}, (_, i) => `images/第4回_問題解答_page${i+10}.png`),
          answerImages: Array.from({length: 10}, (_, i) => `images/第4回_問題解答_page${i+30}.png`)
        },
        {
          id: "r4q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["場合の数と確率", "最大値の確率", "反復試行の確率", "条件付き確率"],
              "[2]": ["場合の数と確率", "乗法定理", "条件付き確率"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "反復試行や複雑な設定における条件付き確率",
            stumbling_points: ["最大値が3の確率を「3以下」-「2以下」の余事象で求める定石に気づかない。", "コイン→箱→球の分岐で条件付き確率の分母を漏れなく足し合わせるのが難しい。"],
            key_to_start: "各試行の分岐を樹形図で整理。排反事象を1つずつ計算→和の法則で合算を徹底しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題解答_page${i+16}.png`),
          answerImages: Array.from({length: 4}, (_, i) => `images/第4回_問題解答_page${i+26}.png`)
        },
        {
          id: "r4q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["整数の性質", "素因数分解", "最大公約数と最小公倍数", "約数の個数", "命題と真偽"],
              "[2]": ["整数の性質", "1次不定方程式", "ユークリッドの互除法", "n進法"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "最大公約数・最小公倍数の関係活用と1次不定方程式の解法",
            stumbling_points: ["a=6c,b=6d（互いに素）の定石操作を忘れる。", "係数が大きい不定方程式の特殊解を見つけようとして時間ロス。"],
            key_to_start: "[1]はa=gc,b=gd→cdを素因数分解で絞り込む。[2]は大きい方を小さい方で割って簡略化しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題解答_page${i+16}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/第4回_問題解答_page${i+38}.png`)
        },
        {
          id: "r4q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["図形の性質", "五心（内心・外心）", "チェバの定理", "共通接線", "オイラーの多面体定理"],
              "[2]": ["図形の性質", "内接円と接線", "メネラウスの定理", "円周角の定理", "面積比"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "三角形の五心・諸定理の複合と内接円の性質",
            stumbling_points: ["内心と外心一致→正三角形やオイラー定理の曖昧さで自信が持てない。", "内接円の接点距離をx,y,zと置いて連立方程式を立てる発想が出ない。"],
            key_to_start: "[1]は定義・定理をノートに書き出して検証。[2]は接線の等長性→x+y=c,y+z=a,z+x=bの連立を思い出しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第4回_問題解答_page${i+16}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第4回_問題解答_page${i+40}.png`)
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
              "[1]": ["数と式", "無理数の計算", "式の値", "整数部分と小数部分"],
              "[2]": ["図形と計量", "余弦定理", "正弦定理", "三角形の形状", "外接円"]
            },
            aggregate_tags: ["数と式", "図形と計量"]
          },
          tips: {
            topic: "対称式・交代式の無理数計算と余弦定理を用いた三角形の決定",
            stumbling_points: ["(a+1/2b)²-(a-1/2b)²=2a/bの展開公式利用に気づかない。", "sinCの値から鋭角・鈍角の2通り→三角形が1つに定まらない理由の論理判断が難しい。"],
            key_to_start: "[1]は展開公式の利用。[2]は余弦定理の2次方程式→正の解の条件＋sinから角度2通りの可能性を常に考慮しましょう。"
          },
          problemImages: Array.from({length: 7}, (_, i) => `images/第5回_問題解答_page${i+2}.png`),
          answerImages: Array.from({length: 6}, (_, i) => `images/第5回_問題解答_page${i+18}.png`)
        },
        {
          id: "r5q2", name: "第2問", score: 30, timeMinutes: 20,
          tags: {
            sub_questions: {
              "[1]": ["2次関数", "最大値・最小値", "平方完成", "場合分け"],
              "[2]": ["集合と命題", "必要条件と十分条件", "命題の真偽", "背理法・対偶"],
              "[3]": ["データの分析", "ヒストグラム", "箱ひげ図", "散布図と相関係数", "共分散", "変量の変換"]
            },
            aggregate_tags: ["2次関数", "集合と命題", "データの分析"]
          },
          tips: {
            topic: "区間が動く2次関数の最大値、命題の真偽判定、変量変換のデータ分析",
            stumbling_points: ["定義域p≦x≦p+1が動く最大値問題で軸との位置関係の場合分けが混乱する。", "変量のa倍で標準偏差|a|倍、共分散ab倍のルールを正しく適用できない。"],
            key_to_start: "[1]は区間中央x=p+1/2と放物線の軸の大小で場合分け→端点で最大値を視覚特定。[3]は変量変換の公式を正確に思い出しましょう。"
          },
          problemImages: Array.from({length: 9}, (_, i) => `images/第5回_問題解答_page${i+9}.png`),
          answerImages: Array.from({length: 8}, (_, i) => `images/第5回_問題解答_page${i+24}.png`)
        },
        {
          id: "r5q3", name: "第3問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["場合の数と確率", "独立試行の確率", "反復試行", "条件付き確率"],
              "[2]": ["場合の数と確率", "乗法定理", "条件付き確率", "事象の分割"]
            },
            aggregate_tags: ["場合の数と確率"]
          },
          tips: {
            topic: "様々な設定における確率と条件付き確率",
            stumbling_points: ["n回以下で終わる確率で途中終了ケースを考慮せず単純な反復試行の公式を誤用する。", "コインの分岐で全経路の確率の和を正確に立式できない。"],
            key_to_start: "[1]は各回でちょうど終わる確率を別々に計算→排反事象として足す。[2]は樹形図→すべてのルートの確率を乗法定理で計算→和の法則で合算しましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_問題解答_page${i+14}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_問題解答_page${i+21}.png`)
        },
        {
          id: "r5q4", name: "第4問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "[1]": ["整数の性質", "1次不定方程式", "n進法", "約数と倍数"],
              "[2]": ["整数の性質", "1次不定方程式の応用", "整数解の条件", "場合分け"]
            },
            aggregate_tags: ["整数の性質"]
          },
          tips: {
            topic: "1次不定方程式の解法と条件を満たす整数の探索",
            stumbling_points: ["10進法の小数をn進法に変換する概念が定着していない。", "3変数の不定方程式で1つを固定して2変数に帰着させる手順に手間取る。"],
            key_to_start: "[1]はn進法の小数=a/n+b/n²+c/n³と定義通りに展開。[2]は係数の大きい変数に具体値を入れて残り2変数の不定方程式に落としましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_問題解答_page${i+14}.png`),
          answerImages: Array.from({length: 5}, (_, i) => `images/第5回_問題解答_page${i+30}.png`)
        },
        {
          id: "r5q5", name: "第5問", score: 20, timeMinutes: 15,
          tags: {
            sub_questions: {
              "(1)": ["図形の性質", "三角形の相似", "トレミーの定理の証明", "円に内接する四角形"]
            },
            aggregate_tags: ["図形の性質"]
          },
          tips: {
            topic: "相似を利用したトレミーの定理の証明",
            stumbling_points: ["補助線(点E)を引く意図と、どの三角形同士が相似になるかを角度条件から見つけ出すのが困難。", "等号成立条件が四角形ABCDの円内接条件に繋がる論理展開に気づきにくい。"],
            key_to_start: "穴埋め証明は直前の文章がヒント。相似は問題で指定された等角+共通角+円周角で2角相等を証明。等号成立は折れ線が一直線を疑いましょう。"
          },
          problemImages: Array.from({length: 4}, (_, i) => `images/第5回_問題解答_page${i+14}.png`),
          answerImages: Array.from({length: 3}, (_, i) => `images/第5回_問題解答_page${i+35}.png`)
        }
      ]
    }
  ]
};
