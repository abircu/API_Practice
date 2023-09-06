localStorage.setItem("userId", 2025402006);

const addLocalStorage = () => {
  const idInput = document.getElementById("storage_id");
  const id = idInput.value;
  const idValue = document.getElementById("storage_key");
  const value = idValue.value;
  //   set local storage
  localStorage.setItem(id, value);
  idInput.value = "";
  idValue.value = "";
};
document.getElementById("button-click").addEventListener("click", () => {
  addLocalStorage();
});
