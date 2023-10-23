const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

#/let myVariable = "Bob"; #/

#/
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
#/

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

document.querySelector("myButton").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
