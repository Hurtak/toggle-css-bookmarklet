[].slice.call($('link, style, [style]')).forEach(function(el) {
    el.style.cssText ? el.style.cssText = '' : el.outerHTML = '';
});