$(document).ready(function() {


  // navigator.getUserMedia = navigator.getUserMedia ;

  var constraints = {video: true, audio: true};

  function successCallback(localMediaStream) {
    window.stream = localMediaStream; // stream available to console
    var video = document.querySelector("video");
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  }

  function errorCallback(error){
    console.log("navigator.getUserMedia error: ", error);
  }
  
  navigator.webkitGetUserMedia(constraints, successCallback, errorCallback);



  $("h1").hide();
  $(".fadeEffectTitleJapLeft").hide();
  //$(".gameIni").hide();

  $(".fadeEffectTitle").addClass("fadeEffectTitleAction");
  $(".fadeEffectTitleJapRight").addClass("fadeEffectTitleActionJapRight");

  window.setTimeout(function(e) {
    $(".fadeEffectTitleJapLeft").show();
    $("h1").show();
  }, 4500);

  window.setTimeout(function(e) {
    $(".fadeEffectTitleJapLeft").addClass("fadeEffectTitleAction");
    $(".fa").addClass("startShow");
  }, 4800)


  $('.start').on("click", function(e) {
  //  $(".gameIni").show();
    $('.intro').addClass("hide");
    window.setTimeout(function(e) {
      $('.intro').hide();

    }, 1000);

    window.setTimeout(function(e) {
      $('.hideFirstStrophe').addClass("showHaiku");

    }, 1000);
    window.setTimeout(function(e) {
      $('.hideSecondStrophe').addClass("showHaiku");

    }, 2000);
    window.setTimeout(function(e) {
      $('.hideThirdStrophe').addClass("showHaiku");

    }, 3000);

  });

});
