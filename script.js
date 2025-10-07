//global var

isDone = false
clicked = false
let moleInterval
let score = 0

//functions

function StartGame() {
  let holes = document.querySelectorAll(".hole")
  holes.forEach((hole) => hole.classList.remove("mole"))
  let random = holes[Math.floor(Math.random() * holes.length)]
  random.classList.add("mole")
  random.addEventListener(
    "click",
    () => {
      hammerActive()
    },
    { once: true }
    //once true block removes the event listener after the first click
  )
}

function hammerActive() {
  if (isDone == false) {
    //once time is up score wont change
    score++
  }

  let playerScore = document.querySelector(".player-score")
  playerScore.innerText = `score: ${score}`
}
function scoreBoard() {
  let playerScore = document.querySelector(".player-score")
  playerScore.innerText = `score: ${score}`
}

function timer() {
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
      countDown.classList.add("red-time-effect")
      countDown.innerText = `${PlayingTime}s`
    } else {
      countDown.innerText = `${PlayingTime}s`
      //display countdown on ui
    }
  }, 1000)
  setTimeout(() => {
    if (!isDone) {
      StartGame()
      moleInterval = setInterval(() => {
        if (!isDone) StartGame()
      }, 1500)
    }
  }, 3000)
}
