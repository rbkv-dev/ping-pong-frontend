export class Game {
  constructor(canvasRef, setGameState, setGameScore) {
    this.canvasRef = canvasRef;
    this.canvas = canvasRef.current;
    this.gameLoopIntervalId = null;
    this.ctx = this.canvas.getContext("2d");
    this.mouseY = this.canvas.height / 2;
    this.x = 17;
    this.y = this.canvas.height / 2;
    this.dx = 5;
    this.dy = Math.floor(Math.random() * (5 - -5)) + -5;
    this.userY = this.mouseY;
    this.score = 0;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.setGameState = setGameState;
    this.setGameScore = setGameScore;
  }
  onMouseMove(e) {
    this.mouseY = e.clientY - this.canvasRef.current.offsetTop;
  }
  initField() {
    this.gameLoopIntervalId = null;
    this.mouseY = this.canvas.height / 2;
    this.x = 17;
    this.y = this.canvas.height / 2;
    this.dx = 5;
    this.dy = Math.floor(Math.random() * (5 - -5)) + -5;
    this.userY = this.mouseY;
    window.addEventListener("mousemove", this.onMouseMove);
    this.resetField();
  }
  resetField() {
    this.drawField();
    this.drawBall();
    this.drawRobot();
    this.drawUser();
  }
  drawField() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.canvas.width / 2 - 1, 0, 2, this.canvas.height);
    this.ctx.closePath();
  }
  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();
  }
  drawRobot() {
    let robotY = this.y + this.dy;
    if (robotY <= 50) robotY = 50;
    if (robotY >= this.canvas.height - 50) robotY = this.canvas.height - 50;
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, robotY - 50, 6, 100);
    this.ctx.closePath();
  }
  drawUser() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.canvas.width - 6, this.userY - 50, 6, 100);
    this.ctx.closePath();
  }
  gameLoop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.y <= 10 || this.y >= this.canvas.height - 10) this.dy = -this.dy;
    if (this.x <= 16 || this.x >= this.canvas.width - 16) this.dx = -this.dx;

    this.x += this.dx;
    this.y += this.dy;
    this.userY = this.mouseY;
    if (this.userY <= 50) this.userY = 50;
    else if (this.userY >= this.canvas.height - 50) {
      this.userY = this.canvas.height - 50;
    }

    if (
      this.x > this.canvas.width - 17 &&
      this.y <= this.userY + 50 &&
      this.y >= this.userY - 50
    ) {
      if (this.score <= 25) {
        this.dx += 0.5;
        this.dy += 0.5;
      }
      this.score += 1;
      this.setGameScore(this.score);
    } else if (
      this.x >= this.canvas.width - 15 &&
      (this.y >= this.userY + 50 || this.y <= this.userY - 50)
    ) {
      this.score = 0;
      this.setGameScore(this.score);
      this.stopGame();
    }

    this.drawField();
    this.drawBall();
    this.drawRobot();
    this.drawUser();
  }
  startGame() {
    this.gameLoopIntervalId = setInterval(this.gameLoop.bind(this), 1000 / 60);
  }
  stopGame() {
    window.removeEventListener("mousemove", this.onMouseMove);
    clearInterval(this.gameLoopIntervalId);
    this.gameLoopIntervalId = null;
    this.initField();
    this.setGameState();
  }
}
