function rotateArray(arr, count) {
   

   // for (let i = 0; i <= count; i++) {
        let element = arr.pop();
        arr.unshift(element);
  //  }

    console.log(arr);

}




rotateArray(['1',

    '2',

    '3',

    '4'],

    2);
console.log('===========');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);