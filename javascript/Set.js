/* eslint-disable no-console */
/**
 * 학습 자료
 * 맵과 셋 : https://ko.javascript.info/map-set
 * 키기반의 컬렉션 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Keyed_collections
 * JavaScript Collections : https://velog.io/@yesdoing/JavaScript-Collections
 */

// 셋은 중복을 허용하지 않는 특별한 컬렉션
// 키 없는 값을 저장한다

// 근데 컬렉션이 뭐지?

// 데이터의 집합(자료구조)
// 데이터를 담아두는 그릇이라고 봐도 무방할 듯

// 자바스크립트에는 다음과 같은 컬렉션이 있다
// Object, Array, Map, Set, WeakMap, WeakSet, Typed Array

// es5까지는 Object, Array만
// es6부터 Map, Set, WeakMap, WeakSet, Typed Array 추가

// 주요 메서드

// new Set(iterable) : iterable 객체를 전달 받으면(대체로 배열을 받음) 그 값을 복사해서 셋에 추가한다
const set = new Set([1, 'a', true])
console.log(set) // Set(3) { 1, 'a', true }

// iterable 객체가 아닌 것을 전달 받으면 어떻게 되지?
// const obj = { apple: '🍎', banana: '🍌' }
// const setObj = new Set(obj) // 에러 발생

// 값을 복사해서 셋에 추가한다면 참조가 아닌 값 자체를 복사하나?
// 그렇다. 일단은
const arr = ['🍎', '🍌']
const setArr = new Set(arr)
console.log(setArr) // Set(2) { '🍎', '🍌' }

arr[1] = '🥕'
console.log(arr) // [ '🍎', '🥕' ]
console.log(setArr) // Set(2) { '🍎', '🍌' }

// depth가 깊은 iterable 객체도 모두 복사하나?
// 셋은 얕은 복사를 한다
const arrDeep = ['🍎', ['🥕', ['🚀']]]
console.log(arrDeep) // [ '🍎', [ '🥕', [ '🚀' ] ] ]
const arrDeepClone = [...arrDeep]
console.log(arrDeepClone) // [ '🍎', [ '🥕', [ '🚀' ] ] ]
const setArrDeep = new Set(arrDeep)
console.log(setArrDeep) // Set(2) { '🍎', [ '🥕', [ '🚀' ] ] }
const trueDeepClone = JSON.parse(JSON.stringify(arrDeep))
console.log(trueDeepClone) // [ '🍎', [ '🥕', [ '🚀' ] ] ]

arrDeep[0] = '🎊'
arrDeep[1][1] = '🔥'
console.log(arrDeep) // [ '🎊', [ '🥕', '🔥' ] ]
console.log(arrDeepClone) // [ '🍎', [ '🥕', '🔥' ] ]
console.log(setArrDeep) // Set(2) { '🍎', [ '🥕', '🔥' ] }
console.log(trueDeepClone) // [ '🍎', [ '🥕', [ '🚀' ] ] ]
