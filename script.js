var button = document.getElementById("clickmebutton");
var messages = [
    "I love you",
    "I love you so very much",
    "You have the cutest and prettiest smile and laugh",
    "I am so happy that I have you",
    "You are the best and the prettiest evur",
    "Okay stop na clicking oi nabuang naman ka",
    "Why u still here HAHAHAHHAHAHA",
    "il give u big kiss next time we meet hehe"
]

var currentIndex = 0

button.addEventListener("click", function() {
    button.innerHTML = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
});
