'use strict';
// 1) Переписать функцию-конструктор MyArray на классы. *Переписать методы unshift, push для 
//неограниченного числа аргументов.

class MyArray {
    constructor(...items) {
        this.length = 0;
        if (items.length > 0) {
             this.arr = items;
             this.length = items.length;
            }        
       // this.length = 0; //вызов сеттера?
    }

    push(...items) {
        
        for (let i = 0; i < arguments.length; i++) {
            this[this.length + i] = items[i];
        }
        return this.length + arguments.length;
    }
    
    set length(n) {
        this._length = n;
    }

    get length() {
        return this._length;
    }
}

//testing
const testNullArr = new MyArray();
const testArr = new MyArray (1, 2, 3, 4, 5);
console.log('testNullArr :>> ', testNullArr);
console.log('testArr :>> ', testArr);

// 2) Реализовать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в
// указанный диапазон.

class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    set from(a) {
        if (typeof a !== 'number') {
            throw new TypeError('The begin of range must be a number!')
        }
        this._from = a;
    }

    get from() {
        return this._from;
    }

    set to(b) {
        if (typeof b !== 'number') {
            throw new TypeError('The end of range must be a number!')
        }
        if (b < this.from) {
            throw new RangeError('The end of range must be greater than the begin!');
        }
        this._to = b;
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this.from, this.to];
    }

    showRange() {
        return `[${this.from}; ${this.to}]`;
    }

    validate(x) {
        if (typeof x !== 'number') {
            throw new TypeError('Range validator work only for number!')
        }
        return x>=this.from && x<= this.to;
    }

    static isRange (obj) {
        return obj instanceof RangeValidator;
    }
}

//testing
try {
    const testCorrectRange = new RangeValidator(3, 5);    
    console.log('testCorrectRange :>> ', testCorrectRange.showRange());
    console.log('testCorrectRange.range :>> ', testCorrectRange.range);
    console.log('testCorrectRange.validate(4) :>> ', testCorrectRange.validate(4));
    console.log('testCorrectRange.validate(5.0001) :>> ', testCorrectRange.validate(5.0001));
    console.log('testCorrectRange.validate(-1.5) :>> ', testCorrectRange.validate(-1.5));
    console.log('testCorrectRange.validate(NaN) :>> ', testCorrectRange.validate(NaN));
    console.log('testCorrectRange.validate(Infinity) :>> ', testCorrectRange.validate(Infinity));
    //console.log('testCorrectRange.validate(\'a\') :>> ', testCorrectRange.validate('a'));
    // const testIncorrectRange = new RangeValidator (5, -3);
    // console.log('testIncorrectRange :>> ', testIncorrectRange.showRange());
    //const testErrorRange = new RangeValidator(3, 'a');
    //console.log('testIncorrectRange :>> ', testErrorRange.showRange());
} catch (err) {
    console.log(`Attention! Execution error:>> ${err.name} - ${err.message}`);
}