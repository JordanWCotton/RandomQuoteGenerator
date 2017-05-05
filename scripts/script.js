$(function () {  //Call our quote function once upon user landing on-page
  generateQuote();
});

/* When user clicks on the 'Tweet' button, we add the currently displayed quote data
from our in-script variables */
$('#tweet').click(function() {
  $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweet_content);
});

$('#quote_button').on("click", function() { 
  generateQuote();
});

var tweet_content = "";

function generateQuote () {
  $.ajax({ dataType: 'jsonp',
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", 
  success: function callback (val)   {
    /* $("#quote").html(val.quoteText);

    if (!val.quoteAuthor) { 
      $("#author").html("- Anonymous");
    }
    else {
    $("#author").html("- " + val.quoteAuthor);
    }

    tweet_content = '"' + val.quoteText + '"' + " -" + val.quoteAuthor; */

    console.log(val);
  },
   });

   
}
