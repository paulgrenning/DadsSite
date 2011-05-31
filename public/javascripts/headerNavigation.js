var blogIsFaded;
var bookIsFaded;
var businesssIsFaded;

$(document).ready( function () {
  blogIsFaded = true;
  bookIsFaded = true;
  businesssIsFaded = true;
  firstSwap();
  $(".header-navigation").mouseover(function () {
    $(this).stop().animate({ top: -5 }, 100);
  });
  $(".header-navigation").mouseout(function () {
    $(this).stop().animate({ top: 0 }, 100);
  });
});

function firstSwap(){
  $("#bookThumbImage").css({ display: "none" });
  $("#blogThumbImage").css({ display: "none" });
  $("#websiteThumbImage").css({ display: "none" });
  setTimeout("swapBookImages()", 2000);
  setTimeout("swapBusinessImages()", 4000);
  setTimeout("swapBlogImages()", 6000);
}

function swapBookImages() {
  if(bookIsFaded == true){
    bookIsFaded = false;
    $("#bookThumbImage").fadeIn();
  } else {
    bookIsFaded = true;
    $("#bookThumbImage").fadeOut();
  }
  setTimeout("swapBookImages()", 6000);
}

function swapBusinessImages() {
  if(businesssIsFaded == true){
    businesssIsFaded = false;
    $("#websiteThumbImage").fadeIn();
  } else {
    businesssIsFaded = true;
    $("#websiteThumbImage").fadeOut();
  }
  setTimeout("swapBusinessImages()", 6000);
}

function swapBlogImages() {
  if(blogIsFaded == true){
    blogIsFaded= false;
    $("#blogThumbImage").fadeIn();
  } else {
    blogIsFaded= true;
    $("#blogThumbImage").fadeOut();
  }
  setTimeout("swapBlogImages()", 6000);
}
