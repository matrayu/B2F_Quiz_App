'use strict';

let currentQuestion = 0;
let userScore = 0;
//let correctAnswers = 0;

const questionAnswerArr = [
  {
    question: "Who directed <i>Back to the Future</i>?",
    answers: [
      'Steven Spielberg',
      'Robert Zemeckis',
      'George Lucas',
      'John Carpenter'
    ],
    correctAnswer: 'Robert Zemeckis',
    incorrectFeedback: 'The director of all three <i>Back to the Future</i> movies was Robert Zemeckis'
  },
  {
    question: 'What Huey Lewis song is featured in the first film?',
    answers: [
      'The Heart of Rock & Roll',
      'Back in Time',
      'Do You Believe in Love',
      'The Power of Love'
    ],
    correctAnswer: 'The Power of Love',
    incorrectFeedback: 'The <i>Power of Love</i> was featured in the first film'
  },
  {
    question: "What was the name of Doc Brown's dog?",
    answers: [
      'Newton',
      'Einstein',
      'Arthur',
      'Galileo'
    ],
    correctAnswer: 'Einstein',
    incorrectFeedback: "Doc Brown's dog was named Einstein"
  },
  {
    question: "How much power does the DeLorean time machine need?",
    answers: [
      '1.21 gigawatts',
      '1.31 gigawatts',
      '1.41 gigawatts',
      '1.91 gigawatts'
    ],
    correctAnswer: '1.21 gigawatts',
    incorrectFeedback: 'The DeLorean needs 1.21 gigawatts of power'
  },
  {
    question: "What is the theme of the dance that George, Lorraine and Marty all attend?",
    answers: [
      'Happily Ever After',
      'Island Getaway',
      'On Cloud 9',
      'Enchantment Under the Sea'
    ],
    correctAnswer: 'Enchantment Under the Sea',
    incorrectFeedback: 'The theme of the dance was <i>Enchantment Under the Sea</i>.'
  },
  {
    question: "What speed does the DeLorean have to reach to travel through time?",
    answers: [
      '78 mph',
      '88 mph',
      '98 mph',
      '100 mph'
    ],
    correctAnswer: '88 mph',
    incorrectFeedback: 'The DeLorean needs to get up to 88 mph'
  },
  {
    question: "Finish the phrase 'Where we're going, we don't need...'",
    answers: [
      'gas',
      'roads',
      'maps',
      'money'
    ],
    correctAnswer: 'roads',
    incorrectFeedback: "Where we're going, we don't need roads!"
  },
  {
    question: "What movie is being advertised in future 2015?",
    answers: [
      'Jaws 19',
      'Star Wars: The Force Awakens',
      'Jurassic World',
      'Rocky X'
    ],
    correctAnswer: 'Jaws 19',
    incorrectFeedback: 'Jaws 19 was being advertised in future 2015'
  },
  {
    question: "What is Doc's catchphrase?",
    answers: [
      'Dyn-o-mite!',
      "What you talking' 'bout, Marty?!",
      'Wholly Moly!',
      'Great Scott!'
    ],
    correctAnswer: 'Great Scott!',
    incorrectFeedback: "Doc's famous catchphrase is <i>Great Scott!</i>"
  },
  {
    question: "What does Biff receive in 1955 from his 2015 self, to change the course of his life?",
    answers: [
      'a sports almanac',
      'a lottery ticket',
      'a large inheritance',
      'an iphone'
    ],
    correctAnswer: 'a sports almanac',
    incorrectFeedback: 'Biff received a sports almanac from himself'
  }
]

function handleStartQuiz() {
  $('.js-start').on('submit', function(event) {
    event.preventDefault();
    hideStartScreen();
    $('.js-question-count').text(currentQuestion+1);
    handleUpdateQuestionCounter();
    renderQuizQuestion();
    showQuestions();
    showScoring();
    console.log('startQuiz has run');
  });
}

function hideStartScreen() {
  $('.js-start').hide();
  console.log('hideStartScreen has run')
}

function showStartScreen() {
  $('.js-start').show();
  console.log('showStartScreen has run')
}

