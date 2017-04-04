var userInput = "0";

// 1. Find and store the element we want to listen to events on.
    var submitButton = document.getElementById("submit");
    // 2. Define the function that will respond to the event.
    // callback 
    var onButtonClick = function() {
        clickerButton.textContent = "Oh wow, you clicked me!";
      userInput = document.getElementById("userInput").value;
      getAnswer();
    };
    // 3. Add the event listener for the element and function
    // anonymous "inline"
    submitButton.addEventListener("click", onButtonClick);
    




function getAnswer() {
  var response = document.getElementById("response");
  if (userInput.lower === "hi") {
    response.textContent = "Hi to you, too"
  } else {
    if (userInput.lower === "cookies") {
      response.textContent = "Cake!"
  }
}
getAnswer();

