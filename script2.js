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
  addThirdAnswers();
};
const addQuestion4 = function () {
  const addAQuestion4 = document.createElement("h2");
  document.body.appendChild(addAQuestion4);
  addAQuestion4.textContent = questions[3].question;
  addFourthAnswers();
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

  document.body.append(addDiv);
  addDiv.appendChild(addAnAnswerLabel1);
  addDiv.appendChild(addAnAnswer1);
  addDiv.appendChild(addAnAnswerLabel2);
  addDiv.appendChild(addAnAnswer2);
  addDiv.appendChild(addAnAnswerLabel3);
  addDiv.appendChild(addAnAnswer3);
  addDiv.appendChild(addAnAnswerLabel4);
  addDiv.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");
  addDiv.setAttribute("class", "questions");

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
      const addTimerClock = document.createElement("h1");
      addTimerClock.setAttribute("id", "timer-clock");
      document.body.appendChild(addTimerClock);
      //   updateCountdown();
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
  const addAnAnswer1 = document.createElement("button");
  const addAnAnswerLabel1 = document.createElement("h3");
  const addAnAnswer2 = document.createElement("button");
  const addAnAnswerLabel2 = document.createElement("h3");
  const addAnAnswer3 = document.createElement("button");
  const addAnAnswerLabel3 = document.createElement("h3");
  const addAnAnswer4 = document.createElement("button");
  const addAnAnswerLabel4 = document.createElement("h3");

  document.body.append(addDiv);
  addDiv.appendChild(addAnAnswerLabel1);
  addDiv.appendChild(addAnAnswer1);
  addDiv.appendChild(addAnAnswerLabel2);
  addDiv.appendChild(addAnAnswer2);
  addDiv.appendChild(addAnAnswerLabel3);
  addDiv.appendChild(addAnAnswer3);
  addDiv.appendChild(addAnAnswerLabel4);
  addDiv.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");
  addDiv.setAttribute("class", "questions");

  addAnAnswerLabel1.textContent = "1.";
  addAnAnswer1.textContent = questions[1].answers[0];
  addAnAnswerLabel2.textContent = "2.";
  addAnAnswer2.textContent = questions[1].answers[1];
  addAnAnswerLabel3.textContent = "3.";
  addAnAnswer3.textContent = questions[1].answers[2];
  addAnAnswerLabel4.textContent = "4.";
  addAnAnswer4.textContent = questions[1].answers[3];

  document.body.classList.add("question-container");
  const clickAnswer = function (event) {
    var userInput = event.target;
    console.log(userInput);

    if (userInput.textContent === questions[1].correctAnswer) {
      clearPage();
      addQuestion3();
      //   updateCountdown();
      const addTimerClock = document.createElement("h1");
      addTimerClock.setAttribute("id", "timer-clock");
      document.body.appendChild(addTimerClock);
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
const addThirdAnswers = function () {
  const addDiv = document.createElement("div");
  const addAnAnswer1 = document.createElement("button");
  const addAnAnswerLabel1 = document.createElement("h3");
  const addAnAnswer2 = document.createElement("button");
  const addAnAnswerLabel2 = document.createElement("h3");
  const addAnAnswer3 = document.createElement("button");
  const addAnAnswerLabel3 = document.createElement("h3");
  const addAnAnswer4 = document.createElement("button");
  const addAnAnswerLabel4 = document.createElement("h3");

  document.body.append(addDiv);
  addDiv.appendChild(addAnAnswerLabel1);
  addDiv.appendChild(addAnAnswer1);
  addDiv.appendChild(addAnAnswerLabel2);
  addDiv.appendChild(addAnAnswer2);
  addDiv.appendChild(addAnAnswerLabel3);
  addDiv.appendChild(addAnAnswer3);
  addDiv.appendChild(addAnAnswerLabel4);
  addDiv.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");
  addDiv.setAttribute("class", "questions");

  addAnAnswerLabel1.textContent = "1.";
  addAnAnswer1.textContent = questions[2].answers[0];
  addAnAnswerLabel2.textContent = "2.";
  addAnAnswer2.textContent = questions[2].answers[1];
  addAnAnswerLabel3.textContent = "3.";
  addAnAnswer3.textContent = questions[2].answers[2];
  addAnAnswerLabel4.textContent = "4.";
  addAnAnswer4.textContent = questions[2].answers[3];

  document.body.classList.add("question-container");
  const clickAnswer = function (event) {
    var userInput = event.target;
    console.log(userInput);

    if (userInput.textContent === questions[2].correctAnswer) {
      clearPage();
      addQuestion4();
      //   updateCountdown()
      const addTimerClock = document.createElement("h1");
      addTimerClock.setAttribute("id", "timer-clock");
      document.body.appendChild(addTimerClock);
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
const addFourthAnswers = function () {
  const addDiv = document.createElement("div");
  const addAnAnswer1 = document.createElement("button");
  const addAnAnswerLabel1 = document.createElement("h3");
  const addAnAnswer2 = document.createElement("button");
  const addAnAnswerLabel2 = document.createElement("h3");
  const addAnAnswer3 = document.createElement("button");
  const addAnAnswerLabel3 = document.createElement("h3");
  const addAnAnswer4 = document.createElement("button");
  const addAnAnswerLabel4 = document.createElement("h3");

  document.body.append(addDiv);
  addDiv.appendChild(addAnAnswerLabel1);
  addDiv.appendChild(addAnAnswer1);
  addDiv.appendChild(addAnAnswerLabel2);
  addDiv.appendChild(addAnAnswer2);
  addDiv.appendChild(addAnAnswerLabel3);
  addDiv.appendChild(addAnAnswer3);
  addDiv.appendChild(addAnAnswerLabel4);
  addDiv.appendChild(addAnAnswer4);

  addAnAnswer1.setAttribute("id", "Answer1");
  addAnAnswer2.setAttribute("id", "Answer2");
  addAnAnswer3.setAttribute("id", "Answer3");
  addAnAnswer4.setAttribute("id", "Answer4");
  addDiv.setAttribute("class", "questions");

  addAnAnswerLabel1.textContent = "1.";
  addAnAnswer1.textContent = questions[3].answers[0];
  addAnAnswerLabel2.textContent = "2.";
  addAnAnswer2.textContent = questions[3].answers[1];
  addAnAnswerLabel3.textContent = "3.";
  addAnAnswer3.textContent = questions[3].answers[2];
  addAnAnswerLabel4.textContent = "4.";
  addAnAnswer4.textContent = questions[3].answers[3];

  document.body.classList.add("question-container");
  const clickAnswer = function (event) {
    var userInput = event.target;
    console.log(userInput);

    if (userInput.textContent === questions[3].correctAnswer) {
      clearPage();
      clearInterval();
      gameOver();
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

const gameOver = function () {
  if (seconds > 1) {
    const gameOverMessage = document.createElement("h1");
    const submitName = document.createElement("form");
    const textInput = document.createElement("textarea");
    textInput.setAttribute("id", "textfield");
    document.getElementById("textField").document.body.append(gameOverMessage);
    document.body.appendChild(submitName);
    submitName.appendChild(textInput);
    gameOverMessage.textContent = `Congratulations you finished the game with time ${seconds} seconds left!`;
    document.body.style.background = "green";
  } else {
    const gameOverMessage = document.createElement("h1");
    document.body.appendChild(gameOverMessage);
    gameOverMessage.textContent = "You ran out of time!";
  }
};
var timeLeft = localStorage.setItem(seconds);
