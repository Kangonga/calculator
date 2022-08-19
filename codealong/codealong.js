//create a calculator object to help track the values

const calculator = {
    displayValue : 'start',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit){
    let { displayValue } = calculator
    calculator.displayValue = displayValue==='start'?digit:displayValue+digit;
}

function updateDisplay (){
    //select screen
    let screen = document.querySelector('#screen')

    //update screen value
    screen.value= calculator.displayValue;
}
updateDisplay()

const keys = document.querySelector('#buttonContainer');
keys.addEventListener('click', (event)=>{
    //access the clicked event. target is initialized as an object
    //this is because events are objects
    const clicked = event.target
    // alert(clicked.classList);alert(clicked.innerText)
    if(clicked.classList.contains('numbers')){
        inputDigit(clicked.innerText)
        updateDisplay()
    }
})

let inputDecimal = function(dot){
    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue+=dot;
    }
}