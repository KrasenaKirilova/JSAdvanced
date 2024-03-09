function sumChainer(value) {
    let currentSum = value;
  
    function add(value) {
      currentSum += value;
      return add; // Return itself for chaining
    }
  
    add.valueOf = function () {
      return currentSum;
    };
  
    return add;
  }
  
  // Usage:
  const result = sumChainer(5)(10)(3); // Adds 5, then 10, then 3
  console.log(result.valueOf()); // Output: 18
  