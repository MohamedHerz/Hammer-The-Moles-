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
  let PlayingTime = 60
  const Mycounter = setInterval(() => {
    PlayingTime--
    if (PlayingTime <= 0) {
      clearInterval(Mycounter)
      //switch time text to: time up!
    }
    if (PlayingTime <= 10) {
      //switch time display text to red + UI effect like flashing
    } else {
      //display countdown on ui
    }
  }, 1000)
}

//event listeners

window.onload = StartGame()
