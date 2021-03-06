
//PAGE LOADER
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});


//MENU BURGER
const menuicon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});


//SCROLLTOP BUTTON
mybutton = document.querySelector(".boutonScrollTop");
mybutton.classList.add('noDisplay');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.classList.remove('noDisplay');
  } else {
    mybutton.classList.add('noDisplay');
  }
}
function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
};


//REVEAL ON SCROLL
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  var revealLeft = document.querySelectorAll('.revealLeft');
  var revealRight = document.querySelectorAll('.revealRight');
  var reveal2 = document.querySelectorAll('.reveal2');
  var reveal3 = document.querySelectorAll('.reveal3');
  var reveal4 = document.querySelectorAll('.reveal4');
  var revealimg = document.querySelectorAll('.revealimg');
  var revealimgLeft = document.querySelectorAll('.revealimgLeft');
  var revealimgRight = document.querySelectorAll('.revealimgRight');
  var revealimg2 = document.querySelectorAll('.revealimg2');


    for (var i = 0 ; i < reveals.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }

    for (var i = 0 ; i < revealLeft.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = revealLeft[i].getBoundingClientRect().top;
      var revealPoint = 200;

      if (revealTop < windowHeight - revealPoint){
        revealLeft[i].classList.add('active');
      }
      else{
        revealLeft[i].classList.remove('active');
      }
    }

    for (var i = 0 ; i < revealRight.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = revealRight[i].getBoundingClientRect().top;
      var revealPoint = 200;

      if (revealTop < windowHeight - revealPoint){
        revealRight[i].classList.add('active');
      }
      else{
        revealRight[i].classList.remove('active');
      }
    }
    
    for (var i = 0 ; i < revealimg.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = revealimg[i].getBoundingClientRect().top;
      var revealPoint = 250;

      if (revealTop < windowHeight - revealPoint){
        revealimg[i].classList.add('active');
      }
    }

    for (var i = 0 ; i < revealimg2.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = revealimg2[i].getBoundingClientRect().top;
      var revealPoint = 270;

      if (revealTop < windowHeight - revealPoint){
        revealimg2[i].classList.add('active');
      }
    }

    for (var i = 0 ; i < revealimgLeft.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = revealimgLeft[i].getBoundingClientRect().top;
      var revealPoint = 250;

      if (revealTop < windowHeight - revealPoint){
        revealimgLeft[i].classList.add('active');
      }
    }

    for (var i = 0 ; i < revealimgRight.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = revealimgRight[i].getBoundingClientRect().top;
      var revealPoint = 250;

      if (revealTop < windowHeight - revealPoint){
        revealimgRight[i].classList.add('active');
      }
    }
}  
