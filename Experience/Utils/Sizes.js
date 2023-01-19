export default class Sizes{
  constructor(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width/this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    //responsive refresh canvas
    window.addEventListener("resize", ()=>{
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.aspect = this.width/this.height;
      this.pixelRatio = MAth.min(window.devicePixelRatio, 2);

    })
  }
}