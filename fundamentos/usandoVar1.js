{{{{{var sera = 'Sera???'}}}}} 
console.log(sera) 
//a variável VAR dentro de um bloco de código, pode ser visível fora do bloco
//Uma variável fora de função é considerada global, então ela pode ser visível

function teste() {
    var local = 123
}
//Nesse caso, dentro da função, uma variável é apenas visível dentro da determinada função
teste()
console.log(local)

//Evitar criar variáveis de escopo global, pois qualquer sobrescrita dessa variável pode gerar um problema no sistema

//Nível global = visível na aplicação inteira
//Nível escopo de função = só é visível dentro do bloco, da função.

