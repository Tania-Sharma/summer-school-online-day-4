

let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your second number:"));
let operator = prompt("Choose operation: +, -, *, /");

let Answer;

switch (operator) {
    case '+':
        Answer = num1 + num2;
        break;
    case '-':
        Answer = num1 - num2;
        break;
    case '*':
         Answer = num1 * num2;
        break;
    case '/':
        Answer = num1 / num2;
         break;
    default:
         alert("The Operator is Not Valid");
}

alert("Result:"+ Answer);

