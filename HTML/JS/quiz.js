const questions = [
    {
        question: "What is the capital of Finland",
        options: ["London", "Madrid", "Paris", "Helsinki"],
        answer: "Helsinki"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "How many lakes does Finland have?",
        options: ["104000", "2500", "7430000", "188000"],
        answer: "188000"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
//const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    for (let i = 0; i < current.options.length; i++) {
        options[i].textContent = current.options[i];
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz complete!";
    options.forEach((option) => {
        option.style.display = "none";
    });
    //nextButton.style.display = "none";
    scoreElement.textContent = score + " out of " + questions.length;
    resultContainer.style.display = "block";
}

loadQuestion();

options.forEach((option) => {
    option.addEventListener("click", (e) => {
        checkAnswer(e.target.textContent);
    });
});

const restartButton = document.getElementById("restart-button");

function resetQuizPoints() {
    currentQuestion = 0;
    score = 0;
}

function resetQuizDisplay() {
    options.forEach((option) => {
        option.style.display = "block";
    });
    resultContainer.style.display = "none";
}

restartButton.addEventListener("click", () => {
    resetQuizPoints();
    resetQuizDisplay(); // Reset the display state
    loadQuestion();
    alert("Quiz is restarted!");
});


