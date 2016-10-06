// BACK BUTTON //
$(document).ready(function () {
    $('.backButton').css('position', 'relative');
    $('.backButton').css('width', '25%');
    $('.backButton').css('left', '1%');
});

$('.backButton').mouseover(function () {
    $(this).css('box-shadow', '1px 1px 10px 3px #901818');
    $(this).css('border', 'solid RGBA(213,203,201,0.65) 0.2pc');
});

$('.backButton').mouseout(function () {
    $(this).css('box-shadow', '1px 1px 10px 1px transparent');
    $(this).css('border', 'solid RGB(213, 203, 201) 0.1pc');
});
// END OF BACK BUTTON //