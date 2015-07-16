# Toggle css bookmarklet

#### Put inside your bookmarks

```js
javascript:var b=document.body,c=b.hasAttribute("data-css-disabled");c?b.removeAttribute("data-css-disabled"):b.setAttribute("data-css-disabled","");if(c)d=document.querySelectorAll("[data-css-storage]"),[].slice.call(d).forEach(function(a){"STYLE"===a.tagName?a.innerHTML=f(a):"LINK"===a.tagName?a.disabled=!1:a.style.cssText=f(a)});else{var d=document.querySelectorAll("[style], link, style");[].slice.call(d).forEach(function(a){"STYLE"===a.tagName?(g(a,a.innerHTML),a.innerHTML=""):"LINK"===a.tagName?(g(a,""),a.disabled=!0):(g(a,a.style.cssText),a.style.cssText="")})}function g(a,e){a.setAttribute("data-css-storage",e)}function f(a){var e=a.getAttribute("data-css-storage");a.removeAttribute("data-css-storage");return e};
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
