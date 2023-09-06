// 1.json
const student = {
  name: "sohel",
  age: 32,
  movies: ["khaise amare", "sala mc", "faitta jay"],
};
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);

//2. fetch

// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// keys , values

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

// 3.for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach((num) => console.log(num));

// 4.add or remove from an array
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

// new product creation
const newProduct = {
  name: "wabcam",
  price: 700,
  brand: "hikvision",
  color: "silvergray",
};

// 4. copy product array and add new product method
const newProducts = [...products, newProduct];
console.log(newProducts);

// 5.create a new array without a specific item
const remaining = products.filter((product) => product.name !== "laptop");
console.log(remaining);
