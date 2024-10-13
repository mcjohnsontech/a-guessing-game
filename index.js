let number = document.getElementById("number");
var boxText = document.getElementById("box-Text");
var errorMessage = document.getElementById("error-message");
let botton =  document.getElementById("button");
let output = GFG_Fun();

let invalidAttempts = 0;
const maxAttempts = 3;

function GFG_Fun() {
  var arr = [];
  for (var i = 1; i <= 100; i++) {
    arr.push(i);
  }
  var output = arr[Math.floor(Math.random() * arr.length)];
  return output;
}

console.log(output);

function validateOnSubmit(event) {

  invalidAttempts ++
  const regex = /^(100|[1-9][0-9]?|[1-9])$/;

  if (invalidAttempts <= 3 && !regex.test(number)) {
    event.preventDefault();
    // alert('Please enter a number between 1 and 10.');
  }
  let check = number.value
  if (number.value >= output) {
    errorMessage.innerText =
    `${check} is Greater Than The Number in The Box`;
    errorMessage.classList.add("highlight");
  } else if (number.value <= output) {
    errorMessage.innerText = `${check} is Less Than The Number in The Box`;
    errorMessage.classList.add("highlight");
  }

  if (number.value == output) {
    errorMessage.innerText = "Correct";
    errorMessage.classList.remove("highlight");
    boxText.innerHTML = `<p>${output}</p>`
  }
console.log(invalidAttempts);

if (invalidAttempts <= maxAttempts) {
  
  if (invalidAttempts == 0) {
    botton.innerText=`3`
  }
  if (invalidAttempts == 1){
    botton.innerText=`2`
  }
  if (invalidAttempts == 2) {
    botton.innerText=`1`
  }
  if (invalidAttempts == 3) {
    botton.innerText=`0`
    boxText.innerHTML = `<p>${output}</p>`
  }
}

  // boxText.innerHTML = `<p>${output}</p>`;
  GFG_Fun();
}
console.log(invalidAttempts);

// function reTry() {
//   boxText.innerHTML = "<p>&#63;</p>";
//   errorMessage.innerText = "";
// }

function validateInput(event) {
  const input = event.target.value;
  const regex = /^(100|[1-9][0-9]?|[1-9])$/;

  if (!regex.test(input)) {
    event.target.value = input.slice(0, -1);
  }
}
