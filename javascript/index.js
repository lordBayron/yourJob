$(document).ready(function () {
    $('#headerText').fadeOut().delay(250).fadeIn();
});

$('#loginButton').click(function () {
    $(this).attr('value', 'Logging in...');
});

// // LOGIN FORMS //
$('.loginFormBox').focusin(function () {
    $(this).css('background-color', 'RGBA(60, 56, 55, 0.65)');
    $(this).css('box-shadow', '1px 1px 10px 1px #901818');
});

$('.loginFormBox').mouseover(function () {
   $(this).css('box-shadow', '1px 1px 10px 1px #901818');
   $(this).css('border', 'solid #7b7a7b 0.13pc');
});

$('.loginFormBox').mouseout(function () {
    $(this).css('box-shadow', '1px 1px 10px 1px transparent');
    $(this).css('border', 'solid #901818 0.13pc');
});

$('.loginFormBox').blur(function () {
    $(this).css('background-color', 'transparent');
    $(this).css('box-shadow', '1px 1px 10px 1px transparent');
});
/* // END OF LOGIN FORMS // */

