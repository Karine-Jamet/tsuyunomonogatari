$(document).ready(function() {



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
      $('.grue1').addClass('grueHide');
      $('.grue2').addClass('grueShow');

    }, 1000);
    window.setTimeout(function(e) {
      $('.hideSecondStrophe').addClass("showHaiku");
      $('.grue2').addClass('grueHide');
      $('.grue3').addClass('grueShow');

    }, 3000);
    window.setTimeout(function(e) {
      $('.hideThirdStrophe').addClass("showHaiku");
      $('.grue3').addClass('grueHide');
      $('.grue4').addClass('grueShow');

    }, 5000);


    window.setTimeout(function(e) {
      $('.haiku').addClass("hide");
      $('.grue4').addClass('grueHide');
      $('.grue5').addClass('grueShow');

    }, 7000);
    window.setTimeout(function(e) {
      $('.grue5').addClass('grueDown');

    }, 7000);


    //gest.options.debug(true);


    navigator.getUserMedia = navigator.getUserMedia;

    var constraints = {
      video: true,
      audio: true
    };

    function successCallback(localMediaStream) {
      window.stream = localMediaStream; // stream available to console
      var video = document.querySelector("video");
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    }

    function errorCallback(error) {
      console.log("navigator.getUserMedia error: ", error);
    }

    navigator.webkitGetUserMedia(constraints, successCallback, errorCallback);


    /****/




  });



  var ms = new motionSensor();

  document.addEventListener('motion', function(e) {
    // document.getElementById('output').innerHTML = e.detail.dir;
    if (e.detail.dir == 'left') {
      if($(".grue5").hasClass('directionRight')){
        $('.grue5').removeClass('directionRight');
        $('.grue5').addClass('directionLeft');
      }else if($(".grue5").hasClass('directionLeft')){
      }else {
        $('.grue5').addClass('directionLeft');
      }



    }
    if (e.detail.dir == 'right') {
      if($(".grue5").hasClass('directionRight')){
      }else if($(".grue5").hasClass('directionLeft')){
        $('.grue5').removeClass('directionLeft');
        $('.grue5').addClass('directionRight');
      }else {
        $('.grue5').addClass('directionRight');
      }
    }
  });



});
