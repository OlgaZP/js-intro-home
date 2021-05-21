'use strict';

const arrExperimental = [];
const n = 20;

// 0 Создать числовой массив и проинициализировать его (*случайными целыми числами от -n до n).
console.log('Init array :>> ');
for (let i = 0; i < n; i++) {
    arrExperimental[i] = Math.trunc(Math.random() * 2 *n - n);
}
console.log('arrExperimental :>> ', arrExperimental);
console.log('Length of array :>> ', arrExperimental.length);
// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
console.log('Delete last element :>> ');
console.log('Deleted element is :>> ', arrExperimental.pop());
console.log('Add zero-element at the end:>> ');
arrExperimental.push(0);
console.log('Add zero-element at the start:>> ');
arrExperimental.unshift(0);
console.log('Modified array :>> ', arrExperimental);
// 2 Вывести размер массива.
console.log('Length of array :>> ', arrExperimental.length);
// 3 Вывести элементы с четными индексами.
console.log('Even-index elements :>> ');
for(let i = 0; i < arrExperimental.length; i += 2) {    
        console.log(`arr[${i}] = `, arrExperimental[i]);    
}
// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
console.log('Even elements :>> ');
for(let i = 0; i < arrExperimental.length; i++) {
    if (arrExperimental[i] % 2 === 0) {
        console.log(`arr[${i}] = `, arrExperimental[i]);
    }
}
// 5 Вывести индексы нулевых элементов (элемент равен нулю).
// 6 Подсчитать количество нулевых элементов.
let outputStr = '';
let zeroElem = 0;
for(let i = 0; i < arrExperimental.length; i++) {
    if (!arrExperimental[i]) {
        outputStr += String (i)+ ' ';
        zeroElem++;
    }
}
console.log('Indexes of zero-elements :>> ', outputStr);
console.log('Number of zero-elements :>> ', zeroElem);
// // Методы перебора массивов.
// 7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).
//здесь использована стрелочная функция в качестве эксперимента работает ли пример... если необходимо - заменю
const arrPositive = arrExperimental.filter( item => item > 0);
console.log('Sub-array of positive elements :>> ', arrPositive);
// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).
const arrSquare = arrExperimental.map(square);
console.log('Sub-array of positive elements :>> ', arrSquare);

function square(element) {
    return Math.pow(element, 2);
}
// 9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).
console.log('Are all elements positive? :>> ', arrExperimental.every(isPositive));
function isPositive(element) {
    return element > 0;
}
// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.
console.log('Is there any negative element? :>> ', arrExperimental.some(element => element < 0));
// function isNegative(element) {
//     return element < 0;
// }

// 11 Вывести элементы массива, возведенные в куб.
arrExperimental.forEach(printPow3);
// console.log('Raised in third degree array (without modifing original array) :>> ', arrExperimental);

function pow3(item, index, arr) {
    arr[index] = Math.pow(item, 3);
//  console.log(`arr${index} = ${item} `);
}

function printPow3 (item, index) {
    console.log(`arr${index}^3 = ${Math.pow(item,3)} `);
}

// *12 Прописать для MyArray метод unshift.
const myArray = {
    0: 1,
    1: true,
    2: 3,
    3: 4,
    4: 5,
    length: 5,    
    
    myUnshift (firstItem) {
        for (let i = this.length; i>0; i--) {
            this[i] = this [i-1];
        }
        this[0] = firstItem;
        return ++this.length;
    },
}

myArray.myUnshift(10);
console.log('Array with added element (call unshift) :>> ', myArray );