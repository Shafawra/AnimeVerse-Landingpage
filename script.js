const toggleMenu = document.querySelector(".toggleMenu");
const sidebar = document.querySelector(".sidebar");

const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/></svg>`;

const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;

toggleMenu.innerHTML = menuIcon;

let isOpen = false;

toggleMenu.addEventListener("click", () => {
    isOpen = !isOpen;

    sidebar.classList.toggle("translate-x-0", isOpen);
    sidebar.classList.toggle("-translate-x-full", !isOpen);

    toggleMenu.innerHTML = isOpen ? closeIcon : menuIcon;
})

const cardCarousel = document.getElementById("cardCarousel");
let arahScroll = 1;

function jalanSendiri() {
    cardCarousel.scrollLeft += arahScroll;

    if(cardCarousel.scrollLeft + cardCarousel.clientWidth >= cardCarousel.scrollWidth) {
        arahScroll = -1;
    }

    if(cardCarousel.scrollLeft <= 0) {
        arahScroll = 1;
    }
}

    setInterval(jalanSendiri, 20);

document.getElementById("year").textContent = new Date().getFullYear();
