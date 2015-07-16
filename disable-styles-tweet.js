x = document.querySelectorAll('link, style, [style]'), i = x.length;
while (i--) a=x[i], a.style[b = 'cssText'] ? a.style[b] = '' : a.outerHTML = ''
