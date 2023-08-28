const user = { id: 1, name: "Gorib amar", job: "actor" };
//json=javaScript Object Notation(JSON)
const jsonStringify = JSON.stringify(user);
// console.log(user);
// console.log(jsonStringify);
const shop = {
  owner: "alia khala",
  address: {
    street: "nikunja-02 road no 15/ house 12 ",
    city: "dhaka",
    country: "bd",
  },
  products: ["laptop", "desktop", "phone", "cc camera"],
  prevenue: 45000,
  isOpen: true,
  isNew: false,
};
// convert javascript value or object in string (using javascript stringify)
const shopJSON = JSON.stringify(shop);
// convert javascript string in json (using javascript parse)
const shopObj = JSON.parse(shopJSON);
console.log(shopJSON);
console.log(shopObj);
