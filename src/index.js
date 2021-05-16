import "./styles.css";
import menu from "./menu.json";
import galleryVision from "./templates/templates.hbs";

const refs = {
  menu: document.querySelector(".js-menu"),
  themeSwitch: document.querySelector(".theme-switch__toggle"),
  body: document.querySelector("body"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const theme = localStorage.getItem("theme");

refs.body.classList.add(!theme ? Theme.LIGHT : theme);

refs.themeSwitch.checked = theme === "dark-theme" ? true : false;

markupGallery(menu);

function markupGallery(data) {
  const markup = galleryVision(data);
  refs.menu.insertAdjacentHTML("beforeend", markup);
}

refs.themeSwitch.addEventListener("change", switchHendler);

function switchHendler() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
  localStorage.setItem("theme", refs.body.className);
}
