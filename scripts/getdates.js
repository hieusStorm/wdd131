const currrentDate = new Date()
const yearTag = document.querySelector("#currentyear")
const lastModifiedTag = document.querySelector("#lastModified")
const lastModified = document.lastModified

yearTag.innerHTML = currrentDate.getFullYear()
lastModifiedTag.innerHTML = `Last Modification: ${lastModified}`