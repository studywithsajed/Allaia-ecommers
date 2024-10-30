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
