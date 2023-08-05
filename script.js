
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
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
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

clearButton.addEventListener('click', clearCalculator);

deleteButton.addEventListener('click', deleteNumber);

function appendNumber(number) {
  if (answer.textContent === '0' || shouldResetScreen)
    resetScreen()
  answer.textContent += number
}

function operationSymbol(operator) {

    if (operator !== null) {
        let currentOperator = operator;
        total.textContent = answer.textContent + " " + currentOperator;
        let firstNumber = Number(answer.textContent);
        
        answer.textContent = 0;
        let secondNumber;
        
        equals.addEventListener('click', function() {
            if (currentOperator !== null && firstNumber !== null) {
                secondNumber = Number(answer.textContent);
                answer.textContent = getAnswer(currentOperator, firstNumber, secondNumber);
                total.textContent = answer.textContent;
                firstNumber = null;
                secondNumber = null;
            }
        })
        
    }
    
}

function deleteNumber() {
    answer.textContent = answer.textContent.slice(0, -1);
}

function stopCalculator() {
    secondNumber = '';
    operator = null;
    firstNumber = '';
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


// function addThirdNumber


function resetScreen() {
    answer.textContent = ''
    shouldResetScreen = false
    
}


function clearCalculator() {
    answer.textContent = '';
    total.textContent = '';
    operator = null;
    firstNumber = '';
    secondNumber = '';
}

