'use strict';

//первый способ
function printNumbers(from, to, interval) {
    let num = from;
    console.log('start printing :>> ');
    const timerId = setInterval(() => {console.log(num++);}, interval);

    // остановить вывод через 5 секунд
    setTimeout(() => {
        clearInterval(timerId); 
        console.log('this is the finish :>> ');
        },
        (to - from + 1) * interval);
}

printNumbers(3, 10, 2000);

