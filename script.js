//global var

isDone = false
clicked = false
let moleInterval
let score = 0

//functions

function StartGame() {
  //loop thru maingrid and active random cells every 2 second
  //everytime an active cell is clicked add points and pass to scoreBoard

  let holes = document.querySelectorAll(".hole")
  holes.forEach((hole) => hole.classList.remove("mole"))
  let random = holes[Math.floor(Math.random() * holes.length)]
  random.classList.add("mole")
  random.addEventListener("click", hammerActive)
}

function hammerActive() {
  score++
  let playerScore = document.querySelector(".player-score")
  playerScore.innerText = `score: ${score}`
}
function scoreBoard() {
  //store and show scores of current game and previous attempts
  //show green arrow up if the current score is higher than previous attempt, red arrow down if lower
  //
  let playerScore = document.querySelector(".player-score")
  playerScore.innerText = `score: ${score}`
}

function timer() {
  //start timer on click of start button for 1min
  //timer font goes red and flash in last 10sec
  //maybe use a tic sound for the time
  let countDown = document.querySelector(".count-down")
  PlayingTime = 40
  const Mycounter = setInterval(() => {
    PlayingTime--
    if (PlayingTime <= -1) {
      isDone = true
      clearInterval(Mycounter)
      clearInterval(moleInterval)
      //switch time text to: time up!
      countDown.innerText = `Time Up`
    } else if (PlayingTime <= 5) {
      //switch time display text to red + UI effect like flashing
      countDown.classList.add("red-time-effect")
      countDown.innerText = `${PlayingTime}s`
    } else {
      // StartGame()
      countDown.innerText = `${PlayingTime}s`
      //display countdown on ui
    }
  }, 1000)
  setTimeout(() => {
    if (!isDone) {
      StartGame()
      moleInterval = setInterval(() => {
        if (!isDone) StartGame()
      }, 2000)
    }
  }, 3000)
}
