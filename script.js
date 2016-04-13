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

  function hasGetUserMedia() {
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

var webcamError = function(e) {
	alert('Webcam error!', e);
};

var video = $('#webcam')[0];

if (navigator.getUserMedia) {
	navigator.getUserMedia({audio: true, video: true}, function(stream) {
		video.src = stream;
	}, webcamError);
} else if (navigator.webkitGetUserMedia) {
         navigator.webkitGetUserMedia({audio:true, video:true}, function(stream) {
		video.src = window.webkitURL.createObjectURL(stream);
	}, webcamError);
} else {
	//video.src = 'video.webm'; // fallback.
}
  
});
