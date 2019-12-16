class Car {
  constructor(ctx, width, height, image) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    //Initial Car Position
    this.posX = 270;
    this.posY = 455;
    //Movement Position
    this.vy = 10;
    this.vx = 10;
    this.setListeners();
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
    document.addEventListener("keydown", e => {
      //Keycode Left
      if (e.keyCode == 37)
        if (this.posX < 90) {
          //Limit Left
          this.posX -= this.vx - this.vx;
        } else {
          //Move Left
          this.posX -= this.vx;
        }
      //Keycode Right
      if (e.keyCode == 39) {
        if (this.posX > 460) {
          //Limit Right
          this.posX += this.vx - this.vx;
        } else {
          //Move Right
          this.posX += this.vx;
        }
      }
      //Keycode Up
      if (e.keyCode == 38)
        if (this.posY < 6) {
          //Limit Up
          this.posY -= this.vy - this.vx;
        } else {
          //Move Up
          this.posY -= this.vy;
        }

      //Keycode Down
      if (e.keyCode == 40)
        if (this.posY > 450) {
          //Limit Bottom
          this.posY += this.vy - this.vx;
        } else {
          this.posY += this.vy;
        }
    });
  }
}
