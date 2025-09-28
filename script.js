//global var

mainGrid = [
  ["", "", "", "", ""][("", "", "", "", "")][("", "", "", "", "")][
    ("", "", "", "", "")
  ][("", "", "", "", "")],
]

isDone = false

//functions

function StartGame() {
  //loop thru maingrid and active random cells every 2 second
  //everytime an active cell is clicked add points and pass to scoreBoard
}
function scoreBoard() {
  //store and show scores of current game and previous attempts
  //show green arrow up if the current score is higher than previous attempt, red arrow down if lower
  //

  let scoreList = []
  let score = 0
  if (isDone == true) {
    scoreList.push(score)
  }
}

function timer() {
  //start timer on click of start button for 1min
  //timer font goes red and flash in last 10sec
  //maybe use a tic sound for the time
  let countDown = document.querySelector(".count-down")
  let PlayingTime = 60
  const Mycounter = setInterval(() => {
    PlayingTime--
    if (PlayingTime <= -1) {
      isDone = true
      clearInterval(Mycounter)
      //switch time text to: time up!
      countDown.innerText = `Time Up`
    } else if (PlayingTime <= 10) {
      //switch time display text to red + UI effect like flashing
      countDown.classList.add("red-time-effect")
      countDown.innerText = `${PlayingTime}s`
    } else {
      countDown.innerText = `${PlayingTime}s`
      //display countdown on ui
    }
  }, 1000)
}

//event listeners

window.onload = StartGame()
