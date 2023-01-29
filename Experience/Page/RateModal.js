// import "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
// import GSAP from "gsap";

// export default class RateModal {
//   constructor() {
//     this.rateBtnClose = document.querySelector(".rate__container-close");
//     this.fifthSection = document.querySelector(".fifth-section");
//     this.rateStars = document.querySelectorAll(".star[id]");
//     this.submitBtn = document.querySelector(".rate__btn");

//     let star = 0;
//     this.closeRateModal();
//     this.choseStar();
//     // this.sendRate();
//   }

//   sendEmail() {
//     this.contactForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       //Check field has a value
//       if (
//         this.contactName.value === "" ||
//         this.contactEmail.value === "" ||
//         this.contactContent.value === ""
//       ) {
//         //Add remove color
//         this.contactMessage.classList.remove("color-blue");
//         this.contactMessage.classList.add("color-red");
//         //Show message
//         this.contactMessage.textContent = "Write all the input fields";
//       } else {
//         emailjs
//           .sendForm(
//             "service_a0qdzdb",
//             "template_ma3lo2o",
//             "#contact-form",
//             "zqmPi_twGsF8In71-"
//           )
//           .then(
//             () => {
//               this.contactMessage.classList.add("color-blue");
//               this.contactMessage.textContent = "Message sent";

//               //Remove message after five seconds
//               setTimeout(() => {
//                 this.contactMessage.textContent = "";
//               }, 5000);
//             },
//             (error) => {
//               alert("OOPS! SOMETHING HAS FAILED...", error);
//             }
//           );
//         //Clear the input field
//         this.contactName.value = "";
//         this.contactEmail.value = "";
//         this.contactContent.value = "";
//       }
//     });
//   }

//   closeRateModal() {
//     this.rateBtnClose.addEventListener("click", () => {
//       GSAP.to(".fifth-section", {
//         autoAlpha: 0,
//       });
//     });
//   }

//   choseStar(star) {
//     this.rateStars.forEach((currentStar, index) => {
//       currentStar.textContent = `Ocena: ${index + 1}`;
//       currentStar.addEventListener("click", () => {
//         return (star = currentStar);
//       });
//     });

//     emailjs.sendForm(
//       "service_a0qdzdb",
//       "template_8l647sa",
//       "#rate-form",
//       "zqmPi_twGsF8In71-"
//     );
//   }
// }
