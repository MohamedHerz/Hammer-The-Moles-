//global var

mainGrid = [
  ["", "", "", "", ""][("", "", "", "", "")][("", "", "", "", "")][
    ("", "", "", "", "")
  ][("", "", "", "", "")],
]

//functions

function StartGame() {
  //loop thru maingrid and active random cells every 2 second
  //everytime an active cell is clicked add points and pass to scoreBoard
}

function scoreBoard() {
  //store and show scores of current game and previous attempts
  //show green arrow up if the current score is higher than previous attempt, red arrow down if lower
  //
}

function timer() {
  //start timer on click of start button for 1min
  //timer font goes red and flash in last 10sec
  //maybe use a tic sound for the time

  for (let i = 0; i >= 60; i++) {
    //print i
    //delay 1sec
    // would this delay stop pause the entire game?
  }
}

//event listeners

window.onload = StartGame()
