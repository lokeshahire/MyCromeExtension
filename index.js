function fetchQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
    })
    .catch((error) => {
      quoteText.textContent = "An error occurred while fetching the quote.";
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var quoteText = document.getElementById("quoteText");
  var fetchButton = document.getElementById("fetchButton");

  fetchButton.addEventListener("click", fetchQuote);

  // Fetch a quote when the new tab is opened
  fetchQuote();
});
