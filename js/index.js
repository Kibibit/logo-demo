setInterval(function() {
    $('.zero-animation').toggleClass('turn-to-b');
    $('.one-animation').toggleClass('turn-to-i');
    $('#logo').toggleClass('active');
}, 5000);

$('.toggler#colors').click(function() {
    $('#logo').toggleClass('only-white');
});

$('.toggler#kt').click(function() {
    $('#logo').toggleClass('always-k-t');
});
