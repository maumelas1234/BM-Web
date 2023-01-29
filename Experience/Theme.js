import { EventEmitter } from "events";

export default class Theme extends EventEmitter {
  constructor() {
    super();

    this.theme = "light";

    this.themeButton = document.getElementById("theme-button");
    this.darkTheme = "dark-theme";
    this.iconTheme = "ri-sun-line";
    this.selectedTheme = localStorage.getItem("selected-theme");
    this.selectedIcon = localStorage.getItem("selected-icon");

    this.toggleButton = document.querySelector(".toggle-button");
    this.toggleCircle = document.querySelector(".toggle-circle");

    this.setEventListeners();
    this.getCurrentPageTheme();
  }

  getCurrentPageTheme() {
    this.getCurrentTheme = () =>
      document.body.classList.contains(this.darkTheme) ? "dark" : "light";
    this.getCurrentIcon = () =>
      this.themeButton.classList.contains(this.iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line";

    if (this.selectedTheme) {
      document.body.classList[this.selectedTheme === "dark" ? "add" : "remove"](
        this.darkTheme
      );
      this.themeButton.classList[
        this.selectedIcon === "ri-moon-line" ? "add" : "remove"
      ];
    }
    //Activate / deactivate the theme manually with button
    this.themeButton.addEventListener("click", () => {
      //Add or remove the dark /icon theme
      document.body.classList.toggle(this.darkTheme);
      this.themeButton.classList.toggle(this.iconTheme);
      //We save the theme and current icon
      localStorage.setItem("selected-theme", this.getCurrentTheme);
      localStorage.setItem("selected-icon", this.getCurrentIcon);
    });
  }

  setEventListeners() {
    this.themeButton.addEventListener("click", () => {
      this.theme = this.theme === "light" ? "dark" : "light";

      this.emit("switch", this.theme);
    });
  }
}
