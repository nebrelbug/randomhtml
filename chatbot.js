document.getElementById("submit").addEventListener("click", onButtonClick);
var response = document.getElementById("response");

function onButtonClick() {
  response.innerHTML = "You clicked the button!";
}
