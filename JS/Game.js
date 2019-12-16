const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  //score: 0,

  init: function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 650;
    this.height = 650;
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
      this.clearObstacles();
      if (this.framesCounter % 300 === 0) this.generateObstacles();
      if (this.framesCounter % 100 === 0) this.score++;
      if (this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000 / this.fps);
  },

  reset: function() {
    this.Background = new Background(this.ctx, this.width, this.height);
    this.car = new Car(this.ctx, 100, 200, "./Img/Car_1_01.png");
    this.obstacles = [];
    //ScoreBoard.init(this.ctx, this.score);
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.Background.draw();
    this.car.draw();
    this.obstacles.forEach(obstacle => obstacle.draw());
    //ScoreBoard.draw(this.score);
  },

  moveAll: function() {
    this.Background.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  },

  gameOver: function() {
    clearInterval(this.interval);
  },

  generateObstacles: function() {
    this.obstacles.push(new Obstacle(this.ctx, 15, 45));
  },

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
  },*/

  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(obstacle => obstacle.posY >= 0);
  }
};
