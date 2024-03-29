var seconds = 60;
var questions = [
  {
    question: "Which of the following options are not a fruit?",
    answers: ["Apple", "Carrot", "Peach", "Pear"],
    correctAnswer: "Carrot",
  },
  {
    question: "Which of the following is not a color?",
    answers: ["Red", "Blue", "Duck", "Orange"],
    correctAnswer: "Duck",
  },
  {
    question: "How many skitles are there in a bag usually?",
    answers: ["53", "56", "51", "55"],
    correctAnswer: "56",
  },
  {
    question: "What do you call a group of porcupines?",
    answers: ["Porkie", "Pod", "Prickle", "Porcs"],
    correctAnswer: "Prickle",
  },
];
var startGameButton = document.getElementById("start-game-button");
const startGame = function () {
  clearPage();
  addQuestion();
  addFirstAnswers();
  timer();
};
startGameButton.onclick = startGame;

const nextQuestion = function () {
  button.textContent = "clear";
  button.onclick = clearPage;
};

const clearPage = function () {
  // document.getElementById("main-content").innerHTML = "";
  document.body.innerHTML = "";
};

var timer = function () {
  document.getElementById("timer-clock");
  const addTimerClock = document.createElement("h1");
  addTimerClock.setAttribute("id", "timer-clock");
  document.body.appendChild(addTimerClock);
  setInterval(updateCountdown, 1000);
  function updateCountdown() {
    document.getElementById("timer-clock").innerHTML = `${seconds} seconds`;
    seconds--;
    if (seconds < 0) {
      document.getElementById("timer-clock").textContent = "Times up!";
      return;
    }
  }
};
const addQuestion = function () {
  const addAQuestion = document.createElement("h2");
  document.body.appendChild(addAQuestion);
  addAQuestion.textContent = questions[0].question;
};
const addQuestion2 = function () {
  const addAQuestion2 = document.createElement("h2");
  document.body.appendChild(addAQuestion2);
  addAQuestion2.textContent = questions[1].question;
  addSecondAnswers();
};
const addQuestion3 = function () {
  const addAQuestion3 = document.createElement("h2");
  document.body.appendChild(addAQuestion3);
  addAQuestion3.textContent = questions[2].question;
  addSecondAnswers();
};
const addQuestion4 = function () {
  const addAQuestion4 = document.createElement("h2");
  document.body.appendChild(addAQuestion4);
  addAQuestion4.textContent = questions[3].question;
  addSecondAnswers();
};

