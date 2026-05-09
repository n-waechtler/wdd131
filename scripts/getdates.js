// 1. Get the current year and put it in the span
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// 2. Get the last modified date of the document and put it in the second paragraph
const lastModifiedPara = document.getElementById("lastModified");
lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;

