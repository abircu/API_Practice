const products = [
  {
    name: "laptop",
    price: "3200",
    brand: "lenevo",
    color: "silver",
  },
  {
    name: "nokia",
    price: "300",
    brand: "nokia",
    color: "black",
  },
  {
    name: "iphone",
    price: "32000",
    brand: "apple",
    color: "blue",
  },
  {
    name: "android",
    price: "2100",
    brand: "xaomi",
    color: "gray",
  },
  {
    name: "smartphone",
    price: "2000",
    brand: "vivo",
    color: "metal",
  },
  {
    name: "gamingphone",
    price: "2200",
    brand: "infinix",
    color: "ash",
  },
  {
    name: "cellphone",
    price: "3212",
    brand: "symphony",
    color: "orange",
  },
  {
    name: "cellphone",
    price: "3050",
    brand: "itel",
    color: "red",
  },
  {
    name: "cellphone",
    price: "3010",
    brand: "walton",
    color: "skeyblue",
  },
];
// need to know map
const brands = products.map((product) => product.brand);
const prices = products.map((amount) => amount.price);
console.log(brands);
console.log(prices);

// need to know foreach
products.forEach((product) => console.log(product.name));

// need to khow filter

const highPrice = products.filter((product) => product.price > 3000);
console.log(highPrice);

const specificName = products.filter((product) => product.name.includes("n"));
console.log(specificName);

// i know the use of find
const special = products.find((product) => product.name.includes("s"));
console.log(special);
