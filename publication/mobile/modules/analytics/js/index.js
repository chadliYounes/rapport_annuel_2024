!function(t){function e(e){this.account=e.getAttribute("account"),this.name=e.getAttribute("name"),this.label=e.getAttribute("label")||"",this.session=e.hasAttribute("session"),this.anonymize="true"===e.getAttribute("anonymize"),this.params={},this.trackerName="tracker"+this.account.replace(/-/gi,"").toLowerCase(),this.loadTracker(),this.session&&(this.params.userId=t.Param.sessionId),this.createTracker(),e.hasAttribute("name")&&ga(this.trackerName+".set","dimension1",this.name);for(var a=1;a<10;a++)e.hasAttribute("dimension"+a)&&ga(this.trackerName+".set","dimension"+a,e.getAttribute("dimension"+a))}var a=!1,i="ga_clientId-";e.prototype.loadTracker=function(){if(!a){var t=this.anonymize?"https://ga.zone-secure.net/analytics.js":"https://www.google-analytics.com/analytics.js";!function(t,e,a,i,n,s,r){t.GoogleAnalyticsObject=n,t[n]||(t[n]=function(){(t[n].q=t[n].q||[]).push(arguments)},t[n].l=1*new Date),s=e.createElement(a),r=e.getElementsByTagName(a)[0],s.async=1,s.src=i,r.parentNode.insertBefore(s,r)}(window,document,"script",t,"ga"),a=!0}},e.prototype.createTracker=function(){if(!this.anonymize)return void ga("create",this.account,"auto",this.trackerName,this.params);this.params.storage="none",this.params.anonymizeIp="true",this.clientIdStorageKey=i+this.account;var t=window.localStorage.getItem(this.clientIdStorageKey);this.params.clientId=t,ga("create",this.account,"auto",this.trackerName,this.params),null===t&&this.storeClientId(this.trackerName)},e.prototype.storeClientId=function(t){ga(function(){var e=ga.getByName(t);window.localStorage.setItem(this.clientIdStorageKey,e.get("clientId"))})},e.prototype.trackPage=function(e,a,i){var n=this.label?this.label:"",s=window.location.href;this.label&&(s=window.location.href.replace(window.location.origin,window.location.origin+"/"+n)),s=t.Utils.whitelistParameters(s);var r={hitType:"pageview",page:n+a};i&&(r.title=i),ga(this.trackerName+".set","location",s),ga(this.trackerName+".send",r)},e.prototype.trackEvent=function(t,e,a,i){var n={hitType:"event",eventCategory:t,eventAction:e};a&&(n.eventLabel=a),i&&(n.eventValue=i),ga(this.trackerName+".send",n)},t.Class.AnalyticsTracker=e}(webpublicationNamespace);