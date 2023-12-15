// fancifymytext.js

// Function to display a test alert
function showAlert() {
    alert("Hello, world!");
}

// Function to change text size to 24pt
function changeTextSize() {
    document.getElementById("inputText").style.fontSize = "24pt";
}

// Function to apply or remove styles based on radio button selection
function applyStyles() {
    var inputTextArea = document.getElementById("inputText");

    if (document.getElementById("fancyRadio").checked) {
        // Apply fancy styles
        inputTextArea.style.fontWeight = "bold";
        inputTextArea.style.textDecoration = "underline";
        inputTextArea.style.color = "blue";
    } else {
        // Remove styles for BoringBetty
        inputTextArea.style.fontWeight = "normal";
        inputTextArea.style.textDecoration = "none";
        inputTextArea.style.color = "black";
    }
}

// Function to uppercase text and add "-Moo" suffix to the last word of each sentence
function makeMoo() {
    var inputTextArea = document.getElementById("inputText");
    var text = inputTextArea.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Add a suffix of "-Moo" to the last word of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    // Join the sentences back and update the text area
    text = sentences.join(".");
    inputTextArea.value = text;
}
