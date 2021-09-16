'use strict'

// 1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

//сюда же добавлено задание по конструкции try-catch
//Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию
//передаваемых значений и генерацию ошибок соостветствующих типов.
//Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов
//с оповещением пользователя о типе наступившей ошибки.
function pow (base, exponent) {
  //validation block
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError('Arguments must be numbers')
  }
  if (!Number.isSafeInteger(exponent)) {
    throw new RangeError('Exponent must be an integer')
  }
  //calculation block
  if (exponent === 1) {
    return base
  } else if (exponent > 0) {
    return base * pow(base, exponent - 1)
  }
  return 1 / pow(base, -exponent)
}

console.group('Testing recursion pow(base, exponenta)')
//testing correct arguments
console.log('pow(2,3) :>> ', pow(2, 3))
console.log('pow(100, 1) :>> ', pow(100, 1))
console.log('pow(-2, 5) :>> ', pow(-2, 5))
console.log('pow(0.1, 5) :>> ', pow(0.1, 5).toFixed(6))
console.log('pow(2, -4) :>> ', pow(2, -4).toFixed(6))
console.log('Testing try-catch block:>> ')

//testing errors arguments
try {
  //console.log('pow(\'a\',3) :>> ', pow('a',3));
  //console.log('pow(3, \'a\') :>> ', pow(3, 'abc'));
  console.log('pow(2, 2.7865) :>> ', pow(2, 2.7865))
} catch (err) {
  console.log(`Attention! Execution error:>> ${err.name} - ${err.message}`)
  if (err instanceof TypeError) {
    alert('For corrrect function call enter numbers, please!')
  } else if (err instanceof RangeError) {
    alert('Your numbers must be integer!')
  }
}
console.groupEnd()

// 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

function bracketWrapper3 (n) {
  if (n === 1) {
    console.log('()')
    return
  }
  console.log('(')
  bracketWrapper3(n - 1)
  console.log(')')
  return
}

console.group('Testing bracketWrapper3')
//debugger;
bracketWrapper3(3)
console.groupEnd()

// 3. ** Реализовать функцию аналог flat для массивов.

function flattingArray (arr) {
  let result = []
  arr.forEach(a => {
    Array.isArray(a)
      ? (result = result.concat(flattingArray(a)))
      : result.push(a)
  })
  return result
}

console.group('Testing flattingArray')
const arr1 = [1, 2, [3, 4]]
console.log(' flatting [ 1, 2, [3, 4]] :>> ', flattingArray(arr1, 1))

var arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(' flatting [1, 2, [3, 4, [5, 6]]] :>> ', flattingArray(arr2))

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(
  ' flatting [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] :>> ',
  flattingArray(arr4)
)

console.groupEnd()
