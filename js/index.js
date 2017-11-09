setInterval(function() {
    $('.zero-animation').toggleClass('turn-to-b');
    $('.one-animation').toggleClass('turn-to-i');
    $('#logo').toggleClass('active');
}, 5000);

$('.toggler').click(function() {
    $('#logo').toggleClass('only-white');
});
