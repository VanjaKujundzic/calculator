//Functions for basic math operations
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate(num1,num2,operator){
    let value= String.fromCharCode(operator)
    switch(value){
        case '+':
        return add(num1,num2);
        break;
        case '-':
        return subtract(num1,num2);
        break;
        case '*':
        return multiply(num1,num2);
        break;
        case '/':
        return divide(num1,num2);
        break;

        default:
            throw new Error('Unsupported operator: ' + operator);
           

    }

};

// let number1 = prompt("type the first number", "here");
// number1= parseFloat(number1);
// console.log(typeof(number1));
// let number2 = prompt("type the second number", "here");
// number2= parseFloat(number2);

// let operator = prompt("type the operator", "here");
// let output= operate(number1,number2,operator);
// alert(output);

