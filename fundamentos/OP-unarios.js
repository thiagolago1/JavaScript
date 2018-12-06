let num1 = 1
let num2 = 2

num1++ //pós fixada -> acrescenta uma unidade no valor da variável
//++num1 //pré fixada 
console.log(num1)

--num1 //Subtrai uma unidade
console.log(num1)

console.log(++num1 === num2--) //na hora da comparação os dois estavam valendo 2, só decrementou depois da verificação
console.log(num1 === num2)
