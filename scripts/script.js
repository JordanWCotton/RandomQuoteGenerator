$(() => {  //Call our quote function once upon user landing on-page
  localStorage.clear(); //Fix issue with local storage incorectly storing expired keys
  generateQuote();
});

const colors = ['#1abc9c', '#2ecc71', '#2980b9', '#d35400', '#c0392b', '#8e44ad', '#f1c40f', '#2c3e50'];

var randomInt = (min,max) => {
  return Math.floor(Math.random() * (max-min+1) + min);
};

/* When user clicks on the 'Tweet' button, we add the currently displayed quote data
from our in-script variables */
$('#tweet').click(() => {
  $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweet_content);
});

 $('#quote-button').on("click", () => { 
  generateQuote();
});

let tweet_content = "";

let generateQuote = () => {
  $.ajax({ headers: {
    "X-Mashape-Key": '',
    Accept: 'application/json',
    "Content-Type": 'application/x-www-form-urlencoded'
  },
  url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1", 
  success: (res) => {
   $("#quote").html(res.quote);
   
   let num = randomInt(0,6);

   $('body').css('background-color', colors[num]);
   $('#quote-button').css('background-color', colors[num]);

    if (!res.author) { 
      $("#author").html("- Anonymous");
    }
    else {
    $("#author").html("- " + res.author);
    }

    //Prepopulate the content of the tweet if the user decides to tweet it
    tweet_content = '"' + res.quote + '"' + " -" + res.author; 
  }
   });
}


