//call back function - function which passed as argument to another function
//Higher order function - function which accept another function as a argument and return new function

function greet(name) {
  console.log(name);
}

function higherOrderFun(callback) {
  const name = "little kong";
  callback(name);
}

higherOrderFun(greet);
