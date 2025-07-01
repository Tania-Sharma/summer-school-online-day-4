console.log(" Functions");


function add(a, b) {
  return a + b;
}


const square = function(num) {
  return num * num;
};

let greet = (userName) => {
  console.log("Hi "+userName+", welcome!");
};

console.log("Sum of 5 and 3 = ", add(5, 3));
console.log("Square of 4:", square(4));
greet("Ishita");
