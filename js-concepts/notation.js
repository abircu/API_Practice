const person = {
  name: "lal mia",
  profession: "traffic sargon",
  age: 39,
  adreess: "fulbaria, mymensing",
};
// dot notation
const prof1 = person.profession;
console.log(prof1);
// bracket notation
const prof2 = person["profession"];
console.log(prof2);
// in the variable name
const pName = "profession";
const prof3 = person[pName];
console.log(prof3);
