//
console.log("welcome to flatiron supermarket !");
const items =["eggs", "milk", "bread", "cheese", "bacon"];
eggs = 2.99;
milk = 3.49;
bread = 1.99;
cheese = 4.99;
bacon = 5.99;

function itemTotal(price, quantity) {
    return price * quantity;
    }
console.log(itemTotal(eggs, 2));
console.log(itemTotal(milk, 3));
