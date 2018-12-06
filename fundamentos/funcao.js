//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}


imprimirSoma(2, 3)
imprimirSoma(2) //se só passar um valor, o outro vai ser undefined -NaN - not a number
imprimirSoma(2, 3, 4, 5, 6, 7) //Pega os dois primeiros e ignora o resto
imprimirSoma() //NaN

//Função com retorno

function soma(a, b = 1)  {
    //por padrão a variável b vem 1
    return a + b
}

console.log(soma(2, 3))//Aqui imprimi o console
console.log(soma(2))
console.log(soma()) //NaN

