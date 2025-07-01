let name = prompt("What is your name?");
let age = Number(prompt("What is your age?"));

if (age < 18) {
  alert("Hii" +name+ ", you're a teen!");
} else if (age >= 18 && age <= 60) {
  alert("Hii "+name+ " , you're an adult!");
} else {
  alert("Hello "+name+", you're a senior citizen!");
}
