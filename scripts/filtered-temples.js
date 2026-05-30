const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('header p')

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Layton Utah",
        location: "Layton, Utah, United States",
        dedicated: "2024, June, 16",
        area: 93539,
        imageUrl: 
            "https://churchofjesuschristtemples.org/assets/img/temples/layton-utah-temple/layton-utah-temple-45417-main.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25-30",
        area: "72000",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Friedrichsdorf/TS, Germany",
        dedicated: "1987, August, 28-30",
        area: "32895",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
    },
    // Add more temple objects here...
];

const container = document.querySelector(".temple-container")

function displayTemples(temples) {
    container.innerHTML = "";

    temples.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><span>Location:</span> ${temple.location}</p>
        <p><span>Dedicated:</span> ${temple.dedicated}</p>
        <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
        `;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy"

        card.appendChild(img);
        container.appendChild(card);
    });
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

const heading = document.querySelector('main h1');

document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Old";

    const oldTemples = temples.filter(
        temple => parseInt(temple.dedicated) < 1900
    );

    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "New";

    const newTemples = temples.filter(
        temple => parseInt(temple.dedicated) > 2000
    );

    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Large";

    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Small";

    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    displayTemples(smallTemples);
});

displayTemples(temples);




