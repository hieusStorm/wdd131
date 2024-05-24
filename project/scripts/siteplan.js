//make the button and link tag adjust to show hover color change
document.querySelector("a").addEventListener("mouseenter", ()=> {
    document.querySelector("a").textContent = "link hover color #000";
});

document.querySelector("a").addEventListener("mouseleave", ()=>{
    document.querySelector("a").textContent = "link color #b30000";
});