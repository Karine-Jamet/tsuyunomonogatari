$(document).ready(function() {

  $("h1").hide();
  $(".fadeEffectTitleJapLeft").hide();

  $(".fadeEffectTitle").addClass("fadeEffectTitleAction");
  $(".fadeEffectTitleJapRight").addClass("fadeEffectTitleActionJapRight");

  window.setTimeout(function(e) {
    $(".fadeEffectTitleJapLeft").show();
    $("h1").show();
  }, 4500);

  window.setTimeout(function(e) {
    $(".fadeEffectTitleJapLeft").addClass("fadeEffectTitleAction");
    $(".fa").addClass("startShow");
  }, 5000)


  $('.start').on("click", function(e) {
    $('.intro').addClass("hide");
  });

});
