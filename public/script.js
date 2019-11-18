
// Wrapped script in .ready method so that it only runs once page is adequately loaded.
$(document).ready(() => {
  let quoteRequested = document.querySelector("#quote-request-button");
  quoteRequested.addEventListener("click", event => {
    event.preventDefault();
    console.log("click registered");
    axios.post("").then(response => { //what's axios post for?
      quote = response.data;
      $("#text").css({
        "text-align": "center",
        "min-height": "150px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      });
      $("#text").html(quote);
    });
    });
  });

