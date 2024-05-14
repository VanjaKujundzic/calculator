//Functions for basic math operations
function add(a,b) {
    result=a+b;
    return result.toFixed(2).replace(/\.?0+$/, "");;
}
function subtract(a,b) {
    result=a-b;
    return result.toFixed(2).replace(/\.?0+$/, "");;
}
function multiply(a,b) {
    result=a*b;
    return result.toFixed(2).replace(/\.?0+$/, "");;
}
function divide(a,b) {
     result=a/b;
     return result.toFixed(2).replace(/\.?0+$/, "");;
}
//function that passes down the values from the buttons that are being clicked to the math operations function
function operate(num1,operator,num2){
    let value= operator;
    switch(value){
        case '+':
        return add(parseFloat(num1),parseFloat(num2));
        
        case '-':
        return subtract(parseFloat(num1),parseFloat(num2));
        
        case 'x':
        return multiply(parseFloat(num1),parseFloat(num2));
        
        case '/':
        return divide(parseFloat(num1),parseFloat(num2));

        case '%':
        return num1%num2;
        

        default:
            throw new Error('Unsupported operator: ' + operator);
           

    }

};

function clearDisplay (){
    display.textContent= '';
    oper='';
    num1='';
    num2='';
    result='';
}
//initializing the empty values
let num1='';
let num2='';
let oper='';
let result='';
let calculated= false;

//assigning parts of the calculator(buttons,display etc.) to different variables
const clear = document.querySelector(".clear");
const display= document.querySelector('.display')
const numbers = document.querySelectorAll(".numbers");
const operators= document.querySelectorAll('.operators');
const equals= document.querySelector('.equals');
const decimalNum= document.querySelector('#decimal');
const negativeNum= document.querySelector('#negative');

//Assigning  event listeners to different buttons
clear.addEventListener("click", clearDisplay);
decimalNum.addEventListener("click",()=>{
    if(oper ===''){
        
        num1+='.';
        display.textContent=num1;
    } else{
    num2+='.';
    display.textContent=num1+oper+num2;
    
    }  
        
    
})
negativeNum.addEventListener("click", () => {
   if(num1!==0){
    num1= -num1;
    display.textContent= num1;
   }
   if(result!==''){
    result= -result;
    display.textContent= result;
   }
//testing purposes
//    console.log("toggle "+ num1);
//    console.log("toggle result "+ result);
})

// //testing purposes
// console.log(display.textContent);
// console.log("num1 "+num1);
// console.log("num2 "+num2);

numbers.forEach(num => {
    num.addEventListener("click", ()=> {
        if(calculated){   //Flag that checks if at least one round of calculations has been made, this allows a user to calculate a new set of numbers without clicking the AC button to clear everything
            display.textContent='';
            calculated= false; //resets the calculated to false after clearing the display screen
        }
       
       
        if(oper ===''){
            display.textContent+= num.textContent;
            num1+=num.textContent;
        
         } else{
            display.textContent+= num.textContent;
            num2+=num.textContent;
            }
        if(num1===''){
            num1=result;      
         }
//testing purposes
// console.log("num1 "+num1);
// console.log("num2 "+num2);
// console.log("operator"+ (oper));
})
})

operators.forEach(operator => {
    operator.addEventListener("click", ()=>{
        if(num1===0){
            display.textContent = result+operator.textContent;
        }
        else display.textContent= num1+operator.textContent;
        oper=operator.textContent;
        
    })
})
equals.addEventListener("click",() => {
    if(num1===0){
        result=operate(result,oper,num2);
    }
    else{result=operate(num1,oper,num2)}
    display.textContent=result;
    oper='';
    num1='';
    num2='';
    calculated=true; //this triggers the calculated flag that allows the display screen to empty after a round of calculations
}
);






