console.log(1);
console.log(2);
console.log(3);
console.log(4);
setTimeout(() => {
  console.log("lazzy lock");
}, 4000);
console.log(6);
console.log(7);

function doSomething() {
  console.log(5);
}
