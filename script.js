let feedback = document.getElementById("feedback");
let currentInput = "";
let currentOperator = "";

function appendNumber(value) {
    currentInput =+ value;
    feedback.textContent = currentInput; 
}

function appendOperador(operator) {
    if(currentInput === "" && operator !== ".") return
    currentInput += operator;
    feedback.textContent = currentInput;
}

function clearInput() {
    currentInput = "";
    feedback.textContent = currentInput;
}

