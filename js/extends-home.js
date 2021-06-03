'use sstrict';

class CarDimensions {
    constructor (length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
}

// Для базового класса Vehicle реализовать:
class Vehicle {
    // - свойства:
// --- dimensions - габариты (объект с длиной, шириной, высотой),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата производства (использовать встроенный объект Date).
    constructor(brand, model, manufactureDate, dimensions){
        this.brand = brand;
        this.model = model;
        this.manufactureDate = manufactureDate;
        this.dimensions = dimensions; 
    }
// - методы:
// --- getMaxSize() - возвращает максимальный габаритный размер,
    getMaxSize() {
        if (this.dimensions.length > this.dimensions.width) {
            return this.dimensions.length > this.dimensions.height ? this.dimensions.length : this.dimensions.height;            
        } else {
            return this.dimensions.width > this.dimensions.height ? this.dimensions.width : this.dimensions.height;
            
        }
    }
// --- getAge() - возвращает количество лет со дня производства.
    getAge () {
        const currentDate = new Date();
        return currentDate.getFullYear() - this.manufactureDate.getFullYear(); 
    }
}


// Дочерний класс PassengerTransport расширяется:
// - свойствами:
// --- passengerLimit - максимальное количество пассажирских мест,
// --- passengerCount - количество занятых пассажирских мест,
class PassengerTransport extends Vehicle {
    constructor (brand, model, manufactureDate, dimensions, passengerLimit, passengerCount) {
        super(brand, model, manufactureDate, dimensions);
        this.passengerLimit = passengerLimit;
        this.passengerCount = passengerCount;
    }
// - методом addPassenger() для добавления еще одного пассажира с проверкой возможности добавления (есть ли еще незанятые места) - возвращает истину (если пассажир добавлен) или ложь (если не добавлен).
    addPassenger() {
        if (this.passengerCount < this.passengerLimit) {
            this.passengerCount++;
            return true;
        }
        return false;
    }    
}

// Дочерний класс FreightTransport расширяется:
// - свойством:
// --- capacity - грузоподъемность,
class FreightTransport extends Vehicle {
    constructor(brand, model, manufactureDate, dimensions, capacity) {
        super(brand, model, manufactureDate, dimensions);
        this.capacity = capacity;
    }
// - методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан.
    checkLoadingPossibility(weight) {
        return weight < this.capacity;
    }
}


// Создать объекты всех классов иерархии, протестировать работу методов.
console.group('Testing Vehicle constructors and methods');
const vehicle1 = new Vehicle('WV', 'Toureg', new Date(2011, 5, 21), new CarDimensions(2.5, 1.9, 2));
console.dir(vehicle1);
console.log('vehicle1.getAge() :>> ', vehicle1.getAge());
console.log('vehicle1.getMaxSize() :>> ', vehicle1.getMaxSize());

console.groupEnd();

console.group('Testing PassengerTransport constructors and methods');
const bus = new PassengerTransport('Mersedes', 'Sprinter', new Date(2005, 11, 15), new CarDimensions (3.7, 2.2, 3), 18, 17);
console.dir(bus);
console.log('bus.getAge() :>> ', bus.getAge());
console.log('bus.getMaxSize() :>> ', bus.getMaxSize());
console.log('bus.passengerCount :>> ', bus.passengerCount);
console.log('bus.addPassenger() :>> ', bus.addPassenger());
console.log('once more bus.addPassenger() :>> ', bus.addPassenger());
console.log('bus.passengerCount :>> ', bus.passengerCount);

console.groupEnd();

console.group('Testing FreightTransport constructors and methods');
const tractor = new FreightTransport('MAN', 'TGS', new Date(2019, 7), new CarDimensions(7.2, 3.3, 2.5), 10500);
console.dir(tractor);
console.log('tractor.getAge() :>> ', tractor.getAge());
console.log('tractor.getMaxSize() :>> ', tractor.getMaxSize());
console.log('tractor.checkLoadingPossibility(7000) :>> ', tractor.checkLoadingPossibility(7000));
console.log('tractor.checkLoadingPossibility(17000) :>> ', tractor.checkLoadingPossibility(17000));

console.groupEnd();