class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.umbrella=Bodies.circle(x,y,25,options)
        this.image=loadImage("images/walking_1.png")
        World.add(world,this.umbrella)
    }
    display(){
      //  imageMode(CENTER)
        image(this.image,this.umbrella.position.x-100,this.umbrella.position.y-40,200,200)
    }
}
