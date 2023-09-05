const numbers = [89, 35, 98, 12];
const student = {
  name: "sohel",
  age: 32,
  movies: ["khaise amare", "sala mc", "faitta jay"],
};
// neet use  template string
const about = `My name is ${student.name} i am ${student.age} years old.
 i am a actors  my last moviees are here ${student.movies}`;
console.log(about);

// neet no arrow function
const getFifty = () => 50;
const addSixty = (num) => num + 60;
const siEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const number = (teen) => {
  console.log(teen);
};
number(10);

// spreat operator
const newNumbers = [numbers];
numbers.push(90);
numbers.push(91);
numbers.push(92);
numbers.push(93);
numbers.push(94);

const currentNumbers = [...numbers, 95];

// onsole.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
