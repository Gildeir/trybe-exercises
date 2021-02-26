/* Utilizando for , descubra qual o menor valor contido no array e imprima-o;
 */

let numbers = [5, 9, 1, 19, 70, 8, 100, 2, 35, 27];
let lowerNumber = 1000;

for (let index = 0; index < numbers.length; index +=1){
    
    if (numbers[index] < lowerNumber){
        
        lowerNumber = numbers[index]  
    }
}   
    console.log(lowerNumber)