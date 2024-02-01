function solve(...data) {
    let obj = {}

    for (let el of data) {
        let typeOfEl = typeof(el);
        console.log(`${typeOfEl}: ${el}`);
        if (!obj.hasOwnProperty(typeOfEl)) {
        obj[typeOfEl] = 0;
    }
    
    obj[typeOfEl] += 1;
    }


    let sortedResult = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedResult) {

        console.log(`${key} = ${value}`);
    }
}

solve('cat', 'dog', 'yelow', 42, function () { console.log('Hello world!'); })