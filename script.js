const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

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
