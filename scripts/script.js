$(() => {  //Call our quote function once upon user landing on-page
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
    "X-Mashape-Key": '8MtOjsB8wzmshjFt2sWPsjjcpyhdp1yIpkzjsnu3M83ysYSI9h',
    Accept: 'application/json',
    "Content-Type": 'application/x-www-form-urlencoded'
  },
  url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1", 
  success: (res) => {
    let val = JSON.parse(res);

   $("#quote").html(val.quote);

    if (!val.author) { 
      $("#author").html("- Anonymous");
    }
    else {
    $("#author").html("- " + val.author);
    }

    //Prepopulate the content of the tweet if the user decides to tweet it
    tweet_content = '"' + val.quote + '"' + " -" + val.author; 
  }
   });

   
}
