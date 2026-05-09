const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");
lastMod.textContent = `Last Modification: ${document.lastModified}`;
