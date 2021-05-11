// if-else task
//Делится ли число на 5, или на 3, или на 2 без остатка?

let userNum = 0;
alert('Play 4 times, please!');
for (let i = 1; i < 5; i++) {
    userNum = Number (prompt('Input any number, please!'));
    if (userNum % 5 === 0) {
        alert(`Congratulations! Your number ${userNum} divide on 5!`);
    }
    else if (userNum % 3 === 0) {
        alert(`Congratulations! Your number ${userNum} divide on 3!`);
    }
    else if (userNum % 2 === 0) {
        alert(`Congratulations! Your number ${userNum} divide on 2!`);
    }
    else if (userNum) {
        alert(`Sorry! Your number ${userNum} doesn"t divide on 2, 3, or 5!`);
    }
    else {
        alert('Sorry! Your symbols aren\'t a number', userNum);
    }
}

//for tasks
console.group('---For tasks---');
//factorial
// с проверкой вводимых данных, как положено ))
console.log('Factorial :>> ');
const factLim = Number(prompt('Please, input natural number...We calculate nearest number factorial!'));
let factorial = 1;
if (factLim && (factLim > 0)) {
    for (let i = 1; i <= factLim; i++) {
        factorial = factorial * i;
    }
    console.log(String(Math.floor(factLim))+'! = ', factorial);
}
else if (!factLim) {
    console.log('It\'s not a number! Sorry!');
}
else {
    console.log('Factorial exists only for positive numbers! Sorry!');
}

//вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользовательатуральность, н
//тут бы тоже проверку числа на натуральность, но она такая же как и в предыдущем примере, поэтому не ставлю
console.log('Sum of sequence 1/n :>> ');
let seqSum = 0;
const seqLim = Number(prompt('Please, input natural number...We calculate sum of sequence 1/n!'));
if (seqLim < 0 || Math.trunc(seqLim) != seqLim) {
    console.log('Input number doesn\'t a natural number! Sorry!');
} 
else {
    for (let i = 1; i<= seqLim; i++) {
        seqSum = seqSum + (1/i);
    }
    console.log(`The sum of sequence 1/n until 1/${seqLim} is :>> `, seqSum.toFixed(6));
}

//Найти произведение целых чисел в пределах от lim1 до lim2
console.log('Sum between :>> ');
let sumBetween = 0;
const lim1 = Number(prompt('Please, input start natural number.'));
const lim2 = Number(prompt('Please, input finish natural number.'));
for (let i = lim1; i <= lim2; i++) {
    sumBetween += i;
}
console.log(`Sum of numbers from ${lim1} to ${lim2} is :>>`, sumBetween);

console.groupEnd();

//for tasks
console.group('---Functions tasks---');
// Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
console.log('Testing isAdult function :>> ');

console.log('Input value is 20 :>> ', isAdult(20));
console.log('Input value is 4 :>> ', isAdult(4));

function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

// Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)
// Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе

console.log('Testing checkMultiplicity function :>> ');

console.log('Input value is (25, 5) :>> ', checkMultiplicity(25, 5));
console.log('Input value is (15, 3) :>> ', checkMultiplicity(15, 3));
console.log('Input value is (15, 5) :>> ', checkMultiplicity(15, 5));
console.log('Input value is (15, 4) :>> ', checkMultiplicity(15, 4));

/**
 * 
 * @param {dividend } a 
 * @param {divisor} b 
 * @returns true - if a divide by b
 */
function checkMultiplicity(a, b) {
    if (a % b === 0) {
        return true;
    }
    else {
        return false;
    }
}

// Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
console.log('Check isTriangle function :>> ');

console.log('Input lengths of sides of the triangle are (3, 4, 5) :>> ', isTriangle(3, 4, 5));
console.log('Input lengths of sides of the triangle are (3, 4, 10) :>> ', isTriangle(3, 4, 10));
console.log('Input lengths of sides of the triangle are (3, 3, 8) :>> ', isTriangle(3, 3, 8));
console.log('Input lengths of sides of the triangle are (3, 4, -5) :>> ', isTriangle(3, 4, -5));

function isTriangle (a, b, c) {
    if ( (a > 0) && (b > 0) && (c > 0)) {
        if ((a > (b + c)) || (b > (a + c)) || (c > (a + b))) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

// Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)
console.log('Testing S function :>> ');
// console.log('Input lengths of sides of the triangle are (3, 4, 5) :>> ', S(3, 4, 5));

console.groupEnd();


