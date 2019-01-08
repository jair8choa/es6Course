//Objetos
const obj = {
    nombre: 'Joaquin',
    apellido: 'Ochoa',
    edad: 18,
    mostrarInfo : () => `Hola ${obj.nombre}!`
}
    
console.log(obj.mostrarInfo());
    

//Clases
class obj2{
    constructor(){
        this.nombre = 'Joaquin';
        this.apellido = 'Ochoa';
        this.edad = 18;
    }
    mostrarInfo(){
        return `Hola ${this.nombre}!`;
    }
}
    
let ola = new obj2();
   
console.log(ola.mostrarInfo());``