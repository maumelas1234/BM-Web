import * as THREE from "three";
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

export default class Experience{
  static instance
  constructor(canvas){
    if(Experience.instance){
      return Experience.instance
    }
    Experience.instance = this
    this.canvas = canvas
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();
    //event emitter sizes.resize()
    this.sizes.on("resize", ()=>{
      this.resize();
    })
    //event emitter time.update()
    this.time.on("update", ()=>{
      this.update();
    })
  }
//update browser window when resizing it
  resize(){
    this.camera.resize();
    this.renderer.resize();
  }
//update over time
  update(){
    this.camera.update();
    this.renderer.update();
  }
}