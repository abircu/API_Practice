function displyTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showTodo(data));
}

function showTodo(infos) {
  const todoInfo = document.getElementById("comment-container");
  for (const info of infos) {
    const addTodo = document.createElement("div");
    addTodo.classList.add("todo");
    addTodo.innerHTML = `
   <h4>UserId :${info.userId}</h4>
   <h5>Id :${info.id} </h5>
   <p>title :${info.title}</p>
   <p>completed :${info.completed}</p>
    `;
    todoInfo.appendChild(addTodo);
  }
}
displyTodo();
