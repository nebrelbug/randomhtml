document.getElementById("submit").addEventListener("click", onSubmissionClick);
var response = document.getElementById("response");

function onSubmissionClick() {
  response.innerHTML = "You clicked the button!";
}
