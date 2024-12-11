window.addEventListener('DOMContentLoaded', function () {
	initTopBar();
	resolveMediaParams();

	function initTopBar() {
		var isMobileApp = location.href.indexOf('backHome=true') !== -1;

		if (!isMobileApp) {
			return;
		}

		initBtnBack();

		function initBtnBack() {
			var bar = document.createElement('div');
			bar.id = 'uprez-bar';

			var btnBack = document.createElement('button');
			btnBack.type = 'button';
			btnBack.innerText = '+';
			btnBack.addEventListener('click', handleClick);

			bar.appendChild(btnBack);
			document.body.insertBefore(bar, document.body.firstChild);
		};

		function handleClick() {
			var isWindows = navigator.userAgent.indexOf('Win') !== -1;
			var backHomeUrl = isWindows ? 'api-backHome' : 'api:backHome';
			document.location = backHomeUrl;
		};
	};

	function resolveMediaParams() {
		var isComponentInsideReader = window.parent.webpublicationNamespace !== undefined;
		var elementsWithSrc = document.querySelectorAll('[src]');
		var elementsWithSrcArray = Array.prototype.slice.call(elementsWithSrc);

		function hasMediaParam(src) {
			var mediaParamRegex = /\$media\$|\${media}/;
			return !!src.match(mediaParamRegex);
		};

		function resolveMediaParam(element) {
			var regExp = /\d+\/\$media\$|\d+\/\${media}/;
			element.src = element.src.replace(regExp, '');
		};

		for (var i = 0; i < elementsWithSrcArray.length; i++) {
			var element = elementsWithSrcArray[i];

			if (hasMediaParam(element.src)) {
				if (isComponentInsideReader) {
					element.src = window.parent.webpublicationNamespace.Utils.resolveVariable(element.src);
				} else {
					resolveMediaParam(element);
					// reload video when resolve media param
					if (element.tagName === 'SOURCE') {
						element.parentElement.load();
					}
				}
			}
		}
	};
});
