
console.clear()

// and && or ||
// if ( <cond> ) {
// ..
// }

alert("hello") // pop-up dialog
var x = 5
alert(x)


var a = parseInt(prompt("Enter a number:", 0))
console.log(isNaN(a))

// part 1:
// input 2 numbers
// print sum of numbers -- in alert and in console
// if one of the numebrs is NaN console.error a message
// part 2:
// in a while-loop keep getting numbers till a number is entered and then print sum
// example:
//	while (x < 0) {
//	...    
//  }
// or:
//  do {
//  ...
//  }
//  while (x < 0)
//  also supports break + continue

// part 1
var x = parseInt(prompt("Enter 1st number:", 0))
var y = parseInt(prompt("Enter 2nd number:", 0))
if (isNaN(x) || isNaN(y)) {
  console.error("must be 2 numbers ...")
}
else {
  // $"" -- `${x}`
  alert(`${x} + ${y} = ${x + y}`)
  console.log(`${x} + ${y} = ${x + y}`)
} 

// part 2
do {
  var x = parseInt(prompt("Enter 1st number:", 0))
} while (isNaN(x))
do {
  var y = parseInt(prompt("Enter 2nd number:", 0))
} while (isNaN(y))
  
alert(`${x} + ${y} = ${x + y}`)
console.log(`${x} + ${y} = ${x + y}`)

switch(x) {
  case 1:
    // code block
    break;
  case 2:
    // code block
    break;
  default:
    // code block
}

/*
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/

// type coercion
var n1 = 5
var n2 = "5"
if (n1 == n2) {
  console.log("equl")
}
else {
  console.log("diff")
}

if (n1 === n2) {
  console.log("equl")
}
else {
  console.log("diff")
}

if (n1 != n2) {
  console.log("equl")
}
else {
  console.log("diff")
}

var line = prompt("Give me command:")

//eval("alert('hi')") -- runs a js command from string
eval(line)
