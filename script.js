const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const result = document.getElementById('result');

guessButton.addEventListener('click', () => {
  const userInput = guessInput.value;
  if (!userInput || isNaN(userInput)) {
    result.textContent = 'Please enter a valid number between 1 and 100.';
    result.style.color = 'red';
    return;
  }

  const userGuess = parseInt(userInput);
  attempts++;

  if (userGuess === randomNumber) {
    result.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    result.style.color = 'green';
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    result.textContent = 'Try a higher number.';
    result.style.color = 'red';
  } else {
    result.textContent = 'Try a lower number.';
    result.style.color = 'red';
  }
});

