const favchap = document.getElementById("favchap");
const button = document.querySelector("button");
const htmlList = document.getElementById("list");

button.addEventListener('click', () => {
    if (favchap.value.trim() != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = favchap.value;
        deleteButton.textContent = "X";

        li.appendChild(deleteButton);
        htmlList.appendChild(li);

        deleteButton.addEventListener('click', () => {

            htmlList.removeChild(li);
            favchap.focus();
        
        });

    }

    favchap.value = "";
    favchap.focus();

});