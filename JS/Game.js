const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  //playerKeys: {
  //TOP_KEY: 38,
  //SPACE: 32
  //},
  //score: 0,

  init: function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 500;
    this.height = 500;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.start();
  },

  start: function() {
    this.reset();
    this.interval = setInterval(() => {
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();
    }, 1000 / this.fps);
  },

  reset: function() {
    this.Background = new Background(this.ctx, this.width, this.height);
    /* //this.Car = new Car(
      this.ctx,
      50,
      150,
      //"img/player.png",
      this.width,
      this.height,
      this.playerKeys
    ) */
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.Background.draw();
    //this.Car.draw(this.framesCounter);
  },

  moveAll: function() {
    this.Background.move();
    //this.Car.move();
  },

  gameOver: function() {
    clearInterval(this.interval);
  }

  /* //isCollision: function() {
    // colisiones genéricas
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    return this.obstacles.some(
      obs =>
        this.player.posX + this.player.width > obs.posX &&
        obs.posX + obs.width > this.player.posX &&
        this.player.posY + this.player.height > obs.posY &&
        obs.posY + obs.height > this.player.posY
    );
  },

  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(obstacle => obstacle.posX >= 0);
  } */
};
