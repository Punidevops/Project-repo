let currentInput = '';
let history = [];

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}

function calculate() {
    try {
        const result = eval(currentInput);
        history.unshift(currentInput + ' = ' + result);
        if (history.length > 5) {
            history.pop();
        }
        currentInput = result.toString();
        updateDisplay();
        updateHistory();
    } catch (e) {
        updateDisplay();
        alert('Invalid Input');
    }
}

function updateHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

// Initialize display
updateDisplay();

