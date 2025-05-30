const quotes = [
  "Believe you can and you're halfway there.",
  "Stay hungry, stay foolish.",
  "Every moment is a fresh beginning.",
  "The best way to get started is to quit talking and begin doing.",
  "Dream big and dare to fail."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];
  document.getElementById("quote").innerText = quoteText;
}
