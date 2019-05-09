describe('fizzbuzz', function() {

  var fizzbuzz;

describe('knows when a number', function() {

  it('is divisible by 3', function() {
    expect(isDivisibleByThree(3)).toBe(true);
  });

  it('is divisble by 5', function() {
    expect(isDivisibleByFive(5)).toBe(true);
  });

  it('is divisble by 3 and 5', function() {
    expect(isDivisibleByFifteen(15)).toBe(true);
  });

  });

});

  describe('Fizzbuzz game', function() {
    it('fizz for 3', function() {
      expect(fizzbuzz(3)).toEqual('Fizz');
    });

    it('buzz for 5', function() {
      expect(fizzbuzz(5)).toEqual('Buzz');
    });

    it('FizzBuzz for 15', function() {
      expect(fizzbuzz(15)).toEqual('Fizzbuzz');
    });
  });
