let cart = [];
let total = 0;

function navigate(section) {
  document.querySelectorAll('section').forEach((el) => el.classList.add('hidden-section'));
  document.getElementById(section).classList.remove('hidden-section');
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `<span>${item.name} - R$ ${item.price.toFixed(2)}</span>
                     <button onclick="removeFromCart(${index})">Remover</button>`;
    cartItems.appendChild(div);
  });

  totalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}

function searchProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  document.querySelectorAll('.product').forEach((product) => {
    const name = product.dataset.name.toLowerCase();
    product.style.display = name.includes(searchTerm) ? 'block' : 'none';
  });
}