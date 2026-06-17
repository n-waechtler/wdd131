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

const products = [
    {
        id: "fc-1888",
        name: "Lego Brick Slopes",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Facebook Page",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Instagram",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Email",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Text",
        averagerating: 5.0
    }
];

const productSelect = document.getElementById("product-name");

products.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;

    option.textContent = product.name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    productSelect.appendChild(option);
});
