let homeScore = 0;
let homeScoreEl = document.getElementById("home-score");

function plus1pointsh() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function plus2pointsh() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function plus3pointsh() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

let guestScore = 0;
let guestScoreEl = document.getElementById("guest-score");

function plus1pointsg() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function plus2pointsg() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function plus3pointsg() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
