class Obstacle {
  constructor(ctx, width, height, image) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = Math.floor(Math.random() * 500 + 1);
    this.posY =  -100;
    this.vy = 5;
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
    this.posY += this.vy;
  }
}
