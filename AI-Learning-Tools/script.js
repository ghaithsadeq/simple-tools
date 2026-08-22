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
