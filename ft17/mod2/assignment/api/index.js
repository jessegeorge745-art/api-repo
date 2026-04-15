//step1 fetching products
fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => displayProducts(data))
  .catch(error => console.error('Error fetching products:', error));

//step2 displaying products
function displayProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';
//condition for placing products in the container
   products.forEach(product => {
    //creating the div container for the products
    const div = document.createElement('div');
    //creating the div container class
    div.classList.add('card');
//placing the products details and button in the container
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <input type="number" id="quantity" placeholder="quantity" min="1"/>
      <button id="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `
    ;
//code to put product details and button in container
    container.appendChild(div);
  });
  //adding products to cart
  const cart = [];
  const button = document.getElementById(`btn`);
  button.addEventListener(`click`,() => {
    const cartItem = document.createElement(`div`);
    cartItem.innerHTML =`
    <h3>${product.name}</h3>
    <p>$${product.price} </p>
     `
     const quantity = document.getElementById(`quantity`);
     const totalPrice = product.price * quantity.value
     totalPrice.innerHTML =`totalPrice: ${totalPrice}`;
      cartItem.appendChild(div);

    //  function displaySearchProduct() {
    //   const button= getElementById(`searchbtn`)
      //  const searchInput = getElementById(`searchInput`)
     // button.addEventListener(`click`, => {
    //fetch(`http://localhost:3000/products?name=${searchInput.value}`)
    //.then(response => response.json())
     // })
      }
  });
  }
  


