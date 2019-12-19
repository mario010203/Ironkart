class Car {
  constructor(ctx, width, height, image) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    //Initial Car Position
    this.posX = 270;
    this.posY = window.innerHeight - 200;
    //Movement Position
    this.vy = 20;
    this.vx = 20;
    //movement
    this.setListeners();
  }
  tireSound() {
    document.getElementById("tire-sound").play();
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  setListeners() {
    let that = this;
    document.addEventListener("keydown", e => {
      //Keycode Left
      if (e.keyCode == 37) {
        if (this.posX < 10) {
          //Limit Left
          this.posX -= this.vx - this.vx;
        } else {
          //Move Left
          this.posX -= this.vx;
        }
      }
      //Keycode Right
      if (e.keyCode == 39) {
        if (this.posX > 549) {
          //Limit Right
          this.posX += this.vx - this.vx;
        } else {
          //Move Right
          this.posX += this.vx;
        }
      }

      //Keycode Up
      if (e.keyCode == 38)
        if (this.posY < 10) {
          //Limit Up
          this.posY -= this.vy - this.vx;
        } else {
          //Move Up
          this.posY -= this.vy;
        }

      //Keycode Down
      if (e.keyCode == 40) {
        that.tireSound();
        if (this.posY > window.innerHeight - 210) {
          //Limit Bottom
          this.posY += this.vy - this.vx;
        } else {
          this.posY += this.vy;
        }
      }
    });
  }
}
