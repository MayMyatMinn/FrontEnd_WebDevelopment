$(document).ready(function(){
    // Show or hide the button based on the scroll position
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#scrollToTopBtn').fadeIn(); // Show button when scrolling down 200px
        } else {
            $('#scrollToTopBtn').fadeOut(); // Hide button when at the top
        }
    });

    // Scroll to the top when the button is clicked
    $('#scrollToTopBtn').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 800); // Smooth scroll to top in 800ms
        return false;
    });
});
