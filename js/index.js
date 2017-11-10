var ELEMENTS = {
    $logo: $('#logo'),
    $togglerColors: $('.toggler#colors'),
    $togglerKT: $('.toggler#kt'),
    $togglerSquigglyLoader: $('.toggler#squiggly'),
    $togglerAlwaysSquiggly: $('.toggler#squiggly2'),
    $togglerLoaderAnimation: $('.toggler#loader')
};

var CLASSES = {
    onlyWhite: 'only-white',
    alwaysKT: 'always-k-t',
    squiggly: 'squiggly',
    alwaysSquiggly: 'always-squiggly',
    loader: 'loader',
    turnToName: 'shape-active',
    activeButton: 'toggler-active'
};

var refreshIntervalId = changeBetween();

ELEMENTS.$togglerColors.click(function() {
    ELEMENTS.$logo.toggleClass(CLASSES.onlyWhite);
    ELEMENTS.$togglerColors.toggleClass(CLASSES.activeButton);
});

ELEMENTS.$togglerKT.click(function() {
    ELEMENTS.$logo.toggleClass(CLASSES.alwaysKT);
    ELEMENTS.$togglerKT.toggleClass(CLASSES.activeButton);
});

ELEMENTS.$togglerSquigglyLoader.click(function() {
    ELEMENTS.$logo.toggleClass(CLASSES.squiggly);
    ELEMENTS.$togglerSquigglyLoader.toggleClass(CLASSES.activeButton);
})

ELEMENTS.$togglerAlwaysSquiggly.click(function() {
    ELEMENTS.$logo.toggleClass(CLASSES.alwaysSquiggly);
    ELEMENTS.$togglerAlwaysSquiggly.toggleClass(CLASSES.activeButton);
})

ELEMENTS.$togglerLoaderAnimation.click(function() {
    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
        refreshIntervalId = null;
        ELEMENTS.$logo.addClass(CLASSES.loader);
    } else {
        refreshIntervalId = changeBetween();
        ELEMENTS.$logo.removeClass(CLASSES.loader);
    }
    ELEMENTS.$logo.removeClass(CLASSES.turnToName);
    ELEMENTS.$togglerLoaderAnimation.toggleClass(CLASSES.activeButton);
})

function changeBetween() {
    ELEMENTS.$logo.removeClass(CLASSES.turnToName);

    return setInterval(function() {
        ELEMENTS.$logo.toggleClass(CLASSES.turnToName);
    }, 4000);
}
