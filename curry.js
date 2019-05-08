//Opcion 1
const sumar = a =>{
    return b =>{
        return c =>{
            return a + b + c
        }
    }
}

//Opcion 2
const sumar2 = a => b => c => a + b + c

const resultado = sumar2(3)(3)(3)

console.log(resultado)