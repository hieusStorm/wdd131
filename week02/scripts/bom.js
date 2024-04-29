const favchap = document.getElementById("favchap");
const button = document.querySelector("button");
const htmlList = document.getElementById("list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = favchap.value;
deleteButton.textContent = "X";

li.appendChild(deleteButton);
htmlList.appendChild(li);