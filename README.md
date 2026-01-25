// Al Muntaqa Online Boutique JS

// Product list
const products = [
  { id: 1, name: "Elegant Abaya", price: 4500 },
  { id: 2, name: "Silk Hijab", price: 1200 },
  { id: 3, name: "Embroidered Kurti", price: 3200 }
];

let cart = [];

// Display products
function displayProducts() {
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  products.forEach(product => {
    productDiv.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Price: Rs ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

// Update cart display
function updateCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartDiv.innerHTML += `<p>${item.name} - Rs ${item.price}</p>`;
  });

  document.getElementById("total").innerText = `Total: Rs ${total}`;
}

// Load products on page load
window.onload = displayProducts;