const addFirstAnswers = function () {
  const addDiv = document.createElement("div");
  const addAnAnswer1 = document.createElement("button");
  const addAnAnswerLabel1 = document.createElement("h3");
  const addAnAnswer2 = document.createElement("button");
  const addAnAnswerLabel2 = document.createElement("h3");
  const addAnAnswer3 = document.createElement("button");
  const addAnAnswerLabel3 = document.createElement("h3");
  const addAnAnswer4 = document.createElement("button");
  const addAnAnswerLabel4 = document.createElement("h3");

  document.body.appendChild(addAnAnswerLabel1);
  document.body.appendChild(addAnAnswer1);
  document.body.appendChild(addAnAnswerLabel2);
  document.body.appendChild(addAnAnswer2);
  document.body.appendChild(addAnAnswerLabel3);
  document.body.appendChild(addAnAnswer3);
  document.body.appendChild(addAnAnswerLabel4);
  document.body.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");

  addAnAnswerLabel1.textContent = "1.";
  addAnAnswer1.textContent = questions[0].answers[0];
  addAnAnswerLabel2.textContent = "2.";
  addAnAnswer2.textContent = questions[0].answers[1];
  addAnAnswerLabel3.textContent = "3.";
  addAnAnswer3.textContent = questions[0].answers[2];
  addAnAnswerLabel4.textContent = "4.";
  addAnAnswer4.textContent = questions[0].answers[3];

  document.body.classList.add("question-container");
  const clickAnswer = function (event) {
    var userInput = event.target;
    console.log(userInput);

    if (userInput.textContent === questions[0].correctAnswer) {
      clearPage();
      addQuestion2();
      timer();
    } else {
      var note2 = document.createElement("h5");
      document.body.appendChild(note2);
      note2.textContent = "Incorrect";
      note2.style.color = "red";
      seconds -= 10;
    }
  };
  addAnAnswer1.onclick = clickAnswer;
  addAnAnswer2.onclick = clickAnswer;
  addAnAnswer3.onclick = clickAnswer;
  addAnAnswer4.onclick = clickAnswer;
};
const addSecondAnswers = function () {
  const addDiv = document.createElement("div");
  const addAnAnswerLabel1 = document.createElement("h3");
  const addAnAnswer1 = document.createElement("button");
  const addAnAnswerLabel2 = document.createElement("h3");
  const addAnAnswer2 = document.createElement("button");
  const addAnAnswerLabel3 = document.createElement("h3");
  const addAnAnswer3 = document.createElement("button");
  const addAnAnswerLabel4 = document.createElement("h3");
  const addAnAnswer4 = document.createElement("button");

  document.body.append(addDiv);
  document.body.appendChild(addAnAnswerLabel1);
  document.body.appendChild(addAnAnswer1);
  document.body.appendChild(addAnAnswerLabel2);
  document.body.appendChild(addAnAnswer2);
  document.body.appendChild(addAnAnswerLabel3);
  document.body.appendChild(addAnAnswer3);
  document.body.appendChild(addAnAnswerLabel4);
  document.body.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");

  addAnAnswerLabel1.textContent = "1.";
  addAnAnswer1.textContent = questions[1].answers[0];
  addAnAnswerLabel2.textContent = "2.";
  addAnAnswer2.textContent = questions[1].answers[1];
  addAnAnswerLabel3.textContent = "3.";
  addAnAnswer3.textContent = questions[1].answers[2];
  addAnAnswerLabel4.textContent = "4.";
  addAnAnswer4.textContent = questions[1].answers[3];

  timer();
};
const addThirdAnswers = function () {
  const addAnAnswer1 = document.createElement("button");
  const addAnAnswerLabel1 = document.createElement("h3");
  const addAnAnswer2 = document.createElement("button");
  const addAnAnswerLabel2 = document.createElement("h3");
  const addAnAnswer3 = document.createElement("button");
  const addAnAnswerLabel3 = document.createElement("h3");
  const addAnAnswer4 = document.createElement("button");
  const addAnAnswerLabel4 = document.createElement("h3");

  document.body.appendChild(addAnAnswer1);
  document.body.appendChild(addAnAnswer2);
  document.body.appendChild(addAnAnswer3);
  document.body.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");

  addAnAnswerLabel1.textContent = "1.";
  addAnAnswer1.textContent = questions[2].answers[0];
  addAnAnswerLabel2.textContent = "2.";
  addAnAnswer2.textContent = questions[2].answers[1];
  addAnAnswerLabel3.textContent = "3.";
  addAnAnswer3.textContent = questions[2].answers[2];
  addAnAnswerLabel4.textContent = "4.";
  addAnAnswer4.textContent = questions[2].answers[3];
};
const addFourthAnswers = function () {
  const addAnAnswer1 = document.createElement("button");
  const addAnAnswerLabel1 = document.createElement("h3");
  const addAnAnswer2 = document.createElement("button");
  const addAnAnswerLabel2 = document.createElement("h3");
  const addAnAnswer3 = document.createElement("button");
  const addAnAnswerLabel3 = document.createElement("h3");
  const addAnAnswer4 = document.createElement("button");
  const addAnAnswerLabel4 = document.createElement("h3");
  document.body.appendChild(addAnAnswer1);
  document.body.appendChild(addAnAnswer2);
  document.body.appendChild(addAnAnswer3);
  document.body.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");

  addAnAnswerLabel1.textContent = "1.";
  addAnAnswer1.textContent = questions[3].answers[0];
  addAnAnswerLabel2.textContent = "2.";
  addAnAnswer2.textContent = questions[3].answers[1];
  addAnAnswerLabel3.textContent = "3.";
  addAnAnswer3.textContent = questions[3].answers[2];
  addAnAnswerLabel4.textContent = "4.";
  addAnAnswer4.textContent = questions[3].answers[3];
};

// WHEN I answer a question
// 1. When a button is clicked, it acts as an answer
// 2. Tell the user they have answered the question (Right or Wrong)
// 3. Need to write questions for user to answer

// THEN I am presented with another question
// 1. After a button is clicked, I am directed to another question. (Repeate steps 2)
// 2. When an answer is clicked, I need to clear the current page

// WHEN I answer a question incorrectly
// 1. Create logic defining which answers are right and wrong
// 2. Tell the user they have answered incorrectly

// THEN time is subtracted from the clock
// 1. Take 10 seconds off the clock

// WHEN all questions are answered or the timer reaches 0
// 1. Timer stops at zero
// 2. All the questions have been answered becuase we are at the end of our array(object)

// THEN the game is over
// 1. Display how many questions you got right.
// 2. Create a button that asks them if they want to play again

// WHEN the game is over
// 1. Game over screen is shown
// 2. Game over Screen says "Thanks for playing!"

// THEN I can save my initials and my score
// 1. Create a user input to add initals
// 2. Store initals in local storage
// 3. Score will be how many seconds left on the clock
// 4. If score is higher than last, display "HIGH SCORE!!!!!!"
