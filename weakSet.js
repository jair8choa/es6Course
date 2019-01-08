let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };
let student4= { name: 'Joaquin', age: 18, gender: 'male' };

const roster = new WeakSet([student1,student2,student3]);

console.log(roster.has(student4));

roster.add(student4);

console.log(roster.has(student4));

student4 = null;

console.log(roster.has(student4))

