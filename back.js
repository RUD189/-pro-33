class Back {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("snow2.jpg");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,width,height);
    }
  };