/*!
 * Shadowcery
 * Copyright 2016 Dylan Hepworth (dylanhepworth.com)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)*/
(function($) {
    $.fn.shadowcery = function(options) {
    
    var settings = $.extend({
        color: "#838383",
        horizontal: 1,
        vertical: 1,
        opacity: 0.8,
        blur: 0.3,
        length: 20,
        delay: 0
    }, options);
    
    var domText = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN'],
        shadowColor = hexRgb(settings.color),
        css = "";
    
    if (domText.indexOf(this[0].tagName) !== -1)
        var shadowType = "text-shadow";
    else
        var shadowType = "box-shadow";
    
    function hexRgb(color) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    for (i = 1, h = settings.horizontal, v = settings.vertical, k = settings.opacity; i <= settings.length; i++, h = h + settings.horizontal, v = v + settings.vertical, k = k - 0.014) {
        if (k <= 0)
            k = 0.01;

        if (i === settings.length)
            var css = css + h + "px " + v + "px " + settings.blur + "px rgba(" + shadowColor['r'] + "," + shadowColor['g'] + "," + shadowColor['b'] + "," + k + ")"; 
        else
            var css = css + h + "px " + v + "px " + settings.blur + "px rgba(" + shadowColor['r'] + "," + shadowColor['g'] + "," + shadowColor['b'] + "," + k + "),"; 
    }

    if (shadowType === "text-shadow")
        return this.delay(settings.delay).css({ "text-shadow":  css });    
    else (shadowType === "box-shadow")
        return this.delay(settings.delay).css({ "box-shadow":  css });    
    };
}(jQuery));
