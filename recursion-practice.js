// Example 1
function sumRange(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
}
console.log(sumRange(3)) // 6

// Example 2
function power(number, exponent) {
 if (exponent == 0) return 1
  else return number * power(number, exponent - 1)
}
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

// Example 3
function factorial(number) {
  if (number == 1) return 1;
    else return number * factorial(number - 1);
}
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120

// Example 4
var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(array, callback) {
  var copy = copy || array.slice();
  
  if (copy.length === 0) return true;
  
  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

// Example 5
function productOfArray(array) {
  if(array.length === 0) return 1;
	return array.shift() * productOfArray(array);
}

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60
console.log(six, sixty);

//Example 6
function contains(object, searchedItem) {
  for (var key in object) {
    if (typeof object[key] === 'object') {
      return contains(object[key], searchedItem);
    }
    if (object[key] === searchedItem) {
      return true
    }
  }
  return false
}
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);

// Example 7
function totalIntegers(array) {
  if (array.length === 0) return 0;
  let total = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

// Example 8
function SumSquares(array) {
  if (array.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += SumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

// Example 9
function replicate(amount, number) {
  if (amount <= 0) return [];
  return [number].concat(replicate(amount - 1, number));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []