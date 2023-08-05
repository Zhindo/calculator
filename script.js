
// Functions for the calculator
function add (a, b) {
    return a + b;
}

function subtract(a, b) {
	return a - b;
};

function sum(a) {
	return a.reduce((start, next) => start + next, 0) 
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
}

//all the values of the calculator stored here
const answer = document.getElementById('answer');
const total = document.getElementById('total');
const clear = document.getElementById('clear');
const number = document.querySelectorAll('[data-number]');
const symbol = document.querySelectorAll('[data-symbol]');
const equals = document.getElementById('equals');

//DOM Manipulation

number.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

symbol.forEach((button) =>
  button.addEventListener('click', () => operationSymbol(button.textContent)) 
);

clear.addEventListener('click', clearCalculator);

function appendNumber(number) {
  if (answer.textContent === '0' || shouldResetScreen)
    resetScreen()
  answer.textContent += number
}

function operationSymbol(operator) {
    if (operator == '+' || operator == '-' || operator == '×' || operator == '÷') {
        total.textContent = answer.textContent + " " + operator;
        let firstNumber = answer.textContent;
        answer.textContent = 0;
        equals.addEventListener('click', function() {
            if (firstNumber !== null) {
                secondNumber = answer.textContent;
            }
            if (secondNumber !== null ) {
                answer.textContent = getAnswer(operator, firstNumber, secondNumber)
                operator = null;
                secondNumber = null;
            }
        })
    }
    else {
        alert("Invalid");
    }
    
}


function getAnswer(operator, a, b) {


    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '×') {
        return multiply(a, b);
    }
    else if (operator == '÷') {
        return divide(a, b);
    }
}

function displayAnswer(finalAnswer) {
    answer.textContent = finalAnswer;
    total.textContent = finalAnswer;
    secondNumber = null;
    firstNumber = null;
}




// function addThirdNumber


function resetScreen() {
    answer.textContent = ''
    shouldResetScreen = false
    
}


function clearCalculator() {
    answer.textContent = ''
    total.textContent = ''
    operator = null;
    firstNumber = '';
    secondNumber = '';
}

