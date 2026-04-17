// fetching products
fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => displayProducts(data))
  .catch(error => console.error('Error fetching products:', error));

// displaying products
function displayProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';
// condition for placing products in the container
   products.forEach(product => {
    // creating the div container for the products
    const div = document.createElement('div');
    //creating the div container class
    div.classList.add('card');
//  placing the products details and button in the container
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <input type="number" id="quantity-${product.id}" placeholder="quantity" min="1"/>
      <button id="btn-${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
    `
    ;
       container.appendChild(div);
});

  }

const cart = [];
  function addToCart(id) {
    //  get quantity input for specific product
    const quantityInput = document.getElementById(`quantity-${id}`);
    //  convert input value to number
    const quantity = parseInt(quantityInput.value);
    //checking for valid quantity
    if (isNaN(quantity) || quantity <= 0) {
      alert(`invalid quantity`);
      return;
    }
    // find product using id
    const product = cart.find(item => item.id === id);
    //  product id checker
    if (!product) {
      alert(`no product found`);
      return;
    }
    
  }


