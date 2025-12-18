window.questions = [
  {
    id: 1,
    title: "問1: 基本的なループ",
    text: `
            <p>次のアルゴリズムにおいて、変数 <code>sum</code> の最終的な値は何になるか。</p>
            <pre>
1: sum = 0
2: for i from 1 to 5
3:   if i % 2 == 0
4:     sum = sum + i
5:   endif
6: endfor
            </pre>`,
    options: [
      { label: "ア. 2", value: "a" },
      { label: "イ. 4", value: "b" },
      { label: "ウ. 6", value: "c" },
      { label: "エ. 15", value: "d" },
    ],
    correct: "c",
    explanation: `
            <p>このアルゴリズムは、1から5までの数値のうち、2で割り切れる数（偶数）を合計するものです。</p>
            <ul>
                <li>i = 1: 条件不成立</li>
                <li>i = 2: sum = 0 + 2 = 2</li>
                <li>i = 3: 条件不成立</li>
                <li>i = 4: sum = 2 + 4 = 6</li>
                <li>i = 5: 条件不成立</li>
            </ul>
            <p>したがって、最終的な <code>sum</code> の値は <strong>6</strong> となります。正解は <strong>ウ</strong> です。</p>`,
  },
  {
    id: 2,
    title: "問2: 条件分岐",
    text: `
            <p>次のプログラムを実行したとき、出力される値はどれか。</p>
            <pre>
1: a = 10
2: b = 20
3: if a > 5 and b < 15
4:   print "X"
5: else if a > 5 or b < 15
6:   print "Y"
7: else
8:   print "Z"
9: endif
            </pre>`,
    options: [
      { label: "ア. X", value: "a" },
      { label: "イ. Y", value: "b" },
      { label: "ウ. Z", value: "c" },
      { label: "エ. 何も表示されない", value: "d" },
    ],
    correct: "b",
    explanation: `
                <p>順を追って条件を確認します。</p>
                <ul>
                    <li>a = 10, b = 20 です。</li>
                    <li>最初の条件 <code>a > 5 and b < 15</code>: 10 > 5 は真ですが、20 < 15 は偽なので、全体として<strong>偽</strong>です。</li>
                    <li>次の条件 <code>a > 5 or b < 15</code>: 10 > 5 は真なので、もう一方の条件に関わらず全体として<strong>真</strong>になります。</li>
                </ul>
                <p>したがって、"Y" が出力されます。正解は <strong>イ</strong> です。</p>`,
  },
  {
    id: 3,
    title: "問3: 条件分岐（スコア判定）",
    text: `
        <p>【前提条件】</p>
        <p>関数 <code>judgeScore</code> は、テストの点数（0～100の整数）を引数として受け取り、評価を文字列で返す。<br>
        評価基準は次のとおりである。</p>
        <ul>
            <li>80点以上： "A"</li>
            <li>60点以上80点未満："B"</li>
            <li>60点未満："C"</li>
        </ul>
        <p>【問題】</p>
        <p>次のプログラム中の <strong>空欄</strong> に入れる正しい条件式を、解答群から選べ。</p>
        <pre>
○文字列型: judgeScore(整数型: score)
  if (score が 80 以上)
    return "A"
  elseif (  空欄  )
    return "B"
  else
    return "C"
  endif
        </pre>`,
    options: [
      { label: "ア. score が 60 以上", value: "a" },
      { label: "イ. score が 60 以上 かつ 80 以下", value: "b" },
      { label: "ウ. score が 60 より大きい", value: "c" },
      { label: "エ. score が 80 未満", value: "d" },
    ],
    correct: "a",
    explanation: `
        <p>if-elseif-else文では、条件式は上から順番に評価されます。</p>
        <ul>
            <li>最初の <code>if (score が 80 以上)</code> で、80点以上の場合（"A"）はすでに処理されて関数を終了しています。</li>
            <li>したがって、<code>elseif</code> に到達した時点で、すでに <strong>score は 80点未満</strong> であることが確定しています。</li>
            <li>「60点以上80点未満」を判定するためには、単純に <strong>60点以上</strong> かどうかをチェックするだけで十分です。</li>
        </ul>
        <p>したがって、空欄には <strong>score が 60 以上</strong> が入ります。正解は <strong>ア</strong> です。</p>`,
  },
  {
    id: 4,
    title: "問4: 配列と繰返し処理",
    text: `
        <p>【前提条件】</p>
        <p>配列 <code>data</code> の要素番号は 1 から始まる。</p>
        <p>【問題】</p>
        <p>次のプログラムは、配列 <code>data</code> に格納された整数の合計を求める。
        <strong>空欄</strong> に入れる正しい式を選べ。</p>
        <pre>
整数型の配列: data ← {3, 5, 7, 9}
整数型: i, sum ← 0

for (i を 1 から dataの要素数 まで 1 ずつ増やす)
  sum ← sum ＋  空欄 
endfor
        </pre>`,
    options: [
      { label: "ア. i", value: "a" },
      { label: "イ. data", value: "b" },
      { label: "ウ. data[i]", value: "c" },
      { label: "エ. data[i－1]", value: "d" },
    ],
    correct: "c",
    explanation: `
        <p>配列の各要素を順番に参照して合計を求める問題です。</p>
        <ul>
            <li><code>sum</code> は合計値を格納する変数です。</li>
            <li>ループ変数 <code>i</code> は 1 から <code>data</code> の要素数まで変化します。</li>
            <li>「配列 <code>data</code> の要素番号は 1 から始まる」という前提条件があるため、<code>i</code> 番目の要素を参照するには <strong>data[i]</strong> と記述します。</li>
        </ul>
        <p>選択肢の検討：</p>
        <ul>
            <li>ア：<code>i</code> は添字（1, 2, 3...）そのものであり、中身の数値ではありません。</li>
            <li>イ：<code>data</code> は配列全体を指します。</li>
            <li>エ：要素番号が 0 から始まる言語（CやJavaなど）では <code>data[i]</code> で <code>i+1</code> 番目を指すことがありますが、本問題の疑似言語の前提（1から始まる）では <strong>data[i]</strong> が適切です。</li>
        </ul>
        <p>したがって、正解は <strong>ウ</strong> です。</p>`,
  },
  {
    id: 5,
    title: "問5: データ構造（スタック）",
    text: `
        <p>【前提条件】</p>
        <p>スタックは配列 <code>stack</code> と、次に格納する位置を示す変数 <code>top</code> で管理する。<br>
        <code>top</code> は、次にデータを格納する要素番号を表す。</p>
        <p>【問題】</p>
        <p>次の <code>pop</code> 手続で、正しくデータを取り出すための <strong>空欄</strong> に入れる式を選べ。</p>
        <pre>
○整数型: pop()
  if (top ＞ 1)
    top ←  空欄 
    return stack[top]
  else
    return 未定義の値
  endif
        </pre>`,
    options: [
      { label: "ア. top", value: "a" },
      { label: "イ. top ＋ 1", value: "b" },
      { label: "ウ. top － 1", value: "c" },
      { label: "エ. stack[top]", value: "d" },
    ],
    correct: "c",
    explanation: `
        <p>スタック（後入れ先出し：LIFO）の操作に関する問題です。</p>
        <ul>
            <li>前提条件より、<code>top</code> は「<strong>次に格納する</strong>位置」を指しています。</li>
            <li>つまり、現在スタックの最上段にあるデータは、<code>top - 1</code> の位置に格納されています。</li>
            <li><code>pop</code> 操作（取り出し）では、まず <code>top</code> を 1 つ減らして最新データの位置に移動させ、その位置にある値を返します。</li>
        </ul>
        <p>したがって、空欄には <strong>top － 1</strong> が入ります。正解は <strong>ウ</strong> です。</p>`,
  },
  {
    id: 6,
    title: "問6: アルゴリズム（探索）",
    text: `
        <p>【前提条件】</p>
        <p>配列 <code>array</code> には整数が昇順に格納されている。</p>
        <p>【問題】</p>
        <p>次の処理は、配列 <code>array</code> の中から値 <code>x</code> を線形探索で探す。<br>
        <code>x</code> が見つかったときに <code>true</code> を返す条件として正しいものを選べ。</p>
        <pre>
for (i を 1 から arrayの要素数 まで 1 ずつ増やす)
  if (  空欄  )
    return true
  endif
endfor
return false
        </pre>`,
    options: [
      { label: "ア. i が x と等しい", value: "a" },
      { label: "イ. array[i] が x と等しい", value: "b" },
      { label: "ウ. array[x] が i と等しい", value: "c" },
      { label: "エ. array が x を含む", value: "d" },
    ],
    correct: "b",
    explanation: `
        <p>線形探索（リニアサーチ）の基本的な仕組みに関する問題です。</p>
        <ul>
            <li><strong>線形探索</strong>は、配列の要素を先頭（または末尾）から一つずつ順番に調べて、目的の値と一致するかどうかを比較するアルゴリズムです。</li>
            <li>ループ変数 <code>i</code> は配列の添字（インデックス）として使われます。</li>
            <li>「探している値 <code>x</code>」と「配列の <code>i</code> 番目の要素 <code>array[i]</code>」を比較して一致すれば見つかったことになります。</li>
        </ul>
        <p>選択肢の検討：</p>
        <ul>
            <li>ア：添字 <code>i</code> と値 <code>x</code> を比較しており誤りです。</li>
            <li>ウ：値 <code>x</code> を添字として使っており誤りです（<code>x</code> が配列の範囲外の場合、エラーになります）。</li>
            <li>エ：疑似言語としての記法が適切ではありません。一つずつ調べる処理が <code>if</code> 文の中に必要です。</li>
        </ul>
        <p>したがって、正解は <strong>イ</strong> です。</p>`,
  },
  {
    id: 7,
    title: "問7: 文字列処理（文字のカウント）",
    text: `
        <p>【前提条件】</p>
        <p>関数 <code>countChar</code> は，文字列 <code>str</code> の中に文字 <code>c</code> が何回出現するかを返す。</p>
        <p>【問題】</p>
        <p>次のプログラム中の <strong>空欄</strong> に入れる最も適切な条件式を選べ。</p>
        <pre>
○整数型: countChar(文字列型: str, 文字型: c)
  整数型: i, count ← 0
  for (i を 1 から strの文字数 まで 1ずつ増やす)
    if (      空欄      )
      count ← count ＋ 1
    endif
  endfor
  return count
        </pre>`,
    options: [
      { label: "ア. str[i] ＝ c", value: "a" },
      { label: "イ. str ＝ c", value: "b" },
      { label: "ウ. i ＝ c", value: "c" },
      { label: "エ. str[i] ≠ c", value: "d" },
    ],
    correct: "a",
    explanation: `
        <p>文字列の中から特定の文字を探してカウントする、基本的な文字列処理のアルゴリズムです。</p>
        <ul>
            <li>ループ変数 <code>i</code> は、文字列 <code>str</code> の各文字にアクセスするための添字（インデックス）として使われています。</li>
            <li>「文字列の <code>i</code> 番目の文字 <code>str[i]</code>」が「探している文字 <code>c</code>」と一致するかどうかを判定する必要があります。</li>
            <li>したがって、条件式は <strong>str[i] ＝ c</strong> となります。</li>
        </ul>
        <p>選択肢の検討：</p>
        <ul>
            <li>イ：文字列全体 <code>str</code> と一文字 <code>c</code> を比較しており、意味が通りません。</li>
            <li>ウ：添字 <code>i</code>（数値）と文字 <code>c</code> を比較しており誤りです。</li>
            <li>エ：一致「しない」場合にカウントすることになり、逆の動作になります。</li>
        </ul>
        <p>したがって、正解は <strong>ア</strong> です。</p>`,
  },
  {
    id: 8,
    title: "問8: 隣り合う要素の演算",
    text: `
        <p>【前提条件】</p>
        <ul>
            <li>配列の要素番号は 1 から始まる</li>
            <li>関数 <code>countPair</code> は、整数型配列 <code>data</code> を受け取り、隣り合う2要素の和が偶数になる組の個数を返す</li>
            <li>偶数とは「2で割り切れる整数」とする</li>
        </ul>
        <p>【問題】</p>
        <p><code>countPair({3, 5, 2, 4, 7, 1})</code> の戻り値として正しいものを選べ。</p>
        <pre>
○整数型: countPair(整数型の配列: data)
  整数型: i, count ← 0

  for (i を 1 から dataの要素数 － 1 まで 1 ずつ増やす)
    if ( (data[i] ＋ data[i＋1]) mod 2 が 0 )
      count ← count ＋ 1
    endif
  endfor

  return count
        </pre>`,
    options: [
      { label: "ア. 1", value: "a" },
      { label: "イ. 2", value: "b" },
      { label: "ウ. 3", value: "c" },
      { label: "エ. 4", value: "d" },
    ],
    correct: "c",
    explanation: `
        <p>アルゴリズムをトレース（順次実行）して、条件を満たす組を数える問題です。</p>
        <p>配列 <code>data = {3, 5, 2, 4, 7, 1}</code> に対して、隣り合う要素の和を計算します：</p>
        <ul>
            <li>i = 1: <code>data[1] + data[2] = 3 + 5 = 8</code> （偶数） → <strong>count = 1</strong></li>
            <li>i = 2: <code>data[2] + data[3] = 5 + 2 = 7</code> （奇数）</li>
            <li>i = 3: <code>data[3] + data[4] = 2 + 4 = 6</code> （偶数） → <strong>count = 2</strong></li>
            <li>i = 4: <code>data[4] + data[5] = 4 + 7 = 11</code> （奇数）</li>
            <li>i = 5: <code>data[5] + data[6] = 7 + 1 = 8</code> （偶数） → <strong>count = 3</strong></li>
        </ul>
        <p>ループは「要素数 - 1」（この場合は 5）まで実行され、最終的な <code>count</code> の値は <strong>3</strong> となります。</p>
        <p>したがって、正解は <strong>ウ</strong> です。</p>`,
  },
  {
    id: 9,
    title: "問9: 条件分岐（偶数判定）",
    text: `
        <p>【前提条件】</p>
        <ul>
            <li>配列の要素番号は 1 から始まる（本問では直接使用しません）。</li>
            <li>関数 <code>isEven</code> は、整数 <code>n</code> を受け取り、<code>n</code> が偶数なら <code>true</code>、奇数なら <code>false</code> を返す。</li>
            <li><code>n mod 2</code> は、<code>n</code> を 2 で割った余りを表す。</li>
        </ul>
        <p>【問題】</p>
        <p>次のプログラム中の <strong>空欄</strong> に入れる正しい条件式を、解答群から選べ。</p>
        <pre>
○論理型: isEven(整数型: n)
  if (  空欄  )
    return true
  else
    return false
  endif
        </pre>`,
    options: [
      { label: "ア. (n mod 2) が 0 と等しい", value: "a" },
      { label: "イ. (n mod 2) が 1 と等しい", value: "b" },
      { label: "ウ. (n ÷ 2 の商) が 0 と等しい", value: "c" },
      { label: "エ. (n ÷ 2 の商) が 1 と等しい", value: "d" },
    ],
    correct: "a",
    explanation: `
        <p>数値が偶数か奇数かを判定する、非常によく使われる基本的なアルゴリズムです。</p>
        <ul>
            <li><strong>偶数</strong>とは、2で割り切れる数、つまり「2で割った余りが 0」になる数です。</li>
            <li>疑似言語において「余り」を求める演算子は <code>mod</code> です。</li>
            <li>したがって、<code>n mod 2</code> が 0 であれば偶数、1 であれば奇数と判定できます。</li>
        </ul>
        <p>選択肢の検討：</p>
        <ul>
            <li>イ：余りが 1 ということは、<code>n</code> が奇数である場合の条件です。</li>
            <li>ウ・エ：「商」を使って偶数判定を行うことは通常ありません（商が 0 になるのは n が 0 か 1 のときなど、偶数判定とは無関係です）。</li>
        </ul>
        <p>したがって、正解は <strong>ア</strong> です。</p>`,
  },
  {
    id: 10,
    title: "問10: 配列と計数処理",
    text: `
        <p>【前提条件】</p>
        <p>配列の要素番号は 1 から始まる。</p>
        <p>関数 <code>countGreater</code> は、整数型配列 <code>A</code> と整数 <code>x</code> を受け取り、<code>A</code> の要素のうち <code>x</code> より大きい要素の個数を返す。</p>
        <p>【問題】</p>
        <p>次のプログラムを実行したとき，<code>countGreater({2, 7, 4, 7, 1}, 4)</code> の戻り値として正しいものを選べ。</p>
        <pre>
○整数型: countGreater(整数型の配列: A, 整数型: x)
  整数型: i, cnt ← 0
  for (i を 1 から Aの要素数 まで 1 ずつ増やす)
    if (A[i] ＞ x)
      cnt ← cnt ＋ 1
    endif
  endfor
  return cnt
        </pre>`,
    options: [
      { label: "ア. 1", value: "a" },
      { label: "イ. 2", value: "b" },
      { label: "ウ. 3", value: "c" },
      { label: "エ. 4", value: "d" },
    ],
    correct: "b",
    explanation: `
        <p>プログラムのトレースを行い、条件 <code>A[i] ＞ x</code> を満たす回数を数える問題です。</p>
        <p>与えられた引数は <code>A = {2, 7, 4, 7, 1}</code>, <code>x = 4</code> です：</p>
        <ul>
            <li>i = 1: <code>A[1] = 2</code> → <code>2 ＞ 4</code> は偽</li>
            <li>i = 2: <code>A[2] = 7</code> → <code>7 ＞ 4</code> は真 → <strong>cnt = 1</strong></li>
            <li>i = 3: <code>A[3] = 4</code> → <code>4 ＞ 4</code> は偽（「より大きい」なので、等しい場合は含みません）</li>
            <li>i = 4: <code>A[4] = 7</code> → <code>7 ＞ 4</code> は真 → <strong>cnt = 2</strong></li>
            <li>i = 5: <code>A[5] = 1</code> → <code>1 ＞ 4</code> は偽</li>
        </ul>
        <p>最終的な <code>cnt</code> の値は <strong>2</strong> となります。</p>
        <p>したがって、正解は <strong>イ</strong> です。</p>`,
  },
];
