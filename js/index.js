console.group("Variable tasks");  
const a = 5;
const b = 7.7;
console.log('a*b :>> ', a*b);

const c = 25;
const d = 4.5;
console.log('c/d :>> ', c/d);

const e = 10;
const f = 100;
console.log('num e+f :>> ', e+f);

const g = '10';
const h = '100';
console.log('string g+h :>> ', g+h);

const numbr = 11;
const bool = true;
const str = "java script";
const str100 = "100";
console.log('number 11 :>> ', numbr);
console.log('boolean :>> ', bool);
console.log('string :>> ', str);
console.log('string 100 :>> ', str100);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--; 

console.groupEnd(); 

console.group("Prompt tasks");
console.log('Square number :>> ');
let num2 = Number (prompt("Please, input your number:"));
// num2 = Math.pow (num2, 2);
num2 = num2 * num2;
console.log('You are win this number :>> ', num2);

console.log('Average of two :>> ');
let num1 = Number (prompt("Please, input 1st number:"));
num2 = Number (prompt("Please, input 2nd number:"));
let  ave = (num1 + num2) / 2;
console.log('Average :>> ', ave);

console.log('Seconds :>> ');
let minutes = Number (prompt("Please, input number of minutes:"));
let sec = minutes * 60;
console.log(minutes + ' minutes equal ' + sec + '  seconds');

const greeting = "Hello";
let userName = String (prompt("Please, enter your name >>"));
console.log('Hello, '+ userName + '!');

console.groupEnd();

console.group("if-else tasks");
console.log('Enter 10 :>> ');
const userVar = Number (prompt("Please, enter a number >>"));
if (userVar == 10) {
    console.log('TRUE'); 
} else {
    console.log('FALSE');
}

console.log('test true/false :>> ');
let test = true;
console.log('testing true-value :>> ');
if (test == true) {
    console.log('Верно');
} else {
    console.log('Не верно');
}
test = false;
console.log('testing false-value :>> ');
if (test != true) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

console.log('Discount :>> play 3 times...');
let userSum = 0;
let userDiscount = 0;
for (let i=0; i<3; i++) {
    // let userDiscount = 0;
    userSum = Number (prompt("Please, enter a invoice sum >>"));
    if (userSum > 800) {
        userDiscount = userSum * 0.05;   
    } else if (userSum > 500) {
        userDiscount = userSum * 0.03;    
    } else {
        userDiscount = 0;
    }
    console.log('Your discount sum is :>> ', userSum - userDiscount);
}
console.groupEnd();

console.group('Loop Tasks');

console.groupEnd();

