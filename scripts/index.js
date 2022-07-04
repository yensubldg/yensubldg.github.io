var hoverContain = $(".winrapper");
hoverContain.mouseleave(function (e) {
  TweenMax.to($(this), 0.3, { x: 0, y: 0 });
});
hoverContain.mousemove(function (e) {
  followParallaxMouse(e, $(this));
});
function followParallaxMouse(e, target) {
  parallaxMouse(e, target, 80);
}
function parallaxMouse(e, target, movement) {
  var $this = target;
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  TweenMax.to(target, 0.3, {
    x: ((relX - $this.width() / 2) / $this.width()) * movement,
    y: ((relY - $this.height() / 2) / $this.height()) * movement,
  });
}

$(".tilt-hover").tilt({
  maxTilt: 20,
  perspective: 1200,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  scale: 1,
  speed: 2000,
  transition: true,
  reset: true,
});

function jsHome() {
  function splitText(element, type = null) {
    var mySplitText = new SplitText(element, {
        type: type == null ? "lines,words,chars" : type,
        charsClass: "char",
        wordsClass: "word",
      }),
      myCharsSplitText = mySplitText.chars;
    splittext = true;
  }
  function intro() {
    var intro = $(".intro"),
      intro_text = $(".intro__text p"),
      logo = $(".logo"),
      menuInfo = $(".btn_contact");

    splitText(intro_text, "words");
    $("div", intro_text).each(function (index, el) {
      if (index == 2 || index == 8 || index == 10) {
        $(this).addClass("special_word");
      }
    });
    // HOVER INTRO TEXT
    var rXP = 5;
    var rYP = 10;
    var textIntro = $(".intro__text");
    var wordIntro = $(".intro__text .word");
    var wordSpecial = $(".intro__text .special_word");
    var scrollIntro = $(".intro__scroll");

    function setDefaultTextHover() {
      TweenMax.set(wordSpecial, {
        textShadow:
          +rYP / 20 +
          "px " +
          rXP / 10 +
          "px rgba(238,29,82,.8), " +
          rXP / 10 +
          "px " +
          rYP / 20 +
          "px rgba(105,201,208,.8)",
      });
    }
    setDefaultTextHover();
    textIntro.mousemove(function (e) {
      rXP = e.pageX - this.offsetLeft - $(this).width() / 2;
      rYP = e.pageY - this.offsetTop - $(this).height() / 2;
      TweenMax.set(wordSpecial, {
        textShadow:
          +rYP / 80 +
          "px " +
          rXP / 120 +
          "px rgba(238,29,82,.8), " +
          rXP / 120 +
          "px " +
          rYP / 70 +
          "px rgba(105,201,208,.8)",
      });
    });
    textIntro.mouseover(function (event) {
      TweenMax.to(wordSpecial, 2, { autoAlpha: 1 });
    });

    var tlIntro = new TimelineMax({ delay: 1 });
    tlIntro
      .staggerFromTo(
        wordIntro,
        0.8,
        { autoAlpha: 0, rotationX: 90, transformOrigin: "bottom", y: "60%" },
        { autoAlpha: 1, rotationX: 0, y: "0%" },
        0.05,
        "-=0.6"
      )
      .from(scrollIntro, 0.8, { y: -100, height: 0, autoAlpha: 0 }, "-=0.3");
    tlIntro.reverse();

    // var timeout;
    // if ($(".load").hasClass("is-hide")) {
    //   timeout = 4000;
    //   $(".load").removeClass("is-hide");
    // } else {
    //   timeout = 1000;
    // }
    setTimeout(function () {
      tlIntro.restart();
    }, 1000);
  }
  intro();

  $("#particles-js").css({
    background: "#000",
  });
}

jsHome();

const $bigBall = document.querySelector(".cursor__ball--big");
const $hoverables = document.querySelectorAll(".intro__text p");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4,
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
}
