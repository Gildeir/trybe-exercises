
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberSorted = []


for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numberSorted[j]) {
        let position = numbers[i];
        console.log(position)
        numbers[i] = numberSorted[j];
        console.log(numbers[i])
        numberSorted[j] = position;
        console.log(numberSorted)
      }
    }
  }console.log(numberSorted)