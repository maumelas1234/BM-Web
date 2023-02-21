import { EventEmitter } from "events";
import Experience from "../Experience";
import GSAP from "gsap";

export default class Preloader extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.camera = this.experience.camera;
    this.world = this.experience.world;
    document.querySelector("html").classList.add("hidden-scroll");
    this.world.on("worldready", () => {
      this.playIntro();
    });
  }

  playIntro() {
    return new Promise((resolve) => {
      this.timeline = new GSAP.timeline();

      this.timeline.to(".preloader__text", {
        autoAlpha: 0,
      });
      this.timeline.to(".preloader__logo", {
        autoAlpha: 1,
      });
      this.timeline.to(".preloader", {
        autoAlpha: 0,

        onComplete: () =>
          document.querySelector("html").classList.remove("hidden-scroll"),
      });
    });
  }
}
