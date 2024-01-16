function printN(arr, num) {
    let newArr = [];
    arr.forEach((el, i) => {
        if (i % num == 0)
            newArr.push(el);
    }); 
   return newArr;  
}



printN(['5',

    '20',

    '31',

    '4',

    '20'],

    2);

console.log('================');
console.log(printN(['dsa', 'asd', 'test', 'tset'], 2));
console.log('================');
printN(['1', '2', '3', '4', '5'], 6);
