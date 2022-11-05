/*========================== */
// logic score count for home//
/*========================== */
let scoreBoardHome = document.getElementById("scoreBoardHome");
let i = 0;
let t = 0;

function plusOneHome() {
  scoreBoardHome.textContent = i += 1;
}

function plusTwoHome() {
  scoreBoardHome.textContent = i += 2;
}

function plusThreeHome() {
  scoreBoardHome.textContent = i += 3;
}

/*=========================== */
// logic score count for guest//
/*=========================== */
let scoreBoardGuest = document.getElementById("scoreBoardGuest");

function plusOneGuest() {
  scoreBoardGuest.textContent = t += 1;
}

function plusTwoGuest() {
  scoreBoardGuest.textContent = t += 2;
}

function plusThreeGuest() {
  scoreBoardGuest.textContent = t += 3;
}

//add new game button ==DONE==
let newGameBtn = document.getElementById("new-game");

function newGame() {
  scoreBoardGuest.textContent = t = 0;
  scoreBoardHome.textContent = i = 0;
}

// highlight the leader

if (i < t) {
  scoreBoardGuest.style.color = "red";
} else if (i > t) {
  scoreBoardHome.style.BackgroundColor = "red";
} else {
  scoreBoardGuest.style.color = "black";
  scoreBoardHome.style.BackgroundColor = "black";
}

// add few more counters (period, fouls, timer)

// timer

// make your creative design
