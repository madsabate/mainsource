$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }
    });
});

window.sr = ScrollReveal();

// Parallax images, Landing content
sr.reveal('.parallax', { origin: 'top'});
sr.reveal('.landingContent', { origin: 'left'}, 100);

//About images
sr.reveal('.aboutContent', {duration: 500}, 100);
sr.reveal('.aboutImg', {duration: 1000}, 200);

//Completed projects
sr.reveal('.completedProjects', {origin: 'left'}, 100);

//location
sr.reveal('#location', {origin: 'left'}, 100);

//Contact
sr.reveal('.contactUs', {origin: 'left'}, 100);

//Google Map API
function initMap() {
    var uluru = {lat: 40.7194581, lng: -74.1871191};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
    });
    var marker = new google.maps.Marker ({
        position: uluru,
        map: map,
        title: '59-61 Poinier Street, Newark NJ 07144'
    });

    var link = 'https://www.google.com/maps/place/59+Poinier+St+%2361,+Newark,+NJ+07114/@40.7193462,-74.1882161,17z/data=!3m1!4b1!4m5!3m4!1s0x89c253117dd70c23:0xce92b35656e74785!8m2!3d40.7193422!4d-74.1860274'

    marker.addListener('click', function () {
        window.open(link, '_blank');
    });
}

$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});