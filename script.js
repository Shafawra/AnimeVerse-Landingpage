const toggleMenu = document.querySelector(".toggleMenu");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".closeSidebar");
const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");

toggleMenu.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    const isOpen = sidebar.classList.toggle("translate-x-0");

    if (isOpen) {
        openIcon.classList.add("opacity-0", "scale-0");
        openIcon.classList.remove("opacity-100", "scale-100");
    
        closeIcon.classList.add("opacity-100", "scale-100");
        closeIcon.classList.remove("opacity-0", "scale-0");
      } else {
        openIcon.classList.add("opacity-100", "scale-100");
        openIcon.classList.remove("opacity-0", "scale-0");
    
        closeIcon.classList.add("opacity-0", "scale-0");
        closeIcon.classList.remove("opacity-100", "scale-100");
      }
});
