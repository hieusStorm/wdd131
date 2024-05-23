//put the footer info in the footer
const currrentDate = new Date();
const yearTag = document.querySelector("#currentyear");
const lastModifiedTag = document.querySelector("#lastModified");
const lastModified = document.lastModified;

yearTag.innerHTML = currrentDate.getFullYear();
lastModifiedTag.innerHTML = `Last Modification: ${lastModified}`;

//populate the select tag if the page is product review
if (document.title == "Product Review") {
    const select = document.getElementById("productName");
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            avgrating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    products.forEach(product => {
        const option = document.createElement("option");
        option.setAttribute("value", product.id);
        option.textContent = product.name;
        select.appendChild(option);
    });
}

//if the page is review.html increase the reviews count
if (document.title == "Product Review Submitted") {
    let reviews = localStorage.getItem("reviewCount");
    reviews++;
    localStorage.setItem("reviewCount", reviews);

    document.getElementById("reviewCount").textContent = reviews;
}