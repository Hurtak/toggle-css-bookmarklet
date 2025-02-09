# Toggle CSS Bookmarklet

![Gif how toggle-css-bookmarklet works](http://i.imgur.com/lIVMtwK.gif)

## Put inside your bookmarks

```js
javascript:(function(){function d(a,b){a.setAttribute("data-css-storage",b)}function e(a){var b=a.getAttribute("data-css-storage");a.removeAttribute("data-css-storage");return b}var c=[];(function(){var a=document.body,b=a.hasAttribute("data-css-disabled");b?a.removeAttribute("data-css-disabled"):a.setAttribute("data-css-disabled","");return b})()?(c=document.querySelectorAll("[data-css-storage]"),[].slice.call(c).forEach(function(a){"STYLE"===a.tagName?a.innerHTML=e(a):"LINK"===a.tagName?a.disabled=!1:a.style.cssText=e(a)})):(c=document.querySelectorAll("[style], link, style"),[].slice.call(c).forEach(function(a){"STYLE"===a.tagName?(d(a,a.innerHTML),a.innerHTML=""):"LINK"===a.tagName?(d(a,""),a.disabled=!0):(d(a,a.style.cssText),a.style.cssText="")}))})();
```
full source code: https://github.com/Hurtak/toggle-css-bookmarklet/blob/master/toggle-styles.js

## Tweet sized bookmarklet (only disables styles)
- `121` characters

```js
javascript:for(let e of document.querySelectorAll('link,style,[style]'))e.style.cssText?e.style.cssText='':e.outerHTML=''
```
