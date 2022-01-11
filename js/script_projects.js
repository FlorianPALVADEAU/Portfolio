
// //PAGE LOADER
// $(window).on("load", function () {
//     $(".loader-wrapper").fadeOut("slow");
// });


//MENU BURGER
const menuicon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", () => {
    navbar.classList.toggle("change");
    console.log('test')
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
}  
