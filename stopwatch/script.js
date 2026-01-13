let display = document.getElementById("display");
let startStopBtn = document.getElementById("startStop");
let lapBtn = document.getElementById("lap");
let resetBtn = document.getElementById("reset");
let lapsList = document.getElementById("laps");

let startTime = 0;
let elapsed = 0;
let interval = null;
let running = false;
let laps = [];

function formatTime(ms) {
  let minutes = Math.floor(ms / 60000);
  let seconds = Math.floor((ms % 60000) / 1000);
  let millis = Math.floor((ms % 1000) / 10);

  return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(millis).padStart(2,'0')}`;
}

function update() {
  elapsed = Date.now() - startTime;
  display.textContent = formatTime(elapsed);
}

startStopBtn.onclick = () => {
  if (!running) {
    startTime = Date.now() - elapsed;
    interval = setInterval(update, 10);
    startStopBtn.textContent = "Stop";
    startStopBtn.classList.add("active");
    running = true;
  } else {
    clearInterval(interval);
    startStopBtn.textContent = "Start";
    startStopBtn.classList.remove("active");
    running = false;
  }
};

lapBtn.onclick = () => {
  if (!running) return;

  laps.unshift(formatTime(elapsed));
  if (laps.length > 5) laps.pop();

  lapsList.innerHTML = "";
  laps.forEach(lap => {
    let li = document.createElement("li");
    li.textContent = lap;
    lapsList.appendChild(li);
  });
};

resetBtn.onclick = () => {
  clearInterval(interval);
  elapsed = 0;
  running = false;
  laps = [];
  display.textContent = "00:00:00";
  lapsList.innerHTML = "";
  startStopBtn.textContent = "Start";
  startStopBtn.classList.remove("active");
};

