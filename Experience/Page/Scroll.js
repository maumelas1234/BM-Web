export default class Scroll {
  constructor() {
    this.firstSection = document.querySelector(".first-section").offsetHeight;
    this.secondSection = document.querySelector(".second-section").offsetHeight;
    this.thirdSection = document.querySelector(".third-section").offsetHeight;
    this.sections = document.querySelectorAll("section[id]");

    this.scrollHeader();
    this.scrollActive();
    this.scrollUp();
  }

  scrollHeader() {
    this.header = document.getElementById("header");
    //When the scroll is greater than 50 viewportheight
    window.addEventListener("scroll", () => {
      scrollY >= 50
        ? this.header.classList.add("bg-header")
        : this.header.classList.remove("bg-header");
    });
  }

  scrollUp() {
    this.scrollUp = document.getElementById("scroll-up");
    //when when scroll is higher than 350 viewport add scrool-up
    window.addEventListener("scroll", () => {
      scrollY >=
      this.sections[1].offsetTop + this.firstSection + this.secondSection
        ? this.scrollUp.classList.add("show-scroll")
        : this.scrollUp.classList.remove("show-scroll");
    });
  }

  scrollActive() {
    this.exactHeight = this.firstSection + this.secondSection;

    window.addEventListener("scroll", () => {
      this.exactHeight = this.firstSection + this.secondSection;
      this.scrollY = window.pageYOffset;
      this.sections.forEach((current, index) => {
        this.sectionHeight = current.offsetHeight;
        this.sectionTop = current.offsetTop + this.exactHeight;
        this.sectionId = current.getAttribute("id");
        this.sectionClass = document.querySelector(
          ".nav__menu a[href*=" + this.sectionId + "]"
        );
        //connection in one section dor nav
        if (index > 2) {
          this.sectionTop += this.thirdSection;
        }

        if (
          this.scrollY > this.sectionTop &&
          this.scrollY <= this.sectionTop + this.sectionHeight
        ) {
          this.sectionClass.classList.add("active-link");
        } else {
          this.sectionClass.classList.remove("active-link");
        }
      });
    });
  }
}
