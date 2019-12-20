window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.getElementsByTagName("nav")[0].style.display = "none";
    document.getElementsByTagName("canvas")[0].style.display = "flex";
    Game.init();
  };
  document.getElementById("button-restart").onclick = function() {
    document.getElementsByTagName("nav")[0].style.display = "none";
    document.getElementsByTagName("canvas")[0].style.display = "flex";
    document.querySelector("#game-over").style.display = "none";
    Game.init();
  };
};
