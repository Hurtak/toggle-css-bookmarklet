// 137 characters, 3 global variables, ES5
javascript:x=document.querySelectorAll('link,style,[style]');for(i=x.length;i--;)a=x[i],a.style.cssText?a.style.cssText='':a.outerHTML=''

// 134 characters, 0 global variables, ES6
javascript:Array.from(document.querySelectorAll('link,style,[style]')).forEach(e=>{e.style.cssText?e.style.cssText='':e.outerHTML=''})
