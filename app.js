let input = document.querySelector("#guess-input");
let submit = document.querySelector("#guess-value");
const form = document.querySelector("form");
const game = document.getElementById("game");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let compValue = Math.floor(Math.random() * 10) + 1;
  if (parseInt(input.value) > 10) {
    alert("please choose a number between 1 and 10");
  } else if (parseInt(input.value) > 0) {
    console.log(compValue);
    if (parseInt(input.value) === compValue) {
      document.querySelector(".message").innerHTML = "You guessed Correctly";
      document.querySelector(".message").style.color = "green";
      input.style.borderColor = "green";
    } else {
      document.querySelector(".message").innerHTML = "You guessed WRONG";
      document.querySelector(".message").style.color = "red";
      input.style.borderColor = "red";
    }
    input.value = "";
  } else {
    alert("please enter a number");
    input.style.borderColor = "";
    document.querySelector(".message").style.color = "";
  }
});
