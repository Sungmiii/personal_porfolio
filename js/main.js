$(document).ready(function () {

    /*! Fades in page on load */
    $('body').css('display', 'none').fadeIn(600);
});

//video autoplay function
$(document).ready(function () {
    $('#video')[0].load()
});

$(document).ready(function () {
    /*  $('.hambuger').click(function(){
         $('.mobilehidden').slideToggle();
     }) */
    $('.hambuger:first-of-type').click(function () {
        $(this).toggleClass('active');
    })
    $('.hambuger:last-of-type').click(function () {
        $(this).toggleClass('responsive');
    }, function () {
        $('.mobilehidden').slideToggle();
    })

});

//desktop dropdown
$(document).ready(function () {
    $('#portDropdown').hover(function () {
        $('.dropdown-list', this).stop().slideDown(300);
    }, function () {
        $('.dropdown-list', this).stop().slideUp(300);
    })
})

// mobile hamburger menu subdrop down
$(document).ready(function () {
    $(document).on('click', '#mo-subdrop', function () {
        $('.mo_dropdownlist', this).stop().slideToggle(200);
    });
})

$(document).ready(function () {
    $(".multilink").click(function () {
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
})


