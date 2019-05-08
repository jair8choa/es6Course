Array.prototype.promedio = function(){
    let sum = 0
    for (const num of this) {
        sum += num
    }
    return sum/this.length
}


let arr = [1,2,3,4].promedio()
console.log(arr);