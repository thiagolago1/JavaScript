const fs = require('fs') //Esse módulo vem previamente instalado no node

const caminho = __dirname + '/arquivo.json'

//Ler arquivo de forma síncrona..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Ler arquivo de forma assíncrona..
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//Leitura de pasta      
//__dirname é uma constante presente em todos os diretórios do node, representa um diretório atual por exemplo
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta..')
    console.log(arquivos)
})