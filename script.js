// selects the refrence of the elements and assign them with different variables.
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

// starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
// fetch(), returns a promise, which returns a response object once its resolved.
// then(), we extract the JSON data from the response object which again returns a promise which gives the data returned by the API call, and logs it to the console.
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

// addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired.
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
