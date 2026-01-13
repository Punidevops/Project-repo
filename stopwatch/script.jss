let timer;
let seconds = 0;

function start() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      document.getElementById("display").innerText =
        new Date(seconds * 1000).toISOString().substr(11, 8);
    }, 1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  seconds = 0;
  document.getElementById("display").innerText = "00:00:00";
}

