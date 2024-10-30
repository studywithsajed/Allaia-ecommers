  /*Preloader */
  
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  /*Preloader */
 
/* Banner slider*/
  $(document).ready(function(){
    $(".banner-slider").owlCarousel({
      items: 1,            // Display one item at a time
      loop: true,          // Loop through banners
      autoplay: true,      // Enable autoplay
      autoplayTimeout: 5000, // Time between slides (in ms)
      nav: true,           // Show navigation arrows
      dots: true,          // Show pagination dots
      animateOut: 'fadeOut', // Optional: Adds fade-out effect
      autoplayHoverPause: true // Pause on hover
    });
  });

  // toggleBar menu 
  const mobile_nav = document.querySelector(".togle-bar-btn");

  const nav_header = document.querySelector(".header-area")

  const toggleNavbar = () => {
    nav_header.classList.toggle("active")
  }

  mobile_nav.addEventListener("click", () => toggleNavbar());

  // Optional: Add solid background on scroll stacky header
  window.addEventListener('scroll', () => {
      const header = document.querySelector('.header-area');
      header.classList.toggle('scrolled', window.scrollY > 50);
  });




/*scroll bar*/
 $(window).on('scroll', function () {
   if ($(this).scrollTop() > 100) {
     $('#scrollToTop').fadeIn();
   } else {
     $('#scrollToTop').fadeOut();
   }
 });

 // Scroll to top when button is clicked
 $('#scrollToTop').on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: 0
   }, 'slow');
 });
 
/*scroll bar*/