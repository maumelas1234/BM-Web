import "./style/variables.css";
import "/style/preloader.css";
import "./style.css";
import "./style/header.css";
import "./style/home.css";
import "./style/skills.css";
import "./style/qualification.css";
import "./style/services.css";
import "./style/projects.css";
import "./style/contact.css";
import "./style/footer.css";
import "./style/scroll.css";
import "./style/rate.css";
import "./style/breakpoints.css";

import Experience from "./Experience/Experience";

import Nav from "./Experience/Page/Nav";
// import Slider from "./Experience/Page/Slider";
import Email from "./Experience/Page/Email";
import Scroll from "./Experience/Page/Scroll";
// import RateModal from "./Experience/Page/RateModal";

const experience = new Experience(document.querySelector(".experience-canvas"));

const nav = new Nav();
const email = new Email();
const scrool = new Scroll();
const rateModal = new RateModal();
