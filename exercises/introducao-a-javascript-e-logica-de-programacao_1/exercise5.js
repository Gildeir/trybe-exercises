/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
 */
let angulo_a = 60;
let angulo_b = 60;
let angulo_c = 60;
let soma = angulo_a + angulo_b + angulo_c;
let angulo_triangulo = 180;

 if (soma == angulo_triangulo){
     console.log("Triângulo válido");
 }else{
     console.log(erro);
 }