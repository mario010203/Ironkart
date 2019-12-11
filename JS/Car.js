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

  move() {
    if (this.posX <= this.posX) {
      this.posX += this.posX;
    }
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.LEFT:
          if (this.posX >= this.posX) {
            this.posX += this.posX;
          }

          break;
      }
    });
  }
}
