$(document).ready(function(){  //make slide show appear on the page automatically. 

 

 var slideIndex = 1;
 showSlides(slideIndex);

 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 // Thumbnail image controls
 function currentSlide(n) {
  showSlides(slideIndex = n);
 }

 function showSlides() {
   var i;
     var slides = document.getElementsByClassName("mySlides");
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"; 
  }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1} 
     slides[slideIndex-1].style.display = "block"; 
     setTimeout(showSlides, 2000); // Change image every 2 seconds

}
});



//change the colour of the body and background
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

