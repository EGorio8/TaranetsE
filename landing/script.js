let title = document.querySelector(".van-bg-text");

title.innerHTML = "VANLIFE - ЭТО СВОБОДА!";

let burger = document.querySelector(".burger-menu") 

let button = document.querySelector(".nav-open");

button.addEventListener("click", () => {
    burger.classList.toggle('opened')
});