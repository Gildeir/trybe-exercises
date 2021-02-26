/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */
let numbers = [20, 9, 3, 190, 70, 80, 100, 20, 350, 270];
let cont = [];
 for (i = 0; i < numbers.length;i++){
    
    if (numbers[i] % 2 != 0){    
    cont.push(i)
    } 
}  

if (cont.length == 0){
    console.log("Nenhum valor ímpar encontrado")
} else{
    console.log(cont.length)
}