class Car {
  constructor(ctx, width, height, image, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = 270;
    this.posY = 455;
    this.keys = keys;
    this.vy = 1;
    this.vx = 1;
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
      } else if (e.keyCode == 39) {
        this.posX += this.vx;
      } else if (e.keyCode == 38) {
        this.posY -= this.vy;
      } else if (e.keyCode == 40) {
        this.posY += this.vy;
      }
    });
  }
}
