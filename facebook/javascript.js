$(function(){
  $(".like-btn").hover(function() {
    $(".reaction-icon").each(function(i, e) {
      setTimeout(function(){
        $(e).addClass("show");
      }, i * 100);
    });
  }, function() {
    $(".reaction-icon").removeClass("show")
  });
})
