// if-else task
console.group('---If-else tasks---');
//Делится ли число на 5, или на 3, или на 2 без остатка?
let userNum = 0;
//alert(strOutput.length);
alert('Play 4 times, please!');
for (let i = 1; i < 5; i++) {
    userNum = Number (prompt('Input any number, please!'));
    let strOutput = '';
    if (userNum % 5 === 0) {
        strOutput = `Congratulations! Your number ${userNum} divide on 5 `;
    }
    if (userNum % 3 === 0) {
            if (strOutput.length > 0) {
                strOutput = strOutput + ', 3';
            }
            else {
                strOutput = `Congratulations! Your number ${userNum} divide on 3 `;
            }        
    }
    if (userNum % 2 === 0) {
        if (strOutput.length > 0) {
            strOutput = strOutput + ', 2';
        }
        else {
            strOutput = `Congratulations! Your number ${userNum} divide on 2 `;
        }        
    }
    if (userNum && (strOutput.length === 0)) {
        strOutput = `Sorry! Your number ${userNum} doesn"t divide on 2, 3, or 5`;
    }
    if (!userNum) {
        strOutput = 'Sorry! Your symbols aren\'t a number';
    }
    alert(strOutput);    
}
console.groupEnd();
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
let sumBetween = 1;
const lim1 = Number(prompt('Please, input start integer number.'));
const lim2 = Number(prompt('Please, input finish integer number.'));
for (let i = lim1; i <= lim2; i++) {
    sumBetween *= i;
}
console.log(`Sum of numbers from ${lim1} to ${lim2} is :>>`, sumBetween);

console.groupEnd();

//functions tasks
console.group('---Functions tasks---');

// Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
console.log('Testing isAdult function as function expression:>> ');
const isAdult = function (age) {
    return age > 18 ? true : false ;    
} 
console.log('Input value is 20 :>> ', isAdult(20));
console.log('Input value is 4 :>> ', isAdult(4));

// Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)
console.log('Testing isPrime function :>> ');
console.log('Input value is 1 :>> ', isPrime(1));
console.log('Input value is 50 :>> ', isPrime(50));
console.log('Input value is 47 :>> ', isPrime(47));
console.log('Input value is -3 :>> ', isPrime(-3));
console.log('Input value is \'a\' :>> ', isPrime('a'));

function isPrime(n) {
    let isDivide = true;    
    // console.log('n :>> ', n);
    if ((n > 0) && (typeof(n) === 'number')) {
        for (let i = 2; i <= (n - 1); i++ ) {
            if (n % i == 0 ) {
                isDivide = false;
                break;            
            }
        }
    }
    else {
         isDivide = false;
    }
    return isDivide; 
}
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
    return a % b === 0;
}

// Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
console.log('Check isTriangle function :>> ');

console.log('Input lengths of sides of the triangle are (3, 4, 5) :>> ', isTriangle(3, 4, 5));
console.log('Input lengths of sides of the triangle are (3, 4, 10) :>> ', isTriangle(3, 4, 10));
console.log('Input lengths of sides of the triangle are (1, 1, 2) :>> ', isTriangle(1, 1, 2));
console.log('Input lengths of sides of the triangle are (3, 4, -5) :>> ', isTriangle(3, 4, -5));

function isTriangle (a, b, c) {
    if ( (a > 0) && (b > 0) && (c > 0)) {
        if ((a >= (b + c)) || (b  >= (a + c)) || (c >= (a + b))) {
            return false;
        }        
        return true;        
    }
    return false;    
}

// Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)
console.log('Testing S function as functional expression:>> ');
/**
 * 
 * @param {number} a length of the fist side of triangle or rectangle
 * @param {number} b length of the second side of triangle or rectangle
 * @param {number} c optional parameter, length of the third side of triangle
 * @returns {number}S of trianle (a,b,c) calculeted based on Geron's formula or S of rectangle (a,b)
 */
