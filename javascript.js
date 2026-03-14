// Calculator should be able to perform +, -, *, /

// Create functions (add, subtract, multiply, divide)
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

// Create function operate, that takes an operator and two numbers and performs one of the above functions
function operate(num1, op, num2) {
    if (op === "+") {
        return add(num1, num2);
    }
    else if (op === "-") {
        return subtract(num1, num2);
    }
    else if (op === "*") {
        return multiply(num1, num2);
    }
    else if (op === "/") {
        return divide(num1, num2);
    }
}



// const a = operate(1, "+", 2);
// const b = operate(1, "-", 2);
// const c = operate(1, "*", 2);
// const d = operate(1, "/", 2);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
