const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

// 正しい答え
const correctAnswers = {
  1: 'B',
  2: 'A',
  3: 'C',
  4: 'D',
};


function checkClickedAnswer(event) {
  // クリックされた答えの要素
  const clickedAnswerElement = event.currentTarget;

  // 選択した答え
  const selectedAnswer = clickedAnswerElement.dataset.answer;

  const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
  // 正しい答え
  const correctAnswer = correctAnswers[questionId];

  // メッセージを入れる変数を用意
  let message;
  // カラーコードを入れる変数を用意
  let answerColorCode;

  if (selectedAnswer === correctAnswer) {
    // 正しい答えだったとき
    message = '正解です！おめでとう';
    answerColorCode = '';
  } else {
    // 間違った答えだったとき
    message = '残念！不正解です';
    answerColorCode = '#f05959';
  }

  // 
  alert(message);

  // 間違っていた時だけ色が変わる
  document.querySelector('span#correct-answer').style.color = answerColorCode;

  // 答え全体を表示
  document.querySelector('div#section-correct-answer').style.display = 'block';
}

