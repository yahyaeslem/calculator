function add (x,y){
    return x + y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;

}
function operate(operator, numOne, numTwo){
    if(operator === `+` ){
        result = add(numOne,numTwo)
    }
    else if(operator === `-` ){
        result = subtract(numOne,numTwo)
    }
    else if(operator === `*` ){
       result =  multiply (numOne,numTwo)
    }
    else if(operator === `/` ){
        result = divide(numOne,numTwo)

    }
    return result;
}

const screen = document.querySelector(".screen");
let screenVar ="";
let leftVars;
let rightVars;
let result;
let operator;
screen.textContent = screenVar;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn0 = document.querySelector(".btn0");
const btnClear = document.querySelector(".btnClear");
const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
const btnMultiply = document.querySelector(".btnMultiply");
const btnDivide = document.querySelector(".btnDivide");
const btnEquals = document.querySelector(".btnEquals");
btn1.addEventListener('click', ()=> {screenVar += "1" ; screen.textContent = screenVar})
btn2.addEventListener('click', ()=> {screenVar += "2" ; screen.textContent = screenVar})
btn3.addEventListener('click', ()=> {screenVar += "3" ; screen.textContent = screenVar})
btn4.addEventListener('click', ()=> {screenVar += "4" ; screen.textContent = screenVar})
btn5.addEventListener('click', ()=> {screenVar += "5" ; screen.textContent = screenVar})
btn6.addEventListener('click', ()=> {screenVar += "6" ; screen.textContent = screenVar})
btn7.addEventListener('click', ()=> {screenVar += "7" ; screen.textContent = screenVar})
btn8.addEventListener('click', ()=> {screenVar += "8" ; screen.textContent = screenVar})
btn9.addEventListener('click', ()=> {screenVar += "9" ; screen.textContent = screenVar})
btn0.addEventListener('click', ()=> {screenVar += "0" ; screen.textContent = screenVar})
btnClear.addEventListener('click', ()=> {screenVar = "" ; screen.textContent = screenVar})
btnPlus.addEventListener('click', ()=> { operator = "+";leftVars= parseInt(screenVar); screenVar+= "+"; screen.textContent =screenVar;})
btnMinus.addEventListener('click', ()=> {operator = "-";leftVars =parseInt(screenVar); screenVar+= "-" ; screen.textContent = screenVar ; })

btnMultiply.addEventListener('click', ()=> {operator = "*";leftVars =parseInt(screenVar); screenVar+= "*"; screen.textContent = screenVar ;})
btnDivide.addEventListener('click', ()=> { operator = "/" ;leftVars =parseInt(screenVar); screenVar+= "/"; screen.textContent = screenVar ;})
btnEquals.addEventListener('click', ()=> {rightVars=  parseInt(screenVar.substr(screenVar.indexOf(operator))); operate(operator,leftVars,rightVars); screen.textContent= result})