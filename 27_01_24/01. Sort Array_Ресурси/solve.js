function solve(array, type) {
    let dictionary = {
        'asc' : ((a, b) => a - b),
        'desc': ((a, b) => b - a),
    }

    return array.sort(dictionary[type]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));