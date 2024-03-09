function calculator() {
    let selector1, selector2, resultSelector;
  
    function init(selector1Param, selector2Param, resultSelectorParam) {
      selector1 = document.querySelector(selector1Param);
      selector2 = document.querySelector(selector2Param);
      resultSelector = document.querySelector(resultSelectorParam);
    }
  
    function add() {
      if (selector1 && selector2 && resultSelector) {
        const result = Number(selector1.value) + Number(selector2.value);
        resultSelector.textContent = result;
      } else {
        console.error("Calculator not initialized properly. Call init() first.");
      }
  
      return calculator;
    }
  
    function subtract() {
      if (selector1 && selector2 && resultSelector) {
        const result = Number(selector1.value) - Number(selector2.value);
        resultSelector.textContent = result;
      } else {
        console.error("Calculator not initialized properly. Call init() first.");
      }
  
      return calculator;
    }
  
    return {
      init,
      add,
      subtract
    };
  }
  
  // Example Usage:
  const calc = calculator();
  calc.init("#num1", "#num2", "#result");
  
  calc.add(); // Adds the values of #num1 and #num2 and displays the result in #result
  calc.subtract(); // Subtracts the value of #num2 from #num1 and displays the result in #result
  