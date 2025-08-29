const toggleMenu = document.querySelector(".toggleMenu");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".closeSidebar");

const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/></svg>`;

const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;

toggleMenu.innerHTML = menuIcon;

let isOpen = false;

toggleMenu.addEventListener("click", () => {
    isOpen = !isOpen;
    toggleMenu.innerHTML = isOpen ? closeIcon : menuIcon;
});


