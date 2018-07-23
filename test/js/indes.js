var lineDrawing = anime({
  targets: '.line1 path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});

// hide hole2
$(document).ready(function(){
  $(".body2, .line2").hide();
  $(".ho2, .body2, .line2").mouseover(function() {
    $(".body2, .line2").show();
  });
  });
  $(".ho2, .body2, .line2").mouseleave(function() {
      $(".body2, .line2").hide();
  });

//hide hole3
$(document).ready(function(){
  $(".body3, .line3").hide();
  $(".ho3, .body3, .line3").mouseover(function() {
    $(".body3, .line3").show();
  });
  });
  $(".ho3, .body3, .line3").mouseleave(function() {
      $(".body3, .line3").hide();
  });

  //hide hole4
  $(document).ready(function(){
    $(".body4, .line4").hide();
    $(".ho4, .body4, .line4").mouseover(function() {
      $(".body4, .line4").show();
    });
    });
    $(".ho4, .body4, .line4").mouseleave(function() {
        $(".body4, .line4").hide();
    });

     //hide hole5
  $(document).ready(function(){
    $(".body5, .line5, .handboy").hide();
    $(".ho5, .body5, .line5, .handboy").mouseover(function() {
      $(".body5, .line5, .handboy").show();
    });
    });
    $(".ho5, .body5, .line5, .handboy").mouseleave(function() {
        $(".body5, .line5, .handboy").hide();
    });

     //hide hole6
  $(document).ready(function(){
    $(".nomoni").hide();
    $(".ho6, .nomoni").mouseover(function() {
      $(".nomoni").show();
    });
    });
    $(".ho6, .nomoni").mouseleave(function() {
        $(".nomoni").hide();
    });


var holeShow = document.querySelector('');

function animatefig(scale, duration, elasticity) {
  anime.remove(holeShow);
  anime({
    targets: holeShow,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}





// var basicTimeline = anime.timeline({
//   autoplay: false
// });

// var pathEls = $(".check");
// for (var i = 0; i < pathEls.length; i++) {
//   var pathEl = pathEls[i];
//   var offset = anime.setDashoffset(pathEl);
//   pathEl.setAttribute("stroke-dashoffset", offset);
// }

// basicTimeline
//   .add({
//     targets: ".text",
//     duration: 1,
//     opacity: "0"
//   })
//   .add({
//     targets: ".button",
//     duration: 1300,
//     height: 20,
//     width: 300,
//     backgroundColor: "#2B2D2F",
//     border: "0",
//     borderRadius: 100
//   })
//   .add({
//     targets: ".progress-bar",
//     duration: 2000,
//     width: 300,
//     easing: "linear"
//   })
//   .add({
//     targets: ".button",
//     width: 0,
//     duration: 1
//   })
//   .add({
//     targets: ".progress-bar",
//     width: 80,
//     height: 80,
//     delay: 500,
//     duration: 750,
//     borderRadius: 80,
//     backgroundColor: "#71DFBE"
//   })
//   .add({
//     targets: pathEl,
//     strokeDashoffset: [offset, 0],
//     duration: 200,
//     easing: "easeInOutSine"
//   });

// $(".button").mouseenter(function() {
//   basicTimeline.play();
// });

// $(".text").click(function() {
//   basicTimeline.play();
// });