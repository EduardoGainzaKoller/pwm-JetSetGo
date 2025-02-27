const list = document.querySelector(".Offers");
const items = document.querySelectorAll(".Offers-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function updateCarousel() {
    const offset = -index * 300; // 300px es el ancho de cada item
    list.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
    if (index > 0) index--;
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    if (index < items.length - 1) index++;
    updateCarousel();
});