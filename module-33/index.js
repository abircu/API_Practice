function userData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data));
  // .then((email) => showEmail(email));
}
function showData(show) {
  const info = document.getElementById("users-list");
  for (const user of show) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    info.appendChild(li);
  }
}

// function showEmail(email) {
//   const emailInfo = document.getElementById("email-load");
//   for (const isMail of email) {
//     const list = document.createElement("li");
//     list.innerText = isMail.email;
//     emailInfo.appendChild(list);
//   }
// }
