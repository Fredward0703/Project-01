const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("userNameHeader");
const emailInput = document.getElementById("emailHeader");
const comments = document.getElementById("comments");
const display = document.getElementById("feedback-display");
const charCount = document.getElementById("charCount");

comments.addEventListener("input", ()=> {
    charCount.textContent = comments.value.length;
});

nameInput.addEventListener("mouseover", mouseOver);
nameInput.addEventListener("mouseout", mouseOut);
function mouseOver() {
    nameInput.style.color = "red";
}
function mouseOut() {
    nameInput.style.color = "black";
}


