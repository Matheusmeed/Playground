document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  console.log(position);

  if (handleMove(position)) {
    setTimeout(() => {
      let winnertxt = document.getElementById("winner");

      if (playerTime == 0) {
        winnertxt.innerHTML = "O Jogo Acabou! O Vencedor Foi " + "X";
      } else {
        winnertxt.innerHTML = "O Jogo Acabou! O Vencedor Foi " + "O";
      }

      let fim = document.getElementById("gameOver");
      fim.style.display = "flex";
    }, 9);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = '<div class="' + symbol + '"></div>';
}

function restart() {
  location.reload();
}
