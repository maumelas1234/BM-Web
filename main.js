import "./style.css";

import Experience from "./Experience/Experience";

import Nav from "./Experience/Page/Nav";
import Email from "./Experience/Page/Email";
import Scroll from "./Experience/Page/Scroll";

const experience = new Experience(document.querySelector(".experience-canvas"));

const nav = new Nav();
const email = new Email();
const scrool = new Scroll();
