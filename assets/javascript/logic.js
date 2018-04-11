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

// Parallax, Landing content
sr.reveal('.parallax', { origin: 'top'});
sr.reveal('.landingContent', { origin: 'left'}, 100);

//About images
sr.reveal('.aboutContent', {duration: 500}, 100);
sr.reveal('.aboutImg', {duration: 1000}, 200);

//Completed projects
sr.reveal('.completedProjects', {origin: 'left'}, 100);

//Contact
sr.reveal('.contactUs', {origin: 'left'}, 100);