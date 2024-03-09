function createFibonacciGenerator() {
    let current = 1;
    let next = 1;
  
    function generateNextFibonacci() {
      const result = current;
      [current, next] = [next, current + next];
      return result;
    }
  
    return generateNextFibonacci;
  }
  
  // Usage:
  const getNextFibonacci = createFibonacciGenerator();
  
  console.log(getNextFibonacci()); // Output: 0
  console.log(getNextFibonacci()); // Output: 1
  console.log(getNextFibonacci()); // Output: 1
  console.log(getNextFibonacci()); // Output: 2
  console.log(getNextFibonacci()); // Output: 3
  // and so on...
  