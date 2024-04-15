function Add() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) + Number(number2);
    document.getElementById("result").innerHTML = 'Addition: ' + result;
}

function Sub() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) - Number(number2);
    document.getElementById("result").innerHTML = 'Subtraction: ' + result;
}

function Multiple() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) * Number(number2);
    document.getElementById("result").innerHTML = 'Multiplication: ' + result;
}

function Divide() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) / Number(number2);
    document.getElementById("result").innerHTML = 'Division: ' + result;
}
