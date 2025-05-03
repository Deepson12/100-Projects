const cells = document.querySelectorAll(".cell");
const turn = document.getElementById("turn-name");
const resetBtn = document.getElementById("reset");

const winConditions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6]
]

let options = ["", "", "", "", "","","", "", ""]
let currentPlayer = 'X';
let running = false;



const initalizeGame = () =>{
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    resetBtn.addEventListener("click", restartGame)
    turn.textContent = `${currentPlayer}'s Turn`
    running = true;
}

const cellClicked = function() {
    const cellIndex = this.getAttribute("cellIndex");
    
    if(options[cellIndex] != "" || !running){
        return
    }

    updateCell(this, cellIndex);
    checkWinner();
}

const updateCell=(cell, index)=>{
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
    changePlayer();
}

const changePlayer =() =>{
    currentPlayer = (currentPlayer === 'X')? 'O':'X';
    turn.textContent = `${currentPlayer}'s Turn`;
}

const checkWinner =()=>{
    let roundWon = false;

    for(let i=0; i < winConditions.length; i++){
        const conditions = winConditions[i];
        const cellA = options[conditions[0]];
        const cellB = options[conditions[1]];
        const cellC = options[conditions[2]];

        if(cellA =="" || cellB == "" || cellC == ""){
            continue;
        }

        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon == true){
        turn.textContent = `${(currentPlayer === 'X')? 'O':'X'} Won`
        running = false
    }else if(!options.includes("")){
        turn.textContent = `It's a Draw`
    }
}

const restartGame =()=>{
    options = ["", "", "", "", "","","", "", ""]
    initalizeGame();

    cells.forEach(cell => cell.textContent = "")
}

initalizeGame();