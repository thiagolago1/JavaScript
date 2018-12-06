//Middleware pattern (chain of responsability)
//No exemplo o ctx = contexto (como sendo um único objeto) 

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//Função exec que recebe contexto(ctx) e um conjunto de funlões(middlewares)
//os ... é o operador rest, são várias funções dentro de um array
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)