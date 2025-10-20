const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("userNameHeader");
const username = document.getElementById("username");
const emailInput = document.getElementById("emailHeader");
const email = document.getElementById("email");
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

form.addEventListener("submit", e =>{
    e.preventDefault();
    if (!username.value || !email.value || !comments.value) {
        alert("Please fill out all fields!");
        return;
    } 
    const newDiv = document.createElement("div");
    newDiv.textContent = `Username:${username.value} Email:${email.value} What you wrote:${comments.value}`;
    display.appendChild(newDiv);

    username.value = "";
    email.value = "";
    comments.value = "";
    charCount.textContent = "Characters: 0";
});

