import "./style/variables.css";
import "./style.css";
import "./style/header.css";
import "./style/home.css";
import "./style/skills.css";
import "./style/qualification.css";
import "./style/services.css";
import "./style/projects.css";
import "./style/contact.css";

import Experience from "./Experience/Experience";

import Header from "./Experience/Page/Header";
import Email from "./Experience/Page/Email";

const experience = new Experience(document.querySelector(".experience-canvas"));

const header = new Header();
const email = new Email();
