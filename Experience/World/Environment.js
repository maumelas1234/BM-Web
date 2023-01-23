import * as THREE from "three";
import GUI from "lil-gui";
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Environment{
  constructor(){
  this.experience = new Experience();
  this.scene = this.experience.scene;
  this.resources = this.experience.resources;
  this.room = this.resources.items.room;
  this.actualRoom = this.room.scene;
  this.gui = new GUI();
  this.obj = {
    colorObj: {r: 0, g: 0, b: 0},
    intensity: 3,
  }
    
  this.setSunLight();
  this.setLampLight()
  this.setGUI();

  }

  setGUI(){
    this.gui.addColor(this.obj, "colorObj").onChange(()=>{
        this.setSunLight.color.copy(this.obj.colorObj)
        this.ambientLight.color.copy(this.obj.colorObj)
        
        
        
    });
    this.gui.add(this.obj, "intensity", 0, 10).onChange(()=>{
      this.setSunLight.intensity = this.obj.intensity
      this.ambientLight.intensity = this.obj.intensity
    })
  }

  setSunLight(){
    this.setSunLight = new THREE.DirectionalLight("#ffffff", 2);
    this.setSunLight.castShadow = true;
    this.setSunLight.shadow.camera.far = 20;
    this.setSunLight.shadow.mapSize.set(2024,2024);
    this.setSunLight.shadow.normalBias = 0.05;
    this.setSunLight.position.set(0, 3, 3);
    this.scene.add(this.setSunLight);

    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
  }
//Turn on lamp
  setLampLight(){
    this.light = new THREE.PointLight( 0xF2DB94, 0, 100 );
    this.light.position.set(-1.8494769737230228, 1.8653427309842794, 0.6687194073048148)
    this.scene.add( this.light );   
    console.log(this.light);
  }
//Light mode <=> Dark mode
  switchTheme(theme){
    if(theme === "dark"){
      GSAP.to(this.setSunLight.color,{
        r: 0.12941176470588237, 
        g: 0.12156862745098039, 
        b: 0.6392156862745098
      });
      GSAP.to(this.ambientLight.color,{
        r: 0.12941176470588237, 
        g: 0.12156862745098039, 
        b: 0.6392156862745098,
      });
      GSAP.to(this.setSunLight, {
        intensity: 0.68,
      })
      GSAP.to(this.ambientLight, {
        intensity: 0.68,
      })
      GSAP.to(this.light, {delay: 1, intensity: 1})
      GSAP.to(this.actualRoom.children[39].material.emissive,{
      delay: 1,
      r: 242/255,
      g: 219/255,
      b: 148/255
      })
      } else {
      GSAP.to(this.setSunLight.color,{
        r: 255 / 255,
        g: 255 / 255,
        g: 255 / 255,
    });
    GSAP.to(this.ambientLight.color,{
      r: 255 / 255,
      g: 255 / 255,
      g: 255 / 255,
    });
    GSAP.to(this.setSunLight, {
      intensity: 3,
    })
    GSAP.to(this.ambientLight, {
      intensity: 1,
    })
    GSAP.to(this.light, {intensity: 0})
    GSAP.to(this.actualRoom.children[39].material.emissive,{
      r: 0,
      g: 0,
      b: 0
      })    
  }
}


  resize(){}

  update(){}
}