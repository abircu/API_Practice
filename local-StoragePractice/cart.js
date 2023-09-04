const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quintityField = document.getElementById("product-quintity");
  const product = productField.value;
  const quintity = quintityField.value;
  productField.value = "";
  quintityField.value = "";
  console.log(product, ":", quintity);
  displyProduct(product, quintity);
  saveProductTolocalStorage(product, quintity);
};
const displyProduct = (product, quintity) => {
  const setProdunct = document.getElementById("produnct-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quintity}`;
  setProdunct.appendChild(li);
};

// get previous stored element
const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductTolocalStorage = (product, quintity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quintity;
  const cartStringiFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringiFied);
  console.log(cartStringiFied);
};
const displyProductFromLocalStorage = () => {
  const saveCart = getStoredShoppingCart();
  console.log(saveCart);
  for (const product in saveCart) {
    const quintity = saveCart[product];
    console.log(product, quintity);
    displyProduct(product, quintity);
  }
};
displyProductFromLocalStorage();
