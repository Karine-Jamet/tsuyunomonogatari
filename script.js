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


  //gest.options.debug(true);
  var messageContainer = document.createElement('div');
  messageContainer.className = 'gest-message';
  document.body.appendChild(messageContainer);

  var styles = {
    positioning: 'position:absolute; top:0; left:200px; margin: 22% auto; min-width: 100px; max-width: 400px; width: 80%; padding: 15px;',
    copy: 'font: normal 35px/1.1 \"Helvetica Neue\", Helvetica, Arial, sans-serif; color: #fff; font-size: 45px; text-align: center;',
    general: 'display: block; background-color: #000; z-index: 100; border-radius: 10px;'
  },
    messageContainerStyle = styles.positioning + styles.copy + styles.general;

    gest.options.subscribeWithCallback(function(gesture) {
    				var message = '';
    				if (gesture.direction) {
    					message = gesture.direction;
    				} else {
    					message = gesture.error.message;
    				} 

    messageContainer.innerHTML = '<p style=\"margin:0\">' + message + '</p>';
    messageContainer.setAttribute('style', messageContainerStyle);

    window.setTimeout(function() {
      messageContainer.setAttribute('style', 'display: none;');
    }, 3000);
  });

  gest.start();

});
