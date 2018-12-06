//o _ está referenciado a biblioteca lodash no caso

const _ = require('lodash') //Obs: Aqui não é o caminho relativo, ele vai procurar o index.js dentro de node_modules
setInterval(() => console.log(_.random(1, 100)), 2000) //setInterval é uma função que executa de tempo em tempo 