import * as THREE from "three"
import GSAP from "gsap"
import Experience from "../Experience.js"

export default class Controls{
  constructor(){
  this.experience = new Experience();
  this.scene = this.experience.scene;
  this.resources = this.experience.resources;
  this.room = this.resources.items.room;
  this.actualRoom = this.room.scene;
  this.time = this.experience.time;
  this.camera = this.experience.camera

  this.progress = 0;
  //path start
  this.dummyCurve = new THREE.Vector3(0, 0, 0);

  this.lerp = {
    current: 0,
    target: 0,
    ease: 0.1,
  }

  this.position = new THREE.Vector3(0, 0, 0);
 
  
  this.setPath();
  this.onWheel();
  }
  //Camera movement path
  setPath(){
    this.curve = new THREE.CatmullRomCurve3( [
      this.start = new THREE.Vector3( 0, 1, 5 ),
      
      new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      new THREE.Vector3( -0.014517055663079707, 1.0293164773669006, 0.7536915231425607 ),
      new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      new THREE.Vector3( -0.6500883576856545, 1.2572904433156957, 0.6092011297529916 ),
      new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      new THREE.Vector3(  0.6473685475229742, 1.2074805317551132, 0.5473854247308692 ),
      new THREE.Vector3( 0.05641930594255906, 0.9161117992843052, 2.006360491755347 ),
      new THREE.Vector3( 0.25686563748296154, 2.293167529488839, 1.899618184015138 ),
      this.lastMovePoint = new THREE.Vector3( 
        1.4027181624752532, 0.9431663815405383, 1.2614991329454321, ),
      
     
    ]);

  
   
    

    const points = this.curve.getPoints( 50 );
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
    
    // Create the final object to add to the scene
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
    this.camera.perspectiveCamera.position.copy(this.position)
    // this.camera.TestCamera.rotation.copy(this.rotation)
    
  }
}