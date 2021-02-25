/* Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
 */

let peca = "TORRE";

let peca_upper = peca.toLowerCase();



switch (peca_upper) {
    case "peão":
        console.log("Move para frente")
        break;
    case "torre":
        console.log("Move em linha reta horizontalmente e verticalmentente")
        break;
    case "cavalo":
        console.log("Move em formato de L (duas casas a frente, depois uma para esquerda ou direita.")
        break;
    case "bispo":
        console.log("Move em diagonal")
        break;
    case "dama":
        console.log("Move em todas as direção, quantas casas quiser")
        break;
    case "rei":
        console.log("Move em todas as direções,apenas uma casa.")
        break;
    default:
        console.log("erro")
}