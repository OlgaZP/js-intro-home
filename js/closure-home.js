'use strict'

console.group('Testing closure fuction addNum')

function addNum (n = 0) {
  return function (m = 0) {
    return n + m
  }
}

console.log('addNum(5) -> add(10) :>> ')
const add = addNum(5)
const result = add(10)
console.log('result :>> ', result)

console.log('Test default values addNum() -> add() :>> ')
const add1 = addNum()
const result1 = add1()
console.log('result :>> ', result1)

console.log('addNum(-100.5) -> add(100) :>> ')
const add2 = addNum(-100.5)
const result2 = add2(100)
console.log('result :>> ', result2)

console.groupEnd
