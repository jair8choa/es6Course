let fun1 = num =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num+5);
        },2000)
    })
}

fun1(5)
    .then((num) =>{
        console.log(num);
    });

    console.log('Hola')