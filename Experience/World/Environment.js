import * as THREE from "three"
import Experience from "../Experience.js"

export default class Environment{
  constructor(){
  this.experience = new Experience();
  this.scene = this.experience.scene;
    
  this.setSunLight();
  }

  setSunLight(){
    this.setSunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.setSunLight.castShadow = true;
    this.setSunLight.shadow.camera.far = 20;
    this.setSunLight.shadow.mapSize.set(2024,2024);
    this.setSunLight.shadow.normalBias = 0.05;
    this.setSunLight.position.set(1.5, 3, 3);
    this.scene.add(this.setSunLight);

    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
  }


  resize(){
   
  }

  update(){
    
  }
}