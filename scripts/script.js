$(() => {  //Call our quote function once upon user landing on-page
  localStorage.clear(); //Fix issue with local storage incorectly storing expired keys
  generateQuote();
});

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
