function cooking(numAsString, ...oper) {
    let operators = {
        chop: num => num / 2,
        dice: num => Math.sqrt(num),
        spice: Num => num + 1,
        bake: num => num * 3,
        fillet: num => num * 0.8
    }

    let num = Number(numAsString);

    oper.forEach(el => {
        num = operators[el](num)
        console.log(Math.round(num));
    });
    
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('======================');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');