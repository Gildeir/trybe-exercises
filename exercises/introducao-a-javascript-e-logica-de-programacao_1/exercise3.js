/* Faça um programa que retorne o maior de três números.  Defina no começo do programa três variáveis com os valores que serão comparados.
 */

 let a = 70;
 let b = 70;
 let c = 70;

 if (a > b && a > c ){
    console.log(a);
 }else if (b > a && b > c){
     console.log(b);
 }else if (c > a && c > b){
     console.log(c)
 }else{
     console.log("Os número são iguais!");
 }
