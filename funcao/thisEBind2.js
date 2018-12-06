//função pessoa com atribudo idade a partir do this
//dentro da função pessoa, tem uma chamada da função setInterval
//setInterval dispara uma outra função a partir de um determinado intervalo que você passou
//dentro da função setInvertal, tem uma função que não receber nenhum parâmetro
//e vai ter o corpo da função diretamente dentro do setInterval

//this.idade++ ta incrementando o valor de idade
//imprimir no console
//e o intervalo vai ser 1000, que quer dizer que a cada x milisegundos(ou seja, 1 segundo), essa função vai ser disparada novamente

//Instaciar a função Pessoa para criar um objeto
//this ta amarrando pessoa

function Pessoa() {
    this.idade = 0

    const self = this //amarrei this em self 
    
    setInterval(function() {
        this.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa