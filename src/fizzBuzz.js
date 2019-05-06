function isDivisibleByThree(num) {
  return num % 3 === 0;
}

function isDivisibleByFive(num) {
  return num % 5 === 0;
}

function isDivisibleByFifteen(num) {
  return num % 15 === 0;
}

function fizzbuzz(num) {
  if(isDivisibleByFifteen(num)) {return 'FizzBuzz'}
  else if(isDivisibleByFive(num)) {return 'Buzz'}
  else if(isDivisibleByThree(num)) {return 'Fizz'}
}
