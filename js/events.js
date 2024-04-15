import { Calculator } from "./calculator.js";

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display")

const calculator = new Calculator();
let displayValue = "";

function addOperator(operand, operator) {
    addOperand(operand);
    calculator.setOperator(operator);
}

function addOperand(value) {

    if (calculator.getFirstOperand() == 0) {
        calculator.setFirstOperand(value);
    } else if (calculator.getSecondOperand() == 0) {
        calculator.setSecondOperand(value);
    } else {
        calculator.operate()
        calculator.setFirstOperand(calculator.getOperationLog())
        calculator.setSecondOperand(value);
    }
}

function giveResults() {
    addOperand(displayValue);
    calculator.operate();
    calculator.setFirstOperand(calculator.getOperationLog());
    calculator.setSecondOperand(0);
}

function clear() {
    calculator.setFirstOperand(0);
    calculator.setSecondOperand(0);
    calculator.setOperator("");
    displayValue = "";
    display.textContent = "0";
}

buttons.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "number":
            displayValue = displayValue + e.target.value;
            display.textContent = displayValue;
            break;
        case "operator":
            addOperator(displayValue, e.target.value);
            displayValue = "";
            break;
        case "result":
            giveResults();
            display.textContent = calculator.getOperationLog();
            displayValue = "";
            break;
        case "clear":
            clear();
        default:
            break;
    }
});

window.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;
    } else if (!Number.isFinite(e.key)) {
        displayValue = displayValue + e.key;
        display.textContent = displayValue;
    }
})

clear();
