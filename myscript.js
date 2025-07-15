const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 499,
    image: "https://via.placeholder.com/200x150?text=T-Shirt",
  },
  {
    id: 2,
    name: "Sneakers",
    price: 1499,
    image: "https://via.placeholder.com/200x150?text=Sneakers",
  },
  {
    id: 3,
    name: "Watch",
    price: 1999,
    image: "https://via.placeholder.com/200x150?text=Watch",
  },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

displayProducts();