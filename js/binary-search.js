'use strict';

//пример алгоритма сложности O(log n)
//дихотомический (бинарный) поиск
alert('Let\'s play guess the number game!');
alert('Every step choice OK or CANCEL');
alert('Guess the number from 0 to 100, please!');
 
function binarySearch (start, end) {
    
    do {
        let middle = Math.ceil((start + end) / 2);
        if (confirm(`Is your number ${middle}?`)) {
            return middle;
        }
        let result = confirm(`Is your number greater then ${middle}?`);   
         
        if (result) {
            start = middle + 1;
        } 
        else {
            end = middle - 1;            
        }
    } while (start <= end);
    return -1;
}
const guessNumber = binarySearch (0, 100);
if (guessNumber === -1) {
    alert('Ooops! You sure that your number form 0 to 100?');
} else {
    alert(`Yurrah! I'm win! Your number is ${guessNumber}!`);
}

