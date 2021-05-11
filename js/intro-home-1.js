console.group('Variable tasks');  
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
const str = 'java script';
const str100 = '100';
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

console.group('Prompt tasks');
console.log('Square number :>> ');
const numS = Number (prompt('Please, input your number:'));
// num2 = Math.pow (num2, 2);
const numSSquare = numS * numS;
console.log('You are win this number :>> ', numSSquare);

console.log('Average of two :>> ');
const num1 = Number (prompt('Please, input 1st number:'));
const num2 = Number (prompt('Please, input 2nd number:'));
const  ave = (num1 + num2) / 2;
console.log('Average :>> ', ave);

console.log('Seconds :>> ');
const minutes = Number (prompt('Please, input number of minutes:'));
const sec = minutes * 60;
console.log(minutes + ' minutes equal ' + sec + '  seconds');

const greeting = 'Hello';
const userName = String (prompt('Please, enter your name >>'));
console.log('Hello, '+ userName + '!');

console.groupEnd();

console.group('if-else tasks');
console.log('Enter 10 :>> ');
const userVar = Number (prompt('Please, enter a number >>'));
if (userVar === 10) {
    console.log('TRUE'); 
} else {
    console.log('FALSE');
}

console.log('test true/false :>> ');
let test = true;
console.log('testing true-value :>> ');
if (test) {
    console.log('Верно');
} else {
    console.log('Не верно');
}
test = false;
console.log('testing false-value :>> ');
if (!test) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

console.log('Discount :>> play 3 times...');
let userSum = 0;
let userDiscount = 0;
for (let i = 0; i < 3; i++) {
    // let userDiscount = 0;
    userSum = Number (prompt('Please, enter a invoice sum >>'));
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
console.log('from 25 to 0 (for) :>> ');
let strOutput = '';
for (let i = 25; i >= 0; i--) {
    strOutput = strOutput + i + ' ';    
}
console.log('Result for:>> ', strOutput);

console.log('from 25 to 0 (while) :>> ');
i = 25;
strOutput = '';
while (i >= 0) {
    strOutput = strOutput + i + ' ';    
    i--;
}
console.log('Result while:>> ', strOutput);

console.log('from 25 to 0 (do-while) :>> ');
i = 25;
strOutput = '';
do {
    strOutput = strOutput + i + ' ';
    i--;
} while (i >= 0) 
console.log('Result do-while:>> ', strOutput);

console.log('From 10 to 50 (div 5) :>> ');

strOutput = '';
for (let i = 10; i <= 50; i = i + 5) {
    strOutput = strOutput + i + ' ';    
}
console.log('Result from 10 to 50 (div 5) for:>> ', strOutput);

i = 10;
strOutput = '';
while (i <= 50) {
    if (i % 5 === 0) {
        strOutput = strOutput + i + ' ';    
    }
    i++;
}
console.log('Result from 10 to 50 (div 5) while:>> ', strOutput);

i = 10;
strOutput = '';
do {
    strOutput = strOutput + i + ' ';
    i += 5;
} while (i <= 50) 
console.log('Result from 10 to 50 (div 5) do-while:>> ', strOutput);

console.log('Sum of 100 :>> ');

let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;    
}
console.log('Sum of 100 from for:>> ', sum100);

i = 1;
sum100 = 0;
while (i <= 100) {
    sum100 += i;   
    i++;
}
console.log('Sum of 100 from while:>> ', sum100);

i = 1;
sum100 = 0;
do {
    sum100 += i; 
    i++;
} while (i <= 100) 
console.log('Sum of 100 from  do-while:>> ', sum100);

console.log('User solve while');
let tryAnother = true;
let answer = 0;
while (tryAnother) {
    answer = Number (prompt('Please, enter answer for (2+2*2) while>>'));
    if (answer === 6) {
        alert('You are the winner!!! Congrats!');
        tryAnother = false;
    }
    else {
        alert('Sorry! Wrong answer! Try again... ');
    }
}

console.log('User solve do-while');
tryAnother = true;
answer = 0;
do {
    answer = Number (prompt('Please, enter answer for (2+2*2) do-while >>'));
    if (answer === 6) {
        alert('You are the winner!!! Congrats!');
        tryAnother = false;
    }
    else {
        alert('Sorry! Wrong answer! Try again... ');
    }
} while (tryAnother);

// realize this loop, but i think it's bad practice
console.log('User solve for');
answer = 0;
for (;;) {
    answer = Number (prompt('Please, enter answer for (2+2*2) for >>'));
    if (answer === 6) {
        alert('You are the winner!!! Congrats!');
        tryAnother = false;
        break;
    } 
    else {
        alert('Sorry! Wrong answer! Try again... ');
    }
}

console.groupEnd();

