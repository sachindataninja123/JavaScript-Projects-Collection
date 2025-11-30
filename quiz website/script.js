//Initailize Questions with answers

const quizData = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    options: ["var x = 5;", "variable x = 5;", "v x = 5;", "declare x = 5;"],
    correct: 0,
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "What does 'DOM' stand for?",
    options: [
      "Data Object Management",
      "Dynamic Object Method",
      "Document Object Model",
      "Document Oriented Markup",
    ],
    correct: 2,
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<h1>", "<header>", "<head>"],
    correct: 1,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 1,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlink Text Module Language",
    ],
    correct: 0,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Mozilla", "Netscape", "Microsoft", "Sun Microsystems"],
    correct: 1,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    correct: 0,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/*", "#", "<!-- -->"],
    correct: 0,
  },
  {
    question:
      "Which method is used to convert JSON data to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "parse.JSON()",
    ],
    correct: 0,
  },
  {
    question: "Which HTTP method is used to fetch data from a server?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correct: 2,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<href>", "<a>", "<hyper>"],
    correct: 2,
  },
    {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correct: 1,
  },
    {
    question: "In which year was JavaScript created?",
    options: ["1995", "1990", "2000", "2005"],
   correct : 0,
  },
  {
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Application Protocol Interface", "Applied Programming Interface", "App Programming Integration"],
    correct:0,
  },
   {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Strong Question Language", "Simple Query List", "Structured Question Language"],
    correct: 0,
  },
    {
    question: "Which protocol is used to transfer web pages?",
    options: [ "FTP", "SMTP", "SSH","HTTP"],
    correct :3
  }
];

//Initialize Js
const quiz = document.getElementById("quiz");
const answerEle = document.querySelectorAll(".answer");
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1,  #option_2,  #option_3,  #option_4"
  );
const submitBtn = document.getElementById("submit-btn");

let currentQuiz = 0;
let score = 0;

//Dynamically set questions
const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  console.log(question, options);
  questionElem.innerText = `${currentQuiz + 1}: ${question}`;
  // option_1.innerText = options[0];
  // option_2.innerText = options[1];
  // option_3.innerText = options[2];
  // option_4.innerText = options[3];
  options.forEach(
    (currOpt, index) => (window[`option_${index + 1}`].innerText = currOpt)
  );
};

loadQuiz();

// get selected answer function on button click

const getSelectedOption = () => {
  let answerElement = Array.from(answerEle);
  return answerElement.findIndex((currElem) => currElem.checked);
};

const deSelectedAnswers = () => {
  return answerEle.forEach((currElem) => (currElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score += 1;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deSelectedAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
    <p>Congratulations to completing the quiz!</p>
    <button class="reload-button" onclick="location.reload()">Play Again</button>
    </div>
    `;
  }
});
