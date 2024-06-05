let number = document.getElementById("number");

let output = GFG_Fun();

function GFG_Fun() {
  var arr = [];
  for (var i = 1; i <= 10; i++) {
    arr.push(i);
  }
  var output = arr[Math.floor(Math.random() * arr.length)];
  return output;
}
console.log(output);

function myFunction() {
    if (number.value == output) {
        console.log('It Tallys');
    }
  }

