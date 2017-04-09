var userInput = "0";

// 1. Find and store the element we want to listen to events on.
    var submitButton = document.getElementById("submit");
    // 2. Define the function that will respond to the event.
    // callback 
    var onButtonClick = function() {
      userInputRaw = document.getElementById("userInput").value;
      var userInputLower = userInputRaw.toLowerCase();
      getAnswer();
    };
    // 3. Add the event listener for the element and function
    // anonymous "inline"
    submitButton.addEventListener("click", onButtonClick);
    




function getAnswer() {
  var response = document.getElementById("response");
  if (userInputLower === "hi") {
    response.innerHTML = "Hi to you, too"
  } else {
    if (userInputLower === "cookies") {
      response.innerHTML = "Cake!"
  }
}
getAnswer();

