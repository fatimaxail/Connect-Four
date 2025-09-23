# Project Title: Connect-Four
## Description: 
It’s a 2-player game, similar to tic-tac-toe. It has 7 vertical columns and 6 horizontal rows. The players must put four pieces in a row to win, either vertically, horizontally, or diagonally.

## How to Get Started: 
similar to tic-tac-toe the code started in html but instead of 9 squares we will put 42 squares.
  <body>
    <section class="board">
      <div class="sqr" id="0"></div>
      <div class="sqr" id="1"></div>
      <div class="sqr" id="2"></div>
      <div class="sqr" id="3"></div>
      <div class="sqr" id="4"></div>
      <div class="sqr" id="5"></div>
      <div class="sqr" id="6"></div>
      <div class="sqr" id="7"></div>
      <div class="sqr" id="8"></div>
      ........................
      <div class="sqr" id="42"></div>
    </section>
    </body>
    
## Game outline: 
Same as tic-tac-toe in HTML, but this time we create 42 divs, give them a class name of sqr, and assign IDs from 0 to 41.
In JavaScript, we start by creating variables (same as tic-tac-toe) to set the board, track turns, and set the winner to false.
Select the items in the HTML using querySelector, just like in tic-tac-toe.
Create a function to fill the square with the player’s color (red or yellow).
Create a function to display a message showing whose turn it is if there is no winner. If there is a winner, it displays a message announcing who won.
Create a function to check for a winner.
Create a function to switch turns.
Add event listeners for clicking the squares on the board and for the Reset button.

## Game wireframe:
------------------------------------
|        Connect Four Game         |
------------------------------------
|   [ Message: "Player 1's Turn"]  |
------------------------------------
|   [ Board with 42 squares ]      |
|   [ arranged 7 columns × 6 rows ]|
------------------------------------
|   [ Reset Button ]               |
------------------------------------
#### GAME VISUAL PLAN
![GAME SAMPLE](https://i.imgur.com/erYxeUi.png)

## Game Pseudocode:




