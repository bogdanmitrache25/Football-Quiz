/*                         Enunciado. 
Desarrolla un progrma en Js que simule un juego de preguntas y respuestas. El juego debe contener al menos 10 preguntas con opciones de respuesta. El usuario inresará sus respuestas y al final del juego, el programa deberá calcular y mostrar la puntuación total obtenida, considerando las respuestas correctas e incorrectas. Utiliza funciones para modularizar el código y mejora la experiencia del usuario con mensajes informativos y retroalimentación. */

const questions = [
  {
    question: "Who won the inaugural Ballon d'Or award in 1956?",
    answers: [
      { text: "Johan Cruyff" },
      { text: "Stanley Matthews", correct: true },
      { text: "Diego Maradona" },
      { text: "Pelé" },
    ],
  },
  {
    question:
      "What was the Ballon d'Or award commonly known as when it was first introduced in 1956?",
    answers: [
      { text: "FIFA World Player of the Year" },
      { text: "European Footballer of the Year", correct: true },
      { text: "Golden Ball" },
      { text: "Football Excellence Award" },
    ],
  },
  {
    question:
      "In what year did the Ballon d'Or start allowing players from outside Europe to win?",
    answers: [
      { text: "1960" },
      { text: "1980" },
      { text: "1995", correct: true },
      { text: "2000" },
    ],
  },
  {
    question:
      "Who became the first and only goalkeeper to win the Ballon d'Or in 1963?",
    answers: [
      { text: "Lev Yashin", correct: true },
      { text: "Gianluigi Buffon" },
      { text: "Dino Zoff" },
      { text: "Fabio Cannavaro" },
    ],
  },
  {
    question:
      "Who holds the record for the most Ballon d'Or wins by a single player?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo" },
      { text: "Pelé" },
      { text: "Diego Maradona" },
    ],
  },
  {
    question:
      "Which French football legend won the Ballon d'Or three times in a row from 1983 to 1985?",
    answers: [
      { text: "Zinedine Zidane" },
      { text: "Michel Platini", correct: true },
      { text: "Thierry Henry" },
      { text: "Raymond Kopa" },
    ],
  },
  {
    question:
      "In what year was the Ballon d'Or Féminin, the award for the best female footballer, introduced?",
    answers: [
      { text: "2016" },
      { text: "2017" },
      { text: "2019" },
      { text: "2018", correct: true },
    ],
  },
  {
    question: "Who won the first Ballon d'Or Féminin?",
    answers: [
      { text: "Ada Hegerberg", correct: true },
      { text: "Marta" },
      { text: "Sam Kerr" },
      { text: "Megan Rapinoe" },
    ],
  },
  {
    question: "Who is the only African player to ever the win the Ballon d'Or?",
    answers: [
      { text: "Didier Drogba" },
      { text: "Samuel Eto'o" },
      { text: "George Weah", correct: true },
      { text: "Roger Milla" },
    ],
  },
  {
    question:
      "Cristiano Ronaldo last beat Lionel Messi to the award in 2008. Who finished third that year?",
    answers: [
      { text: "Fernando Torres", correct: true },
      { text: "Kaka" },
      { text: "Xavi" },
      { text: "David Villa" },
    ],
  },
  {
    question:
      "When was the last time this year's winner Cristiano Ronaldo, finished outside the top three?",
    answers: [
      { text: "2009" },
      { text: "2010", correct: true },
      { text: "2005" },
      { text: "2006" },
    ],
  },
  {
    question:
      "The last Bundesliga representative triumphed in 1996. Who was victorious that year?",
    answers: [
      { text: "Lothar Matthaus" },
      { text: "Andreas Moller" },
      { text: "Mattias Sammer", correct: true },
      { text: "Jurgen Klinsmann" },
    ],
  },
  {
    question: "Who was the first man to win consecutive awards?",
    answers: [
      { text: "Franz Beckenbauer" },
      { text: "Eusebio" },
      { text: "Kevin Keegan" },
      { text: "Johan Cruyff", correct: true },
    ],
  },
  {
    question:
      "Not a single Englishman was even on the 23 man shortlist this year – who was the last to win the accolade?",
    answers: [
      { text: "Michael Owen", correct: true },
      { text: "David Beckham" },
      { text: "Frank Lampard" },
      { text: "Steven Gerrard" },
    ],
  },
  {
    question:
      "Which Spanish football league has produced the most Ballon d'Or winners?",
    answers: [
      { text: "La Liga Primera" },
      { text: "La Liga", correct: true },
      { text: "Primera División" },
      { text: "Liga Española" },
    ],
  },
  {
    question:
      "Which footballer was voted the Ballon d'Or for the best player of the 20th century?",
    answers: [
      { text: "Lionel Messi" },
      { text: "Pelé", correct: true },
      { text: "Neymar" },
      { text: "Ronaldinho" },
    ],
  },
  {
    question:
      "What is the name of the trophy awarded to the best U21 footballer in the world?",
    answers: [
      { text: "European Youth Championship" },
      { text: "Kopa Trophy", correct: true },
      { text: "European U21 Footballer of the Year" },
      { text: "The European Football Federation Cup" },
    ],
  },
  {
    question:
      "Who was the captain of the Netherlands football team that won the World Cup in consecutive years in 1987, 1988 and 1989?",
    answers: [
      { text: "Ronaldinho" },
      { text: "Johan Cruyff" },
      { text: "Marco van Basten", correct: true },
      { text: "Marcos Rojas" },
    ],
  },
  {
    question: "Who won the Ballon d'Or in 2002?",
    answers: [
      { text: "Ronaldo Nazario", correct: true },
      { text: "Luis Figo" },
      { text: "Roberto Carlos" },
      { text: "Luis Suárez" },
    ],
  },
  {
    question: "Who won the Ballon d'Or in 2007?",
    answers: [
      { text: "Messi" },
      { text: "Cristiano Ronaldo" },
      { text: "Didier Drogba" },
      { text: "Kaká", correct: true },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + " " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}! `;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButtonClick() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButtonClick();
  } else {
    startQuiz();
  }
});

function showScore() {
  resetState();
  questionElement.textContent = `I got ${score} out of ${questions.length} questions correct!`;
  nextButton.textContent = "Share on WhatsApp";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", shareResult);
}

function restartQuiz() {
  startQuiz();
}

function showScore() {
  resetState();
  questionElement.textContent = `You scored ${score} out of ${questions.length} questions correct!`;
  nextButton.textContent = "Try Again";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", restartQuiz);
}

startQuiz();
