//Promise - Promessa - operação assíncrona

function falarDepoisDe(segundos, frase) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Bacana!')
    .then((frase, abc) => frase.concat('????'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))