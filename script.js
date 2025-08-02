const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Creative Style System",
        c: "Cascading Style Sheets",
        d: "Colorful Style Syntax",
        correct: "c"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<javascript>",
        d: "<script>",
        correct: "d"
    },
    {
        question: "What is the correct syntax for referring to an external script?",
        a: "<script href='app.js'>",
        b: "<script src='app.js'>",
        c: "<js src='app.js'>",
        d: "<link script='app.js'>",
        correct: "b"
    }
];

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentData = quizData[currentQuiz];
    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((el) => {
        if (el.checked) {
            answer = el.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((el) => el.checked = false);
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById('quiz').innerHTML = `
        <h2>You scored ${score} out of ${quizData.length}!</h2>
        <button onclick="location.reload()">Play Again</button>
      `;
        }
    }
});
