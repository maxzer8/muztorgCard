const heart = $('.js-like');
const addTrash = $('.js-trash');
const popUp = $('.js-popUp');
const visiblePopUp = $('.js-popUp-visible');

heart.on('click', function () {
    if ($(this).hasClass('active')) $(this).removeClass('active');
    else $(this).addClass('active')
});


addTrash.on('click', function () {
    $(this).css('background', '#1e509a');
    $(this).text('В корзине');
});


popUp.on('click', function () {
    visiblePopUp.addClass('active');
});


visiblePopUp.on('click', function () {
    $(document).mouseup(function (e) {
        let div = $("#popup");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            visiblePopUp.removeClass('active');
        }
    });
});




