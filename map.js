let employees = new Map();

employees.set(1,'Hola Mundo')
employees.set(2,'Hola Joaquin')
employees.set(3,'Hola Jairo')

for (const v of employees) {
    let [key, value] = v;
    console.log(key,value)
}
console.log('////////////////////////////')

employees.forEach((value,key,map) => console.log(key,value));
