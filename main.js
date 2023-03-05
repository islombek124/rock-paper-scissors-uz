$(document).ready(function () {
  $(".startBtn").click(function () {
    $(".intro").fadeOut("slow");
    $(".match").fadeIn("slow");
  });
  let pScore = 0,
    cScore = 0,
    winnerScreen = $(".winner");
  function updateScore() {
    $(".player-score p").text(pScore);
    $(".computer-score p").text(cScore);
  }
  $(".options button").click(function () {
    let options = ["rock", "paper", "scissors"],
      rndm = Math.floor(Math.random() * 3),
      pSelect = this.value,
      cSelect = options[rndm];
    $(".player-hand").attr("src", `assets/${this.value}.png`);
    $(".computer-hand").attr("src", `assets/${cSelect}.png`);
    if (pSelect === cSelect) {
      return winnerScreen.text("Do'stlik g'alaba qozondi");
    }
    if (pSelect === "rock") {
      if (cSelect === "scissors") {
        winnerScreen.text("O'yinchi yutdi");
        pScore++;
        updateScore();
      } else {
        winnerScreen.text("Kompyuter yutdi");
        cScore++;
        updateScore();
      }
    }
    if (pSelect === "paper") {
      if (cSelect === "rock") {
        winnerScreen.text("O'yinchi yutdi");
        pScore++;
        updateScore();
      } else {
        winnerScreen.text("Kompyuter yutdi");
        cScore++;
        updateScore();
      }
    }
    if (pSelect === "scissors") {
      if (cSelect === "paper") {
        winnerScreen.text("O'yinchi yutdi");
        pScore++;
        updateScore();
      } else {
        winnerScreen.text("Kompyuter yutdi");
        cScore++;
        updateScore();
      }
    }
  });
});
