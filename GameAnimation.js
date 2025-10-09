////////////////////////////////
//  Constants
const winningCombos = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41], /// horizontal
  [35, 28, 21, 14],
  [28, 21, 14, 7],
  [21, 14, 7, 0],
  [36, 29, 22, 15],
  [29, 22, 15, 8],
  [22, 15, 8, 1],
  [37, 30, 23, 16],
  [30, 23, 16, 9],
  [23, 16, 9, 2],
  [38, 31, 24, 17],
  [31, 24, 17, 10],
  [24, 17, 10, 3],
  [39, 32, 25, 18],
  [32, 25, 18, 11],
  [25, 18, 11, 4],
  [40, 33, 26, 19],
  [33, 26, 19, 12],
  [26, 19, 12, 5],
  [41, 34, 27, 20],
  [34, 27, 20, 13],
  [27, 20, 13, 6], /// vertical
  [35, 29, 23, 17],
  [23, 17, 11, 5],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [28, 22, 16, 10],
  [22, 16, 10, 4],
  [21, 15, 9, 3],
  [37, 31, 25, 19],
  [31, 25, 19, 13],
  [38, 32, 26, 20],
  [41, 33, 25, 17],
  [33, 25, 17, 9],
  [25, 17, 9, 1],
  [27, 19, 11, 3],
  [34, 26, 18, 10],
  [26, 18, 10, 2],
  [40, 32, 24, 16],
  [32, 24, 16, 8],
  [24, 16, 8, 0],
  [39, 31, 23, 15],
  [31, 23, 15, 7],
  [38, 30, 22, 14] ///diagonally
]
////////////////////////////////

// Global Variables Here
let board = [
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", ""
]
let turn = "red"
let winner = false
////////////////////////////////

//  Cached Element References
const squares = document.querySelectorAll(".sqr")
const message = document.querySelector("#Message")
const resetBtn = document.querySelector("#Reset")
////////////////////////////////

// Functions For Game Logic Here
const init = () => {
  board = [
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", "",
  "", "", "", "", "", "", ""
]
  turn = "red"
  winner = false
  squares.forEach(square => {
    square.style.backgroundColor = "";
  });
  
  render()
}

const handleClick = (event) => {
  console.log("clicked")
  const sqIdx = +event.target.id
  const column = sqIdx % 7
  let targetIdx = null;
    for (let row = 5; row >= 0; row--) {
      const idx = row * 7 + column;
    if (board[idx] === "") {
      targetIdx = idx;
      break;
    }
  }
    if (targetIdx === null || winner) {
    return;
  };

  if (turn === "red") {
    squares[targetIdx].style.backgroundColor = "red";
    board[targetIdx] = "red";
  } else {
    squares[targetIdx].style.backgroundColor = "yellow";
    board[targetIdx] = "yellow";
  };
  checkForWinner();
  switchTurns();
  updateMessage();
}

const switchTurns = () => {
  if (winner === true){
    return
  }
  if (turn === "red") {
    turn = "yellow";
  } else {
    turn = "red";
  }
}

const render = () => {
  updateMessage()
}


const updateMessage = () => {
  if (!winner) {
    message.textContent = `It's ${turn} player turn`;
  } else {
    message.textContent = `${turn} player wins! 🎊`;
  }
  }


