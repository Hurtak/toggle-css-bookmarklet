# toogle-styles-bookmarklet


### Put inside your bookmarks

```js
javascript:var b=document.body,c=b.hasAttribute("data-css-disabled");c?b.removeAttribute("data-css-disabled"):b.setAttribute("data-css-disabled","");if(c){var d=document.querySelectorAll("[data-css-storage]");[].slice.call(d).forEach(function(a){"STYLE"===a.tagName?a.innerHTML=f(a):"LINK"===a.tagName?a.disabled=!1:a.style.cssText=f(a)})}else d=document.querySelectorAll("[style], link, style"),[].slice.call(d).forEach(function(a){"STYLE"===a.tagName?(g(a,a.innerHTML),a.innerHTML=""):"LINK"===a.tagName?(g(a,""),a.disabled=!0):(g(a,a.style.cssText),a.style.cssText="")});function g(a,e){a.setAttribute("data-css-storage",e)}function f(a){var e=a.getAttribute("data-css-storage");a.removeAttribute("data-css-storage");return e};
```

### Tweet sized bookmarklet (only disables styles)
```js
javascript:[].slice.call(document.querySelectorAll("link,style,[style]")).forEach(function(a){a.style.cssText?a.style.cssText="":a.outerHTML=""})
```

### Code

```js
    var attributeStorage = 'data-css-storage';
    var attributeDisabled = 'data-css-disabled';

    var disabled = areStylesDisabled();
    if (disabled) {
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
    } else {
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
```
