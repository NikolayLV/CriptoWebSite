let changes = document.querySelector('.names__color')

let changesArr = [];

changesArr = changes;

console.log(changesArr);

function changeColors () {
    if (changes < 0) {
        changes.style.color = "green";
    }
    else {
        changes.style.color = "red";
    }
}

changeColors();

// // Smooth Scrolling
// const nav = document.querySelector(".header__nav);
// const navLinks = nav.querySelectorAll("a");
//
// for (const link of navLinks) {
//     link.addEventListener("click", clickHandler);
// }
//
// function clickHandler(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     const offsetTop = document.querySelector(href).offsetTop;
//
//     scroll({
//         top: offsetTop,
//         behavior: "smooth"
//     });
// }

// Select all links in the navigation menu
const navLinks = document.querySelectorAll('.text__header a');

// Add an event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the ID of the target section from the link's href attribute
        const targetId = link.getAttribute('href');

        // Use the scrollIntoView method to smoothly scroll to the target section
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

