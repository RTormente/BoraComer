import { renderComponent } from "./components.js";

await renderComponent("assets/components/footer.html", "footer");
await renderComponent("assets/components/header.html", "header");
await renderComponent("assets/components/slideshow.html", ".slideshow");


document.getElementById("menuMobile").addEventListener("click", (event) => {
    document.querySelector("header nav").classList.toggle("isVisibleFlex");
    document.getElementById("menuClose").classList.toggle("isVisible");
});

document.getElementById("menuClose").addEventListener("click", (event) => {
    document.querySelector("header nav").classList.toggle("isVisibleFlex");
    document.getElementById("menuClose").classList.toggle("isVisible");
});
