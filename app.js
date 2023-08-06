// Elements
const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Variables
let startTime = 0;
let elapsedTime = 0; // The total elapsed time
let timerInterval; // The interval for updating the timer display

function startTimer() {
  startTime = Date.now() - elapsedTime;

  // Update the timer display every 10 milliseconds
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  // Disable and enable buttons
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function formatTime() {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    "." +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

function stopTimer() {
  clearInterval(timerInterval);

  // after stop it can start again
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timer.textContent = "00::00:00";

  startBtn.disabled = false;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
}

// add event to buttons
startBtn.addEventListener("click", () => {
  startTimer();
});

stopBtn.addEventListener("click", () => {
  stopTimer();
});

resetBtn.addEventListener("click", () => {
  resetTimer();
});
