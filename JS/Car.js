class Car {
  constructor(ctx, width, height, image, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = 250;
    this.posY = 270;
    this.keys = keys;
    //this.vy = 1;
    this.vx = 0.1;
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

  move() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 37) {
        this.posX -= this.vx;
      }
    });
  }
}
