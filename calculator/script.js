var screen = document.querySelector("#screen")

var numbers = document.querySelectorAll(".number")

var operations = document.querySelectorAll(".operation")

var buttons = document.querySelectorAll("button")

var clear = document.querySelector("#clear")

var addition = document.querySelector("#add")
var subtraction = document.querySelector("#subtract")
var division = document.querySelector("#divide")
var multiplication = document.querySelector("#multiply")
var equal = document.querySelector("#equal")

var operating = undefined // Operating is true if an operation has been selected

var calculating = undefined // Calculating is true if a number has been selected

var continu = undefined // coninuing calculations without needing to press equal

var decimal = document.querySelector("#decimal")

var numbersSelected = []
var operationsSelected = []
var number1 = 0
var number2 = undefined

// 1. Initialise the numbers so that they appear on screen and are dealt with with thejavascript
//2. when an operator is clicked, the operation is saved and the next time that anumber is clicked, it clears the screen and the hover
//3. every number pressed after that creates a new number
//4. if an operation or equals is clicked, then it performs the operation. 


document.addEventListener('keydown', (event)=> {
    console.log(event.key)
    if (event.key == "Backspace") {
        if (screen.textContent == 0){
            ;
        }
        else if (screen.textContent.length == 1) {
            screen.textContent = "0"
        }
        else
        {
        screen.textContent = screen.textContent.slice(0,screen.textContent.length -1    ) }
    }

    if (event.key == "+") {
        addition.click()

    }
    if (event.key == "-") {
        subtraction.click()
    }
    if (event.key == "*") {
        multiplication.click()
    }

    if (event.key == "/") {
        division.click()
    }

    if (event.key == "Enter" || event.key == "=") {
        equal.click()
    }









 })

buttons.forEach((button) => 
    button.addEventListener('click', () => {    
        
        if ((screen.textContent == 0)){
            clear.textContent = "AC"
        }
        else {
            clear.textCOntent = "CE"
        }
    
        
        
        operations.forEach ((operator) => operator.removeAttribute("style"));   
} ))


clear.addEventListener('click', ()=> {
    if (screen.textContent == "0")  {
        numbersSelected = []
        operationsSelected = []
        clear.textContent = "AC"
        operating = undefined 
        calculating = undefined 
        continu = undefined 
    }
    else {
        screen.textContent = "0";
        numbersSelected.shift()



    }

        if (clear.textContent == "CE") {

            clear.textContent = "AC"
        }


    }


)

decimal.addEventListener('click', () =>{
    if (screen.textContent == 0) {
        ;
    }
        
    else if (!(String(screen.textContent).includes("."))) {
        screen.textContent = screen.textContent + "." 
    }}

) 


numbers.forEach((number) => {
        document.addEventListener('keydown', (event) => {
            if (event.key == number.textContent && screen.textContent.length < 9) {
                number.click()
            }
                
            }
        ) 
    })


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

        if (continu == true && calculating ==false && operating == true) {
            ;
        }
        else if (continu == true) {
            answer()
        }
    
        continu = true

        operating = true

        calculating = false

        operations.forEach((op) => op.removeAttribute("style"));
        operator.style.backgroundColor = "white";

        operationsSelected.unshift(operator.textContent);
        numbersSelected.unshift(parseFloat(screen.textContent));

    });

});

equal.addEventListener('click', () => {
    answer()
}
)


function answer () {
    operating = true;
    calculating = false; 
    continu = false;
    numbersSelected.unshift(parseFloat(screen.textContent));
    if (numbersSelected[1] == undefined) {
        number1 = numbersSelected[0]
    }
    number1 = numbersSelected[1]
    number2 = numbersSelected[0]
    operation = operationsSelected[0]
    screen.textContent = roundToDecimal(operate(number1, number2, operation), 9)}



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
