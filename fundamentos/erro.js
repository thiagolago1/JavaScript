function tratarErroELancar(erro) {
    //o throw lança a mensagem de erro
    
    //throw new Error('Ocorreu um erro de processamento. Tente novamente mais tarde.')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //Try é um bloco de código. Dentro dele você julga algo que pode gerar algum tipo de erro
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { //o Catch trata o erro
        tratarErroELancar(e)
    } finally { //é um bloco que vai ser sempre executado dando erro ou não (no try e no catch)
        console.log('Final')
    }
}

const obj = { nome: 'Thiago' }
imprimirNomeGritado(obj) 