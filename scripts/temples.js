//Place the footer information
const currrentDate = new Date()
const yearTag = document.querySelector("#currentyear")
const lastModifiedTag = document.querySelector("#lastModified")
const lastModified = document.lastModified

yearTag.innerHTML = currrentDate.getFullYear()
lastModifiedTag.innerHTML = `Last Modification: ${lastModified}`


//Toggle navigation menu in mobile
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    nav.classList.toggle('open');
});