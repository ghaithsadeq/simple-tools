// Prompt Helper
function generatePrompt() {
    let text = document.getElementById("promptInput").value;
    document.getElementById("promptOutput").innerText =
        "✨ Improved Prompt:\nExplain this clearly and safely for a student: " + text;
}

// Study Assistant
function summarizeText() {
    let text = document.getElementById("studyInput").value;
    document.getElementById("studyOutput").innerText =
        "📘 Summary:\nThis text explains the main ideas in a simple way. Key points:\n- " +
        text.slice(0, 120) + "...";
}

// Concept Explainer
function explainConcept() {
    let concept = document.getElementById("explainInput").value;
    document.getElementById("explainOutput").innerText =
        "💡 Explanation:\nA simple explanation of '" + concept +
        "' for beginners. This concept is used in AI to help computers learn patterns.";
}

// Safety Checker
function checkSafety() {
    let text = document.getElementById("safetyInput").value;

    let safe = "✔ This looks safe for learning and AI use.";
    let unsafe = "⚠ This idea may need adult supervision or safer wording.";

    if (text.includes("hack") || text.includes("bypass") || text.includes("attack")) {
        document.getElementById("safetyOutput").innerText = unsafe;
    } else {
        document.getElementById("safetyOutput").innerText = safe;
    }
}

// Vocabulary Builder
function generateWord() {
    let words = [
        "Neural Network — A system that learns patterns.",
        "Dataset — Information used to train AI.",
        "Prompt — Instructions you give to an AI.",
        "Model — The AI brain that learns and answers.",
        "Token — A small piece of text AI reads."
    ];

    let random = words[Math.floor(Math.random() * words.length)];
    document.getElementById("wordOutput").innerText = random;
}

// Concept Cards
function showCard(text) {
    document.getElementById("cardOutput").innerText = "📘 " + text;
}

// Simple Concept Generator
function showConcept() {
    let concepts = [
        "Machine Learning — Teaching computers using examples.",
        "AI Safety — Using AI responsibly.",
        "Training — Teaching AI new skills.",
        "Inference — When AI gives answers.",
        "Ethics — Using AI in a fair way."
    ];

    let random = concepts[Math.floor(Math.random() * concepts.length)];
    document.getElementById("conceptOutput").innerText = random;
}

// Beginner Quiz
function startQuiz() {
    let questions = [
        "What is a prompt?",
        "What is a dataset?",
        "What does AI stand for?",
        "What is machine learning?",
        "Why is AI safety important?"
    ];

    let random = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("quizOutput").innerText = "❓ " + random;
}

// Full Quiz System
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
