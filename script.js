
function add (x,y){

    return parseInt(x) + parseInt(y);
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
//OPERATE FUNCTION
function operate(operator, numOne, numTwo){
    if(operator === `+` ){
        result = add(numOne,numTwo)
    }
    else if(operator === `-` ){
        result = subtract(numOne,numTwo)
    }
    else if(operator === `*` ){
        result =  multiply(numOne,numTwo)
    }
    else if(operator === `/` ){
        if(numTwo == 0){
            result = "Math Error"
        }
        else{
        result = divide(numOne,numTwo)
        }
    }
result = (Math.round( result * 100 + Number.EPSILON ) / 100);
 return result;
}
// VARIABLES
const screen = document.querySelector(".screen");
let screenVar ="";
let leftVars ;
let rightVars;
let result = 0;
let operator;
let operator2;
let operatorCheck= false;
screen.textContent = screenVar;
//DOM ELEMENTS
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
const btnDelete = document.querySelector(".btnDelete");
//NUMBER BUTTONS
btn1.addEventListener('click', ()=> {screenVar += "1" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn2.addEventListener('click', ()=> {screenVar += "2" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn3.addEventListener('click', ()=> {screenVar += "3" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn4.addEventListener('click', ()=> {screenVar += "4" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn5.addEventListener('click', ()=> {screenVar += "5" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn6.addEventListener('click', ()=> {screenVar += "6" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn7.addEventListener('click', ()=> {screenVar += "7" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn8.addEventListener('click', ()=> {screenVar += "8" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn9.addEventListener('click', ()=> {screenVar += "9" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btn0.addEventListener('click', ()=> {screenVar += "0" ; screen.textContent = screenVar ; rightVars= screenVar.substring(screenVar.indexOf(operator) +1 );})
btnClear.addEventListener('click', ()=> {screenVar = "" ; screen.textContent = screenVar ; screenVar =""; leftVars = ""
rightVars =""
result = 0;
operator2="";
operator="";
screenVar="";
operatorCheck= false;})
// btnDelete.addEventListener('click', ()=> { screenVar = screenVar.slice(0,-1) ; leftVars =screenVar.substring( (0, screenVar.indexOf(operator))); ; 
// rightVars= screenVar.substring(screenVar.indexOf(operator) +1 ); screen.textContent = screenVar ; })
 

//PLUS  BUTTON
btnPlus.addEventListener('click', 
()=> {
    if(operatorCheck){
        operator2 = "+"; evaluate()}
        else{
            operator = "+"; operatorCheck=true; 
            leftVars =screenVar.substring( (0, screenVar.indexOf(operator))); screenVar+= "+"; 
            rightVars= screenVar.substring(screenVar.indexOf(operator) +1 ); 
            screen.textContent =screenVar;}})
// MINUS BUTTON
btnMinus.addEventListener('click', 
()=> {
    if(operatorCheck){
        operator2 = "-";  evaluate()}
        else{
    operator = "-"; operatorCheck=true;  
    leftVars =screenVar.substring( (0, screenVar.indexOf(operator)));   screenVar+= "-" ; 
    rightVars= screenVar.substring(screenVar.indexOf(operator) +1 ); 
    screen.textContent = screenVar; }})
// MULTIPLY BUTTON
btnMultiply.addEventListener('click', 
()=> { 
    if(operatorCheck){
        operator2 = "*";  evaluate()}
        else{
    operator = "*"; operatorCheck=true; 
    leftVars =screenVar.substring( (0, screenVar.indexOf(operator))); screenVar+= "*";
    rightVars= screenVar.substring(screenVar.indexOf(operator) +1 ); 
    screen.textContent = screenVar ;}})
//DIVIDE BUTTON
btnDivide.addEventListener('click', 
()=> { 
    if(operatorCheck){
        operator2 = "/" ; evaluate()}
        else{
    operator = "/" ; operatorCheck=true; 
    leftVars =screenVar.substring( (0, screenVar.indexOf(operator))); screenVar+= "/"; 
    rightVars= screenVar.substring(screenVar.indexOf(operator) +1 ); 
    screen.textContent = screenVar ;}})
//EQUALS BUTTON
btnEquals.addEventListener('click', 
()=> {rightVars = screenVar.substring(screenVar.indexOf(operator) +1 ) 
        operate(operator,leftVars,rightVars); screenVar=""; 
        screen.textContent= result})

function evaluate(){
     
    
   operate(operator,leftVars,rightVars);
   leftVars=result.toString();
   rightVars="0";
    screenVar= leftVars + operator2;
   
     operator= operator2;
   screen.textContent = leftVars ;
     
   
   

}