const S = function (a, b, c = 0) {    
    if (c === 0) {
        return a * b;
    }
    else {
        const p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));

    }
}
console.log('Input lengths of sides of the triangle are (3, 3, 3) :>> ', Number(S(3, 3, 3)).toFixed(3));
console.log('Input lengths of sides of the triangle are (3, 4, 5) :>> ', S(3, 4, 5));
console.log('Input lengths of sides of the rectangle are (3, 4) :>> ', S(3, 4));

console.groupEnd();

console.group('---Objects tasks---');
// Таски на объекты
// 1. создать объект Student который содержит следующие свойства: имя, фамилию, дата рождения, контактнык данные, методы: вывод полного имени, изменение контактных данных.
console.log('Test Student object :>> ');

const Student = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    isContract: true,
    dateOfBirth: '2002-05-25',
    contacts: {
        fhone: '+380500000000',
        email: 'mail@gmail.com',
        instagram: '@vasya_pup',
    },

    getAge () {
        const today = new Date();
        const birthDate = new Date(this.dateOfBirth);        
        //console.log('object :>> ', today.getFullYear());
        //console.log('object :>> ', birthDate.getFullYear());
        // return ((new Date().getTime() - new Date(this.dateOfBirth)) / (24 * 3600 * 365.25 * 1000));    
        return    today.getFullYear() - birthDate.getFullYear();

    },
    changeContacts (phone = '', email = '', instagram = '') {       
         this.contacts.phone = phone;
         this.contacts.email = email;
         this.contacts.instagram = instagram;
    },
}
console.log('Student :>> ', Student);
console.log('getAge function :>> ', Student.getAge());
console.log('Old contacts :>> ', Student.contacts);
console.log('Change contacts function :>> ', Student.changeContacts('+380970000000', 'newmail@gmail.com'));
console.log('Changed Student :>> ', Student);

// объект машина, метод - смена владельца и номера, расчет топлива на поездку
const car = {
    model: 'Toyota',
    year: 2010,
    color: 'grey',
    engine: 1.8,
    fuelConsumption: 7.7,
    owner: 'Olga',
    regID: 'AP 4545 AA',
    calcFuel (km) {
        return this.fuelConsumption * km;
    },
    changeOwner (newOwner) {
        this.owner = newOwner;        
    },
    changeRegID (newRegID) {
        this.regID = newRegID;        
    },
}
console.log('Car :>> ', car);
//console.log('calcFuel function :>> ',car.calcFuel(200));
console.log('Change owner function :>> ', car.changeOwner('Helen'));
//console.log('Change regID function :>> ', car.changeRegID('AA 6565 BB'));
console.log('Changed сar :>> ', car);

// 3 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
function Book (author, title, year, publishName, isPublished) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publishName = publishName;
    this.isPublished = isPublished;
}
console.log('Test Book (author, title, year, publishName, isPublished) objects:>> ');
const harry = new Book ('J.Roaling', 'Harry Potter', 1995, 'Williams', true);
console.log('harry object Book :>> ', harry);
const fantasy = new Book ('J.Roaling', 'Harry\'s Dreams', 2022, 'Williams', false);
console.log('fantasy object Book :>> ', fantasy);

// мобильный телефон (фирма, модель, год выпуска, есть ли био-идентификация, кол-во МПикс, размер памяти, imei)
function Mobile (brand, name, year, isBioId, mPixels, memorySize, imei) {
     this.brand = brand;
     this.name = name;
     this.year = year;
     this.isBioId = isBioId;
     this.mPixels = mPixels;
     this.memorySize = memorySize;
     this.imei = imei;
}
console.log('Test Mobile (brand, name, year, isBioId, mPixels, memorySize, imei) objects:>> ');
const xiaomi = new Mobile ('Samsung','A50', 2020, true, 20, 64, '239487298ruiushd8w983u');
console.log('xiaomi object Book :>> ', xiaomi);
const samsung = new Mobile ('Xiaomi', 'Redmi 10X', 2021, false, 16, 128, 'kjfdhgloes8743u4hrjkw7432');
console.log('samsung object Book :>> ', samsung);

console.groupEnd();


