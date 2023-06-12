document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  });
  
  const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
  const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    hover: true
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    
  });

  $(document).ready(function(){
    $('.carousel').carousel();
  });
  