const checkForWinner = () => {
  if (
    (board[0] !== "" && board[0] === board[1] && board[0] === board[2] && board[0] === board[3]) ||
    (board[1] !== "" && board[1] === board[2] && board[1] === board[3] && board[1] === board[4]) ||
    (board[2] !== "" && board[2] === board[3] && board[2] === board[4] && board[2] === board[5]) ||
    (board[3] !== "" && board[3] === board[4] && board[3] === board[5] && board[3] === board[6]) ||
    (board[7] !== "" && board[7] === board[8] && board[7] === board[9] && board[7] === board[10]) ||
    (board[8] !== "" && board[8] === board[9] && board[8] === board[10] && board[8] === board[11]) ||
    (board[9] !== "" && board[9] === board[10] && board[9] === board[11] && board[9] === board[12]) ||
    (board[10] !== "" && board[10] === board[11] && board[10] === board[12] && board[10] === board[13]) ||
    (board[14] !== "" && board[14] === board[15] && board[14] === board[16] && board[14] === board[17]) ||
    (board[15] !== "" && board[15] === board[16] && board[15] === board[17] && board[15] === board[18]) ||
    (board[16] !== "" && board[16] === board[17] && board[16] === board[18] && board[16] === board[19]) ||
    (board[17] !== "" && board[17] === board[18] && board[17] === board[19] && board[17] === board[20]) ||
    (board[21] !== "" && board[21] === board[22] && board[21] === board[23] && board[21] === board[24]) ||
    (board[22] !== "" && board[22] === board[23] && board[22] === board[24] && board[22] === board[25]) ||
    (board[23] !== "" && board[23] === board[24] && board[23] === board[25] && board[23] === board[26]) ||
    (board[24] !== "" && board[24] === board[25] && board[24] === board[26] && board[24] === board[27]) ||
    (board[28] !== "" && board[28] === board[29] && board[28] === board[30] && board[28] === board[31]) ||
    (board[29] !== "" && board[29] === board[30] && board[29] === board[31] && board[29] === board[32]) ||
    (board[30] !== "" && board[30] === board[31] && board[30] === board[32] && board[30] === board[33]) ||
    (board[31] !== "" && board[31] === board[32] && board[31] === board[33] && board[31] === board[34]) ||
    (board[35] !== "" && board[35] === board[36] && board[35] === board[37] && board[35] === board[38]) ||
    (board[36] !== "" && board[36] === board[37] && board[36] === board[38] && board[36] === board[39]) ||
    (board[37] !== "" && board[37] === board[38] && board[37] === board[39] && board[37] === board[40]) ||
    (board[38] !== "" && board[38] === board[39] && board[38] === board[40] && board[38] === board[41]) ||  ///horizontal
    (board[35] !== "" && board[35] === board[28] && board[35] === board[21] && board[35] === board[14]) ||
    (board[28] !== "" && board[28] === board[21] && board[28] === board[14] && board[28] === board[7]) ||
    (board[21] !== "" && board[21] === board[14] && board[21] === board[7] && board[21] === board[0])  ||
    (board[36] !== "" && board[36] === board[29] && board[36] === board[22] && board[36] === board[15]) ||
    (board[29] !== "" && board[29] === board[22] && board[29] === board[15] && board[29] === board[8]) ||
    (board[22] !== "" && board[22] === board[15] && board[22] === board[8] && board[22] === board[1]) ||
    (board[37] !== "" && board[37] === board[30] && board[37] === board[23] && board[37] === board[16]) ||
    (board[30] !== "" && board[30] === board[23] && board[30] === board[16] && board[30] === board[9])  ||
    (board[23] !== "" && board[23] === board[16] && board[23] === board[9] && board[23] === board[2]) ||
    (board[38] !== "" && board[38] === board[31] && board[38] === board[24] && board[38] === board[17]) ||
    (board[31] !== "" && board[31] === board[24] && board[31] === board[17] && board[31] === board[10]) ||
    (board[24] !== "" && board[24] === board[17] && board[24] === board[10] && board[24] === board[3]) ||
    (board[39] !== "" && board[39] === board[32] && board[39] === board[25] && board[39] === board[18]) ||
    (board[32] !== "" && board[32] === board[25] && board[32] === board[18] && board[32] === board[11]) ||
    (board[25] !== "" && board[25] === board[18] && board[25] === board[11] && board[25] === board[4]) ||
    (board[40] !== "" && board[40] === board[33] && board[40] === board[26] && board[40] === board[19]) ||
    (board[33] !== "" && board[33] === board[26] && board[33] === board[19] && board[33] === board[12]) ||
    (board[26] !== "" && board[26] === board[19] && board[26] === board[12] && board[26] === board[5]) ||
    (board[41] !== "" && board[41] === board[34] && board[41] === board[27] && board[41] === board[20]) ||
    (board[34] !== "" && board[34] === board[27] && board[34] === board[20] && board[34] === board[13]) ||
    (board[27] !== "" && board[27] === board[20] && board[27] === board[13] && board[27] === board[6]) ||  ///vertical
    (board[35] !== "" && board[35] === board[29] && board[35] === board[23] && board[35] === board[17]) ||
    (board[23] !== "" && board[23] === board[17] && board[23] === board[11] && board[23] === board[5]) ||
    (board[6] !== "" && board[6] === board[12] && board[6] === board[18] && board[6] === board[24]) ||
    (board[12] !== "" && board[12] === board[18] && board[12] === board[24] && board[12] === board[30]) ||
    (board[18] !== "" && board[18] === board[24] && board[18] === board[30] && board[18] === board[36]) ||
    (board[28] !== "" && board[28] === board[22] && board[28] === board[16] && board[28] === board[10]) ||
    (board[22] !== "" && board[22] === board[16] && board[22] === board[10] && board[22] === board[4]) ||
    (board[21] !== "" && board[21] === board[15] && board[21] === board[9] && board[21] === board[3]) ||
    (board[12] !== "" && board[12] === board[18] && board[12] === board[24] && board[12] === board[30]) ||
    (board[37] !== "" && board[37] === board[31] && board[37] === board[25] && board[37] === board[19]) ||
    (board[31] !== "" && board[31] === board[25] && board[31] === board[19] && board[31] === board[13]) ||
    (board[38] !== "" && board[38] === board[32] && board[38] === board[26] && board[38] === board[20]) ||
    (board[41] !== "" && board[41] === board[33] && board[41] === board[25] && board[41] === board[17]) ||
    (board[33] !== "" && board[33] === board[25] && board[33] === board[17] && board[33] === board[9]) ||
    (board[25] !== "" && board[25] === board[17] && board[25] === board[9] && board[25] === board[1]) ||
    (board[27] !== "" && board[27] === board[19] && board[27] === board[11] && board[27] === board[3]) ||
    (board[34] !== "" && board[34] === board[26] && board[34] === board[18] && board[34] === board[10]) ||
    (board[26] !== "" && board[26] === board[18] && board[26] === board[10] && board[26] === board[2]) ||
    (board[40] !== "" && board[40] === board[32] && board[40] === board[24] && board[40] === board[16]) ||
    (board[32] !== "" && board[32] === board[24] && board[32] === board[16] && board[32] === board[8]) ||
    (board[24] !== "" && board[24] === board[16] && board[24] === board[8] && board[24] === board[0]) ||
    (board[39] !== "" && board[39] === board[31] && board[39] === board[23] && board[39] === board[15]) ||
    (board[31] !== "" && board[31] === board[23] && board[31] === board[15] && board[31] === board[7]) ||
    (board[38] !== "" && board[38] === board[30] && board[38] === board[22] && board[38] === board[14]) ///diagonally
  ){
    winner = true
  }
}



//////////////////////////////////

// Event Listeners Here
squares.forEach((square) => {
square.addEventListener("click", (event) => handleClick(event))
})
resetBtn.addEventListener("click", init)

////////////////////////////////

