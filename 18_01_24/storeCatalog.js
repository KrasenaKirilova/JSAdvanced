function storeCatalog(data) {
let result = [];

for (const tokens of data) {
    let [product, price] = tokens.split(' : ');
    price = Number(price);
    
    let firstLetter = product[0];
    if (!result[firstLetter]) {
        result[firstLetter] = [];
    }
    result[firstLetter].push({product, price});
}
 let output = [];
 let sortedLetters = Object.keys(result).sort();

 for (const letter of sortedLetters) {
    output.push(letter);
    let sortedProducts = result[letter].sort((a, b) => a.product.localeCompare(b.product));

    for (const { product, price } of sortedProducts) {
        output.push(`${product}: ${price}`);
        
    }
    
 }
 return output.join('\n');
 
}


console.log(storeCatalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']));