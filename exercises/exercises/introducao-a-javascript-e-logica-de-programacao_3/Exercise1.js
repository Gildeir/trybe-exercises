/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */

let size = 4;
let symbol = '*';
let inputLine = '';

for (indexColuna = 0; indexColuna < size; indexColuna += 1){
    inputLine += symbol;
}

for (indexColumn = 0; indexColumn < size; indexColumn += 1){
    console.log(inputLine)
}

