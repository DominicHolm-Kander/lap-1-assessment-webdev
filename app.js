const express = require("express");
const app = express();
const port = 8080;

quotes = [
  '"Perfect is the enemy of good." <br> –Voltaire',
  '"I’m still learning." <br> –Michelangelo',
  '"Life is a journey, not a destination." <br> –Ralph Waldo Emerson',
  '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." <br> ―Abigail Adams',
  '"Yesterday I was clever, so I changed the world. Today I am wise, so I am changing myself." <br> –Rumi',
  '"Be curious, not judgmental." <br> –Walt Whitman',
  '"You don’t have to be great to start, but you have to start to be great." <br> –Zig Ziglar',
  '"Be stubborn about your goals and flexible about your methods." <br> –Unknown',
  '"Nothing will work unless you do." <br> –Maya Angelou',
  '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." <br> –Earl Nightingale',
  '"Anyone who stops learning is old, whether at twenty or eighty." <br> —Henry Ford',
  '"Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> –Benjamin Franklin',
  '"Change is the end result of all true learning." <br> ―Leo Buscaglia',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever." <br> ―Mahatma Gandhi',
  '"A learning curve is essential to growth." <br> –Tammy Bjelland',
  '"It does not matter how slowly you go as long as you do not stop." <br> -Confucius',
  '"Failure will never overtake me if my determination to succeed is strong enough." <br> -Og Mandino',
  '"Only I can change my life. No one can do it for me." <br> -Carol Burnett',
  '"It\'s not whether you get knocked down, it\'s whether you get up." <br> -Vince Lombardi',
  '"People who are crazy enough to think they can change the world are the ones who do." <br> -Rob Siltanen'
];

// Modified so that random quote is returned. Refactored so that function is suitable for use on any array.
const getRandomQuote = quoteArray => {
  index = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[index];
}

app.use(express.static("public"));
app.get("/", (req, res) => res.send("index"));

// Route to access all quotes
app.get("/quotes", (req, res) => res.send(quotes));

//Route to access random quote
app.get("/random", (req, res) => res.send(getRandomQuote(quotes)));

//Route to access a quote by index number.
//Error message requests a number between '0' and max quote index available rather than starting at'1', or the first entry in the quote array will never be accessed.
app.get("/quotes/:index", (req, res) => {
  let index = req.params.index;
  res.send(index < 0 || index >= quotes.length ? `Error: please choose a number between 0 and ${quotes.length - 1}.` : quotes[req.params.index])
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
