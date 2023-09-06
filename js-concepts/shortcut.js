// let myMoney = 50;
// if (!myMoney) {
//   console.log("i have no money");
// } else {
//   console.log("i have anough money");
// }

const money = 80;
let food;
if (money < 100) {
  food = "biriyani";
} else {
  food = "cha-biscut";
}
console.log(food);

// ternary oparator
let weather = "winter";
let food1 = money > 100 || weather === "winter" ? "biriyani" : "cha biscuts";
console.log(food1);

// number to string
const num1 = 52;
const numString = num1 + "";
console.log(numString);
// string to number
const num = "50";
const stringToNum = +num;
console.log(stringToNum);

// function call using ternary operator
const isActive = false;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
isActive ? showUser() : hideUser();
