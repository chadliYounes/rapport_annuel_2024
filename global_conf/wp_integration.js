"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function t(e){e=e||"",(e instanceof URLSearchParams||e instanceof t)&&(e=e.toString()),this[l]=a(e)}function n(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,function(e){return t[e]})}function i(e){return decodeURIComponent(e.replace(/\+/g," "))}function r(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return d&&(n[e.Symbol.iterator]=function(){return n}),n}function a(e){var t={};if("object"===("undefined"==typeof e?"undefined":_typeof(e))){for(var n in e)if(e.hasOwnProperty(n)){var r="string"==typeof e[n]?e[n]:JSON.stringify(e[n]);o(t,n,r)}}else{0===e.indexOf("?")&&(e=e.slice(1));for(var a=e.split("&"),s=0;s<a.length;s++){var c=a[s],l=c.indexOf("=");-1<l?o(t,i(c.slice(0,l)),i(c.slice(l+1))):c&&o(t,i(c),"")}}return t}function o(e,t,n){t in e?e[t].push(""+n):e[t]=[""+n]}var s=e.URLSearchParams?e.URLSearchParams:null,c=s&&"a=1"===new s({a:1}).toString(),l="__URLSearchParams__",u=t.prototype,d=!(!e.Symbol||!e.Symbol.iterator);if(!s||!c){u.append=function(e,t){o(this[l],e,t)},u["delete"]=function(e){delete this[l][e]},u.get=function(e){var t=this[l];return e in t?t[e][0]:null},u.getAll=function(e){var t=this[l];return e in t?t[e].slice(0):[]},u.has=function(e){return e in this[l]},u.set=function(e,t){this[l][e]=[""+t]},u.toString=function(){var e,t,i,r,a=this[l],o=[];for(t in a)for(i=n(t),e=0,r=a[t];e<r.length;e++)o.push(i+"="+n(r[e]));return o.join("&")},e.URLSearchParams=s&&!c?new Proxy(s,{construct:function(e,n){return new e(new t(n[0]).toString())}}):t;var p=e.URLSearchParams.prototype;p.polyfill=!0,p.forEach=p.forEach||function(e,t){var n=a(this.toString());Object.getOwnPropertyNames(n).forEach(function(i){n[i].forEach(function(n){e.call(t,n,i,this)},this)},this)},p.sort=p.sort||function(){var e,t,n,i=a(this.toString()),r=[];for(e in i)r.push(e);for(r.sort(),t=0;t<r.length;t++)this["delete"](r[t]);for(t=0;t<r.length;t++){var o=r[t],s=i[o];for(n=0;n<s.length;n++)this.append(o,s[n])}},p.keys=p.keys||function(){var e=[];return this.forEach(function(t,n){e.push([n])}),r(e)},p.values=p.values||function(){var e=[];return this.forEach(function(t){e.push([t])}),r(e)},p.entries=p.entries||function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},d&&(p[e.Symbol.iterator]=p[e.Symbol.iterator]||p.entries)}}("undefined"!=typeof global?global:"undefined"!=typeof window?window:void 0),window.WP=window.WP||{},window.WP.globalVars={},window.WP.contents={},window.WPClass={};var webpublicationNamespace,w;webpublicationNamespace=w={Class:{},Main:{},Param:{viewBody:document.body},Utils:{}},function(e){function t(){this.os={name:a,version:a},this.device={type:a},this.browser={name:a,version:a},p.call(this),this.device.type=this.getResolvedDeviceType(),u[this.os.name]&&(this.os.version=u[this.os.name]()),d[this.browser.name]&&(this.browser.version=d[this.browser.name]())}var n={IOS:"iOS",ANDROID:"android",BLACKBERRY:"blackberry",FIREFOX:"firefox",TIZEN:"tizen",WINDOWS:"windows",MAC:"mac",LINUX:"linux",CHROME_OS:"cros"},i={SAFARI:"safari",CHROME:"chrome",FIREFOX:"firefox",ANDROID:"android",TIZEN:"tizen",BLACKBERRY:"blackberry",IE:"ie",EDGE:"edge"},r={PHABLET:"phablet",TABLET:"tab",PHONE:"phone",DESKTOP:"desktop"},a="unknown",o=["android","blackberry","chrome","edge","firefox","ipad","iphone","linux","mac os","mobile","phone","safari","tablet","tizen","touch","trident","windows","cros"],s={},c=navigator.userAgent.toLowerCase();for(var l in o)s[o[l]]=c.indexOf(o[l])!==-1;var u={iOS:function(){return(/CPU.*OS ([0-9]{1,5})/i.exec(navigator.userAgent)||["",a])[1]},android:function(){return(/Android ([0-9.]+)/i.exec(navigator.userAgent)||["",a])[1]},windows:function(){var e=(/Windows Phone ([0-9.]+)/i.exec(navigator.userAgent)||["",a])[1];if(e!==a)return e;var t=(/Windows NT ([0-9.]+)/i.exec(navigator.userAgent)||["",a])[1];switch(t){case"10.0":return"10";case"6.3":return"8.1";case"6.2":return"8";case"6.1":return"7";case"6.0":return"Vista";case"5.2":case"5.1":return"XP";case"5.0":return"2000";default:return a}},mac:function(){var e=/Mac OS.* ([0-9_]+)/i.exec(navigator.userAgent);return e[1]?e[1].split("_").slice(0,2).join("."):a}},d={chrome:function(){return parseInt((/Chrome\/([0-9]+)/.exec(navigator.userAgent)||["",a])[1])},firefox:function(){return parseInt((/Firefox\/([0-9]+)/.exec(navigator.userAgent)||["",a])[1])},ie:function(){var e=(/rv\:([0-9]+)/.exec(navigator.userAgent)||["",a])[1];return e===a&&(e=(/IEMobile\/([0-9]+)/.exec(navigator.userAgent)||["",a])[1]),e===a&&(e=(/MSIE\s([0-9]+)/.exec(navigator.userAgent)||["",a])[1]),parseInt(e,10)},edge:function(){var e=(/Edge\/([0-9]+)\./.exec(navigator.userAgent)||["",a])[1];return parseInt(e,10)},safari:function(){return parseFloat((/Version\/([0-9]+\.[0-9]+)/.exec(navigator.userAgent)||["",a])[1])}},p=function(){var e=Math.max(document.body.getBoundingClientRect().width,document.body.getBoundingClientRect().height);if((s.iphone||s.ipad)&&!s.trident)return this.os.name=n.IOS,this.device.type=r.TABLET,this.browser.name=i.SAFARI,void(s.iphone?this.device.type=r.PHONE:e<750&&(this.device.type=r.PHABLET));if(s["mac os"]&&!s.trident){this.os.name=n.MAC,this.device.type=r.DESKTOP;var t=navigator.maxTouchPoints>0;return t&&(this.os.name=n.IOS,this.device.type=r.PHONE,e>750&&(this.device.type=r.TABLET)),void(s.chrome?this.browser.name=i.CHROME:s.firefox?this.browser.name=i.FIREFOX:this.browser.name=i.SAFARI)}return s.windows&&(this.os.name=n.WINDOWS,s.edge?(this.os.name=n.WINDOWS,this.browser.name=i.EDGE):s.chrome?this.browser.name=i.CHROME:s.firefox?this.browser.name=i.FIREFOX:this.browser.name=i.IE,s.mobile||s.phone?this.device.type=r.PHONE:this.device.type=r.DESKTOP),s.linux&&(this.os.name=n.LINUX,s.chrome?this.browser.name=i.CHROME:s.firefox&&(this.browser.name=i.FIREFOX),this.device.type=r.DESKTOP),s.tizen?(this.os.name=n.TIZEN,void(this.browser.name=i.TIZEN)):s.blackberry?(this.os.name=n.BLACKBERRY,void(this.browser.name=i.BLACKBERRY)):(s.android&&!s.trident?(this.os.name=n.ANDROID,this.device.type=r.TABLET,s.chrome?this.browser.name=i.CHROME:s.firefox?this.browser.name=i.FIREFOX:this.browser.name=i.ANDROID):s.firefox&&(s.mobile||s.tablet)&&(this.os.name=n.FIREFOX,this.browser.name=i.FIREFOX),s.mobile?this.device.type=r.PHONE:this.device.type!==r.DESKTOP&&(e/window.devicePixelRatio<750?this.device.type=r.PHABLET:e/window.devicePixelRatio<=1280?this.device.type=r.TABLET:this.device.type=r.DESKTOP),s.cros?(this.os.name=n.CHROME_OS,void(this.browser.name=i.CHROME)):void 0)};t.prototype.getResolvedDeviceType=function(){var e=new URLSearchParams(window.location.search),t=e.get("deviceType");return t?t:this.device.type},t.prototype.isDesktop=function(){return this.device.type===r.DESKTOP},t.prototype.isPhone=function(){return this.device.type===r.PHONE},t.prototype.isTablet=function(){return this.device.type===r.TABLET||this.device.type===r.PHABLET},t.prototype.isPhablet=function(){return this.device.type===r.PHABLET},t.prototype.isUnknown=function(){return this.device.type===a},t.prototype.isIE=function(){return this.browser.name===i.IE},t.prototype.OS=n,t.prototype.BROWSER=i,t.prototype.FORMAT=r,t.prototype.UNKNOWN=a,e.Class.UserAgentManager=t}(webpublicationNamespace),function(e){var t={BUTTON:"button",IMAGE:"image",EMBED:"embed",FULLSCREEN:"fullscreen"};WP.getUrlData=function(){for(var e={},t=location.search.replace("?","").split("&"),n=0;n<t.length;n++){var i=t[n].split("=");e[i[0]]=i[1]}return e},WP.addUtm=function(e){var t=WP.getUrlData();for(var n in t)0===n.indexOf("utm_")&&(e+=e.indexOf("?")!==-1?"&"+n+"="+t[n]:"?"+n+"="+t[n]);return e},WP.replaceFunction=function(e,t){return"undefined"!=typeof WP.globalVars[t]?WP.globalVars[t]:e},WP.metaViewportDefiner=function(){var e=[],t=window.devicePixelRatio;if(t||(t=window.screen.deviceXDPI/window.screen.logicalXDPI),"chrome"===WP.userAgent.browser.name)"phone"===WP.userAgent.device.type?this.defaultViewportScale=1/Math.min(t,2):this.defaultViewportScale=1;else if("android"===WP.userAgent.os.name){var n;n="phone"===WP.userAgent.device.type?this.getBestDPIAndroid():this.getBestDPIAndroid(!0),this.defaultViewportScale=1/Math.round(n.scale),e.push("target-densitydpi="+n.dpi),document.querySelector("html").style.fontSize=13.5*n.scale+"px"}else this.defaultViewportScale=1/t;this.defaultViewportScale=1,e.push("initial-scale="+this.defaultViewportScale),e.push("minimum-scale="+this.defaultViewportScale),e.push("maximum-scale="+this.defaultViewportScale),e.push("user-scalable=no");var i=document.createElement("meta");i.setAttribute("name","viewport"),i.setAttribute("content",e.join(",")),(document.head||document.getElementsByTagName("head")[0]).appendChild(i)},WP.XMLPubInfo=function(){WP.path.pubInfo=WP.path.domain+"publication/contents/pubinfo.xml";var e=new XMLHttpRequest;e.open("get",WP.path.pubInfo,!1),e.onreadystatechange=function(){if(4===e.readyState){var t=e.responseXML.getElementsByTagName("variables")[0].childNodes;WP.parseXmlForVariables(t),WP.path.XMLContents=e.responseXML.getElementsByTagName("contents")[0].getAttribute("url"),WP.path.XMLContents=WP.cleanVariables(WP.path.XMLContents),WP.XMLContents()}},e.send()},WP.XMLContents=function(){var e=new XMLHttpRequest;e.open("get",WP.path.XMLContents,!1),e.onreadystatechange=function(){if(4===e.readyState){var t=e.responseXML.getElementsByTagName("variables")[0].childNodes;WP.parseXmlForVariables(t);for(var n=e.responseXML.getElementsByTagName("contents")[0].getElementsByTagName("content"),i=n.length;i--;){var r=n[i].getAttribute("id"),a=n[i].getAttribute("path"),o=n[i].getAttribute("prefix"),s=n[i].getAttribute("ext");null!==o&&(a+=o),null!==s&&(a+=(null===o?"page":"")+"."+s),WP.contents[r]=WP.cleanVariables(a)}}},e.send()},WP.cleanVariables=function(e){return e=e.replace(/\$([^\$]*)\$/g,WP.replaceFunction),e=e.replace(/^~\//,WP.path.domain+"publication/")},WP.parseXmlForVariables=function(e){for(var t=e.length;t--;)if(e[t].nodeType!==e[t].TEXT_NODE){var n=e[t].getAttribute("value");WP.globalVars[e[t].tagName]=n}for(var i in WP.globalVars)WP.globalVars[i]=WP.cleanVariables(WP.globalVars[i])},WP.popupFullscreen=function(e){if("Microsoft Internet Explorer"===navigator.appName&&"MacPPC"!==navigator.platform)window.open(e,"Reader","fullscreen=no");else try{var t=window.open(e,null,"height="+screen.availHeight+"px,width="+screen.availWidth+"px,top=0,left=0,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0");t.resizeTo(screen.availWidth,screen.availHeight)}catch(n){}},WP.animation=function(e){e=e||{},e.backgroundColor=e.backgroundColor||"ffffff",e.opacity=e.opacity||!0,e.sizeHeight=e.sizeHeight||243,e.sizeWidth=e.sizeWidth||313,e.pages=e.pages||5,e.open=e.open||"popup",WP.XMLPubInfo(),WP.metaViewportDefiner();var t=WP.path.domain+"?version=html",n='<style type="text/css">';n+=".wp-animation-wrapper{display:inline;display: inline-block;height:"+e.sizeHeight+"px;overflow:hidden;width:"+e.sizeWidth+"px;*zoom:1;}",n+=".wp-animation-content{height:100%;white-space: nowrap;}",n+=".wp-animation-image{height: 100%;}",n+="</style>",n+="blank"===e.open?'<a class="wp-animation-wrapper" href="'+t+'" target="_blank">':'<a class="wp-animation-wrapper" href="javascript:WP.popupFullscreen(\''+t+"')\">",n+='<div class="wp-animation-content">';for(var i=0;i++<e.pages;)n+='<img src="'+WP.contents.thumbnails.replace("%num%",i)+'" class="wp-animation-image" />';n+="</div></a>";var r=0,a=0,o=function c(e,t,n){window.setTimeout(function(){e-a>10||e-a<-10?(n?a-=10:a+=10,document.getElementsByClassName("wp-animation-content")[0].style.marginLeft=-a+"px",c(e,t,n)):document.getElementsByClassName("wp-animation-content")[0].style.marginLeft=-e+"px"},t)},s=function(){r++,r>=e.pages?(r=0,o(0,1,!0)):o(r*document.getElementsByClassName("wp-animation-image")[0].width,16,!1)};window.setInterval(s,5e3),WP.write(n)},WP.image=function(e){e=e||{},e.sizeHeight=e.sizeHeight||243,e.sizeWidth=e.sizeWidth||300,e.open=e.open||"popup",WP.XMLPubInfo();var t="",n=WP.contents.thumbnails.replace("%num%",1);t+="blank"===e.open?'<a href="'+WP.path.domain+'" target="_blank">':"<a href=\"javascript:WP.popupFullscreen('"+WP.path.domain+"')\">",t+='<img src="'+n+'" border="0" width="'+e.sizeWidth+'" height="'+e.sizeHeight+'"/>',t+="</a>",WP.write(t)},WP.embed=function(e){e=e||{},e.embed=e.embed||t.FULLSCREEN;var n=WP.path.domain+"?version=html&vp=1&integration=true";switch(e.embed){case t.BUTTON:case t.IMAGE:WP.integrateClickable(e);break;case t.EMBED:WP.integrateEmbed(n,e);break;case t.FULLSCREEN:WP.integrateFullscreen(n);break;default:WP.integrateFullscreen(n)}},WP.integrateClickable=function(e){WP.addElementOnce("style","integration-button",WP.getClickableCss()),WP.addElementOnce("script","integration-button",WP.getClickableJs());var t=document.querySelector("#webpublication-iframe");t||WP.write('<iframe id="webpublication-iframe"></iframe>',e.parentId);var n=e.publicationUrl+"?version=html&vp=1&integration=true&backHome=true",i=WP.getClickableHTML(e,n);WP.write(i,e.parentId)},WP.getClickableCss=function(){return"\n    .clickableButton {\n      background-color: #333;\n      color: #fff;\n      padding: 8px;\n      border: none;\n      border-radius: 10px;\n      font-size: 16px;\n      cursor: pointer;\n    }\n\n    .clickableImageContainer {\n      display: flex;\n      flex-direction: column;\n      cursor: pointer;\n      width: 300px;\n    }\n\n    .clickableImage {\n      width: 300px;\n      height: 300px;\n      object-fit: cover;\n      border-radius: 10px;\n      border: solid 1px #f3f3f3;\n    }\n\n    .clickableImageText {\n      margin-top: 15px;\n      font-size: 18px;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n    }\n\n    #webpublication-iframe {\n      position: fixed;\n      inset: 0;\n      display: none;\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      border: 0;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n    }\n\n    #webpublication-iframe.isOpened {\n      display: block;\n      background: #fff no-repeat 50% 50%;\n      background-size: 249px;\n    }\n  "},WP.getClickableJs=function(){return"\n    const openIframe = (publicationUrl, url, isFullscreen) => {\n      const iframeElement = document.querySelector('#webpublication-iframe');\n      iframeElement.src = url;\n      iframeElement.style.backgroundImage = \"url('\" + publicationUrl + \"/publication/mobile/img/spinner.gif\" + \"')\";\n      iframeElement.classList.add('isOpened');\n      if (isFullscreen) {\n        if (iframeElement.requestFullscreen) {\n          iframeElement.requestFullscreen();\n        } else if (iframeElement.webkitRequestFullscreen) { /* Safari */\n          iframeElement.webkitRequestFullscreen();\n        }\n      }\n    };\n    const handleMessage = (e) => {\n      if (e.data.target === 'webpublication-integration') {\n        if (e.data.action === 'close') {\n          handleMessageClose();\n        }\n      }\n    };\n    const handleMessageClose = () => {\n      const iframeElement = document.querySelector('#webpublication-iframe');\n      if (document.fullscreenElement && document.exitFullscreen) {\n        document.exitFullscreen();\n      } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) { /* Safari */\n        document.webkitExitFullscreen();\n      }\n      iframeElement.src = '';\n      iframeElement.classList.remove('isOpened');\n    };\n    window.addEventListener('message', handleMessage);\n  "},WP.getClickableHTML=function(e,n){return e.embed===t.IMAGE?WP.getClickableImageHTML(e,n):WP.getClickableButtonHTML(e,n)},WP.getClickableImageHTML=function(e,t){var n=e.isFullscreen,i=e.buttonText,r=e.imageUrl,a=e.publicationUrl,o=i?'<span class="clickableImageText">'+i+"</span>":"";return'\n      <div class="clickableImageContainer" onclick="openIframe(\''+a+"', '"+WP.addUtm(t)+"', "+n+')">\n        <img class="clickableImage" src="'+r+'"/>\n        '+o+"\n      </div>\n    "},WP.getClickableButtonHTML=function(e,t){var n=e.isFullscreen,i=e.buttonText,r=e.publicationUrl;return'<button class="clickableButton" onclick="openIframe(\''+r+"', '"+WP.addUtm(t)+"', "+n+')">'+i+"</button>"},WP.integrateEmbed=function(e,t){t.height=t.height||"100%",t.width=t.width||"100%",t.height.endsWith("%")||t.height.endsWith("px")||(t.height+="px"),t.width.endsWith("%")||t.width.endsWith("px")||(t.width+="px");var n='<iframe\n      id="webpub-publication"\n      src="'+WP.addUtm(e)+'"\n      style="border: none; margin: 0; padding: 0; width: '+t.width+"; height: "+t.height+';"\n    ></iframe>';WP.write(n,t.parentId)},WP.integrateFullscreen=function(e){WP.metaViewportDefiner();var t=document.createElement("meta");t.setAttribute("name","HandheldFriendly"),t.setAttribute("content","true"),document.head.appendChild(t);var n=document.createElement("meta");n.setAttribute("name","apple-mobile-web-app-capable"),n.setAttribute("content","yes"),document.head.appendChild(n);var i=document.createElement("meta");i.setAttribute("name","format-detection"),i.setAttribute("content","no"),document.head.appendChild(i),WP.addElementOnce("style","integration-fullscreen",WP.getFullscreenModeCss());var r="border:none;height:100%;left:0;margin:0;padding:0;position:fixed;top:0;width:100%;",a='<iframe\n      id="webpub-publication"\n      height="100%"\n      width="100%"\n      frameBorder="0"\n      src="'+WP.addUtm(e)+'"\n      style="'+r+'"\n    ></iframe>';WP.write(a)},WP.getFullscreenModeCss=function(){return"\n    html body {\n      height:100%;\n      margin:0;\n      padding:0;\n      width:100%;\n    }\n\n    iframe {\n      border:none;\n      height:100%;\n      left:0;\n      margin:0;\n      padding:0;\n      position:fixed;\n      top:0;\n      width:100%;\n    }\n  "},WP.addElementOnce=function(e,t,n){var i=document.querySelector("#"+WP.getElementId(e,t));if(!i){var r=document.createElement(e);r.id=WP.getElementId(e,t),r.innerHTML=n,document.head.appendChild(r)}},WP.write=function(e,t){if(!t)return void document.write(e);var n=document.getElementById(t);n.innerHTML+=e},WP.getElementId=function(e,t){return e+"-"+t},WP.email=function(e){},WP.userAgent=new e.Class.UserAgentManager;var n="webpub-toogleFullscreen--hide",i="webpub-toogleFullscreen--parent",r="webpub-publication",a="";a+="."+i+"{border:none!important;bottom:0!important;height:auto!important;left:0!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;outline:none!important;padding:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important;}",a+="."+n+"{display:none!important;visibility:hidden!important;}",a+="#"+r+"."+i+"{height:100%!important;width:100%!important;}";var o=document.createElement("style");o.type="text/css",o.innerText=a,document.head.appendChild(o),window.addEventListener("message",function(e){var t;if(e.data&&"wp.fullscreenOn"===e.data){t=document.querySelectorAll("*");for(var a=0;a<t.length;a++)try{t[a].className+=" "+n}catch(o){console.log("fullscreen hide class could not be added to node",t[a])}var s=document.getElementById(r);do s.className=(s.className||"").replace(n,i),s=s.parentNode;while(s)}else if(e.data&&"wp.fullscreenOff"===e.data){t=document.querySelectorAll("."+n+", ."+i);for(var c=0;c<t.length;c++)t[c].className=t[c].className.replace(" "+n,"").replace(" "+i,"")}},!1)}(webpublicationNamespace);