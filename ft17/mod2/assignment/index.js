
    
    const itemInput = document.getElementById(`itemInput`);
    const priceInput = document.getElementById(`priceInput`);
    const addBtn = document.getElementById(`addBtn`);
    const shoppingList = document.getElementById(`shoppingList`);
    
    //implement local storage to save shopping list even after page refreshes
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    const savedList = JSON.parse(localStorage.getItem("shoppingList"));
    if (savedList) {
        shoppingList.innerHTML = savedList;
    };

    //form event listener to add item and price to shopping list when add button is clicked
    const inputForm = document.getElementById(`inputForm`);
    inputForm.addEventListener(`submit`, function(event) {
        event.preventDefault();
        addItem();
    });

    //function to add item and price to shopping list when add button is clicked
    function addItem() {
        let shoppingList = [];
        const item = itemInput.value;
        const price = priceInput.value;
        shoppingList.push({item, price});
    };
    //check input is valid
    if (item !== ""&& price !== isNaN (price)) {
        alert("please input valid item and price");
    } ;

    //create div box to hold item and price input
    const itemDiv = document.createElement(`div`);
    itemDiv.textContent = `${item}: $${price}`;

    //append div box to shopping list
    shoppingList.appendChild(itemDiv);

//checkbox to display a tick when item is purchased
    const checkbox = document.createElement(`input`);
    checkbox.type = "checkbox";
    itemDiv.appendChild(checkbox);

    //label next to checkbox to show item is purchased
    const label = document.createElement(`label`);
    label.textContent = "purchased";
    itemDiv.appendChild(label);
    //event listener to show item is purchased when checkbox is ticked
    checkbox.addEventListener(`change`, function() {
        if (checkbox.checked) {
            itemDiv.style.textDecoration = "line-through";
        } else {
            itemDiv.style.textDecoration = "none";
        }
    });

    //add event listener to label to show item is purchased when checkbox is ticked
    label.addEventListener(`click`, function() {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
            itemDiv.style.textDecoration = "line-through";
        } else {
            itemDiv.style.textDecoration = "none";
        }
    });


    //check for clear list button to appear only when there is an item in the shopping list
    if (shoppingList.children.length > 0) {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    };

    //create edit button to edit item and price input
    const editBtn = document.createElement(`button`);
    editBtn.textContent = "edit";
    itemDiv.appendChild(editBtn);

    //event listener to edit item and price input when edit button is clicked
    editBtn.addEventListener(`click`, function() {
        const newItem = prompt("edit item", item);
        const newPrice = prompt("edit price", price);
        if (newItem !== null && newPrice !== null) {
            itemDiv.textContent = `${newItem}: $${newPrice}`;
            itemDiv.appendChild(checkbox);
            itemDiv.appendChild(label);
            itemDiv.appendChild(editBtn);
        }
    });

    //check for edit button to appear only when there is an item in the shopping list
    if (shoppingList.children.length > 0) {
        editBtn.style.display = "block";
    } else {
        editBtn.style.display = "none";
    };

    //create save button to save edited item and price input
    const saveBtn = document.createElement(`button`);
    saveBtn.textContent = "save";
    itemDiv.appendChild(saveBtn);

    //event listener to save edited item and price input when save button is clicked
    saveBtn.addEventListener(`click`, function() {
        const newItem = prompt("edit item", item);
        const newPrice = prompt("edit price", price);
        if (newItem !== null && newPrice !== null) {
            itemDiv.textContent = `${newItem}: $${newPrice}`;
            itemDiv.appendChild(checkbox);
            itemDiv.appendChild(label);
            itemDiv.appendChild(editBtn);
            itemDiv.appendChild(saveBtn);
        }
    });
    //check for save button to appear only when there is new item and price input
    if (shoppingList.children.length > 0) {
        saveBtn.style.display = "block";
    } else {
        saveBtn.style.display = "none";
    };

    //total price of items in shopping list
    const totalPrice = document.createElement(`div`);
    totalPrice.textContent = `Total Price: $${price}`;
    shoppingList.appendChild(totalPrice);

    
