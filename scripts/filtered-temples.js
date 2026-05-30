const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('header p')

hambutton.addEventListener('click', (e) => {
    e.preventDefault();

    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

    if (window.innerWidth < 1000) {

        if (hambutton.classList.contains('show')) {
            title.classList.add('hide');
        } else {
            title.classList.remove('hide');
        }
    }
});