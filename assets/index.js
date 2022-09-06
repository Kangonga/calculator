//version 1
//screen divided to 2 parts. lower and upper
//detect the buttons selected
//display the results on the screen
//when an operator is encountered, the previous text moves to the upper screen

//clicked button contains desired text
//can delete and clear the operators
//puts first operand to top screen when a operator is pressed
//displays the operator used

const numbers = [0,1,2,3,4,5,6,7,8,9]
const operators = ['/','*','%','^','+','-','=','x']
const buttonContainer = document.querySelector('#buttonContainer')
buttonContainer.addEventListener('click',handleclick)
const screen = document.querySelector('#screen')
const screenTop = document.querySelector('.screenTop')
const screenBottom = document.querySelector('.screenBottom')
const operatorScreen = document.querySelector('.operator')
const numberScreen = document.querySelector('.numbers')
function handleclick(event){
    let clicked = event.target.textContent
    let operator,result;
    let calculating = true;
    let operand1,operand2;
    if(numbers.includes(parseInt(clicked))){
        screenBottom.textContent += clicked
    }
    else if(clicked=='del'){
        screenBottom.textContent = screenBottom.textContent.slice(0,-1)
    }
    else if(clicked=='clear'){
        location.reload();
    }
    else if(operators.includes(clicked)){
        if(clicked !== '='){
        screenTop.textContent = screenBottom.textContent
        screenBottom.textContent = ''
        operatorScreen.textContent = clicked
        operator = clicked
        }
        else if(clicked == '='){
            operand1 = parseInt(screenTop.textContent)
            operand2 = parseInt(screenBottom.textContent)
            if(operatorScreen.textContent == 'x'){
                result = operand1*operand2
            }
            else if(operatorScreen.textContent=='+'){
                result = operand1+operand2
            }
            else if(operatorScreen.textContent=='/'){
                result = operand1/operand2
            }
            else if(operatorScreen.textContent=='-'){
                result = operand1-operand2
            }
            screenTop.textContent = result
            screenBottom.textContent = ''
        }
    }

}