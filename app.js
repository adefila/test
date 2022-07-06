

//alert('Welcome to LEUMAS-TECH')

// Navigation padding on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.fontSize = "15px";
        document.getElementById("navbar").style.padding = "0.6rem";
        document.getElementById("navbar").style.backgroundColor = "#2e424d";
        document.getElementById("navbar").style.filter(opacity = 0.5)

    } else {
        document.getElementById("navbar").style.fontSize = "20px";
        document.getElementById("navbar").style.padding = "0.9rem";
        document.getElementById("navbar").style.backgroundColor = "transparent"
        document.getElementById("navbar").style.boxShadow = "none"
    }
}






// back to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return true;
});


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// data-aos
AOS.init(
    {
        duration: 3000,
        delay: 400,

    }
)

// filiter
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

