let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallerNumber;

for (let index = 0; index < numbers.length; index += 1){
  if(index === 0){
    smallerNumber = numbers[index];
  }else if(numbers[index] < smallerNumber){
    smallerNumber = numbers[index];
  }
}
console.log(smallerNumber)