function sameNumbers(num) {
    let isSame = true;
    let sum = 0;
    let numArray = num.toString();
    sum += Number(numArray[0]);

    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] !== numArray[i - 1]) {
            isSame = false;
        }
        sum += Number(numArray[i])
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);