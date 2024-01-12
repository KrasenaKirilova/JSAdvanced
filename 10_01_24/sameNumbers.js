function sameNumbers(num) {
    let isSame = true;
    let sum = 0;
    let numArray = num.toString();

    for (let  i = 0; i < numArray.length; i++ ) {
        if (numArray[i] !== numArray[i+1]) {
            isSame = false;
        }
        console.log(numArray[i]);
    }

   
    // console.log(numArray);

}

sameNumbers(2222222);
sameNumbers(1234);