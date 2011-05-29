$(document).ready(function() {
  $.getJSON("http://twitter.com/statuses/user_timeline.json?screen_name=jwgrenning&count=30&callback=?",
  function(data){
    $.each(data, function(i,item){
      if(parseInt($("#main-content").css('height')) - 50 > parseInt($("#sidebar").css('height'))){
        var html = ""; 
        html += "<div class=\"topOfTweet\"></div>";
        html += "<div class=\"tweet\" prepend-1 append-1><p>" + item.text + "</p></div>";  
        html += "<div class=\"bottomOfTweet\"></div>";
        $("#twitter-feed").append(html);
      }
    });
  });
});

