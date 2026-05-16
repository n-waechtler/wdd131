const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

