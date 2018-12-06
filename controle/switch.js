const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
        console.log('Quadro de Honra') 
        //No JS pode-se dar a mesma resposta para vários cases, botando dessa forma acima: para o case 10 e 9 será o log logo depois
        break //No JS ele só sai do switch se tiver um break, caso contrário ele vai ler todos os cases
        case 8: case 7: //Esta maneira é a mesma coisa que foi feita no case 10 e 9, só que na mesma linha
        console.log('Aprovado')
        break
        case 6: case 5: case 4:
        console.log('Recuperação')
        break
        default:
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

///////////////////////////
//Exemplos do https://www.devmedia.com.br/javascript-switch/39761

// Valor impresso no console: "Usuário logado"
autenticado = true;
 
switch (autenticado) {
    case true:
        console.log("Usuário logado");
        break;
    case false:
        console.log("Usuário não autenticado");
} 
 
// Valor impresso no console: "Bem-vinda!"
sexo = "feminino";
 
switch (sexo) {
    case "feminino":
        console.log("Bem-vinda!");
        break;
    case false:
        console.log("Bem-vindo!");
} 
 
// Valor impresso no console: "Outono"
mes = "Maio";
 
switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");
} 
 
// Valor impresso no console: "Abril"
mes = 4;
nomeMes = "";
 
switch (mes) {
    case 1:
        nomeMes = "Janeiro";
        break;
    case 2:
        nomeMes = "Fevereiro";
        break;
    case 3:
        nomeMes = "Março";
        break;
    case 4:
        nomeMes = "Abril";
        break;
    case 5:
        nomeMes = "Maio";
        break;
    case 6:
        nomeMes = "Junho";
        break;
    case 7:
        nomeMes = "Julho";
        break;
    case 8:
        nomeMes = "Agosto";
        break;
    case 9:
        nomeMes = "Setembro";
        break;
    case 10:
        nomeMes = "Outubro";
        break;
    case 11:
        nomeMes = "Novembro";
        break;
    case 12:
        nomeMes = "Dezembro";
        break;
    default:
        nomeMes = "Mês inexistente";
} 
console.log(nomeMes);
 
// Usuário redirecionado para "homejovem.html"
tipoUsuario = "Adolescente";
 
switch (tipoUsuario) {
    case "Adolescente":
        window.location.href = "homejovem.html";
        break;
    case "Adulto":
        window.location.href = "home.html";
} 
 
// Valor atribuído à variável salario: 2300
cargo = "gerente";
salario = 2000;
 
switch (cargo) {
    case "gerente":
        salario *= 1.15;
        break;
    case "supervisor":
        salario *= 1.10;
        break;
    default:
        salario *= 1.05;
} 

/////////////////////////////////
var tipoUsuario = "Gerente";
 
switch (tipoUsuario) {
    case "Admin":
        mensagem = "*|*| Feliz Natal, chefe! |*|*";
        break;
    case "Gerente":
        mensagem = "Boas festas, meu amigo!";
        break;
    default:
        mensagem = "Boas festas!";
}


/////////////////////////////
var alimento = "Gordura";
 
switch (alimento) {
    case "Proteína":
        mensagem = "Carne, leite, aveia, amêndoas";
        break;
    case "Carboidrato":
        mensagem = "Banana, batata doce, feijão, pão";
        break;
    default:
        mensagem = "Cuidado com a alimentação!";
}

/////////////////////////////////////////////
var cargo = "gerente";
var salario = 2000;
 
switch (cargo) {
    case "gerente":
        salario *= 1.15;
    case "supervisor":
        salario *= 1.10;
    default:
        salario *= 1.05;
} 
