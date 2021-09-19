const btn = document.querySelector(".btn");
const sideBar = document.querySelector("#sidebar");

btn.addEventListener("click", function () {
    sideBar.classList.toggle('active')
});
