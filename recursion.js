function fibs(number) {
  let fibSequence = [];
  let firstNumber = 0;
  let secondNumber = 1;
  let sum = 0;
  for (let i = 0; i < number - 1; i++) {
    if (i == 0) {
      fibSequence.push(firstNumber, secondNumber);
    } else {
      sum = firstNumber + secondNumber;
      fibSequence.push(sum);
      firstNumber = secondNumber;
      secondNumber = sum;
    }
  }
  return fibSequence;
}

console.log(fibs(8));

// function fibsRec(number) {

// }