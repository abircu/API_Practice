// array destructuring
const [x, y] = [20, 23];
console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = boxify(10, 25);
console.log(first, second);

const student = {
  name: "sohel",
  age: 32,
  movies: ["khaise amare", "sala mc", "faitta jay"],
};
const [firstMovie, secondMovie, thirdMovie] = student.movies;
console.log(firstMovie, secondMovie, thirdMovie);

// topics name: distructuring object

const { name, age, profession } = {
  name: "sohel rana",
  age: 23,
  profession: "software Engineer",
};

console.log(name, age, profession);

const employee = {
  ide: "vsCode",
  designation: "developer",
  machine: "desktop",
  languages: ["c", "c++", "js", "java"],
  specification: {
    height: "5.2ft",
    weight: "50kg",
    race: "black",
    nationality: "bangladeshi",
    religion: "islam",
  },
};
const { machine, ide } = employee;
console.log(machine, ide);
const { height, religion } = employee.specification;
console.log(height, religion);
const { program } = employee?.languages;
console.log(program);
