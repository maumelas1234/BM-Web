import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.experience.world.room.actualRoom;
    this.camera = this.experience.camera;
    this.assets = this.resources.assets;
    this.video = this.resources.video;

    GSAP.registerPlugin(ScrollTrigger);

    this.isThrottled = false;

    //Desktop camera point start
    this.position = new THREE.Vector3(0, 1, 5);

    this.setScrollEvents();
    this.pendulumAnimation();
  }

  delayScroll() {
    document.querySelector("html").classList.add("hidden-scroll");
    setTimeout(() => {
      document.querySelector("html").classList.remove("hidden-scroll");
    }, 1000);
  }

  pendulumAnimation() {
    this.pendulumTL = new GSAP.timeline({ repeat: -1 });

    this.pendulumTL.to(this.room.children[34].rotation, {
      duration: 0.3,
      z: -0.5,
    });
    this.pendulumTL.to(this.room.children[34].rotation, {
      duration: 0.3,
      z: 0,
    });
    this.pendulumTL.to(this.room.children[33].rotation, {
      duration: 0.3,
      z: 0.5,
    });
    this.pendulumTL.to(this.room.children[33].rotation, {
      duration: 0.3,
      z: 0,
    });
    this.pendulumTL.pause();
  }

  setScrollEvents() {
    ScrollTrigger.matchMedia({
      //Desktop
      "(min-width: 969px)": () => {
        this.timeline = new GSAP.timeline();
        //chair movement - first section
        this.timeline.to(this.room.children[6].position, {
          x: -8,
          scrollTrigger: {
            trigger: ".first-section",
            // markers: true,
            start: "top top",
            end: "bottom top",
            onEnter: () => {
              GSAP.to(".scroll-tip", {
                autoAlpha: 0,
              });
              GSAP.to(this.position, {
                duration: 1,
                x: 0.06119349684492181,
                y: 0.94950572877101,
                z: 3.9728770539365845,
              });
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: 0,
                Y: 1,
                z: 6,
              });
            },
            scrub: 4,
          },
        });
        //chair rotation - first section
        this.timeline.to(this.room.children[6].children[0].rotation, {
          y: -2,
          scrollTrigger: {
            trigger: ".first-section",
            start: "center top",
            end: "bottom top",
            scrub: 1,
          },
        });
        //screens appear - second section
        this.timeline.to(
          [
            this.room.children[22].scale,
            this.room.children[23].scale,
            this.room.children[24].scale,
          ],
          {
            x: 1,
            y: 1,
            z: 1,
            scrollTrigger: {
              trigger: ".second-section",
              // markers: true,
              start: "top top",
              end: "top top",
              onEnter: () => {
                GSAP.to(this.position, {
                  duration: 1,
                  x: 0.1152208664230902,
                  y: 0.8933386687227702,
                  z: 2.430882777175016,
                });
                this.video.screen.currentTime = 0;
                this.video.screen.play();
                this.delayScroll();
              },
              onLeaveBack: () => {
                GSAP.to(this.position, {
                  duration: 1,
                  x: 0.06119349684492181,
                  y: 0.94950572877101,
                  z: 3.9728770539365845,
                });
                this.video.screen.pause();
              },
              scrub: 1,
            },
          }
        );
        //close-up left monitor - third section
        this.timeline.to(this.room.children[24].scale, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".third-section",
            // markers: true,
            start: "top top+=200px",
            end: "bottom bottom",

            onEnter: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: -0.6437755005292624,
                y: 1.2530442933083061,
                z: 0.6271414440920943,
              });
              GSAP.to([".third-section", ".scrollup"], {
                delay: 1,
                autoAlpha: 1,
              });
              this.delayScroll();
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: 0.1152208664230902,
                y: 0.8933386687227702,
                z: 2.430882777175016,
              });
              GSAP.to([".third-section", ".scrollup"], {
                autoAlpha: 0,
              });
            },
            onLeave: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: 0.1152208664230902,
                y: 0.8933386687227702,
                z: 2.430882777175016,
              });
              GSAP.to([".third-section", ".scrollup"], {
                autoAlpha: 0,
              });
              this.delayScroll();
            },
            onEnterBack: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: -0.6437755005292624,
                y: 1.2530442933083061,
                z: 0.6271414440920943,
              });
              GSAP.to([".third-section", ".scrollup"], {
                autoAlpha: 1,
              });
            },
            scrub: 1,
          },
        });
        //close-up right monitor - fourth section
        this.timeline.to(this.room.children[23].scale, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".fourth-section",
            // markers: true,
            start: "top top+=200px",
            end: "bottom bottom",

            onEnter: () => {
              GSAP.to(this.position, {
                x: 0.6111381144592749,
                y: 1.1797202553868453,
                z: 0.6819227739366736,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                delay: 1,
                autoAlpha: 1,
              });
              this.delayScroll();
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                x: 0.1152208664230902,
                y: 0.8933386687227702,
                z: 2.430882777175016,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                autoAlpha: 0,
              });
            },
            onLeave: () => {
              GSAP.to(this.position, {
                duration: 0.5,
                x: 0.1152208664230902,
                y: 0.8933386687227702,
                z: 2.430882777175016,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                autoAlpha: 0,
              });
            },
            onEnterBack: () => {
              GSAP.to(this.position, {
                duration: 0.5,
                x: 0.6111381144592749,
                y: 1.1797202553868453,
                z: 0.6819227739366736,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                autoAlpha: 1,
              });
            },
            scrub: 1,
          },
        });
        //view on the pendulum - fifth sectioon
        this.timeline.to(this.room.children[14].scale, {
          x: 1,
          y: 1,
          z: 1,
          scrollTrigger: {
            trigger: ".fifth-section",
            // markers: true,
            start: "top top",
            end: "bottom bottom",
            onEnter: () => {
              GSAP.to(this.position, {
                x: 1.4027181624752494,
                y: 0.9431663815405424,
                z: 1.261499132945434,
              });
              this.pendulumTL.resume();
              // setTimeout(() => {
              //   GSAP.to(".fifth-section", {
              //     autoAlpha: 1,
              //   });
              // }, 1000);
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                x: 0.6111381144592749,
                y: 1.1797202553868453,
                z: 0.6819227739366736,
              });
              this.pendulumTL.pause();
              // GSAP.to(".fifth-section", {
              //   autoAlpha: 0,
              // });
            },
          },
        });
      },
      //Mobile
      "(max-width: 968px)": () => {
        this.position.set(0, 1, 13);
        this.timeline = new GSAP.timeline();
        //chair movement - first section
        this.timeline.to(this.room.children[6].position, {
          x: -8,
          scrollTrigger: {
            trigger: ".first-section",
            // markers: true,
            start: "top top",
            end: "bottom top",
            onEnter: () => {
              GSAP.to(".scroll-tip", {
                autoAlpha: 0,
              });
              GSAP.to(this.position, {
                duration: 1,
                x: 0.06119349684492181,
                y: 0.94950572877101,
                z: 9.9728770539365845,
              });
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: 0,
                Y: 1,
                z: 13,
              });
            },
            scrub: 4,
          },
        });
        //chair rotation - first section
        this.timeline.to(this.room.children[6].children[0].rotation, {
          y: -2,
          scrollTrigger: {
            trigger: ".first-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        //screens appear - second section
        this.timeline.to(
          [
            this.room.children[22].scale,
            this.room.children[23].scale,
            this.room.children[24].scale,
          ],
          {
            x: 1,
            y: 1,
            z: 1,
            scrollTrigger: {
              trigger: ".second-section",
              // markers: true,
              start: "top top",
              end: "top top",
              onEnter: () => {
                GSAP.to(this.position, {
                  duration: 1,
                  x: 0,
                  y: 0.8933386687227702,
                  z: 3.430882777175016,
                });
                this.video.screen.currentTime = 0;
                this.video.screen.play();
                this.delayScroll();
              },
              onLeaveBack: () => {
                GSAP.to(this.position, {
                  duration: 1,
                  x: 0.06119349684492181,
                  y: 0.94950572877101,
                  z: 3.9728770539365845,
                });
                this.video.screen.pause();
              },
              scrub: 1,
            },
          }
        );
        //close-up left monitor - third section
        this.timeline.to(this.room.children[24].scale, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".third-section",
            // markers: true,
            start: "top top+=200px",
            end: "bottom bottom",

            onEnter: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: -0.6437755005292624,
                y: 1.2530442933083061,
                z: 0.6271414440920943,
              });
              GSAP.to([".third-section", ".header", ".scrollup"], {
                delay: 1,
                autoAlpha: 1,
              });
              this.delayScroll();
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: 0,
                y: 0.8933386687227702,
                z: 3.430882777175016,
              });
              GSAP.to([".third-section", ".scrollup"], {
                autoAlpha: 0,
              });
            },
            onLeave: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: 0,
                y: 0.8933386687227702,
                z: 3.430882777175016,
              });
              GSAP.to([".third-section", ".scrollup"], {
                autoAlpha: 0,
              });
              this.delayScroll();
            },
            onEnterBack: () => {
              GSAP.to(this.position, {
                duration: 1,
                x: -0.6437755005292624,
                y: 1.2530442933083061,
                z: 0.6271414440920943,
              });
              GSAP.to([".third-section", ".scrollup"], {
                autoAlpha: 1,
              });
            },
            scrub: 1,
          },
        });
        //close-up right monitor - fourth section
        this.timeline.to(this.room.children[23].scale, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".fourth-section",
            // markers: true,
            start: "top top+=200px",
            end: "bottom bottom",

            onEnter: () => {
              GSAP.to(this.position, {
                x: 0.6111381144592749,
                y: 1.1797202553868453,
                z: 0.6819227739366736,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                delay: 1,
                autoAlpha: 1,
              });
              this.delayScroll();
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                x: 0,
                y: 0.8933386687227702,
                z: 3.430882777175016,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                autoAlpha: 0,
              });
            },
            onLeave: () => {
              GSAP.to(this.position, {
                duration: 0.5,
                x: 0,
                y: 0.8933386687227702,
                z: 3.430882777175016,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                autoAlpha: 0,
              });
              this.delayScroll();
            },
            onEnterBack: () => {
              GSAP.to(this.position, {
                duration: 0.5,
                x: 0.6111381144592749,
                y: 1.1797202553868453,
                z: 0.6819227739366736,
              });
              GSAP.to([".fourth-section", ".scrollup"], {
                autoAlpha: 1,
              });
            },
            scrub: 1,
          },
        });
        //view on the pendulum - fifth sectioon
        this.timeline.to(this.room.children[14].scale, {
          x: 1,
          y: 1,
          z: 1,
          scrollTrigger: {
            trigger: ".fifth-section",
            // markers: true,
            start: "top top",
            end: "bottom bottom",
            onEnter: () => {
              GSAP.to(this.position, {
                x: 1.3227181624752494,
                y: 0.9431663815405424,
                z: 1.261499132945434,
              });
              this.pendulumTL.resume();
              // setTimeout(() => {
              //   GSAP.to(".fifth-section", {
              //     autoAlpha: 1,
              //   });
              // }, 1000);
            },
            onLeaveBack: () => {
              GSAP.to(this.position, {
                x: 0,
                y: 0.8933386687227702,
                z: 3.430882777175016,
              });
              this.pendulumTL.pause();
            },
          },
        });
      },
    });
  }

  resize() {}

  update() {
    this.camera.perspectiveCamera.position.copy(this.position);
    // this.camera.perspectiveCamera.position.copy(this.position);
  }
}
