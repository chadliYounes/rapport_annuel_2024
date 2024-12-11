const getPosterUrl = (url) => {
	const splittedFilename = url.href.split('.');
	splittedFilename.pop();

	return `${splittedFilename.join('.')}/cover.jpg`;
};

const currentUrl = new URL(window.location.href);
const params = currentUrl.searchParams;
const url = params.get('url');
const hasControls = params.has('controls');
const hasAutoplay = params.has('autoplay');
const hasMuted = params.has('muted');
const hasLoop = params.has('loop');

const uri = new URI(url);
const isAbsoluteUrl = uri.is("absolute");
const resolvedURL = isAbsoluteUrl ? 
	url :
	new URL(url, new URL('../../../../', window.location.href).href);

const videoElement = document.querySelector('video');
videoElement.src = resolvedURL;
videoElement.poster = getPosterUrl(resolvedURL);

videoElement.toggleAttribute('controls', hasControls);
videoElement.toggleAttribute('autoplay', hasAutoplay);
videoElement.toggleAttribute('muted', hasMuted);
videoElement.toggleAttribute('loop', hasLoop);