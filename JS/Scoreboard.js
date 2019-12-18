const ScoreBoard = {
  ctx: undefined,
  score: undefined,

  init: function(ctx, score) {
    this.ctx = ctx;
    this.score = score;
  },

  draw: function(score) {
    this.ctx.fillStyle = "#049CD8";
    this.ctx.font = " bold 70px Orbitron";
    this.ctx.fillText(score, 10, 60);
  }
};
