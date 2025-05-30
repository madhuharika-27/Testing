function rollDice() {
  // Generate a random number from 1 to 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  
  // Set the image src based on the random number
  const diceImage = document.getElementById("dice");
  diceImage.src = `dice${randomNumber}.png`;
}
