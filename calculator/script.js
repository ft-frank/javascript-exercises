var screen = document.querySelector("#screen")

var numbers = document.querySelectorAll(".number")

var operations = document.querySelectorAll(".operation")

var buttons = document.querySelectorAll("button")

var clear = document.querySelector("#clear")

var operating = undefined

var calculating = undefined

var numbersSelected = []
var operationsSelected = []
var number1 = 0
var number2 = undefined

// 1. Initialise the numbers so that they appear on screen and are dealt with with thejavascript
//2. when an operator is clicked, the operation is saved and the next time that anumber is clicked, it clears the screen and the hover
//3. every number pressed after that creates a new number
//4. if an operation or equals is clicked, then it performs the operation. 


buttons.forEach((button) => 
    button.addEventListener('click', () => {

        if (calculating) {
            clear.textContent = "CE"

        }
        else {
            clear.textContent  = "AC"

        }

} ))


clear.addEventListener('click', ()=> {
    if (screen.textContent == "0")  {
        numbersSelected = []
        operationsSelected = []
        clear.textContent = "AC"
    }
    else {
        screen.textContent = "0";
        numbersSelected.shift()


    }

    }


)


numbers.forEach((number) => 
{   
    number.addEventListener('click', () => {
        operations.forEach ((operator) => operator.removeAttribute("style"));
        if (screen.textContent ==  0 || operating) {
            screen.textContent = number.textContent
        }
        else if (screen.textContent.length > 8) {
            ;
        }
        else {
            screen.textContent = screen.textContent + number.textContent
        }
        operating = false   
        calculating = true
    } )
    }
)



operations.forEach((operator) => {

    operator.addEventListener('click', () => {

        operating = true

        calculating = false

        console.log(operator.textContent)

        operations.forEach((op) => op.removeAttribute("style"));
        operator.style.backgroundColor = "white";

        operationsSelected.unshift(operator.textContent);
        numbersSelected.unshift(parseInt(screen.textContent));

    });

});

equal = document.querySelector("#equal") 
equal.addEventListener('click', () => {console.log(numbersSelected);console.log(operationsSelected);calculating = false; numbersSelected.unshift(parseInt(screen.textContent)); screen.textContent = roundToDecimal(operate(numbersSelected[1], numbersSelected[0], operationsSelected[0]), 9)})


function roundToDecimal(num, decimalPlaces) {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor) / factor;
    }



const operate = function(number1, number2, operation) {
    if (operation == "+") {
        return add(number1, number2);
}
    else if (operation == "-") {
        return subtract(number1, number2);
    }
    else if (operation == "x" || operation == "*") {
        return multiply(number1, number2);
    }
    else if (operation == "÷" || operation == "/") {
        return divide(number1, number2);
    }
    
}

const add = function(a, b) {
    return (a + b)
    
};

const subtract = function(a, b){
    return (a - b)
};

const multiply = function(a, b) {
    return (a * b)
};

const divide = function(a, b) {
    return (a / b)
}
