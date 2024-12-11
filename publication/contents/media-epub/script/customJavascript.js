!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=593)}({100:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){function o(t){return t instanceof r?t:new r(function(e){e(t)})}return new(r||(r=Promise))(function(r,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){t.done?r(t.value):o(t.value).then(s,a)}u((n=n.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){function r(t){return function(e){return n([t,e])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(s=2&r[0]?i.return:r[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,r[1])).done)return s;switch(i=0,s&&(r=[2&r[0],s.value]),r[0]){case 0:case 1:s=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,i=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){u=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){u.label=r[1];break}if(6===r[0]&&u.label<s[1]){u.label=s[1],s=r;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(r);break}s[2]&&u.ops.pop(),u.trys.pop();continue}r=e.call(t,u)}catch(t){r=[6,t],i=0}finally{o=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0}),e.MediaMode=void 0;var i;!function(t){t.TEXT="text",t.MEDIA="media"}(i||(i={}));var s;!function(t){t.SCALE_IGNORE_MARGIN="scaleIgnoreMargin",t.SCALE="scale",t.BANNER="banner"}(s||(s={})),e.MediaMode=s;var a=function(){function t(t,e,r,n){document.querySelector('meta[name="viewport"]').setAttribute("content","width=device-width, initial-scale=1.0"),this.pageElement=t,this.pageHeight=e,this.responsiveItemsRules=n,this.responsiveBlocks=this.getResponsiveBlocks(this.pageElement,r),this.overwriteAllResponsiveElementWidth(),!1===this.isCSSObjectFitSupported()&&this.addObjectFitFallback(),this.updateResponsiveElementsPositions()}return t.prototype.onWindowResize=function(){this.updateResponsiveElementsPositions()},t.prototype.getResponsiveBlocks=function(t,e){var r=this,n=t.querySelectorAll('[id*="_idContainer"]');return[].slice.call(n).sort(this.sortByTopBound(e)).map(function(t){return r.responsiveElementToBlockMapper(e,t)})},t.prototype.sortByTopBound=function(t){var e=this;return function(r,n){var o=e.getResponsiveElementClassName(r),i=e.getResponsiveElementClassName(n);return t[o].y1-t[i].y1}},t.prototype.getResponsiveElementClassName=function(t){var e=/.*(responsiveItem-[a-zA-Z\-]*[0-9]*_[0-9]*).*/;return t.className.match(e)[1]},t.prototype.responsiveElementToBlockMapper=function(t,e){return{selector:this.getResponsiveElementSelector(e),element:e,data:t[this.getResponsiveElementClassName(e)]}},t.prototype.getResponsiveElementSelector=function(t){return"."+this.getResponsiveElementClassName(t)},t.prototype.overwriteAllResponsiveElementWidth=function(){for(var t=this.responsiveBlocks.map(function(t){return t.selector}),e=0;e<this.responsiveItemsRules.length;e++){var r=this.responsiveItemsRules[e],n=r.selectorText;-1!==t.indexOf(n)&&this.overwriteResponsiveElementWidth(this.pageElement,r)}},t.prototype.overwriteResponsiveElementWidth=function(t,e){var r=t.querySelector(e.selectorText);if(null!==r){var n=r,o=this.getElementScaleY(n);if(1!==o){var i=/([0-9.]+)%/,s=e.style.width;if(s){var a=s.match(i);if(a&&a.length>1){var u=parseInt(a[1]),l=u/o+"%";n.style.setProperty("width",l,"important")}}}}},t.getResponsiveCssRules=function(t){return n(this,void 0,void 0,function(){var e=this;return o(this,function(r){return[2,fetch(t).then(function(t){return t.text()}).then(function(t){return e.cssRulesFromCssText(t)}).then(function(t){return e.storeResponsiveItemCssRules(t)})]})})},t.cssRulesFromCssText=function(t){var e=document.implementation.createHTMLDocument(""),r=document.createElement("style");return r.textContent=t,e.body.appendChild(r),r.sheet.cssRules},t.storeResponsiveItemCssRules=function(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];if(1===n.type){var o=n;0===o.selectorText.indexOf(".responsiveItem-")&&e.push(o)}}return e},t.prototype.updateResponsiveElementsPositions=function(){for(var t=0,e=this.responsiveBlocks,r=0;r<e.length;r++){var n=e[r],o=n.data;this.updateResponsiveElementMatrix(n,t),t+=this.getResponsiveElementHeight(n)-(o.y2-o.y1)}this.pageElement.style.height=this.pageHeight+t+"px",this.pageElement.parentElement.style.height=this.pageHeight+t+"px"},t.prototype.updateResponsiveElementMatrix=function(t,e){var r=t.element,n=t.data.y1,o=n+e;r.style.top=o+"px",r.style.transform=this.getTransformWithoutTranslate(r)},t.prototype.getTransformWithoutTranslate=function(t){var e=window.getComputedStyle(t).transform;return e?this.updateTransform(e):"matrix(1,0,0,1,0,0)"},t.prototype.updateTransform=function(t){var e=t.split("(")[1].split(")")[0].split(",");return e[4]="0",e[5]="0","matrix("+e.join()+")"},t.prototype.getResponsiveElementHeight=function(t){var e=t.element,r=this.getElementScaleY(e),n=e.children[0],o=this.getElementTranslateY(n),i=this.getElementScaleY(n);return(n.offsetHeight*i+o)*r},t.prototype.getElementScaleY=function(t){var e=this.getElementMatrixIndex(t,3);return null!==e?e:1},t.prototype.getElementTranslateY=function(t){var e=this.getElementMatrixIndex(t,5);return null!==e?e:0},t.prototype.getElementMatrixIndex=function(t,e){var r=window.getComputedStyle(t).transform;if(!r)return null;if(!r.includes("matrix("))return null;var n=r.split("(")[1].split(")")[0].split(",")[e];return parseFloat(n)},t.prototype.isCSSObjectFitSupported=function(){return"objectFit"in document.documentElement.style},t.prototype.addObjectFitFallback=function(){var t=this.responsiveBlocks;document.body.classList.add("objectFitNotSupported");for(var e=0;e<t.length;e++){var r=t[e];if(r.data.type===i.MEDIA&&r.data.mode===s.BANNER){var n=r.element,o=n.querySelector("img");n.style.backgroundImage="url("+o.src+")"}}},t}();e.default=a,window.ResponsivePageManager=a},593:function(t,e,r){r(100),t.exports=r(594)},594:function(t,e,r){"use strict";function n(t){return t&&DataView.prototype.isPrototypeOf(t)}function o(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function s(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return E.iterable&&(e[Symbol.iterator]=function(){return e}),e}function a(t){this.map={},t instanceof a?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function p(t){var e=new FileReader,r=l(e);return e.readAsText(t),r}function h(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:E.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:E.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:E.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():E.arrayBuffer&&E.blob&&n(t)?(this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):E.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||R(t))?this._bodyArrayBuffer=f(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):E.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},E.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},E.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return T.indexOf(e)>-1?e:t}function m(t,e){e=e||{};var r=e.body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new a(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new a(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function b(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function v(t){var e=new a;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function g(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new a(e.headers),this.url=e.url||"",this._initBody(t)}function w(t,e){return new Promise(function(r,n){function o(){s.abort()}var i=new m(t,e);if(i.signal&&i.signal.aborted)return n(new _("Aborted","AbortError"));var s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:v(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;r(new g(e,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.onabort=function(){n(new _("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&E.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",o),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",o)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})}Object.defineProperty(e,"__esModule",{value:!0}),e.Headers=a,e.Request=m,e.Response=g,r.d(e,"DOMException",function(){return _}),e.fetch=w;var E={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(E.arrayBuffer)var x=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],R=ArrayBuffer.isView||function(t){return t&&x.indexOf(Object.prototype.toString.call(t))>-1};a.prototype.append=function(t,e){t=o(t),e=i(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},a.prototype.delete=function(t){delete this.map[o(t)]},a.prototype.get=function(t){return t=o(t),this.has(t)?this.map[t]:null},a.prototype.has=function(t){return this.map.hasOwnProperty(o(t))},a.prototype.set=function(t,e){this.map[o(t)]=i(e)},a.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},a.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),s(t)},a.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),s(t)},a.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),s(t)},E.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},d.call(m.prototype),d.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];g.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var _=self.DOMException;try{new _}catch(t){_=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},_.prototype=Object.create(Error.prototype),_.prototype.constructor=_}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=a,self.Request=m,self.Response=g)}});var webpublicationActionEventName = 'WebPublicationAction';
var resolvedNamespace = null;
var isPublication = false;

window.addEventListener("touchmove", function (event) {
	if (event.scale && event.scale !== 1) {
		event.preventDefault();
	}
}, {
	passive: false
});

if (window.webpublicationNamespace) {
	isPublication = true;
	resolvedNamespace = window.webpublicationNamespace;
} else if (window.parent.webpublicationNamespace) {
	resolvedNamespace = window.parent.webpublicationNamespace;
	window.webpublicationNamespace = resolvedNamespace;
}

if (window !== window.parent) {
	// polyfill to create customEvents from a component inside a publication
	(function () {

		if (typeof window.CustomEvent === 'function') return false;

		function CustomEvent(event, params) {
			params = params || {
				bubbles: false,
				cancelable: false,
				detail: undefined
			};
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;
	})();

	// if we are in an iframe we are probably in a component inside a publication, dispatch event to the parent publication
	document.addEventListener(webpublicationActionEventName, function (event) {
		try {
			window.parent.document.dispatchEvent(new CustomEvent(webpublicationActionEventName, event));
		} catch (error) {
			// we can't access parent frame, we probably are in an embedded publication
		}
	});
}

(function(ns) {
	var request = new XMLHttpRequest();
	ns.inddEpubDataExported = {
		isLoaded: false
	};

	if (!isPublication) {
		var configsJsonPath = 'script/configs.json';
		request.open('GET', configsJsonPath, false);
		request.onreadystatechange = function () {
			if (request.readyState === 4) {
				if (request.status === 200 || request.status == 0) {
					var configText = request.responseText;
					var config = JSON.parse(configText);
					var exportsNs = ns.inddEpubDataExported || {};
					exportsNs.config = exportsNs.config || config;
					exportsNs.isLoaded = true;

					var ResponsivePageManager = window.ResponsivePageManager;
					exportsNs.popupConfig = config;
					exportsNs.popupConfig.ResponsivePageManager = ResponsivePageManager;

					var initPageResponsive = function () {
						var containerElement = window.document.querySelector('body > div');
						var hasResponsiveClass = document.querySelector('.webpublication-responsive');

						if (containerElement === null || hasResponsiveClass === null) {
							window.requestAnimationFrame(initPageResponsive);
						} else {
							ResponsivePageManager.getResponsiveCssRules('css/responsiveElements.css')
								.then(function (cssRules) {
									var pageData = config.pagesData[0];
									var pageElement = containerElement.querySelector('#wpWrapper');
									var responsivePageManager = new ResponsivePageManager(pageElement, pageData.height, pageData.responsiveElements, cssRules);
									window.addEventListener('resize', responsivePageManager.onWindowResize.bind(responsivePageManager));
								}.bind(this));
						}
					};
					initPageResponsive();

					ns.inddEpubDataExported = exportsNs;
				}
			}
		}
		request.send(null);

		// resolve media params for embedded video/animations
		window.addEventListener('DOMContentLoaded', function () {
			var elementsWithSrc = document.querySelectorAll('[src]');
			var elementsWithSrcArray = Array.prototype.slice.call(elementsWithSrc);

			for (var i = 0; i < elementsWithSrcArray.length; i++) {
				var element = elementsWithSrcArray[i];
				var src = decodeURIComponent(element.src);

				if (hasMediaParam(src)) {
					resolveMediaParam(element);

					// reload video when resolve media param
					if (element.tagName === 'SOURCE') {
						element.parentElement.load();
					}
				}
			}

			function hasMediaParam(src) {
				var mediaParamRegex = /\$media\$|\${media}/;
				return !!src.match(mediaParamRegex);
			};

			function resolveMediaParam(element) {
				var regExp = /\d+\/\$media\$|\d+\/\${media}/;
				element.src = decodeURIComponent(element.src).replace(regExp, '');
			};
		});
	}

})(window.webpublicationNamespace || {});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){B=t}function r(t){G=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof z?function(){z(a)}:c()}function s(){var t=0,e=new J(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<W;t+=2){var e=V[t],n=V[t+1];e(n),V[t]=void 0,V[t+1]=void 0}W=0}function f(){try{var t=Function("return this")().require("vertx");return z=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[Z]&&O(r);var o=n._state;if(o){var i=arguments[o-1];G(function(){return P(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return nt.error=e,nt}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){G(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===tt?S(t,e._result):e._state===et?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===nt?(j(t,nt.error),nt.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===$&&(t._result=e,t._state=tt,0!==t._subscribers.length&&G(T,t))}function j(t,e){t._state===$&&(t._state=et,t._result=e,G(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+tt]=n,o[i+et]=r,0===i&&t._state&&G(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function M(t,e){try{return t(e)}catch(n){return nt.error=n,nt}}function P(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=M(r,o),s===nt?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==$||(i&&c?g(n,s):a?j(n,u):t===tt?S(n,s):t===et&&j(n,s))}function x(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function C(){return rt++}function O(t){t[Z]=rt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function k(){return new Error("Array Methods must be provided an Array")}function F(t){return new ot(this,t).promise}function Y(t){var e=this;return new e(U(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function q(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=it}var N=void 0;N=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var U=N,W=0,z=void 0,B=void 0,G=function(t,e){V[W]=t,V[W+1]=e,W+=2,2===W&&(B?B(a):X())},H="undefined"!=typeof window?window:void 0,I=H||{},J=I.MutationObserver||I.WebKitMutationObserver,Q="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),R="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,V=new Array(1e3),X=void 0;X=Q?o():J?s():R?u():void 0===H&&"function"==typeof require?f():c();var Z=Math.random().toString(36).substring(2),$=void 0,tt=1,et=2,nt={error:null},rt=0,ot=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[Z]||O(this.promise),U(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):j(this.promise,k())}return t.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===it){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===$&&(this._remaining--,t===et?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(tt,e,t)},function(t){return n._settledAt(et,e,t)})},t}(),it=function(){function t(e){this[Z]=C(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&D(),this instanceof t?x(this,e):K())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return it.prototype.then=l,it.all=F,it.race=Y,it.resolve=h,it.reject=q,it._setScheduler=n,it._setAsap=r,it._asap=G,it.polyfill=L,it.Promise=it,it.polyfill(),it});