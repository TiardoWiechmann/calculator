// Calculator should be able to perform +, -, *, /


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b; 
}


function operate(num1, op, num2) {
    let result = 0;
    if (op === "+") {
        result =  add(num1, num2);
    }
    else if (op === "-") {
        result =  subtract(num1, num2);
    }
    else if (op === "x") {
        result = multiply(num1, num2);
    }
    else if (op === "/") {
        result = divide(num1, num2);
    }
    return result = roundPlaces(result, 6);
}

function roundPlaces(n, places) {
    return Math.round(n * (10**places)) / (10**places);
}


function updateNum(num, digit) {
    num += digit;
    return num;
}


function updateDisplay(num1, op, num2){
    const display = document.querySelector(".display");
    if (op === undefined && num2 === undefined) {
        display.textContent = num1;
    }
    else if (num2 === undefined) {
        display.textContent = `${num1} ${op}`;
    }
    else {
        display.textContent = `${num1} ${op} ${num2}`;
    }
}

function zeroDivision(op, num2) {
    if (op === "/" && num2 === "0") {
        return true;
    }
    else {
        return false;
    }
}

const operators = "+-x/";
const reNum = /[0-9]+/;
let num1 = "";
let num2 = "";
let op = "";
let resIsDisplayed = false;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.parentElement.className == "row-digit"){
            const digit = button.textContent;
            if (op === "") {
                if (resIsDisplayed){
                    num1 = "";
                }
                num1 = updateNum(num1, digit);
                updateDisplay(num1);
            }
            else {
                num2 = updateNum(num2, digit);
                updateDisplay(num1, op, num2);
            }
        }
        else if (button.className == "op") {
            if (reNum.test(num1) && operators.includes(op) && reNum.test(num2) && !zeroDivision(op, num2)) {
                num1 = operate(+num1, op, +num2);
                num2 = "";
            }
            op = button.textContent;
            updateDisplay(num1, op);
        }
        else if (button.className == "result") {
            // All components exist
            if (reNum.test(num1) && operators.includes(op) && reNum.test(num2) && !zeroDivision(op, num2)) {
                num1 = operate(+num1, op, +num2);
            }
            // Only num1 exists
            else if (reNum.test(num1) &&  !zeroDivision(op, num2)){
                 num1 = num1;
             }
            // Not a valid expression
            else {
                num1 = "";
            }
            updateDisplay(num1);
            resIsDisplayed = true;
            op = "";
            num2 = "";
        }
        else if (button.textContent == "AC") {
            num1 = "";
            num2 = "";
            op = "";
            updateDisplay("");
        }
    })
})

