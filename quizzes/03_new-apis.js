// const arr = []

// arr.includes(string) <-- returns boolean value
function stringIncludes() {
  // refactor to String.includes
  const phrase = 'in the box'
  return phrase.includes('the')
}
// console.log(stringIncludes())

// ==================================================================//

// arr.repeat(n) where n is number of time to repeat
function stringRepeat() {
  // refactor to String.repeat
  const repeatCount = 20
  const marker = '*'.repeat(repeatCount)
  return marker
}
// console.log(stringRepeat())

// ==================================================================//

// Array.from(src) returns a new array built from src
function arrayFrom() {
  // refactor to Array.from
  const arrayLike = {length: 2, 0: 'hello', 1: 'world'}

  // pre-ES6
  // return Array.prototype.slice.apply(arrayLike)

  // ES6+
  return Array.from(arrayLike) // != Array(arrayLike)
}
// console.log(arrayFrom())

// ==================================================================//

// arr.fill() <-- returns a new array filled with value
// arr.fill(value, start, end)
function arrayFill() {
  // refactor to Array.fill
  const value = 'hey'
  const start = 1
  const end = 4
  const array = new Array(7) // <-- New array with 7 indexes

  // Pre-ES6
  // for (let i = 0; i < array.length; i++) {
  //   if (i >= start && i < end) {
  //     array[i] = value
  //   }
  // }

  // ES6+
  const newArray = array.fill(value, start, end)

  return newArray
}
// console.log(arrayFill())

// ==================================================================//

// Object.assign() <-- Object.assign(targetObj, ...objectsToAssign)
//                 <-- in conflicts, the last object called takes precedent
function objectAssign() {
  // what will this return?
  const target = {
    a: 'a from target',
    c: 'c from target',
    e: 'e from target',
    g: 'g from target',
    i: 'i from target',
    k: 'k from target',
  }
  
  const object1 = {
    a: 'a from object1',
    c: 'c from object1'
  }
  
  const object2 = {
    c: 'c from object2',
    f: 'f from object2'
  }

  const object3 = {
    a: 'a from object3',
    i: 'i from object3'
  }
  
  Object.assign(target, object1, object2, object3)

  return target
}
console.log(objectAssign())
/*







SOLUTIONS ARE BELOW









 */

function stringIncludesSOLUTION() {
  // refactor to String.includes
  const phrase = 'in the box'
  return phrase.includes('the')
}
// console.log(stringIncludesSOLUTION())

function stringRepeatSOLUTION() {
  // refactor to String.repeat
  const repeatCount = 20
  return '*'.repeat(repeatCount)
}
// console.log(stringRepeatSOLUTION())

function arrayFromSOLUTION() {
  // refactor to Array.from
  const arrayLike = {length: 2, 0: 'hello', 1: 'world'}
  return Array.from(arrayLike)
}
// console.log(arrayFromSOLUTION())

function arrayFillSOLUTION() {
  // refactor to Array.fill
  const value = 'hey'
  const start = 1
  const end = 4
  const array = new Array(7)
  return array.fill(value, start, end)
}
// console.log(arrayFillSOLUTION())
