
// Wrapped script in .ready method so that it only runs once page is adequately loaded.
$(document).ready(() => {
  let quoteRequested = document.querySelector("#quote-request-button");
  quoteRequested.addEventListener("click", event => {
    event.preventDefault();
    $("#quote-text").show();
    //fetches a quote from the random path defined in app.js, and then injects it into the '#quote-text' section defined in index.html.
    axios.get("/random").then(response => {
      $("#quote-text").html(response.data);
    });
    });
  });

