let cart = [];
let cartCount = document.getElementById("cartCount");
let orderLink = document.getElementById("orderLink");

function addToCart(product) {
  cart.push(product);
  cartCount.innerText = cart.length;

  let message = "Hello, I want to order:%0A" + cart.join("%0A");
  orderLink.href = "https://wa.me/923709342592?text=" + message;
}