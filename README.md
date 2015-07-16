# Toggle css bookmarklet

- Toogle css styles on your page easily with this bookmarklet
- Works on every sane browser

#### Put inside your bookmarks

```js
javascript:(function(){function d(a,b){a.setAttribute("data-css-storage",b)}function e(a){var b=a.getAttribute("data-css-storage");a.removeAttribute("data-css-storage");return b}var c=[];(function(){var a=document.body,b=a.hasAttribute("data-css-disabled");b?a.removeAttribute("data-css-disabled"):a.setAttribute("data-css-disabled","");return b})()?(c=document.querySelectorAll("[data-css-storage]"),[].slice.call(c).forEach(function(a){"STYLE"===a.tagName?a.innerHTML=e(a):"LINK"===a.tagName?a.disabled=!1:a.style.cssText=e(a)})):(c=document.querySelectorAll("[style], link, style"),[].slice.call(c).forEach(function(a){"STYLE"===a.tagName?(d(a,a.innerHTML),a.innerHTML=""):"LINK"===a.tagName?(d(a,""),a.disabled=!0):(d(a,a.style.cssText),a.style.cssText="")}))})();
```

#### Tweet sized bookmarklet (only disables styles)
- `134` characters
- `0` global variables
- `ES6`

```js
javascript:Array.from(document.querySelectorAll('link,style,[style]')).forEach(e=>{e.style.cssText?e.style.cssText='':e.outerHTML=''})
```

#### Tweet sized bookmarklet (only disables styles)
- `137` characters
- `3` global variables
- `ES5`

```js
javascript:x=document.querySelectorAll('link,style,[style]');for(i=x.length;i--;)a=x[i],a.style.cssText?a.style.cssText='':a.outerHTML=''
```
