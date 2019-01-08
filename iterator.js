const digits = [1,2,3,4,5,6];
const arrayIterator = digits[Symbol.iterator]();
console.log(arrayIterator);

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

let varNormal = 'banana';
const sym1 = Symbol(varNormal);
console.log(sym1)
