
let megaSenaNumbers = []

firstGame = Math.ceil(Math.random()*60)
secondGame = Math.ceil(Math.random()*60)
thirdGame = Math.ceil(Math.random()*60)
fourthGame = Math.ceil(Math.random()*60)
fiveGame = Math.ceil(Math.random()*60)
sixGame = Math.ceil(Math.random()*60)

let turma10Play = [20, 40, 35, 9, 17, 52];

megaSenaNumbers = [firstGame, secondGame, thirdGame, fourthGame, fiveGame,sixGame]
let cont = 0;
for (let indexPlay = 0; indexPlay < turma10Play.length; indexPlay += 1){
    for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1){
        let playNumber = turma10Play[indexPlay]
        let megaNumber = megaSenaNumbers[indexMega]
        
        if (playNumber == megaNumber){
            cont += 1 ;
        }
    }           
 }
 
 console.log(megaSenaNumbers)
 console.log(turma10Play)
 console.log(cont)