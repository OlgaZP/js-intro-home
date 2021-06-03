'use strict';

// Map
//     Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
// честно переписала из Интернета, но вроде поняла как работает
const randomArr = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));
const arr1 = randomArr(5, 10);
const arr2 = randomArr(10, 20);
console.log('arr1 :>> ', arr1);
console.log('arr2 :>> ', arr2);
const arrUnique = new Set([...arr1, ...arr2]);
const mapFromArrs = new Map([...arrUnique.entries()]);
console.log('mapFromArrs :>> ', mapFromArrs);
//     Получите список ключей и значений отдельно.
const mapKeys = mapFromArrs.keys();
console.log('mapKeys :>> ', mapKeys);
const mapValues = mapFromArrs.values();
console.log('mapValues :>> ', mapValues);
//     Получите текущее количество элементов.
const mapSize = mapFromArrs.size;
console.log('mapSize :>> ', mapSize);
//     Добавьте и удалите элемент
const uniqueKey = Symbol('Unique Key');
mapFromArrs.set(uniqueKey, 10);
console.log('with added element mapFromArrs :>> ',mapFromArrs);
//debugger;
mapFromArrs.delete(uniqueKey);
console.log('with deleted element mapFromArrs :>> ',mapFromArrs);
//     Произведите поиск по ключу
console.log('mapFromArrs.has(1) :>> ', mapFromArrs.has(1));

// Set
//     Создайте коллекцию Set с начальными значениями 1,2,3. 
const setTest = new Set([1, 2, 3]);
console.log('setTest :>> ', setTest);
//     С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
console.log('setTest.has(3) :>> ', setTest.has(3));
console.log('setTest.has(4) :>> ', setTest.has(4));
//     Добавите еще несколько элементов.
setTest.add(3); //уже есть, поэтому не добавляется
setTest.add(4);
setTest.add(5);
setTest.add('abc'); //это специально добавлено ради тереса посмотреть как отработает, не ругайтесь
setTest.add({'a':1, 'b':2});
console.log('setTest :>> ', setTest);
//     С помощью цикла for-of переберите ее значения и выведите в консоль.
for (let item of setTest) {
    console.log('item :>> ', item);
}
//     Найдите сумму этих значений.
const sum = Array.from(setTest).reduce((sum, item) => sum += item);
console.log('sum of set elements is :>> ', sum); //числа считает корректно, но если элементы других типов, то просто дописывает - типа конкатенации
//     Удалите элемент 2.
setTest.delete(2);
console.log('setTest without 2:>> ', setTest);
//     Очистите всю коллекцию.
setTest.clear();