let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);

    if (expression !== "") {
      saveHistory(`${expression} = ${result}`);
    }

    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function saveHistory(entry) {
  history.unshift(entry);        // add to top
  history = history.slice(0, 5); // keep only last 5
  localStorage.setItem("calcHistory", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

// Load history on page load
renderHistory();

