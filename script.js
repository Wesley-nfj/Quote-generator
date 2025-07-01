const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Do what you can, with what you have, where you are. – Arthur Ashe",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Everything you can imagine is real. – Pablo Picasso",
  "If you want to lift yourself up, lift up someone else. – Booker T. Washington"
];

function generateQuote() {
  const quoteText = document.getElementById("quote-text");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}