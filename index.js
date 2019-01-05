'use strict';

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;

const questionAnswerArr = [
  {
    question: "Who directed Back to the Future?",
    answers: [
      'Steven Spielberg',
      'Robert Zemeckis',
      'George Lucas',
      'John Carpenter'
    ],
    correctAnswer: 'Robert Zemeckis',
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
  },
  {
    question: "What is Doc Brown's dog's name?",
    answers: [
      'Newton',
      'Einstein',
      'Arthur',
      'Galileo'
    ],
    correctAnswer: 'Einstein',
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
  },
  {
    question: "Finish the phrase 'Where we're going, we don't need...' what?",
    answers: [
      'gas',
      'roads',
      'maps',
      'money'
    ],
    correctAnswer: 'roads',
  },
  {
    question: "What movie is being advertised in Future 2015?",
    answers: [
      'Jaws 19',
      'Star Wars: The Force Awakens',
      'Jurassic World',
      'Rocky X'
    ],
    correctAnswer: 'Jaws 19',
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
  }
]

const answerKey = {
    question1: 'Robert Zemeckis',
    question2: 'The Power of Love',
    question3: 'Einstein',
    question4: '1.21 gigawatts',
    question5: 'Enchantment Under the Sea',
    question6: '88 mph',
    question7: 'Roads',
    question8: 'Jaws 19',
    question9: 'Great Scott!',
    question10: 'A sports almanac',
}

function incrementQuestionNumber() {
  currentQuestion ++;
}

function generateQuizQuestion(question, answerOption, questionNumber) {
  return `
    <div class="feedback">
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
                </form>
            </div>
            <form action="Q-Feedback-Correct.html">
                <input class="button button-submit" type="submit" value="Submit">
            </form>
    `
    console.log('renderQuiz has run');
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
  incrementQuestionNumber();
  console.log('generateQuizQuestionString has run');
  return questionString;
}

function renderQuizQuestion() {
  let quizQuestionString = generateQuizQuestionString();
  $('.js-questions').html(quizQuestionString);
  console.log('renderQuizQuestion has ran');
}

function hideStartScreen() {
  $('.js-start').hide();
  console.log('hideStartScreen has run')
}

function handleStartQuiz() {
  //why can't I use on ('submit') here?
  $('.js-button-start').on('click', function(event) {
    event.preventDefault();
    hideStartScreen();
    renderQuizQuestion();
    console.log('startQuiz has run');
  });
}

function handleAnswerSubmit() {
    console.log('handleAnswerSubmit has run');
}

function handleNextQuestionSubmit() {
    console.log('handleNextQuestionSubmit has run');
}

function handleCorrectAnswer() {
    console.log('handleCorrectAnswer has run');
}

function handleIncorrectAnswer() {
    console.log('handleIncorrectAnswer has run');
}

function handleFinalResults() {
    console.log('handleFinalResults has run');
}

function handleRestartQuiz() {
    console.log('handleRestartQuiz has run');
}

function handleUpdateScore() {
    console.log('handleUpdateScore has run');
}

function handleUpdateQuestionCounter() {
    console.log('handleUpdateQuestionCounter has run');
}

function handleQuiz() {
    handleStartQuiz()
}


$(handleQuiz);