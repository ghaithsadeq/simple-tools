function generatePrompt() {
    let text = document.getElementById("promptInput").value;
    document.getElementById("promptOutput").innerText =
        "✨ Improved Prompt:\nExplain this clearly and safely for a student: " + text;
}

function summarizeText() {
    let text = document.getElementById("studyInput").value;
    document.getElementById("studyOutput").innerText =
        "📘 Summary:\nThis text explains the main ideas in a simple way. Key points:\n- " +
        text.slice(0, 120) + "...";
}

function explainConcept() {
    let concept = document.getElementById("explainInput").value;
    document.getElementById("explainOutput").innerText =
        "💡 Explanation:\nA simple explanation of '" + concept +
        "' for beginners. This concept is used in AI to help computers learn patterns.";
}
function showCard(text) {
    document.getElementById("cardOutput").innerText = "📘 " + text;
}
let quizQuestions = [
    { q: "What is a dataset?", a: "information" },
    { q: "What is a prompt?", a: "instruction" },
    { q: "What does AI stand for?", a: "artificial intelligence" }
];

let currentQuiz = 0;

function startFullQuiz() {
    currentQuiz = Math.floor(Math.random() * quizQuestions.length);
    document.getElementById("quizQuestion").innerText = "❓ " + quizQuestions[currentQuiz].q;
}

function checkQuiz() {
    let answer = document.getElementById("quizAnswer").value.toLowerCase();
    if (answer.includes(quizQuestions[currentQuiz].a)) {
        document.getElementById("quizResult").innerText = "✔ Correct!";
    } else {
        document.getElementById("quizResult").innerText = "❌ Try again!";
    }
}
