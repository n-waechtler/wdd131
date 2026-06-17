const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('header h1');

const isMenuOpen = localStorage.getItem('menuOpen') == 'true';
    
if (isMenuOpen) {
    mainnav.classList.add('show');
    hambutton.classList.add('show');
    if (window.innerWidth < 1000) {
        title.classList.add('hide');
    }
}

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

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        title.classList.remove('hide');
    } else if (hambutton.classList.contains('show')) {
        title.classList.add('hide');
    }
});