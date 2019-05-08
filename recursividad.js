let factorial = n =>{
    if (n===1)
        return 1
    else
        return n * factorial(n-1) 

}

console.log(factorial(6))


let contar = v =>{
    if (v>0) {
        console.log(v)
        contar(v-1)
    }
}

contar(9)

