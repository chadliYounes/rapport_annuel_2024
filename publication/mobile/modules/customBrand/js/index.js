!function e(t,r,n){function a(i,u){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return a(r?r:e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(){var e=document.querySelector(".mainView"),t="wb";if(!w.Main.urlManager.contains(t)&&e){var r=document.createElement("div");r.classList.add("custom-brand");var n=nModule.data.textContent,a=nModule.data.parameters.style;for(var o in nModule.data.parameters){var i=new RegExp("{{"+o+"}}","gm");n=n.replace(i,nModule.data.parameters[o])}if(r.style.position="absolute",r.style.zIndex="450",a)for(var o in a)r.style[o]=a[o];r.innerHTML=n;var u=r.style.opacity;e.appendChild(r);var s=new MutationObserver(function(e){e.forEach(function(e){var t=e.target,n=t.classList.contains("epub-view_state-zoom-in");n===!0?r.style.opacity="0":r.style.opacity=u})});s.observe(e,{attributes:!0})}}()},{}]},{},[1]);