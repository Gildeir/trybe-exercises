/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
  */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
for (let index = 0; index < numbers.length; index++){
    soma = soma+=numbers[index];
    media = soma / numbers.length

}
console.log(media)