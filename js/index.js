var ELEMENTS = {
    $logo: $('#logo'),
    $littleLogo: $('#logo-little'),
    $togglerColors: $('.toggler#colors'),
    $togglerKT: $('.toggler#kt'),
    $togglerSquigglyLoader: $('.toggler#squiggly'),
    $togglerAlwaysSquiggly: $('.toggler#squiggly2'),
    $togglerLoaderAnimation: $('.toggler#loader'),
    $togglerPurple: $('.toggler#purple'),
    $togglerk1b1b0t: $('.toggler#k1b1b0t'),
    $togglerUI: $('.toggler#ui-toggle'),
    $UI: $('.ui'),
    $PUNCH: $('#kb-punch')
};

var CLASSES = {
    onlyWhite: 'no-extra-colors',
    alwaysKT: 'always-k-t',
    squiggly: 'squiggly',
    alwaysSquiggly: 'always-squiggly',
    loader: 'loader',
    turnToName: 'full-logo',
    activeButton: 'toggler-active',
    purpleText: 'purple',
    k1b1b0t: 'k1b1b0t',
    show: 'visible'
};

$( document ).ready(function() {
  let searchParams = new URLSearchParams(window.location.search);
  const customPunch = searchParams.get('punch');
    const hideBtns = searchParams.get('showButtons') === 'false';
  if (customPunch) {
      ELEMENTS.$PUNCH.text(customPunch);
  }
    
    if (hideBtns) {
        ELEMENTS.$togglerUI.hide();
    }
});

var refreshIntervalId = changeBetween();
var loaderRefreshIntervalId = null;
changeBetween2();

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
});

ELEMENTS.$togglerAlwaysSquiggly.click(function() {
    ELEMENTS.$logo.toggleClass(CLASSES.alwaysSquiggly);
    ELEMENTS.$togglerAlwaysSquiggly.toggleClass(CLASSES.activeButton);
});

ELEMENTS.$togglerPurple.click(function() {
    ELEMENTS.$logo.toggleClass(CLASSES.purpleText);
    ELEMENTS.$togglerPurple.toggleClass(CLASSES.activeButton);
});

ELEMENTS.$togglerUI.click(function() {
    ELEMENTS.$UI.toggleClass(CLASSES.show);
    ELEMENTS.$togglerUI.toggleClass(CLASSES.activeButton);
});

ELEMENTS.$togglerk1b1b0t.click(function() {
    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
        refreshIntervalId = null;
    } else {
        refreshIntervalId = changeBetween();
    }

    toggleK1b1b0t(ELEMENTS.$logo);
    ELEMENTS.$togglerk1b1b0t.toggleClass(CLASSES.activeButton);
})

ELEMENTS.$togglerLoaderAnimation.click(function() {
    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
        refreshIntervalId = null;
        ELEMENTS.$logo.addClass(CLASSES.loader);
        ELEMENTS.$PUNCH.removeClass(CLASSES.show);
        // loaderRefreshIntervalId = changeBits();
    } else {
        clearInterval(loaderRefreshIntervalId);
        loaderRefreshIntervalId = null;
        refreshIntervalId = changeBetween();
        ELEMENTS.$logo.removeClass(CLASSES.loader);
        ELEMENTS.$PUNCH.addClass(CLASSES.show);
    }
    ELEMENTS.$logo.removeClass(CLASSES.turnToName);
    ELEMENTS.$togglerLoaderAnimation.toggleClass(CLASSES.activeButton);
});

function changeBetween() {
    ELEMENTS.$logo.removeClass(CLASSES.turnToName);

    return setInterval(function() {
        ELEMENTS.$logo.toggleClass(CLASSES.turnToName);
    }, 4000);
}

function changeBits() {
    return setInterval(function() {
        const allOnes = ELEMENTS.$logo.find('.shape-one');
        const allZeros = ELEMENTS.$logo.find('.shape-zero');

        // change ones to zeros
        allOnes.removeClass('shape-one').addClass('shape-zero');

        // change zeros to ones
        allZeros.removeClass('shape-zero').addClass('shape-one');
    }, 250);
}

function changeBetween2() {
    ELEMENTS.$littleLogo.removeClass('CLASSES.k1b1b0t');

    return setInterval(function() {
        toggleK1b1b0t(ELEMENTS.$littleLogo);
    }, 10000);
}

function toggleK1b1b0t(element) {
    if (element.hasClass(CLASSES.k1b1b0t)) {
            element
                .removeClass(CLASSES.k1b1b0t)
                .delay( 800 )
                .queue(function(next) {
                $(this).addClass(CLASSES.turnToName);
                next();
            });
        } else {
            element
                .removeClass(CLASSES.turnToName)
                .delay( 800 )
                .queue(function(next) {
                $(this).addClass(CLASSES.k1b1b0t);
                next();
            });
        }
}
