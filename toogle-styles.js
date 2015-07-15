'use strict';

var attributeStorage = 'data-css-storage';
var attributeDisabled = 'data-css-disabled';

var disabled = areStylesDisabled();
if (!disabled) {
    // disable styles
    var elements = document.querySelectorAll('[style], link, style');

    [].slice.call(elements).forEach(function(el) {
        if (el.tagName === 'STYLE') {
            saveToStorage(el, el.innerHTML);
            el.innerHTML = '';
        } else if (el.tagName === 'LINK') {
            saveToStorage(el, '');
            el.disabled = true;
        } else {
            saveToStorage(el, el.style.cssText);
            el.style.cssText = '';
        }
    });
} else {
    // re-enable styles
    var elements = document.querySelectorAll('[' + attributeStorage + ']');

    [].slice.call(elements).forEach(function(el) {
        if (el.tagName === 'STYLE') {
            el.innerHTML = getFromStorage(el);
        } else if (el.tagName === 'LINK') {
            el.disabled = false;
        } else {
            el.style.cssText = getFromStorage(el);
        }
    });
}

function saveToStorage(el, data) {
    el.setAttribute(attributeStorage, data);
}

function getFromStorage(el) {
    var data = el.getAttribute(attributeStorage);
    el.removeAttribute(attributeStorage);

    return data;
}

function areStylesDisabled() {
    var el = document.body;

    var disabled = el.hasAttribute(attributeDisabled);
    if (disabled) {
        el.removeAttribute(attributeDisabled);
    } else {
        el.setAttribute(attributeDisabled, '');
    }

    return disabled;
}
