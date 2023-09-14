let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equals = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");

    let previousDisplay = document.querySelector(".previous");
    let currentDisplay = document.querySelector(".current");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    numbers.forEach(number => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentDisplay.textContent = currentValue;
    }));
    operators.forEach(op => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousDisplay.textContent = previousValue + "" + operator;
        currentDisplay.textContent = currentValue;
    }));
    clear.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        previousDisplay.textContent = previousValue;
        currentDisplay.textContent = currentValue;
    });
    equals.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
            calculate();
            previousDisplay.textContent = "";
            if(previousValue.length < 18){
                currentDisplay.textContent = previousValue;
            } else{
                currentDisplay.textContent = previousValue.slice(0,18) + "...";
            }
        }
    });
    decimal.addEventListener("click", function(){
        addDecimal();
        currentDisplay.textContent = currentValue;
    });
});

function handleNumber(num) {
    if (currentValue.length <=9){
        currentValue+=num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else if(operator === "/"){
        previousValue /= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += ".";
    }
}