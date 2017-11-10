var refreshIntervalId = changeBetween();
var _changeZerosAndOnes;

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

function changeZerosAndOnes() {
    return setInterval(function() {
        var ones = $('.shape-one');
        var zeros = $('.shape-zero');
        
        ones.removeClass('shape-one').addClass('shape-zero');
        zeros.removeClass('shape-zero').addClass('shape-one');
    }, 500);
}
