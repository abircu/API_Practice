const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quintityField = document.getElementById("product-quintity");
  const product = productField.value;
  const quintity = quintityField.value;
  productField.value = "";
  quintityField.value = "";
  console.log(product, ":", quintity);
  displyProduct(product, quintity);
};
const displyProduct = (product, quintity) => {
  const setProdunct = document.getElementById("produnct-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quintity}`;
  setProdunct.appendChild(li);
};
