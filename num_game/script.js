let randomNumber; // Variable to store the randomly generated number
let attempts = 0; // Counter for the number of attempts made by the user
const maxAttempts = 5; // Maximum allowed attempts

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Function to reset the game to its initial state
function resetGame() {
  attempts = 0; 
  generateRandomNumber(); 
  document.getElementById("feedbackMessage").textContent = ""; 
  document.getElementById("attemptsMessage").textContent = ""; 
  document.getElementById("guessInput").value = ""; 
  document.getElementById("guessInput").disabled = false; 
  document.getElementById("submitGuess").disabled = false; 
}

// Function to handle the user's guess
function handleGuess() {
  const guess = parseInt(document.getElementById("guessInput").value); 
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("feedbackMessage").textContent =
      "Please enter a valid number between 1 and 100."; 
    return; 
  }

  attempts++; 
  
  // Provide feedback based on the user's guess
  if (guess < randomNumber) {
    document.getElementById("feedbackMessage").textContent = "Too low!";
  } else if (guess > randomNumber) {
    document.getElementById("feedbackMessage").textContent = "Too high!";
  } else {
    document.getElementById(
      "feedbackMessage"
    ).textContent = `Correct! The number was ${randomNumber}.`;
    document.getElementById(
      "attemptsMessage"
    ).textContent = `You guessed it in ${attempts} attempts.`;
    document.getElementById("guessInput").disabled = true; 
    document.getElementById("submitGuess").disabled = true; 
    return; 
  }

  // Check if maximum attempts have been reached
  if (attempts >= maxAttempts) {
    document.getElementById("feedbackMessage").textContent = `Game Over! You've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`;
    document.getElementById("guessInput").disabled = true; 
    document.getElementById("submitGuess").disabled = true; 
  } else {
    document.getElementById(
      "attemptsMessage"
    ).textContent = `Attempt ${attempts} of ${maxAttempts}`; 
  }
}

// Event listener for the guess submission button
document.getElementById("submitGuess").addEventListener("click", handleGuess);
// Event listener for the game restart button
document.getElementById("restartGame").addEventListener("click", resetGame);

generateRandomNumber(); 
