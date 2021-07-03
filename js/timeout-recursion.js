'use strict';

//второй способ, рекурсивный
function printNumbersRec(from, to, interval) {
    // const interval = 2000;
    // let from = 3;
    // const to = 7;
    console.log('start recursion printing :>> ');
    setTimeout(function run() {
        if (from <= to) {
        console.log(from++);
        setTimeout(run, interval);
        }
    }, interval);
    
}


printNumbersRec(3, 7, 1000);
