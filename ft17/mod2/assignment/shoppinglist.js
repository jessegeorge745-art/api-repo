//getting the elements from the DOM
const addBtn = document.getElementById(`addBtn`);
const itemInput = document.getElementById(`itemInput`);
const priceInput = document.getElementById(`priceInput`);
const shoppingList = document.getElementById(`shoppingList`);
const clearBtn = document.getElementById(`clearBtn`);
//shopping list array
let shoppingListArray = [];

//function add item to shopping list
function addItem() {
    const itemName = itemInput.value;
    const itemPrice = priceInput.value;
    if (itemInput.value !== "character" || priceInput.value !== "number") {
        shoppingListArray.push({ name: itemName, price: itemPrice});
        displayList();
        itemInput.value = "";
        priceInput.value = ".ksh";
    } else {
        alert(" please enter a valid item name and price");
    }
}

//function to display the shopping list
function displayList() {
    shoppingList.innerHTML = "";
    shoppingListArray.forEach( (item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name}: $${item.price}`;
        shoppingList.appendChild(li);
    });
}
//event listener for add button
addBtn.addEventListener("click", addItem);
//box shadow for the shopping list
shoppingList.style.boxShadow = "0 4px 8px rgba(11, 239, 15, 0.1)";
//event listener to mark item as purchased using a checkbox and a label "purchased"
shoppingList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.addEventListener("click", (event) => {
            event.target.style.textDecoration = "line-through";
        });
    }
}
);

//container for shopping list
const container = document.createElement("div");
container.style.width = "300px";
//element checkbox for marking item as purchased
const checkBox = document.createElement("mark");
checkBox.textContent = "";
shoppingList.appendChild(checkBox);

//clear button to clear shopping list
clearBtn.addEventListener("click", () => {
    shoppingListArray = [];
    displayList();
});
//clear button to appear after item is added to shopping list
addBtn.addEventListener("click", () => {
    if (shoppingListArray.length > 0) {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }
});
//create element edit button to edit item and price input
const editBtn = document.createElement("button");
editBtn.textContent = "edit";
shoppingList.appendChild(editBtn);
editBtn.addEventListener("click", () => {
    const itemName = prompt("Enter new item name:");
    const itemPrice = prompt("Enter new item price:");
    if (itemName !== "" && !isNaN(itemPrice)) {
        shoppingListArray.push({ name: itemName, price: itemPrice});
        displayList();
    } else {
        alert(" please enter a valid item name and price");
    }
});
//edit button to appear after item is added to shopping list
addBtn.addEventListener("click", () => {
    if (shoppingListArray.length > 0) {
        editBtn.style.display = "block";
    } else {
        editBtn.style.display = "none";
    }
});
//total price of items in shopping list
const totalPrice = document.createElement("div");
totalPrice.textContent = "Total Price: $0";
shoppingList.appendChild(totalPrice);
function calculateTotal() {
    let total = 0;
    shoppingListArray.forEach( (item) => {
        total += parseFloat(item.price);
    });
    totalPrice.textContent = `total price: $${total}`;
}
//calculate total price of items in shopping list after item is added
addBtn.addEventListener("click", calculateTotal);
//calculate total price of items in shopping list after item is edited
editBtn.addEventListener("click", calculateTotal);
//calculate total price of items in shopping list after item is deleted
clearBtn.addEventListener("click", calculateTotal);
