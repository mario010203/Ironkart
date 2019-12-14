class Car {
  constructor(ctx, width, height, image) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    //Initial car position
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
