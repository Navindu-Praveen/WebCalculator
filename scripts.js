// Store the current number, operator, and previous number
let currentNumber = ''; // The current number input by the user
let operator = ''; // The current operator selected by the user
let previousNumber = ''; // The previous number input before the operator

// Append a number to the current input
function appendNumber(number) {
    currentNumber += number;
    updateScreen();
}

// Set the operator and store the current number as previous
function setOperator(op) {
    if (currentNumber === '') return; // Do nothing if no number is entered
    operator = op; // Set the operator
    previousNumber = currentNumber; // Store the current number as previous
    currentNumber = ''; // Reset current number
    updateScreen(true); // Update screen to show the operator
}

// Perform the calculation based on the operator
function calculate() {
    const prev = parseFloat(previousNumber); // Convert previous number to float
    const current = parseFloat(currentNumber); // Convert current number to float
    if (isNaN(prev) || isNaN(current)) return; // Do nothing if numbers are invalid

    let result;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString(); // Store the result as current number
    operator = ''; // Reset the operator
    previousNumber = ''; // Reset previous number
    updateScreen(); // Update the screen to show the result
}

// Clear the screen and reset variables
function clearScreen() {
    currentNumber = ''; // Reset current number
    operator = ''; // Reset operator
    previousNumber = ''; // Reset previous number
    updateScreen(); // Update the screen to show 0
}

// Update the screen with the current number and optionally the operator
function updateScreen(showOperator = false) {
    const screen = document.getElementById('screen');
    if (showOperator && previousNumber) {
        screen.innerText = `${previousNumber} ${operator}`;
    } else {
        screen.innerText = currentNumber || '0';
    }
}
