const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  score: 0,

  init: function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 650;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
    this.playMusic();
    this.stopMusic();
  },
  playMusic() {
    document.getElementById("background").play();
  },
  stopMusic() {
    document.getElementById("background").stop();
  },
  start: function() {
    this.reset();
    this.interval = setInterval(() => {
      this.framesCounter++;
      this.clear();
      this.drawAll();
      this.moveAll();
      this.clearObstacles();
      if(this.isCollision()) this.gameOver() && this.stopMusic();
      if (this.framesCounter % 250 === 0) this.generateObstacles();
      if (this.framesCounter % 100 === 0) this.score++;
      if (this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000 / this.fps);
  },

  reset: function() {
    this.Background = new Background(this.ctx, this.width, this.height);
    this.car = new Car(this.ctx, 100, 200, "./Img/Car_1_01.png");
    this.obstacles = [];
    ScoreBoard.init(this.ctx, this.score);
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.Background.draw();
    this.car.draw();
    this.obstacles.forEach(obstacle => obstacle.draw());
    ScoreBoard.draw(this.score);
  },

  moveAll: function() {
    this.Background.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  },

  gameOver: function() {
    clearInterval(this.interval);
  },

  generateObstacles: function() {
    this.obstacles.push(new Obstacle(this.ctx, 100, 200, "./Img/Car_2_01.png"));
  },

  isCollision: function() {
    return this.obstacles.some(obs => (this.car.posX + this.car.width > obs.posX && obs.posX + obs.width > this.car.posX && this.car.posY + this.car.height > obs.posY && obs.posY + obs.height > this.car.posY ))

      
  },

  clearObstacles: function() {
        this.obstacles = this.obstacles.filter(
      obstacle => obstacle.posY <= window.innerHeight
     
    );
    
  }
};
