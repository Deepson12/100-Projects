const shuffle = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

const number = ["A", "B", "C", "D", "E"];

const setupBoard = () => {
  const board = document.querySelector(".cell-container");

  board.innerHTML = "";
  let cards = [...number, ...number];
  cards = shuffle(cards);

  let firstCell = null;
  let secondCell = null;
  let lockBoard = false;

  cards.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("cell");
    card.dataset.symbol = symbol;
    card.innerHTML = "?";

    card.addEventListener("click", () => {
      if (card === firstCell || lockBoard || card.classList.contains("flipped"))
        return;

      card.innerText = card.dataset.symbol;
      card.classList.add("flipped");

      if (!firstCell) {
        firstCell = card;
      } else {
        secondCell = card;
        lockBoard = true;
      }

      if (firstCell.dataset.symbol === secondCell.dataset.symbol) {
        resetTurn();
      } else {
        setTimeout(() => {
          firstCell.innerHTML = "?";
          secondCell.innerHTML = "?";

          firstCell.classList.remove("flipped");
          secondCell.classList.remove("flipped");

          resetTurn();
        }, 1000);
      }
    });

    board.appendChild(card);
  });

  const resetTurn = () => {
    [firstCell, secondCell] = [null, null];
    lockBoard = false;
  };
};

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  setupBoard();
});

setupBoard();
