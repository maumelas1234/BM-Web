import * as THREE from "three"
import Experience from "../Experience.js"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default class Controls{
  constructor(){
  this.experience = new Experience();
  this.scene = this.experience.scene;
  this.resources = this.experience.resources;
  this.room = this.experience.world.room.actualRoom;
  this.camera = this.experience.camera;
  this.video =this.resources.video;

  GSAP.registerPlugin(ScrollTrigger);

  //path start

  this.lerp = {
    current: 0,
    target: 0,
    ease: 0.1,
  }

  this.position = new THREE.Vector3(0, 0, 0);
 
  
  this.setPath();
  this.onWheel();
  this.setScrollEvents();
  }
  //Camera movement path
  setPath(){
    this.curve = new THREE.CatmullRomCurve3( [
      this.start = new THREE.Vector3( 0, 1, 5 ),
      
      new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      // new THREE.Vector3( -0.014517055663079707, 1.0293164773669006, 0.7536915231425607 ),
      // new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      new THREE.Vector3( -0.6500883576856545, 1.2572904433156957, 0.6092011297529916 ),
      new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      new THREE.Vector3(  0.6473685475229742, 1.2074805317551132, 0.5473854247308692 ),
      new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      new THREE.Vector3( 0.25686563748296154, 2.293167529488839, 1.899618184015138 ),
      new THREE.Vector3( 1.4027181624752532, 0.9431663815405383, 1.2614991329454321, ),
      
     
    ]);
    const points = this.curve.getPoints( 50 );
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const material = new THREE.LineBasicMaterial({
      colorWrite: false
    });
  
    const curveObject = new THREE.Line( geometry, material );
    this.scene.add(curveObject)
  }
//setting the camera movement by scrolling
  onWheel(){
    window.addEventListener("wheel", (e) => {
      if(e.deltaY > 0){
        this.lerp.target += 0.01;
      }else{
        this.lerp.target -= 0.01;
        if(this.progress < 0){
          this.progress = 1;
        }
      }
    })
  }
  setScrollEvents(){
    
    console.log(this.room);
    console.log(this.video);
    
    
    
    this.timeline = new GSAP.timeline();
    this.timeline.to(this.room.children[6].position,{
    x: -8,
      scrollTrigger:{
        trigger: ".first-section",
        // duration: 3,
        // markers: true,
        start: "center top",
        end: "bottom top",
        scrub: 4,
      }
    })
    this.timeline.to(this.room.children[6].children[0].rotation,{
      y: -2,
        scrollTrigger:{
          trigger: ".first-section",
          start: "center top",
          end: "bottom top",
          scrub: 4,
        }
      })
    this.timeline.to([this.room.children[22].scale, this.room.children[23].scale, this.room.children[24].scale],{
        x: 1,
        y: 1,
        z: 1,
          scrollTrigger:{
            trigger: ".second-section",
            markers: true,
            start: "top top",
            end: "top top",
            scrub: 3,
          }
        })
  }

  resize(){}

  update(){
    this.lerp.current = GSAP.utils.interpolate(
        this.lerp.current,
        this.lerp.target,
        this.lerp.ease
      );
    this.lerp.target = GSAP.utils.clamp(0, 1, this.lerp.target)
    this.lerp.current = GSAP.utils.clamp(0, 1, this.lerp.current)
    this.curve.getPointAt(this.lerp.current, this.position);
    //update camera move
    this.camera.perspectiveCamera.position.copy(this.position)
    
  }
}