import "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";

export default class Email {
  constructor() {
    this.contactForm = document.getElementById("contact-form");
    this.contactName = document.getElementById("contact-name");
    this.contactEmail = document.getElementById("contact-email");
    this.contactContent = document.getElementById("contact-content");
    this.contactMessage = document.getElementById("contact-message");

    this.sendEmail();
  }

  sendEmail() {
    this.contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      //Check field has a value
      if (
        this.contactName.value === "" ||
        this.contactEmail.value === "" ||
        this.contactContent.value === ""
      ) {
        //Add remove color
        this.contactMessage.classList.remove("color-blue");
        this.contactMessage.classList.add("color-red");
        //Show message
        this.contactMessage.textContent = "Write all the input fields";
      } else {
        emailjs
          .sendForm(
            "service_a0qdzdb",
            "template_ma3lo2o",
            "#contact-form",
            "zqmPi_twGsF8In71-"
          )
          .then(
            () => {
              this.contactMessage.classList.add("color-blue");
              this.contactMessage.textContent = "Message sent";

              //Remove message after five seconds
              setTimeout(() => {
                this.contactMessage.textContent = "";
              }, 5000);
            },
            (error) => {
              alert("OOPS! SOMETHING HAS FAILED...", error);
            }
          );
        //Clear the input field
        this.contactName.value = "";
        this.contactEmail.value = "";
        this.contactContent.value = "";
      }
    });
  }
}
