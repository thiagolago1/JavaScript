//let e const
{
    var a = 1  //Não tem scopo de bloco
    let b = 2  //Tem scopo de bloco
    console.log(b)
}
console.log(a)


//Template String - delimitar string dentro das crases (``) e ai você consegue colocar variáveis a partir do dólar ($)
const produto = 'celular'
console.log(`${produto} é caro!`)

//Destructuring - tirar algo de dentro de uma estrutura
const [l, e, ...tras] = "Teste"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'ZE', idade: 23 }
console.log(i, nome)