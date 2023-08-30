const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(245414);
  } else {
    reject("no data avaiable");
  }
});
// console.log(getData); it doesnt give the value directly
// but this method give the value directly
getData
  .then((data) => console.log(data + 35))
  .catch((err) => console.log("ERR:", err));