function hideQuestions() {
  $('.js-questions').hide();
  console.log('hideQuestions has run');
}

function showQuestions() {
  $('.js-questions').show();
  console.log('showQuestions has run');
}

function hideFeedback() {
  $('.js-feedback').hide();
  console.log('hideFeedback has run');
}

function showFeedback() {
  $('.js-feedback').show();
  console.log('showFeedback has run');
}

function hideResults() {
  $('.js-results').hide();
  console.log('hideResults has run');
}

function showResults() {
    $('.js-results').show();
    console.log('showResults has run');
}

function showScoring() {
    $('.js-score-question-list').show();
    console.log('showScoring has run');
}

function hideScoring() {
    $('.js-score-question-list').hide();
    console.log('hideScoring has run');
}


function incrementQuestionNumber() {
  currentQuestion ++;
}



function generateQuizQuestion(question, answerOption, questionNumber) {
  console.log('renderQuiz has run');
  return `
    <div class="feedback-questions">
                <h2 class="js-question-number" data-question-number="${questionNumber}">${question}</h2>
                <form class="answers">
                    <fieldset>
                        <label class="answerOption">
                            <input type="radio" value="${answerOption[0]}" name="answer" required>
                            <span>${answerOption[0]}</span>
                        </label>
                        <label class="answerOption">
                            <input type="radio" value="${answerOption[1]}" name="answer" required>
                            <span>${answerOption[1]}</span>
                        </label>
                        <label class="answerOption">
                            <input type="radio" value="${answerOption[2]}" name="answer" required>
                            <span>${answerOption[2]}</span>
                        </label>
                        <label class="answerOption">
                            <input type="radio" value="${answerOption[3]}" name="answer" required>
                            <span>${answerOption[3]}</span>
                        </label>
                    </fieldset>
                    <input class="button button-submit js-button-submit" type="submit" value="Submit">
                </form>
            </div>
    `
}

function generateQuestion() {
  console.log('generateQuestion has run');
  return questionAnswerArr[currentQuestion].question;
}

function generateAnswerOptions(arr) {
  console.log('generateAnswerOptions has run');
  return questionAnswerArr[currentQuestion].answers
}

function generateQuizQuestionString() {
  let question = generateQuestion();
  let answers = generateAnswerOptions(questionAnswerArr);
  let questionString = generateQuizQuestion(question, answers, currentQuestion);
  console.log('generateQuizQuestionString has run');
  return questionString;
}

function renderQuizQuestion() {
  let quizQuestionString = generateQuizQuestionString();
  $('.js-questions').html(quizQuestionString);
  console.log('renderQuizQuestion has ran');
}



function handleUserAnswerSubmitted() {
  $('.js-questions').on('submit', function(event) {
    event.preventDefault();
    let userAnswer = getUserAnswer()
    let actualAnswer = getCorrectAnswer();
    console.log('handleUserAnswerSubmitted has ran');
    if (checkForCorrectAnswer(userAnswer, actualAnswer)) {
      return handleCorrectAnswer();
    }
    return handleIncorrectAnswer();
  });
}

function getUserAnswer() {
  console.log('getUserAnswer has ran');
  let selected = $('input:checked');
  let selectedAnswer = selected.val();
  
  /*
  let selectedAnswer = $(answer)
    .closest('.answerOption')
    .attr('.value');
   */
   return selectedAnswer;
}

function getCorrectAnswer() {
  return questionAnswerArr[currentQuestion].correctAnswer;
}

function checkForCorrectAnswer(userAns, actualAns) {
  console.log('checkForCorrectAnswer has run');
  return userAns === actualAns;
}



function handleCorrectAnswer() {
  hideQuestions();
  userScore++;
  handleUpdateScore()
  renderCorrectFeedBack();
  showFeedback();
  console.log('handleCorrectAnswer has run');
}

function generateCorrectFeedback() {
  console.log('generateCorrectFeedback has run');
  return `
    <p>Correct Answer!</p>
    <div class="feedback-icon">
      <img src="images/Correct-iconfinder_delorean-03_748994.png" alt="Correct Answer!">
    </div>
    <form>
    <input class="button button-next" type="submit" value="Next">
    </form>`
}

