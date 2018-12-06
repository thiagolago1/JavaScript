//console.log(global) //Objeto Global no Node

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou Global!'
    },
    nome: 'Sistema Bacana'
})