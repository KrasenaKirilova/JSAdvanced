function checker(x1, y1, x2, y2) {

    function calculateDistance(x1, y1, x2, y2) {
        let xDifference = x2 - x1;
        let yDifference = y2 - y1;


        return Math.sqrt(Math.pow(xDifference, 2) + Math.pow(yDifference, 2));
    }

    function isValid(x1, y1, x2, y2) {
        let isValid = Number.isInteger(calculateDistance(x1, y1, x2, y2));
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid ? 'valid' : 'invalid'}`);
    }

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);
}


checker(3, 0, 0, 4);

checker(2, 1, 1, 1);