function alertar(){
    alert(`Hola!`)
}
function debounce (funcion,tiempo) {
    let timeoutId
    return ()=>{
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        const context = this
        const args = arguments

        timeoutId = setTimeout(()=>{
            funcion.apply(context,args)
        },tiempo)
    }
}

const alertarDebounce = debounce(alertar,1000)

let boton = document.querySelector('button')
                    .addEventListener('click',()=>{
                        alertarDebounce()
                    })
