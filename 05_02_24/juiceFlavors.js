function juiceBottling(input) {
    const juices = {};
    const bottles = {};

    for (let line of input) {

        let [juiceName, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (juices.hasOwnProperty(juiceName)) {
            juices[juiceName] += quantity;
        } else {
            juices[juiceName] = quantity;
        }

        if (juices[juiceName] >= 1000) {
            bottles[juiceName] = juices[juiceName] / 1000;
        }

    }

    Object.keys(bottles).forEach((key) => console.log(`${key} => ${Math.trunc(bottles[key])}`));
}

// Пример за използване:
// const input = [
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'
// ];

// console.log(juiceBottling(input));

const input = ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'];

console.log(juiceBottling(input));
