class Obstacle {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.posX = Math.floor(Math.random() * 500 + 1);
    this.posY = 10;
    this.vy = 5;
  }

  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  move() {
    this.posY += this.vy;
  }
}
