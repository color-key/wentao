$(function () {
    // banner»¬¶¯
    var swiper = new Swiper('.swiper-screenshot', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
    });
    $('#gamechange').on('click', 'a', function () {
        var id = $(this).attr('data-id');
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').toggleClass('active');
        if (id == 'gameintro') {
            $('#gameintro').css('display', 'block');
            $('#gameimg').css('display', 'none');
        } else {
            $('#gameimg').css('display', 'block');
            $('#gameintro').css('display', 'none');
        }
    });
});