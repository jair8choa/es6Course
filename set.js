const num = new Set([8,1,3,5,6,6,6]);
const games = new Set(['Mario','Mario','Zelda','Sonic']);
games.add('lol')
console.log(typeof num);
console.log(num, games);
console.log(num.size);

console.log(num.has(1))
console.log(num.has(9))

num.add(9);
num.delete(1);

console.log(num.has(1))
console.log(num.has(9))


console.log(num.values());

for (const iterator of num.values()) {
    console.log(iterator)
}

console.log(...num.values())

 let values = num.values();

 console.log(values.next());
 console.log(values.next());
 console.log(values.next());
 console.log(values.next());
 console.log(values.next());
 console.log(values.next());

