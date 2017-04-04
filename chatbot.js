var userInput = document.getElementById("userInput").value;
var response = document.getElementById("response);
function getAnswer() {
  if (userInput.lower === "hi") {
    response.textContent = "Hi to you, too"
  } else {
    if (userInput.lower === "cookies") {
      response.textContent = "Cake!"
  }
}
getAnswer();

