jQuery.fn.onPositionChanged = function(trigger, millis) {
  if (millis == null) millis = 100;
  var o = $(this[0]); // our jquery object
  if (o.length < 1) return o;

  var lastPos = null;
  var lastOff = null;
  setInterval(function() {
    if (o == null || o.length < 1) return o; // abort if element is non existend eny more
    if (lastPos == null) lastPos = o.position();
    if (lastOff == null) lastOff = o.offset();
    var newPos = o.position();
    var newOff = o.offset();
    if (lastPos.top != newPos.top || lastPos.left != newPos.left) {
      $(this).trigger('onPositionChanged', {
        lastPos: lastPos,
        newPos: newPos
      });
      if (typeof(trigger) == "function") trigger(lastPos, newPos);
      lastPos = o.position();
    }
    if (lastOff.top != newOff.top || lastOff.left != newOff.left) {
      $(this).trigger('onOffsetChanged', {
        lastOff: lastOff,
        newOff: newOff
      });
      if (typeof(trigger) == "function") trigger(lastOff, newOff);
      lastOff = o.offset();
    }
  }, millis);

  return o;
};

// localStorage.clear();

$(document).ready(function() {

  var idInter01 = 0;
  var idInter02 = 0;
  var score = 0;
  var pseudo = "Anonyme";
  var listScore = [];

  listScore = JSON.parse(localStorage.getItem("score")) || [];
  listScore.map(function(j){
    j.now = false;
  });

  $("#impact").trigger('load');
  $("#bonus").trigger('load');

  $("input").fadeOut(0);
  $("h1").hide();
  $(".fadeEffectTitleJapLeft").hide();
  //$(".gameIni").hide();
  $(".scoreFinale").hide();


  $(".fadeEffectTitle").addClass("fadeEffectTitleAction");
  $(".fadeEffectTitleJapRight").addClass("fadeEffectTitleActionJapRight");

  window.setTimeout(function(e) {
    $(".fadeEffectTitleJapLeft").show();
    $("h1").show();
  }, 4400);

  window.setTimeout(function(e) {
    $(".fadeEffectTitleJapLeft").addClass("fadeEffectTitleAction");
    $(".start .fa").addClass("startShow");
    $("input").fadeIn(2000);
  }, 4700)


  $("form").on("submit", function(e) {
    e.preventDefault();
    if ($("input").val()) {
      pseudo = $("input").val();
    }

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
      $('.water').addClass('waterShow');
      $('.cloudLeft').addClass('cloudShow');
      $('.cloudRight').addClass('cloudShow');
      $('.cloudFond').addClass('cloudShow');

    }, 7000);

    window.setTimeout(function(e) {
      $('.grue5').addClass('grueDown');
      $('.score').addClass('scoreShow ');
      $(".bonus").unbind('mouseenter mouseleave');

      idInter01 = setInterval(function() {

        var pileFace = Math.floor(Math.random() * 2) + 1;
        //console.log(pileFace);
        if (pileFace > 1) {
          $(".eagle").addClass("eagleLeft");
        } else {

          $(".eagle").addClass("eagleRight");
        }

      }, random_interval());

      idInter02 = setInterval(function() {

        var pileFace = Math.floor(Math.random() * 2) + 1;
        // console.log(pileFace);
        if (pileFace > 1) {
          $(".bonus").addClass("bonusLeft");
        } else {

          $(".bonus").addClass("bonusRight");
        }

      }, random_interval());



      $(".eagle").onPositionChanged(function() {
        if ($('.eagle').position().top > $(window).height() - 142) {
          if ($(".eagle").hasClass("eagleLeft") && $(".grue5").hasClass('directionLeft')) {
            $("#impact").trigger('play');
            lostScore(score);
            $(".grue5").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
          } else if ($(".eagle").hasClass("eagleRight") && $(".grue5").hasClass('directionRight')) {
            $("#impact").trigger('play');
            lostScore(score);
            $(".grue5").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
          }
          $(".eagle").removeClass("eagleLeft");
          $(".eagle").removeClass("eagleRight");

        }
      });


      $(".bonus").onPositionChanged(function() {
        if ($('.bonus').position().top > $(window).height() - 142) {
          if ($(".bonus").hasClass("bonusLeft") && $(".grue5").hasClass('directionLeft')) {
            $("#bonus").trigger('play');
            addScore(score);
            $("#bonus").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
          } else if ($(".bonus").hasClass("bonusRight") && $(".grue5").hasClass('directionRight')) {
            $("#bonus").trigger('play');
            addScore(score);
            $(".bonus").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
          }
          $(".bonus").removeClass("bonusLeft");
          $(".bonus").removeClass("bonusRight");
          $(".bonus").fadeIn(100);

        }
      });



    }, 8000);


    window.setTimeout(function(e) {

      clearInterval(idInter01);
      clearInterval(idInter02);
      // $(".grue5")
      $(".grue5").addClass("grueUp");
      $(".endGame").addClass("endGameShow");
      $(".gameIni").fadeOut(1000);
      $(".score").fadeOut(1000);
      $(".scoreFinale").delay(5000).show(0);

      var finale = {
        "pseudo": pseudo,
        "score": score,
        "now": true
      };
      console.log(finale);
      listScore.push(finale);

      listScore.sort(function(a, b) {
        if (a.score > b.score) {
          return -1;
        } else {
          return 1;
        }
      });

      listScore.map(function(a) {
        if (a.now) {
          $(".list").append("<p style='color:red'>" + a.pseudo + " : " + a.score + "</p>");
        } else {
          $(".list").append("<p>" + a.pseudo + " : " + a.score + "</p>");
        }
      });

      localStorage.setItem("score", JSON.stringify(listScore));

    }, 68000);

    window.setTimeout(function(e) {
      $('.hideFirstStrophe02').addClass("showHaiku");
      // console.log("hello");
    }, 69000);
    window.setTimeout(function(e) {
      $('.hideSecondStrophe02').addClass("showHaiku");
    }, 70000);
    window.setTimeout(function(e) {
      $('.hideThirdStrophe02').addClass("showHaiku");
      $('.scoreFinale').addClass("scoreShow");
      // $('.scoreFinale').fadeIn(2000);
    }, 71000);



    navigator.getUserMedia = navigator.getUserMedia;

    var constraints = {
      video: true,
      audio: false
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
      if ($(".grue5").hasClass('directionRight')) {
        $('.grue5').removeClass('directionRight');
        $('.grue5').addClass('directionLeft');
      } else if ($(".grue5").hasClass('directionLeft')) {} else {
        $('.grue5').addClass('directionLeft');
      }



    }
    if (e.detail.dir == 'right') {
      if ($(".grue5").hasClass('directionRight')) {} else if ($(".grue5").hasClass('directionLeft')) {
        $('.grue5').removeClass('directionLeft');
        $('.grue5').addClass('directionRight');
      } else {
        $('.grue5').addClass('directionRight');
      }
    }
  });

  var random_interval = function() {
    return Math.random() * 5000 + 2000;
  }




  var addScore = function(oldScore) {
    score += 10;
    $('#count')
      .prop('number', oldScore)
      .animateNumber({
          number: oldScore + 10
        },
        1000
      );

  }

  var lostScore = function(oldScore) {
    score -= 5;
    $('#count')
      .prop('number', oldScore)
      .animateNumber({
          number: oldScore - 5
        },
        1000
      );

  }






});
