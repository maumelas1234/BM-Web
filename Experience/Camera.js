import * as THREE from "three"
import Experience from "./Experience.js"



export default class Camera{
  constructor(){
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    //create two cameras for the scene
    this.createPerspectiveCamera();
    
    
  }

  createPerspectiveCamera(){
    this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000);
    this.scene.add(this.perspectiveCamera);
    
   
  }

  resize(){
    //Updating Perspective Camera on Resize
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();
    this.TestCamera.aspect = this.sizes.aspect;
    this.TestCamera.updateProjectionMatrix();
  }

  update(){
  }
  
}