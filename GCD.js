function GCD(num1, num2) {
let result = num1 % num2;

while (result !== 0) {
    num1 = num2;
num2 = result;
result = num1 % num2;

}
console.log(num2);
}

GCD(15, 5);
GCD(2154, 458);