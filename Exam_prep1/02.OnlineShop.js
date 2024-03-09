
class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {

        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }
        
        this.warehouseSpace -= spaceRequired;
        this.products.push(
            {
                product,
                quantity
            });
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {

        let searchProduct = this.products.find((pr) => pr.product === product);

        if (!searchProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (minimalQuantity <= searchProduct.quantity) {
            return `You have enough from product ${product}.`;
        }

        if (searchProduct.quantity < minimalQuantity) {

            let difference = minimalQuantity - searchProduct.quantity;
            searchProduct.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        let searchProduct = this.products.find((pr) => pr.product === product);
        if (product == searchProduct) {
            throw new Error("There is no {product} in the warehouse.");
        } else {
            searchProduct.quantity -= 1;
            this.sales.push({
                product,
                quantity: 1
            });
            return `The ${product} has been successfully sold.`
        }
    }
    revision() {


        if (this.sales.length == 0) {
            throw new Error("There are no sales today!");
        }


        let result = [
            `You sold ${this.sales.length} products today!`,
            "Products in the warehouse: "
        ];

        for (const {product, quantity} of this.products) {
            result.push(`${product} - ${quantity} more left`);
        }

        return result.join("\n");
    }
}

// This method should return the complete information about the shop:

// · If nothing is sold, throw an Error:

// "There are no sales today!"

// · Otherwise, return how many sales you have:

// "You sold {sales} products today!"

// · On the second line:

// "Products in the warehouse:"

// · On the new line, display information about each product in the warehouse:

// "{product}-{quantity} more left









// return {
//     OnlineShop,
// };







// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop);

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));

// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

//console.log(myOnlineShop.loadingStore('TV', 40, 500));

console.log("=======================");

// const myOnlineShop = new OnlineShop(500)

// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,))

console.log("=======================");

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

//console.log(myOnlineShop.revision());