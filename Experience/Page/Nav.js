export default class Nav {
  constructor() {
    this.navMenu = document.querySelector(".nav__menu");
    this.navToggle = document.querySelector(".nav__toggle");
    this.navClose = document.querySelector(".nav__close");
    this.navLink = document.querySelectorAll(".nav__link");

    this.showMenu();
    this.menuHidden();
    this.removeMenuMobile();
  }

  showMenu() {
    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (this.navToggle) {
      this.navToggle.addEventListener("click", () => {
        this.navMenu.classList.add("show-menu");
      });
    }
  }

  menuHidden() {
    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (this.navClose) {
      this.navClose.addEventListener("click", () => {
        this.navMenu.classList.remove("show-menu");
      });
    }
  }

  removeMenuMobile() {
    /*=============== REMOVE MENU MOBILE ===============*/
    const linkAction = () => {
      // When we click on each nav__link, we remove the show-menu class
      this.navMenu.classList.remove("show-menu");
    };
    this.navLink.forEach((n) => n.addEventListener("click", linkAction));
  }
}
