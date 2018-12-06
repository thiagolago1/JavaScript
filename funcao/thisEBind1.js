//Constante chamada pessoa que recebe um objeto
//dentro do objeto, tem o atribudo saudacao
//e dentro desse objeto, tem uma função

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
        //o this.saudacao ta acessando objeto de pessoa(dono da função)
    }
}

pessoa.falar()

//Armazenar a função falar em uma variável
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e OO
        //Falar está em outro contexto, dessa maneira daria undefined.

//Nesse caso, tem o bind
//O bind você passa um objeto no qual você quer que seja resolvido o this
//o this nesse caso, vai ser a constante "pessoa" da linha 5.
//passando o pessoa como argumento para dentro da função bind, significa que sempre,
//a partir dessa função, o this vai ser resolvido para pessoa
//Resumindo, o bind é responsável por amarrar um determinado objeto,
//para ele ser o dono da execução do método sempre que ele for chamado
const falarDePessoa = pessoa.falar.bind(pessoa)  

falarDePessoa()
