$(function () {     //Call our quote function once upon user landing on-page
  generateQuote();
});

/* When user clicks on the 'Tweet' button, we add the currently displayed quote data
from our in-script variables */
$('#tweet').click(function() {
  $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweet_content);
});

$('#quote_button').on("click", function() { //Calls the function for every click
  generateQuote();
});

var tweet_content = "";

function generateQuote () {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(val)   {
    $("#quote").html(val.quoteText);

    if (!val.quoteAuthor) {  //If there is no author data, adds '-Anonymous'
      $("#author").html("- Anonymous");
    }
    else {
    $("#author").html("- " + val.quoteAuthor);
    }

    tweet_content = '"' + val.quoteText + '"' + " -" + val.quoteAuthor;

   });
}