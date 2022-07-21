let modalEl = document.getElementById('modal');
let modalHead = document.getElementById('modal-head');
let modalP = document.getElementById('modal-p');

let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');
let homeAheadEl = document.getElementById('home-ahead');
let guestAheadEl = document.getElementById('guest-ahead');

let firstQuarterEl = document.getElementById('first-quarter');
let secondQuarterEl = document.getElementById('second-quarter');
let thirdQuarterEl = document.getElementById('third-quarter');
let fourthQuarterEl = document.getElementById('fourth-quarter');

let homeScore = 0;
let guestScore = 0;

function add1Home() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
  winning();
}

function add2Home() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  winning();
}

function add3Home() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  winning();
}

function add1Guest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  winning();
}

function add2Guest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  winning();
}

function add3Guest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  winning();
}

function winning() {
  if (homeScore > guestScore) {
    homeAheadEl.classList.add('home-ahead');
    guestAheadEl.classList.remove('guest-ahead');
  } else if (homeScore < guestScore) {
    guestAheadEl.classList.add('guest-ahead');
    homeAheadEl.classList.remove('home-ahead');
  } else {
    guestAheadEl.classList.remove('guest-ahead');
    homeAheadEl.classList.remove('home-ahead');
  }
}

function quarterChange() {
  if (!firstQuarterEl.classList.contains('quarter-done')) {
    firstQuarterEl.classList.add('quarter-done');
  } else if (
    firstQuarterEl.classList.contains('quarter-done') &&
    !secondQuarterEl.classList.contains('quarter-done')
  ) {
    secondQuarterEl.classList.add('quarter-done');
  } else if (
    secondQuarterEl.classList.contains('quarter-done') &&
    !thirdQuarterEl.classList.contains('quarter-done')
  ) {
    thirdQuarterEl.classList.add('quarter-done');
  } else if (
    thirdQuarterEl.classList.contains('quarter-done') &&
    !fourthQuarterEl.classList.contains('quarter-done')
  ) {
    fourthQuarterEl.classList.add('quarter-done');
  } else {
    firstQuarterEl.classList.remove('quarter-done');
    secondQuarterEl.classList.remove('quarter-done');
    thirdQuarterEl.classList.remove('quarter-done');
    fourthQuarterEl.classList.remove('quarter-done');
    modalEl.classList.add('show');
    modal();
  }
}

function removeModal() {
  modalEl.classList.remove('show');
}

function modal() {
  if (homeScore > guestScore) {
    modalHead.textContent = 'Home Team Won!!!';
    modalP.textContent = `With a Score of ${homeScore}`;
  } else if (homeScore < guestScore) {
    modalHead.textContent = 'Away Team Won!!!';
    modalP.textContent = `With a Score of ${guestScore}`;
  } else {
    modalHead.textContent = '';
    modalP.textContent = '';
  }

  homeScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
  guestAheadEl.classList.remove('guest-ahead');
  homeAheadEl.classList.remove('home-ahead');
}
