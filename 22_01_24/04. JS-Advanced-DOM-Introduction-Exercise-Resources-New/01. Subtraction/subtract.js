function subtract() {
    
    let firstNumRef = document.getElementById('firstNumber').value;
    let secondNumRef = document.getElementById('secondNumber').value;
    let resultRef =  document.getElementById('result');
    let firstNum = Number(firstNumRef);
    let secondNum = Number(secondNumRef);

    let sum = firstNum - secondNum;
   resultRef.textContent = sum;
}