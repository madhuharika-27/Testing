const quotes = [
  "Believe you can and you're halfway there.",
  "Stay hungry, stay foolish.",
  "Every moment is a fresh beginning.",
  "The best way to get started is to quit talking and begin doing.",
  "Dream big and dare to fail.",
  "The journey of a thousand miles begins with a single step.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe you can, and you're halfway there.",
  "Mistakes are proof that you are trying.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];
  document.getElementById("quote").innerText = quoteText;
}
gi