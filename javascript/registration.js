// FORM BOXES //
$(document).ready(function () {
    $('.registrationFormBox').show(2000, 'swing');
    $('.pageContainer').css('color', 'RGB(213, 203, 201)');
});

$('.registrationFormBox').focusin(function () {
    $(this).css('background-color', 'RGBA(60, 56, 55, 0.65)');
    $(this).css('box-shadow', '1px 1px 10px 1px #901818');
});

$('.registrationFormBox').focusout(function () {
    $(this).css('background-color', 'transparent');
    $(this).css('box-shadow', '1px 1px 10px 1px transparent');
});

$('.registrationFormBox').mouseover(function () {
    $(this).css('box-shadow', '1px 1px 10px 3px #901818');
    $(this).css('border', 'solid RGBA(213,203,201,0.65) 0.18pc');
});

$('.registrationFormBox').mouseout(function () {
    $(this).css('box-shadow', '1px 1px 10px 1px transparent');
    $(this).css('border', 'solid #901818 0.13pc');
});
// END OF FORM BOXES //


// BUTTON //
$('#registrationButton').mouseover(function () {
    $(this).css('background-color', 'RGB(213,203,201)');
    $(this).css('border', 'solid #901818 0.1pc');
    $(this).css('color', '#901818');
    $(this).css('box-shadow', '1px 1px 10px 3px #901818');
});

$('#registrationButton').mouseout(function () {
    $(this).css('background-color', '#901818');
    $(this).css('border', 'solid RGB(213,203,201) 0.1pc');
    $(this).css('color', 'RGB(213,203,201)');
    $(this).css('box-shadow', '1px 1px 10px 3px transparent');
});
// END OF BUTTON //