const message = ['Only numbers is allowed', 'Only single operator is allowed']
//first number
let first = prompt('type the first number');
while(first == '' || isNaN(first)){
    alert(message[0]);
    first = prompt('type the first number');
}
//operator
let operator = prompt("type in operator (+ - / * )")
const operators = '+-/*';
while(!(operator.length == 1 && operators.includes(operator))){
    alert(message[1]);
    operator = prompt("type in operator (+ - / * )")
}
//second number
let second = prompt('type the second number');
while( second == '' || isNaN(second)){
    alert(message[0]);
    second = prompt('type the second number')
}
// sum result using eval
function calculate(x, a, y){
    let outcome = `${x}${a}${y}`
    return eval(outcome)
}
//Sum result using if statment.
// function calculate(numb, operator, sNum){
//     if(operator == '+') return numb + sNum;
//     if(operator == '-') return numb - sNum;
//     if(operator == '/') return numb / sNum;
//     if(operator == '*') return numb * sNum;
//     return message[1]
// } 
//display result
alert(calculate(first, operator, second))