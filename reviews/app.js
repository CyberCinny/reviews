const reviews = [
    {
        id: 1,
        name: "Maria Groeizaam",
        job: "Front-end Developer",
        img: "./images/mudmasters1.jpg",
        info:"Entrepreneurial creative Front-end Developer with a passion for building eclectic and dynamic websites. In the field of management support tasks in various industries at the most prestigious international corporates in the world."
    },
    {
        id: 2,
        name: "Diana de Boer",
        job: "Kok",
        img: "./images/us.jpg",
        info:"Entrepreneurial creative Front-end Developer with a passion for building eclectic and dynamic websites. In the field of management support tasks in various industries at the most prestigious international corporates in the world."
    },
    {
        id: 3,
        name: "Betty Maideth",
        job: "Meisje van plezier",
        img: "./images/We did it.jpg",
        info:"ntrepreneurial creative Front-end Developer with a passion for building eclectic and dynamic websites. In the field of management support tasks in various industries at the most prestigious international corporates in the world."
    },
    {
        id: 4,
        name: "Wendel",
        job: "Bakker",
        img: "./images/We did it.jpg",
        info:"Entrepreneurial creative Front-end Developer with a passion for building eclectic and dynamic websites. In the field of management support tasks in various industries at the most prestigious international corporates in the world."
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);

});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src= item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
//show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    } 
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    } 
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
