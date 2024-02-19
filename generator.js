/*let quotes = [
    "The only thing that matters is that you have a good life.",
    "Life is what happens to you while you're busy making other plans.",
    "When music hits you, you feel no pain.",
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "You can observe a lot just by watching.",
    "A house divided against itself cannot stand.",
    "Difficulties increase the nearer we get to the goal."
];

let authors = [
    "Arnold Wafula",
    "Andy Maala",
    "Bob Marley",
    "Thomas Edison",
    "Yogi Berra",
    "Abraham Lincoln",
    "Johann Wolfgang von Goethe"
];*/

const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
quoteBtn = document.querySelector(".button");
soundBtn = document.querySelector(".sound");

const apiUrl = 'https://api.quotable.io/random';

function randomQuote() {
    quoteBtn.innerText = "Loading Quote...";
    // Fetching data from the API and parsing it into json objects
    fetch(apiUrl)
        .then(response => response.json())
        .then(result => {
            quoteText.innerText = result.content;
            quoteAuthor.innerText = "- " + result.author;

            quoteBtn.innerText = "New Quote";
    });

    //let randomIndex = Math.floor(Math.random() * quotes.length);
    
    //document.querySelector('.quote').innerHTML = quotes[randomIndex];
    //document.querySelector('.author').innerHTML = "- " + authors[randomIndex];
}

randomQuote();
soundBtn.addEventListener('click', () => {
    // Web speech API that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`);

    speechSynthesis.speak(utterance);
    console.log(utterance);
});
quoteBtn.addEventListener("click", randomQuote);