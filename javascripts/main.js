!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=n.length,a=window.console=window.console||{};i--;)e=n[i],a[e]||(a[e]=t)}(),function(e,t,n){"use strict";var i=e.getElementById("menu"),a=e.getElementById("menu-button");i.setAttribute("aria-hidden","true"),i.setAttribute("aria-labelledby","menu-button"),a.addEventListener("click",function(){i.classList.contains("active")?(i.classList.remove("active"),i.setAttribute("aria-hidden","true"),a.setAttribute("aria-expanded","false")):(i.classList.add("active"),i.setAttribute("aria-hidden","false"),a.setAttribute("aria-expanded","true"))},!1),$$(".nav a")._.addEventListener("click",function(){i.classList.contains("active")&&(i.classList.remove("active"),i.setAttribute("aria-hidden","true"),a.setAttribute("aria-expanded","false"))})}(document,window),$.ready().then(function(){document.addEventListener("scroll",function(){var e=$(".index .navbar"),t=e.ownerDocument,n=t.defaultView||t.parentWindow,i=n.pageYOffset||t.documentElement.scrollTop;i>n.innerHeight/2?e.classList.remove("index"):i<n.innerHeight/2&&e.classList.add("index")}),document.dispatchEvent(new Event("scroll"))}),$.ready().then(function(){var e=$$(".cd-timeline-block"),t=document.defaultView||document.parentWindow;e.forEach(function(e){e.getBoundingClientRect().top>.75*t.innerHeight&&$$(".cd-timeline-img, .cd-timeline-content",e).forEach(function(e){e.classList.add("is-hidden")})}),t.addEventListener("scroll",function(){e.forEach(function(e){e.getBoundingClientRect().top<=.75*t.innerHeight&&$$(".cd-timeline-img, .cd-timeline-content",e).forEach(function(e){e.classList.remove("is-hidden"),e.classList.add("bounce-in")})})})});