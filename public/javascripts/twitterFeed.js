$(document).ready(function() {

    var _url = 'https://api.twitter.com/1/statuses/user_timeline/jwgrenning.json?callback=?&count=10';
    $.getJSON(_url,function(data){
        for(i = 0; i < data.length; ++i) {
          var tweet = data[i].text;
          var html = ""; 
          html += "<div class=\"topOfTweet\"></div>";
          html += "<div class=\"tweet\" prepend-1 append-1><p>" + tweet + "</p></div>";  
          html += "<div class=\"bottomOfTweet\"></div>";
          $("#twitter-feed").append(html);
        }
    });
});

