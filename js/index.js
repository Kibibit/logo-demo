var refreshIntervalId = changeBetween();

$('.toggler#colors').click(function() {
    $('#logo').toggleClass('only-white');
});

$('.toggler#kt').click(function() {
    $('#logo').toggleClass('always-k-t');
});

$('.toggler#loader').click(function() {
    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
        refreshIntervalId = null;
        $('#logo').addClass('loader');
    } else {
        refreshIntervalId = changeBetween();
        $('#logo').removeClass('loader');
    }
    $('#logo').removeClass('shape-active');
})

function changeBetween() {
    $('#logo').removeClass('shape-active');

    return setInterval(function() {
        $('#logo').toggleClass('shape-active');
    }, 5000);
}
