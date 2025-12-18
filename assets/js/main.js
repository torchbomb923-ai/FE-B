document.addEventListener("DOMContentLoaded", () => {
  // questions は assets/js/questions.js で定義されているグローバル変数を使用
  const questionListEl = document.getElementById("question-list");
  const questionDisplayEl = document.getElementById("question-display");

  // 問題一覧の生成
  function renderQuestionList() {
    if (!window.questions) {
      console.error("Questions data not found.");
      return;
    }
    questionListEl.innerHTML = "";
    questions.forEach((q) => {
      const li = document.createElement("li");
      li.className = "question-item";
      li.textContent = q.title;
      li.addEventListener("click", () => loadQuestion(q.id));
      questionListEl.appendChild(li);
    });
  }

  // 問題の読み込み
  function loadQuestion(id) {
    const question = questions.find((q) => q.id === id);
    if (!question) return;

    // サイドバーの選択状態を更新
    const items = document.querySelectorAll(".question-item");
    items.forEach((item, index) => {
      if (questions[index].id === id) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // 問題エリアの描画
    questionDisplayEl.innerHTML = `
            <section class="question-container">
                <div class="question-header">
                    <span class="question-number">問${question.id}</span>
                </div>
                <div class="question-text">
                    ${question.text}
                </div>

                <div class="options">
                    ${question.options
                      .map(
                        (opt) => `
                        <label class="option">
                            <input type="radio" name="answer" value="${opt.value}">
                            <span class="option-text">${opt.label}</span>
                        </label>
                    `
                      )
                      .join("")}
                </div>

                <div class="actions">
                    <button id="submit-btn">採点する</button>
                </div>

                <div id="result-container" class="hidden">
                    <div id="result-message"></div>
                    <div class="explanation">
                        <h3>解説</h3>
                        ${question.explanation}
                    </div>
                </div>
            </section>
        `;

    // 採点ボタンのイベントリスナーを再設定
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", () => gradeAnswer(question));
  }

  // 採点処理
  function gradeAnswer(question) {
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );
    const resultContainer = document.getElementById("result-container");
    const resultMessage = document.getElementById("result-message");
    const submitBtn = document.getElementById("submit-btn");

    if (!selectedOption) {
      alert("選択肢を選んでください。");
      return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === question.correct) {
      resultMessage.textContent = "正解です！ 🎉";
      resultContainer.className = "correct";
    } else {
      resultMessage.textContent = "不正解です... 😢";
      resultContainer.className = "incorrect";
    }

    resultContainer.classList.remove("hidden");
    submitBtn.disabled = true;

    const radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach((radio) => (radio.disabled = true));
  }

  // 初期化
  renderQuestionList();
  if (window.questions && questions.length > 0) {
    loadQuestion(questions[0].id);
  }
});
