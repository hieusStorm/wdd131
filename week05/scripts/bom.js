const favchap = document.getElementById("favchap");
const button = document.querySelector("button");
const htmlList = document.getElementById("list");
let chapters = getChapters() || [];

chapters.forEach((chapter) => {
    displayChapter(chapter);
});

button.addEventListener('click', () => {
    if (favchap.value.trim() != "") {
        displayChapter(favchap.value);
        chapters.push(favchap.value);
        setChapters();
    }

    favchap.value = "";
    favchap.focus();

});

function getChapters() {
    return JSON.parse(localStorage.getItem("favoriteChapters"));
}

function displayChapter(chapter) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "X";

    li.appendChild(deleteButton);
    htmlList.appendChild(li);

    deleteButton.addEventListener('click', () => {
        htmlList.removeChild(li);
        deleteChapter(li.textContent);
        favchap.focus();
    });
}

function setChapters() {
    localStorage.setItem("favoriteChapters", JSON.stringify(chapters));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter((currentChapter) => currentChapter !== chapter);
    setChapters();
}