function renderCorrectFeedBack() {
  let feedbackString = generateCorrectFeedback();
  $('.js-feedback').html(feedbackString);
  console.log('renderCorrectFeedBack has ran');
}



function handleIncorrectAnswer() {
  hideQuestions();
  renderIncorrectFeedBack();
  showFeedback();
  console.log('handleIncorrectAnswer has run');
}

function getIncorrectFeedback() {
  console.log('getIncorrectFeedback has run')
  return questionAnswerArr[currentQuestion].incorrectFeedback;
}

function generateIncorrectFeedback() {
  console.log('generateIncorrectFeedback has run');
  let feedback = getIncorrectFeedback();
  return `
    <p>Wrong Answer!</p>
    <div class="feedback-icon">
    <img src="images/Wrong-iconfinder_clock-tower_748997.png" alt="Wrong Answer!">
    </div>
    <p>${feedback}</p>
    <form>
    <input class="button button-next" type="submit" value="Next">
    </form>`
}

function renderIncorrectFeedBack() {
  let feedbackString = generateIncorrectFeedback();
  $('.js-feedback').html(feedbackString);
  console.log('renderIncorrectFeedBack has ran');
}



function handleNextQuestion() {
  $('.js-feedback').on('submit', function(element) {
    console.log('handleNextQuestion has ran')
    event.preventDefault();
    if (currentQuestion < 9) {
      showQuestions();
      hideFeedback();
      currentQuestion++;
      handleUpdateQuestionCounter()
      renderQuizQuestion();
    }
    else {
      handleFinalResults();
    }
  });
}



function handleFinalResults() {
  console.log('handleFinalResults has run');
  hideFeedback();
  showResults();
  hideScoring();
  renderFinalResults();
}

function generateFinalResults() {
  console.log('generateFinalResults has run');
  if (userScore <= 4) {
    return `
    <p class="firstP">Have you even seen the movies?!</p>
    <div class="feedback-icon">
      <img src="images/LOW-iconfinder_skate_748989.png" alt="Hoverboard">
    </div>
    <p>You got ${userScore} out of 10 correct</p>
    <form>
      <input class="button button-restart" type="submit" value="Restart Quiz">
    </form>`
  }
  else if (userScore <= 7) {
    return `
    <p class="firstP">Not too bad! Watch the movies again and you'll be pro.</p>
    <div class="feedback-icon">
      <img src="images/MED-iconfinder_delorean-01_748996.png" alt="Delorean Wings">
    </div>
    <p>You got ${userScore} out of 10 correct</p>
    <form>
      <input class="button button-restart" type="submit" value="Restart Quiz">
    </form>`
  }
  else {
    return `
    <p class="firstP"><i>Great Scott!</i><br>You know your <i>Back to the Future</i>!</p>
    <div class="feedback-icon">
      <img src="images/HI-iconfinder_delorean-04_748993.png" alt="Delorean Flames">
    </div>
    <p>You got ${userScore} out of 10 correct!</p>
    <form>
      <input class="button button-restart" type="submit" value="Restart Quiz">
    </form>`
}
};

function renderFinalResults() {
  let finalResultsString = generateFinalResults();
  $('.js-results').html(finalResultsString);
  console.log('renderFinalResults has ran');
}



function handleRestartQuiz() {
  $('.js-results').on('submit', function(element) {
    event.preventDefault();
    currentQuestion = 0;
    userScore = 0
    handleUpdateScore();
    handleUpdateQuestionCounter();
    hideResults();
    renderQuizQuestion();
    showQuestions();
    console.log('handleRestartQuiz has run');
  });
}



function handleUpdateScore() {
  $('.js-score').text(userScore);
  console.log('handleUpdateScore has run');
}

function handleUpdateQuestionCounter() {
  $('.js-question-count').text(currentQuestion+1);
  console.log('handleUpdateQuestionCounter has run');
}



function handleQuiz() {
  handleStartQuiz();
  handleUserAnswerSubmitted();
  handleNextQuestion();
  handleRestartQuiz();
}


$(handleQuiz);