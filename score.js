// Losing arguments js //
const losingArguments = [
  "The cat ate your homework.",
  "It was too windy outside.",
  "A black hole swallowed your answer sheet.",
  "Your pencil ran out of ink.",
  "The paper was allergic to your handwriting.",
];

// Function to generate a random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Get the random losing argument
const randomIndex = getRandomIndex(losingArguments.length);
const randomLosingArgument = losingArguments[randomIndex];

// Append the argument to the HTML element
const losingArgumentElement = document.getElementById("losing-argument");
losingArgumentElement.textContent = randomLosingArgument;

let again = document.querySelector(".label");
again.addEventListener("click", () => {
  location.href = "./rules.html";
});
let clicksound = new Audio("./Assets/mixkit-game-click-1114.wav")

let start = document.querySelector("#startBTN")
start.addEventListener("click",() =>{
  clicksound.play()
})