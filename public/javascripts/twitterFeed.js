
$.getJSON("http://twitter.com/statuses/user_timeline.json?screen_name=jwgrenning&count=7&callback=?",
function(data){
  var html = ""; 
  $.each(data, function(i,item){
    html += "<div class=\"topOfTweet\"></div>";
    html += "<div class=\"tweet\" prepend-1 append-1><p>" + item.text + "</p></div>";  
    html += "<div class=\"bottomOfTweet\"></div>";
   /* ct = ct.replace(/http:\/\/\S+/g,  '<a href="$&" target="_blank">$&</a>');
    ct = ct.replace(/\s(@)(\w+)/g,    ' @<a onclick="javascript:pageTracker._trackPageview('/outgoing/twitter.com/');" href="http://twitter.com/$2" target="_blank">$2</a>');
    ct = ct.replace(/\s(#)(\w+)/g,    ' #<a onclick="javascript:pageTracker._trackPageview('/outgoing/search.twitter.com/search?q=%');" href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>');
    */
  });
  html += "</ul>"
    $("#twitter-feed").append(html);
});

