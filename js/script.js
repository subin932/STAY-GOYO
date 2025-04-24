$(function(){
  $(".sub_wrap").hide();
  $(".gnb>li").mouseenter(function(){
    $(this).children(".sub_wrap").stop().slideDown();
   });
   $(".gnb>li").mouseleave(function(){
     $(this).children(".sub_wrap").stop().slideUp();
   });
});
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top
  }, 500);//움직이는 시간 조정
  return false;
  }
  }
  });
  });
  $(function(){
    $(".slide li").hide();
    $(".slide li:nth-child(1)").show();
    setInterval(function(){
        $(".slide li:nth-child(1)").fadeOut(2000).next().fadeIn(2000).end().appendTo(".slide")
    },4000);

});