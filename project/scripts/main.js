// add footer info
const currrentDate = new Date();
const yearTag = document.querySelector("#currentyear");
const lastModifiedTag = document.querySelector("#lastModified");
const lastModified = document.lastModified;

yearTag.innerHTML = currrentDate.getFullYear();
lastModifiedTag.innerHTML = `Last Modification: ${lastModified}`;

//add nav toggle
const navButton = document.getElementById("menu");
const nav = document.querySelector("nav");
navButton.addEventListener("click", ()=> {
    if(navButton.textContent == "≡") {
        navButton.textContent = "X";
    } else {
        navButton.textContent = "≡";
    }
    navButton.classList.toggle("open");
    nav.classList.toggle("open");
});