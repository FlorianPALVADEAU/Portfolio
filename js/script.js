
// //PAGE LOADER
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});


//MENU BURGER
const menuicon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", () => {
    navbar.classList.toggle("change");
    console.log('test')
});
    
    
//SLIDER
new Glide('.glide').mount();


mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvcGx2ZCIsImEiOiJja3Y0eWN0ZTgxMTBmMnZzMzk5b3piNHI1In0.oT3Wlk6SQ7B-mKHV61VMGQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/floplvd/ckv4xv4822tp415qmf7tm3wpj',
    center: [35, 47],
    speed: 0.6,
    zoom: 3 
});

//MAPBOX
const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [1.900330766926106, 48.80262283112147]
        },
        properties: {
          title: 'Jouars-Pontchartrain',
          description: 'Here is the city where i live !'
        }
      }
    ]
  };

  geojson.features.forEach(function (marker) {

    var el = document.createElement('div');
    el.className = 'marker';
    
    let tmpMarker = new mapboxgl.Marker(el)
    let tmpPopUp = new mapboxgl.Popup()
        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>')
    
    el.markerInstance = tmpMarker;
    
    tmpMarker
        .setLngLat(marker.geometry.coordinates)
        .setPopup(tmpPopUp)
        .addTo(map);
    
    el.addEventListener("click", e => {
        var pMap = document.querySelector('.pMap')
        let coords = e.target.markerInstance.getLngLat();
        pMap.classList.add('noDisplay')
        map.flyTo({
            bearing: 10,
            pitch: 50,
            center: [1.900330766926106, 48.80262283112147],
            zoom: 16,
            speed: 0.8,
        });
    });
    
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

    for (var i = 0 ; i < reveal2.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = reveal2[i].getBoundingClientRect().top;
      var revealPoint = 130;

      if (revealTop < windowHeight - revealPoint){
        reveal2[i].classList.add('active');
      }
      else{
        reveal2[i].classList.remove('active');
      }
    }

    for (var i = 0 ; i < reveal3.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = reveal3[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint){
        reveal3[i].classList.add('active');
      }
      else{
        reveal3[i].classList.remove('active');
      }
    }

    for (var i = 0 ; i < reveal4.length ; i++){

      var windowHeight = window.innerHeight;
      var revealTop = reveal4[i].getBoundingClientRect().top;
      var revealPoint = 180;

      if (revealTop < windowHeight - revealPoint){
        reveal4[i].classList.add('active');
      }
      else{
        reveal4[i].classList.remove('active');
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
