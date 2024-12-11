var isFirefox = typeof InstallTrigger !== 'undefined';
if (isFirefox) {
	document.querySelector('html').classList.add('webpub-device__browser-name-firefox');
}
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
if (isChrome) {
    document.querySelector('html').classList.add('webpub-device__browser-name-chrome');
}