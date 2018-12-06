
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //floor arredonda para baixo
}

console.log(rand([50, 40]))
console.log(rand([990]))
console.log(rand([, 10]))
console.log(rand([]))