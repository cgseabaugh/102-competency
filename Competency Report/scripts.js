
function addition(num1, num2){
    return num1 + num2;
}
function subtraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1, num2){
    return num1 * num2;
}
function division(num1, num2){
    return num1 / num2;
}

var num1 = prompt("First Number: ");
var num2 = prompt("Second Number: ");
console.log("First Number: " + num1 + "\n" + "Second Number: " + num2)

var add = addition(num1, num2);
var sub = subtraction(num1, num2);
var mult = multiplication(num1, num2);
var divi = division(num1, num2);

console.log(num1 + " plus " + num2 + " equals " + add + "\n" + num1 + " minus " + num2 + " equals " + sub + "\n" + num1 + " times " + num2 + " equals " + mult + "\n" + num1 + " divided by " + num2 + " equals " + divi);

