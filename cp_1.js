const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const comments = document.getElementById("comments");
const display = document.getElementById("feedback-display");
const charCount = document.getElementById("charCount");

comments.addEventListener("input", ()=> {
    charCount.textContent = comments.value.length;
});