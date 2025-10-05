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
  render()
}

const handleClick = (event) => {
  console.log("clicked")
  const sqIdx = event.target.id
  const square = board[sqIdx] !== ""
  if (square || winner) {
    return
  }
}

const render = () => {
  console.log("called")
  updateMessage ()
  updateBoard ()
}

const updateBoard = () => {
  board.forEach((cell, idx) => {
    if (cell === "red"){
      squares[idx].style.backgroundColor = "red"
    } else if (cell === "yellow"){
      squares[idx].style.backgroundColor = "yellow"
    } else {
      squares[idx].style.backgroundColor = "#004aad"
    }
  })
}

const updateMessage = () => {
  if (!winner) {
    if (turn === "red") {
      message.textContent = "It's red player turn"
    } else {
      message.textContent = "It's yellow player turn"
    }
  } else {
    if (turn === "red") {
      message.textContent = "red player wins"
    } else {
      message.textContent = "yellow player wins"
    }
  }
}




//////////////////////////////////

// Event Listeners Here


////////////////////////////////
