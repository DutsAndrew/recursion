function fibs(number) {
  const fibSequence = [];
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

function fibsRec(length, array = [0, 1]) {
  if (length <= 2) return array;
    else {
      return fibsRec(length - 1, array.concat(array[array.length - 2] + array[array.length - 1]));
    }
}

console.log(fibsRec(8));