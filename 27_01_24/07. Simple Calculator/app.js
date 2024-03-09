// function calculator() {
//       let num1Ref;
//       let num2Ref;
//       let resultRef;


//       function init(selector1, selector2, resultSelector) {
//        num1Ref = document.getElementById(selector1);
//        num2Ref = document.getElementById(selector2);
//        resultRef = document.getElementById(resultSelector);

//        //return { selector1, selector2, resultSelector };
//       }

//       function add() {
//        resultRef.value = Number(selector1.value) + Number(selector2.value);
//       }

//       function substract() {
//          resultRef.value = Number(selector1.value) - Number(selector2.value);

//       }

//       return {
//        init,
//        add,
//        substract
//       }
//    }

function calculator() {
   let firstNumber;
   let secondNumber;
   let result;
   
   function init(selector1, selector2, resultSelector) {
       firstNumber = document.querySelector(selector1);
       secondNumber = document.querySelector(selector2);
       result = document.querySelector(resultSelector);
   }

   function add() {
       result.value = Number(firstNumber.value) + Number(secondNumber.value);
   }

   function subtract() {
       result.value = Number(firstNumber.value) - Number(secondNumber.value);
   }

   return {
       init,
       add,
       subtract
   }
}

const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');
