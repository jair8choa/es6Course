let getEmployee = function * (m){
    console.log(m);    
    yield;
    yield 'Joaquin';
    console.log(`generatorIterator get: ${yield}`);
}

let generatorIterator = getEmployee('Hola Mundo!');

generatorIterator.next();
console.log(`getEmpoyee get: ${generatorIterator.next()['value']}`);
generatorIterator.next();
generatorIterator.next('Jairo');
