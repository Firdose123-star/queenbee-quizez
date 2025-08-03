let username = '';
let language = '';
let currentQuestion = 0;
let score = 0;

const questions = {
  python: [
    {
      question: "What is the output of print(2 ** 3)?",
      options: ["5", "6", "8", "9"],
      answer: "8"
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "def", "define", "function"],
      answer: "def"
    }
  ],
  js: [
    {
      question: "What does 'var' declare in JavaScript?",
      options: ["Variable", "Function", "Array", "Object"],
      answer: "Variable"
    },
    {
      question: "What is the output of console.log(typeof [])?",
      options: ["object", "array", "list", "undefined"],
      answer: "object"
    }
  ],
  gk: [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Chennai", "Delhi", "Kolkata"],
      answer: "Delhi"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    }
  ]
};

function showLanguageSelection() {
  username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter your name!");
    return;
  }
  document.getElementById("user-info").style.display = "none";
  document.getElementById("language-select").style.display = "block";
}

function startQuiz() {
  language = document.getElementById("language").value;
  document.getElementById("language-select").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  showQuestion();
}

function showQuestion() {
  let q = questions[language][currentQuestion];
  document.getElementById("question").innerText = q.question;
  let optionsHtml = '';
  q.options.forEach((opt) => {
    optionsHtml += `<button onclick="checkAnswer('${opt}')">${opt}</button><br>`;
  });
  document.getElementById("options").innerHTML = optionsHtml;
}

function checkAnswer(selected) {
  let correct = questions[language][currentQuestion].answer;
  if (selected === correct) score++;
  disableOptions();
}

function disableOptions() {
  const btns = document.querySelectorAll("#options button");
  btns.forEach((btn) => {
    btn.disabled = true;
    if (btn.innerText === questions[language][currentQuestion].answer) {
      btn.style.backgroundColor = "lightgreen";
    } else {
      btn.style.backgroundColor = "lightcoral";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions[language].length) {
    showQuestion();
  } else {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("final-score").innerText = `${username}, your score is ${score}/${questions[language].length}`;
  }
}

