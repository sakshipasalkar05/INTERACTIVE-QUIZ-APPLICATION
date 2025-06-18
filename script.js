const quizData = [
  {
    question: "Which of the following is a correct way to declare a variable in JavaScript?",
    a: "let myVar = 5;",
    b: "int myVar = 5;",
    c: "var = 5;",
    d: "declare myVar = 5;",
    correct: "a"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    a: "// for single line, /* */ for multi-line",
    b: "# for single line",
    c: "<!-- comment -->",
    d: "-- comment",
    correct: "a"
  },
  {
    question: "What is the output of: typeof null?",
    a: "'object'",
    b: "'null'",
    c: "'undefined'",
    d: "'boolean'",
    correct: "a"
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    a: "getElementByClassName()",
    b: "querySelectorAll()",
    c: "getElementById()",
    d: "getElementsByName()",
    correct: "c"
  },
  {
    question: "What does '===' mean in JavaScript?",
    a: "Assignment operator",
    b: "Equality operator (type and value)",
    c: "Comparison of values only",
    d: "None of the above",
    correct: "b"
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    a: "let",
    b: "var",
    c: "const",
    d: "define",
    correct: "c"
  },
  {
    question: "What is a closure in JavaScript?",
    a: "A function inside a loop",
    b: "A function having access to its parent scope even after the parent function has closed",
    c: "A loop with break statement",
    d: "A variable inside a class",
    correct: "b"
  },
  {
    question: "How can you add an element to the end of an array?",
    a: "arr.add()",
    b: "arr.append()",
    c: "arr.push()",
    d: "arr.insert()",
    correct: "c"
  },
  {
    question: "Which built-in method removes the last element from an array?",
    a: "pop()",
    b: "shift()",
    c: "delete()",
    d: "splice()",
    correct: "a"
  },
  {
    question: "What is the default value of an uninitialized variable in JavaScript?",
    a: "null",
    b: "undefined",
    c: "0",
    d: "false",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = ["a", "b", "c", "d"];
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuiz() {
  resetState();
  const currentData = quizData[currentQuiz];
  questionEl.textContent = currentData.question;
  options.forEach(opt => {
    const btn = document.getElementById(opt);
    btn.textContent = currentData[opt];
    btn.onclick = () => selectAnswer(opt);
  });
}

function selectAnswer(selected) {
  const correct = quizData[currentQuiz].correct;
  options.forEach(opt => {
    const btn = document.getElementById(opt);
    btn.disabled = true;
    if (opt === correct) {
      btn.classList.add("correct");
    } else if (opt === selected) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = "Incorrect!";
    feedbackEl.style.color = "red";
  }

  nextBtn.disabled = false;
}

function resetState() {
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  options.forEach(opt => {
    const btn = document.getElementById(opt);
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

nextBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("scoreScreen").style.display = "block";
  document.getElementById("final-score").textContent = `Your Score: ${score} / ${quizData.length}`;
}

// Start the quiz
loadQuiz();
