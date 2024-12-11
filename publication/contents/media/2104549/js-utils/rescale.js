window.addEventListener('load', function () {
	var baseDevicePixelRatio = window.devicePixelRatio;
	var pageElement = $('#wpWrapper')[0];
	pageElement = pageElement || $('.pf')[0];

	if (pageElement) {

		var originalWidth = pageElement.offsetWidth;
		var originalHeight = pageElement.offsetHeight;

		var availableFitModes = ['CENTERED', 'FIT_WIDTH', 'FIT_WIDTH_AND_HEIGHT', 'RESPONSIVE'];
		var defaultFitMode = 'CENTERED';
		var fitMode = defaultFitMode;

		var retrieveFitMode = function () {
			var pathname = window.location.pathname;
			var pathnameSplit = pathname.split('/').filter(function (e) { return !!e && e.indexOf('index.html') === -1 });
			if (pathnameSplit.length > 0) {
				pathnameSplit[pathnameSplit.length] = 'configs.json';
			}

			var configsUrl = window.location.origin + '/' + pathnameSplit.join('/');
			$.get(configsUrl)
				.done(function (data) {
					var requestedFitMode = data.fitMode;
					fitMode = requestedFitMode && availableFitModes.indexOf(requestedFitMode) !== -1 ? requestedFitMode : defaultFitMode;
					if (fitMode === 'RESPONSIVE') {
						$('body').addClass('webpublication-responsive');
					} else {
						applyTransformation();
					}
					$('body').addClass('webpublication-rescaled');
				});
		};

		var applyTransformation = function () {
			if (fitMode === 'RESPONSIVE') {
				return;
			}

			var windowWidth = window.innerWidth;
			var windowHeight = window.innerHeight;
			var windowZoomLevel = window.devicePixelRatio / baseDevicePixelRatio;
			var outputWidth = (fitMode === 'CENTERED' && windowWidth > originalWidth) ? originalWidth : windowWidth;
			var scaleX = (outputWidth / originalWidth) * windowZoomLevel;
			var renderedWidth = outputWidth * scaleX;
			var renderedHeight = originalHeight * scaleX;
			var xTranslate = renderedWidth > windowWidth ? 0 : (windowWidth / scaleX - originalWidth) / 2;
			var scaleY = scaleX;

			if (fitMode === 'FIT_WIDTH_AND_HEIGHT') {
				scaleX = windowWidth / originalWidth;
				scaleY = windowHeight / originalHeight;
				renderedWidth = windowWidth;
				renderedHeight = windowHeight;
				xTranslate = 0;
			}

			if (pageElement.parentElement) {
				pageElement.parentElement.style.height = renderedHeight + "px";
				pageElement.parentElement.style.maxWidth = "100vw";
				pageElement.parentElement.style.overflow = pageElement.parentElement === document.body ? "auto" : "hidden";
			}

			pageElement.style.left = 'auto';
			pageElement.style.position = 'static';
			pageElement.style.transformOrigin = "0 0";
			pageElement.style.transform = "matrix(" + scaleX + ", 0, 0, " + scaleY + ", " + xTranslate + ", 0)";
		};

		retrieveFitMode();
		window.addEventListener('resize', applyTransformation, true);
	}
});
